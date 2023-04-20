import React from 'react';
import CollapsibleActionItems from '../index';
import { cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';
import { Button } from 'antd';

describe('test CollapsibleActionItems', () => {
    const items = [
        { key: 'edit', name: '编辑' },
        { key: 'delete', name: '删除' },
        { key: 'remove', name: '移除' },
    ];

    const clickHandler = jest.fn();

    const testClick = (el: Element, index: number) => {
        const { key, name } = items[index];
        expect(el).toHaveTextContent(name);
        fireEvent.click(el);
        expect(clickHandler).toHaveBeenLastCalledWith(key);
    };

    afterEach(() => {
        cleanup();
        clickHandler.mockReset();
    });

    test('should render link button when item count less than maxCount', () => {
        const { container } = render(
            <CollapsibleActionItems
                actionItems={items}
                maxCount={3}
                onItemClick={(key) => {
                    clickHandler(key);
                }}
            />
        );
        const btns = container.querySelectorAll('.dtc-action-btn-wrapper');
        expect(btns).toHaveLength(3);
        btns.forEach(testClick);
    });

    test('should render link button when item count more than maxCount', () => {
        const { container, getByTestId } = render(
            <CollapsibleActionItems
                actionItems={items}
                maxCount={2}
                onItemClick={(key) => {
                    clickHandler(key);
                }}
                dropdownProps={{ trigger: ['click'] }}
            />
        );
        const btns = container.querySelectorAll('.dtc-action-btn-wrapper');
        const dropdownEl = getByTestId('action-dropdown-link');
        expect(btns).toHaveLength(1);
        expect(dropdownEl).toBeInTheDocument();

        act(() => {
            fireEvent.click(dropdownEl);
        });

        const dropdownMenuItems = container.querySelectorAll(
            '.ant-dropdown:not(.ant-dropdown-hidden) .ant-dropdown-menu-item'
        );
        expect(dropdownMenuItems).toHaveLength(2);

        btns.forEach(testClick);
        act(() => {
            dropdownMenuItems.forEach((el, index) => testClick(el, index + 1));
        });
    });

    test('should support item customRender and disabled attribute', () => {
        const customItems = [
            {
                key: 'reset',
                name: '重置',
                render: () => {
                    return (
                        <Button type="primary" htmlType="submit">
                            重置Reset
                        </Button>
                    );
                },
            },
            {
                key: 'open',
                name: '开启',
                disabled: true,
            },
            ...items,
        ];
        const { getByText } = render(
            <CollapsibleActionItems
                actionItems={customItems}
                onItemClick={(key) => {
                    clickHandler(key);
                }}
                dropdownProps={{ trigger: ['click'] }}
            />
        );
        const resetEl = getByText('重置Reset');
        const openEl = getByText('开启');

        expect(resetEl.parentElement?.className).toContain('ant-btn-primary');
        expect(resetEl.parentElement).toHaveAttribute('type', 'submit');

        fireEvent.click(openEl);
        expect(clickHandler).not.toBeCalled();
    });
});
