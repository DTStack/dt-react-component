import React from 'react';
import { act, cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Select from '..';

// 本地尚未构建包入口，映射到真实 Empty 组件。
jest.mock(
    'dt-react-component',
    () => ({
        Empty: jest.requireActual('../../empty').default,
    }),
    { virtual: true }
);

describe('Select', () => {
    const options = [{ label: '选项一', value: 'one' }];

    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        cleanup();
        jest.clearAllTimers();
        jest.useRealTimers();
        jest.restoreAllMocks();
    });

    it.each([undefined, 0, -1])('should disable scrolling when maxRows is %s', (maxRows) => {
        const { container } = render(<Select maxRows={maxRows} open options={options} />);
        expect(container.firstChild).not.toHaveClass('enhanced-select--scroll');
        expect(container.querySelector('.ant-select')).not.toHaveStyle({ maxHeight: '88px' });
        expect(document.querySelector('.ant-select-dropdown')).not.toHaveClass(
            'select-with-scroll-dropdown'
        );
    });

    it.each([
        [undefined, 88],
        ['small', 64],
        ['middle', 88],
        ['large', 112],
    ] as const)('should adapt maxRows to size=%s', (size, maxHeight) => {
        const { container, rerender } = render(<Select mode="multiple" size={size} maxRows={3} />);
        expect(container.querySelector('.ant-select')).toHaveStyle({ maxHeight: `${maxHeight}px` });
        rerender(<Select mode="multiple" size="small" maxRows={2} />);
        expect(container.querySelector('.ant-select')).toHaveStyle({ maxHeight: '44px' });
    });

    it('should limit height and preserve custom styles and dropdown class', () => {
        const { container, rerender } = render(
            <Select maxRows={3} open dropdownClassName="custom-dropdown" style={{ width: 240 }} />
        );
        expect(container.firstChild).toHaveClass('enhanced-select--scroll');
        expect(container.querySelector('.ant-select')).toHaveStyle({
            maxHeight: '88px',
            width: '240px',
        });
        expect(document.querySelector('.ant-select-dropdown')).toHaveClass(
            'custom-dropdown',
            'select-with-scroll-dropdown'
        );
        rerender(<Select maxRows={3} style={{ maxHeight: 120 }} />);
        expect(container.querySelector('.ant-select')).toHaveStyle({ maxHeight: '120px' });
    });

    it.each([undefined, 2])(
        'should forward selection and scroll only with maxRows=%s',
        (maxRows) => {
            const onSelect = jest.fn();
            const onChange = jest.fn();
            const { container, getByText } = render(
                <Select
                    mode="multiple"
                    open
                    maxRows={maxRows}
                    options={options}
                    onSelect={onSelect}
                    onChange={onChange}
                />
            );
            const selector = container.querySelector<HTMLElement>('.ant-select-selector');
            if (!selector) throw new Error('Select selector not found');
            // jsdom 不计算布局，也没有 scrollTo，手动提供滚动高度和方法。
            const scrollTo = jest.fn();
            selector.scrollTo = scrollTo;
            Object.defineProperty(selector, 'scrollHeight', { value: 180 });
            fireEvent.click(getByText('选项一'));
            expect(onSelect).toHaveBeenCalledWith('one', expect.objectContaining(options[0]));
            expect(onChange).toHaveBeenCalledWith(['one'], expect.any(Array));
            expect(scrollTo).not.toHaveBeenCalled();
            act(() => {
                jest.runOnlyPendingTimers();
            });
            if (maxRows) {
                expect(scrollTo).toHaveBeenCalledWith({ top: 180, behavior: 'smooth' });
            } else {
                expect(scrollTo).not.toHaveBeenCalled();
            }
        }
    );

    it('should suppress composing searches and deduplicate the completed value', () => {
        const onSearch = jest.fn();
        const { getByRole } = render(<Select showSearch onSearch={onSearch} />);
        const input = getByRole('combobox');
        fireEvent.compositionStart(input);
        fireEvent.change(input, { target: { value: 'zhong' } });
        expect(onSearch).not.toHaveBeenCalled();
        // 结束合成时先更新 DOM 值，再模拟浏览器后续的 change。
        fireEvent.compositionEnd(input, { target: { value: '中文' } });
        expect(onSearch).toHaveBeenCalledWith('中文');
        fireEvent.change(input, { target: { value: '中文' } });
        expect(onSearch).toHaveBeenCalledTimes(1);
        fireEvent.change(input, { target: { value: '中文搜索' } });
        expect(onSearch).toHaveBeenLastCalledWith('中文搜索');
        expect(onSearch).toHaveBeenCalledTimes(2);
    });

    it('should allow the same search value again after the next frame', () => {
        const onSearch = jest.fn();
        const { getByRole } = render(<Select showSearch onSearch={onSearch} />);
        const input = getByRole('combobox');
        fireEvent.compositionStart(input);
        fireEvent.compositionEnd(input, { target: { value: '中文' } });
        act(() => {
            jest.advanceTimersByTime(20);
        });
        fireEvent.change(input, { target: { value: '其他' } });
        fireEvent.change(input, { target: { value: '中文' } });
        expect(onSearch).toHaveBeenLastCalledWith('中文');
        expect(onSearch).toHaveBeenCalledTimes(3);
    });

    it('should ignore composition end outside the search input', () => {
        const onSearch = jest.fn();
        const { container } = render(<Select onSearch={onSearch} />);
        fireEvent.compositionEnd(container.firstElementChild as HTMLElement);
        expect(onSearch).not.toHaveBeenCalled();
    });

    it('should render loading, empty and custom notFoundContent', () => {
        const { rerender, getByText } = render(<Select open loading options={[]} />);
        expect(document.querySelector('.ant-select-item-empty .ant-spin')).toBeInTheDocument();
        expect(document.querySelector('.dtc-empty')).not.toBeInTheDocument();
        rerender(<Select open options={[]} />);
        expect(document.querySelector('.dtc-empty')).toBeInTheDocument();
        expect(document.querySelector('.ant-select-item-empty .ant-spin')).not.toBeInTheDocument();
        rerender(<Select open loading notFoundContent="暂无匹配结果" />);
        expect(getByText('暂无匹配结果')).toBeInTheDocument();
        expect(document.querySelector('.ant-select-item-empty .ant-spin')).not.toBeInTheDocument();
    });
});
