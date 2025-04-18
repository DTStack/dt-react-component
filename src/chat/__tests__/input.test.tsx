import React from 'react';
import { act, cleanup, fireEvent, render } from '@testing-library/react';
import { input } from 'ant-design-testing';

import Input from '../input';

describe('Test Chat Input', () => {
    beforeAll(() => {
        window.ResizeObserver = jest.fn().mockImplementation(() => ({
            disconnect: jest.fn(),
            observe: jest.fn(),
            unobserve: jest.fn(),
        }));
    });

    beforeEach(cleanup);
    it('Match snapshot', () => {
        expect(render(<Input />).asFragment()).toMatchSnapshot();
    });

    it('Should call onChange', () => {
        const onChange = jest.fn();
        const { container } = render(<Input onChange={onChange} />);
        act(() => {
            input.textarea.fireChange(container, 'test');
        });
        expect(onChange).toBeCalledWith('test');
    });

    it('Should call specify function', () => {
        const onPressShiftEnter = jest.fn();
        const onChange = jest.fn();
        const onPressEnter = jest.fn();
        const { container } = render(
            <Input
                value="test"
                onPressShiftEnter={onPressShiftEnter}
                onChange={onChange}
                onPressEnter={onPressEnter}
            />
        );
        // Simulate press shift + enter
        // FIXME: ant-design-testing 不支持触发 shift 的 onPressEnter 事件
        const ele = container.querySelector<HTMLTextAreaElement>('textarea')!;
        fireEvent.keyDown(ele, { keyCode: 13, shiftKey: true });

        expect(onPressShiftEnter).toBeCalled();
        expect(onChange).lastCalledWith('test\n');
        expect(onPressEnter).not.toBeCalled();

        onChange.mockClear();
        onPressShiftEnter.mockClear();
        // Simulate press enter
        input.textarea.firePressEnter(container);
        expect(onPressShiftEnter).not.toBeCalled();
        expect(onChange).not.toBeCalled();
        expect(onPressEnter).toBeCalledTimes(1);
    });

    it('Should call onSubmit', () => {
        const onSubmit = jest.fn();
        const { container, rerender } = render(<Input onSubmit={onSubmit} />);
        const ele = container.querySelector<HTMLSpanElement>('.dtc__chat__textarea__send')!;
        fireEvent.click(ele);
        expect(onSubmit).toBeCalled();

        onSubmit.mockClear();
        rerender(<Input button={{ disabled: true }} onSubmit={onSubmit} />);
        fireEvent.click(ele);
        expect(onSubmit).not.toBeCalled();
    });
});
