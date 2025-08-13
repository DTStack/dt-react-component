import React from 'react';
import { act, cleanup, fireEvent, render } from '@testing-library/react';
import dayjs from 'dayjs';
import '@testing-library/jest-dom/extend-expect';

import Group from '../group';

function generateConversation() {
    const conversation = [
        {
            id: 'conversation_1',
            createdAt: 1736479532239,
            updatedAt: dayjs().subtract(1, 'day').toDate().getTime(),
            title: 'this is conversation 1',
            assistantId: 'assistant_1',
        },
        {
            id: 'conversation_2',
            createdAt: 1736479532239,
            updatedAt: dayjs().toDate().getTime(),
            title: 'this is conversation 2',
            assistantId: 'assistant_2',
        },
    ];
    return conversation;
}
jest.mock('../../ellipsisText', () => {
    return (props: any) => <div data-testid="ellipsisText">{props.value}</div>;
});
describe('Test Chat Group', () => {
    beforeEach(() => {
        cleanup();
    });

    it('Match snapshot', () => {
        const conversation = generateConversation();
        const onAdd = jest.fn();
        expect(render(<Group data={[]} />).asFragment()).toMatchSnapshot();
        expect(render(<Group data={[]} expand />).asFragment()).toMatchSnapshot('expand');
        expect(render(<Group data={[]} fullscreen />).asFragment()).toMatchSnapshot('fullscreen');
        expect(render(<Group data={[]} openFloat={false} />).asFragment()).toMatchSnapshot(
            'openFloat false'
        );
        expect(
            render(
                <Group data={[]} openFloat={false} conversationButtonProps={{ onClick: onAdd }} />
            ).asFragment()
        ).toMatchSnapshot('addNew');
        expect(render(<Group data={conversation} />).asFragment()).toMatchSnapshot('normal');
        expect(
            render(
                <Group data={conversation} listProps={{ selectId: conversation[0].id }} />
            ).asFragment()
        ).toMatchSnapshot('select');
    });
    it('Should fullscreen', () => {
        const { container } = render(<Group data={[]} fullscreen />);

        const ele = container.querySelector('.dtc-aigc__group');
        expect(ele).toBeInTheDocument();
        expect(ele?.className).toContain('dtc-aigc__group--fullscreen');
    });

    it('Should expand', () => {
        const { container } = render(<Group data={[]} expand />);

        const ele = container.querySelector('.dtc-aigc__group');
        expect(ele).toBeInTheDocument();
        expect(ele?.className).toContain('dtc-aigc__group--expand');
    });

    it('Should select item', () => {
        const conversation = generateConversation();
        const { container } = render(
            <Group data={conversation} listProps={{ selectId: conversation[0].id }} />
        );

        const ele = container.querySelector('.dtc-aigc__dialog__list__item');
        expect(ele).toBeInTheDocument();
        expect(ele?.className).toContain('dtc-aigc__dialog__list__item--selected');
    });

    it('Should group list title', () => {
        const { container } = render(<Group data={generateConversation()} />);

        const ele = container.querySelector('.dtc-aigc__group__list__item__title');
        expect(ele).toBeInTheDocument();
        expect(ele).toHaveTextContent('昨天');
    });

    it('Should support add new session', () => {
        const onAdd = jest.fn();
        const { container } = render(
            <Group data={[]} openFloat={false} conversationButtonProps={{ onClick: onAdd }} />
        );

        const btn = container.querySelector<HTMLDivElement>('.dtc__aigc__button');
        expect(onAdd).not.toBeCalled();
        expect(btn).not.toBeNull();

        act(() => {
            fireEvent.click(btn!);
        });
        expect(onAdd).toBeCalledWith(
            expect.objectContaining({
                type: 'click',
            })
        );
    });
    it('Should support select item', () => {
        const conversation = generateConversation();
        const onItemClick = jest.fn();
        const { container } = render(
            <Group data={conversation} listProps={{ onItemClick, selectId: conversation[0].id }} />
        );

        const nodeList = container.querySelectorAll<HTMLDivElement>(
            '.dtc-aigc__dialog__list__item'
        );
        const ele = nodeList?.item(nodeList?.length - 1);

        expect(onItemClick).not.toBeCalled();
        expect(ele).not.toBeNull();

        fireEvent.click(ele!);
        expect(onItemClick).toBeCalledWith(conversation[conversation.length - 1]);
    });

    test('Should render rename input when rename menu click and do rename', () => {
        const conversation = generateConversation();
        const onRename = jest.fn();
        const { container } = render(
            <Group
                data={conversation}
                listProps={{
                    selectId: conversation[0].id,
                    onRename,
                }}
            />
        );

        const icon = container.querySelectorAll('.ant-dropdown-trigger')[0];
        expect(icon).toBeInTheDocument();

        act(() => {
            fireEvent.click(icon);
        });

        const dropdownMenuItems = document.querySelectorAll(
            '.ant-dropdown:not(.ant-dropdown-hidden) .ant-dropdown-menu-item'
        );
        expect(dropdownMenuItems).toHaveLength(2);

        fireEvent.click(dropdownMenuItems[0]);

        const ele = container.querySelector('.dtc-aigc__dialog__list__item__input');
        expect(ele).toBeInTheDocument();
        expect(ele).toHaveAttribute('value', conversation[0].title);

        fireEvent.change(ele!, { target: { value: 'new_title' } });
        fireEvent.keyDown(ele!, { keyCode: 13 });
        expect(onRename).toBeCalledWith(conversation[0], 'new_title');
    });
    test('Should render delete button', () => {
        const conversation = generateConversation();
        const onDelete = jest.fn();
        const { container } = render(
            <Group
                data={conversation}
                listProps={{
                    selectId: conversation[0].id,
                    onDelete,
                }}
            />
        );

        const icon = container.querySelectorAll('.ant-dropdown-trigger')[0];
        expect(icon).toBeInTheDocument();

        act(() => {
            fireEvent.click(icon);
        });

        const dropdownMenuItems = document.querySelectorAll(
            '.ant-dropdown:not(.ant-dropdown-hidden) .ant-dropdown-menu-item'
        );
        expect(dropdownMenuItems).toHaveLength(2);

        fireEvent.click(dropdownMenuItems[1]);
        expect(onDelete).toBeCalledWith(conversation[0]);
    });
});
