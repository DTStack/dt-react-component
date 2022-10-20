import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BlockHeader from '../index';

const props = {
    title: '标题1',
};
const props2 = {
    title: '标题2',
    beforeTitle: <span>Icon</span>,
    afterTitle: '说明文字',
    isSmall: true,
    titleRowClassName: 'test-row-className',
    titleClassName: 'test-title-className',
};
const prefixCls = 'dtc-block-header';

describe('test BlockHeader render', () => {
    afterEach(() => {
        cleanup();
    });
    test('success render', () => {
        const wrapper = render(<BlockHeader {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
    test('default BlockHeader render', () => {
        const { getByText, rerender } = render(<BlockHeader {...props} />);
        expect(getByText(props.title)).toBeTruthy();
        rerender(<BlockHeader title="标题2" />);
        expect(getByText('标题2')).toBeTruthy();
    });
    test('props default in BlockHeader', () => {
        const { container } = render(
            <BlockHeader title="测试" isSmall={true} showBackground={true} />
        );
        const wrap = container.firstChild;
        expect(wrap.firstChild.firstChild.firstChild).toHaveClass(`${prefixCls}-before-title`);
        expect(wrap.firstChild.firstChild.firstChild.firstChild).toHaveClass('small');
        fireEvent.click(document.getElementsByClassName(`${prefixCls}-title-row`)[0]);
    });
    test('BlockHeader render with different props', () => {
        const { container, getByText } = render(<BlockHeader {...props2} />);
        const wrap = container.firstChild;
        expect(wrap).toHaveClass(`${prefixCls}`);
        expect(wrap.lastChild).toHaveClass(`${prefixCls}-content`);
        expect(wrap.firstChild).toHaveClass(`test-row-className`);
        expect(getByText('标题2')).toHaveClass('test-title-className');
        expect(getByText('说明文字')).toHaveClass(`${prefixCls}-after-title`);
        expect(getByText('Icon')).toBeTruthy();
    });
    test('test click event', () => {
        const onChange = jest.fn();
        const { getByText } = render(
            <BlockHeader onChange={onChange} title="测试">
                <div>1111</div>
            </BlockHeader>
        );
        expect(getByText('收起')).toBeTruthy();
        fireEvent.click(document.getElementsByClassName(`${prefixCls}-title-row`)[0]);
        expect(getByText('展开')).toBeTruthy();
        expect(onChange).toHaveBeenCalledTimes(1);
    });
    test('BlockHeader render with different props', () => {
        const { container, getByText } = render(<BlockHeader {...props2} />);
        const wrap = container.firstChild;
        expect(wrap).toHaveClass(`${prefixCls}`);
        expect(wrap.lastChild).toHaveClass(`${prefixCls}-content`);
        expect(wrap.firstChild).toHaveClass(`test-row-className`);
        expect(getByText('标题2')).toHaveClass('test-title-className');
        expect(getByText('说明文字')).toHaveClass(`${prefixCls}-after-title`);
        expect(getByText('Icon')).toBeTruthy();
    });
    test('render className when isSmall is small', () => {
        const props = { title: '测试1', showBackground: false };
        const { container } = render(<BlockHeader {...props} />);
        const wrap = container.firstChild;
        expect(wrap.firstChild).not.toHaveClass(`background`);
    });
    test('render className when isSmall is small', () => {
        const { container, getByText } = render(<BlockHeader {...props2} />);
        const wrap = container.firstChild;
        expect(wrap).toHaveClass(`${prefixCls}`);
        expect(wrap.lastChild).toHaveClass(`${prefixCls}-content`);
        expect(wrap.firstChild).toHaveClass(`test-row-className`);
        expect(getByText('标题2')).toHaveClass('test-title-className');
        expect(getByText('说明文字')).toHaveClass(`${prefixCls}-after-title`);
        expect(getByText('Icon')).toBeTruthy();
    });
});
