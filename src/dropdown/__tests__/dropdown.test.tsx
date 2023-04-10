import React from 'react';
import { render, fireEvent, act, cleanup } from '@testing-library/react';
import { Button } from 'antd';
import Dropdown from '..';
import '@testing-library/jest-dom';

describe('Test Dropdown.Select Component', () => {
    beforeEach(() => {
        jest.useFakeTimers();
        cleanup();
    });
    it('Should match snapshot', () => {
        const { asFragment, getByTestId } = render(
            <Dropdown.Select
                value={[2]}
                options={[
                    { label: '选项一', value: 1 },
                    { label: '选项二', value: 2, disabled: true },
                ]}
                onChange={jest.fn()}
                getPopupContainer={(node) => node}
            >
                <Button type="link" data-testid="trigger">
                    打开下拉
                </Button>
            </Dropdown.Select>
        );

        fireEvent.click(getByTestId('trigger'));
        act(() => {
            jest.runAllTimers();
        });
        expect(asFragment()).toMatchSnapshot();
    });

    it('Should enable virtual list', () => {
        const { container, getByTestId } = render(
            <Dropdown.Select
                value={[2]}
                options={new Array(10).fill('').map((_, idx) => idx)}
                onChange={jest.fn()}
                getPopupContainer={(node) => node}
            >
                <Button type="link" data-testid="trigger">
                    打开下拉
                </Button>
            </Dropdown.Select>
        );
        fireEvent.click(getByTestId('trigger'));
        act(() => {
            jest.runAllTimers();
        });

        expect(container.querySelector('.rc-virtual-list')).toBeInTheDocument();
    });

    it('Should support number, string and object options', () => {
        const { getByTestId, getByText, rerender } = render(
            <Dropdown.Select
                value={[2]}
                options={[
                    { label: '选项一', value: 1 },
                    { label: '选项二', value: 2, disabled: true },
                ]}
                onChange={jest.fn()}
                getPopupContainer={(node) => node}
            >
                <Button type="link" data-testid="trigger">
                    打开下拉
                </Button>
            </Dropdown.Select>
        );
        fireEvent.click(getByTestId('trigger'));
        act(() => {
            jest.runAllTimers();
        });
        expect(getByText('选项一')).toBeInTheDocument();

        rerender(
            <Dropdown.Select
                value={['Bob']}
                options={['Bob', 'Jean']}
                onChange={jest.fn()}
                getPopupContainer={(node) => node}
            >
                <Button type="link" data-testid="trigger">
                    打开下拉
                </Button>
            </Dropdown.Select>
        );

        fireEvent.click(getByTestId('trigger'));
        act(() => {
            jest.runAllTimers();
        });
        expect(getByText('Bob')).toBeInTheDocument();

        rerender(
            <Dropdown.Select
                value={[1]}
                options={[1, 2]}
                onChange={jest.fn()}
                getPopupContainer={(node) => node}
            >
                <Button type="link" data-testid="trigger">
                    打开下拉
                </Button>
            </Dropdown.Select>
        );

        fireEvent.click(getByTestId('trigger'));
        act(() => {
            jest.runAllTimers();
        });
        expect(getByText('1')).toBeInTheDocument();
    });

    it('Should support selectAll and deSelectAll', () => {
        const fn = jest.fn();
        const { getByTestId, getByText, rerender } = render(
            <Dropdown.Select
                value={[2]}
                options={[
                    { label: '选项一', value: 1 },
                    { label: '选项二', value: 2, disabled: true },
                ]}
                onChange={fn}
                getPopupContainer={(node) => node}
            >
                <Button type="link" data-testid="trigger">
                    打开下拉
                </Button>
            </Dropdown.Select>
        );

        fireEvent.click(getByTestId('trigger'));
        act(() => {
            jest.runAllTimers();
        });
        // 全选
        fireEvent.click(getByText('全选'));
        expect(fn).toBeCalledWith([1, 2]);

        rerender(
            <Dropdown.Select
                value={[1, 2]}
                options={[
                    { label: '选项一', value: 1 },
                    { label: '选项二', value: 2, disabled: true },
                ]}
                onChange={fn}
                getPopupContainer={(node) => node}
            >
                <Button type="link" data-testid="trigger">
                    打开下拉
                </Button>
            </Dropdown.Select>
        );

        fireEvent.click(getByTestId('trigger'));
        act(() => {
            jest.runAllTimers();
        });
        fireEvent.click(getByText('全选'));
        // 取消全选不会取消禁用项的选择
        expect(fn).lastCalledWith([2]);

        rerender(
            <Dropdown.Select
                value={[]}
                options={['Bob', 'Jack']}
                onChange={fn}
                getPopupContainer={(node) => node}
            >
                <Button type="link" data-testid="trigger">
                    打开下拉
                </Button>
            </Dropdown.Select>
        );

        fireEvent.click(getByTestId('trigger'));
        act(() => {
            jest.runAllTimers();
        });
        // 选中全部
        fireEvent.click(getByText('全选'));
        expect(fn).lastCalledWith(['Bob', 'Jack']);
    });

    it('Should support render shadow', () => {
        const { container, getByTestId } = render(
            <Dropdown.Select
                value={[2]}
                options={new Array(1000).fill('').map((_, idx) => idx)}
                onChange={jest.fn()}
                getPopupContainer={(node) => node}
            >
                <Button type="link" data-testid="trigger">
                    打开下拉
                </Button>
            </Dropdown.Select>
        );
        fireEvent.click(getByTestId('trigger'));
        act(() => {
            jest.runAllTimers();
        });

        const component = container.querySelector('.rc-virtual-list-holder')!;
        expect(component).toBeInTheDocument();

        // simulate scroll
        container
            .querySelector<HTMLDivElement>('.rc-virtual-list-scrollbar-thumb')
            ?.style.setProperty('top', '200px');
        fireEvent.scroll(component);

        const shadow = container.querySelector('.dtc-dropdown-select__shadow');
        expect(shadow).toBeInTheDocument();
        expect(shadow?.className).toContain('active');

        // simulate scroll
        container
            .querySelector<HTMLDivElement>('.rc-virtual-list-scrollbar-thumb')
            ?.style.setProperty('top', '0px');
        fireEvent.scroll(component);

        expect(shadow?.className).not.toContain('active');
    });

    it('Should call submit when hide', () => {
        const fn = jest.fn();
        const { getByTestId, getByText } = render(
            <Dropdown.Select
                value={[2]}
                options={[
                    { label: '选项一', value: 1 },
                    { label: '选项二', value: 2, disabled: true },
                ]}
                onChange={jest.fn()}
                onSubmit={fn}
                getPopupContainer={(node) => node}
            >
                <Button type="link" data-testid="trigger">
                    打开下拉
                </Button>
            </Dropdown.Select>
        );

        fireEvent.click(getByTestId('trigger'));
        act(() => {
            jest.runAllTimers();
        });

        fireEvent.click(getByText('确 定').parentElement!);
        expect(fn).toBeCalledWith([2]);
        expect(fn).toBeCalledTimes(1);

        fireEvent.click(getByTestId('trigger'));
        act(() => {
            jest.runAllTimers();
        });
        fireEvent.click(getByTestId('trigger'));
        expect(fn).toBeCalledWith([2]);
        expect(fn).toBeCalledTimes(2);
    });

    it('Should render correct status for selectAll checkbox', () => {
        const { getByTestId, getByText, rerender } = render(
            <Dropdown.Select
                value={[2]}
                options={[
                    { label: '选项一', value: 1 },
                    { label: '选项二', value: 2, disabled: true },
                ]}
                onChange={jest.fn()}
                getPopupContainer={(node) => node}
            >
                <Button type="link" data-testid="trigger">
                    打开下拉
                </Button>
            </Dropdown.Select>
        );

        fireEvent.click(getByTestId('trigger'));
        act(() => {
            jest.runAllTimers();
        });
        // Should be indeterminate
        expect(getByText('全选').previousElementSibling?.className).toContain(
            'ant-checkbox-indeterminate'
        );

        rerender(
            <Dropdown.Select
                value={[1, 2]}
                options={[
                    { label: '选项一', value: 1 },
                    { label: '选项二', value: 2, disabled: true },
                ]}
                onChange={jest.fn()}
                getPopupContainer={(node) => node}
            >
                <Button type="link" data-testid="trigger">
                    打开下拉
                </Button>
            </Dropdown.Select>
        );
        // Should be checked
        expect(getByText('全选').previousElementSibling?.className).toContain(
            'ant-checkbox-checked'
        );

        rerender(
            <Dropdown.Select
                value={[1, 3, 4]}
                options={[
                    { label: '选项一', value: 1 },
                    { label: '选项二', value: 2, disabled: true },
                ]}
                onChange={jest.fn()}
                getPopupContainer={(node) => node}
            >
                <Button type="link" data-testid="trigger">
                    打开下拉
                </Button>
            </Dropdown.Select>
        );
        // Should be indeterminate
        expect(getByText('全选').previousElementSibling?.className).toContain(
            'ant-checkbox-indeterminate'
        );

        rerender(
            <Dropdown.Select
                value={[3, 4]}
                options={[
                    { label: '选项一', value: 1 },
                    { label: '选项二', value: 2, disabled: true },
                ]}
                onChange={jest.fn()}
                getPopupContainer={(node) => node}
            >
                <Button type="link" data-testid="trigger">
                    打开下拉
                </Button>
            </Dropdown.Select>
        );
        // Should be not checked
        expect(getByText('全选').previousElementSibling?.className).not.toContain(
            'ant-checkbox-checked'
        );
    });
});
