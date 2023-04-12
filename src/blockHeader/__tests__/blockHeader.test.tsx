import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import BlockHeader from '../index';
import '@testing-library/jest-dom/extend-expect';

const props = {
    title: '标题1',
};
const props2 = {
    title: '标题2',
    beforeTitle: <span>Icon</span>,
    afterTitle: '说明文字',
    addonAfter: <div className="test-button-after">新增按钮</div>,
    isSmall: true,
    titleRowClassName: 'test-row-className',
    titleClassName: 'test-title-className',
};
const props3 = {
    title: 'hover',
    tooltip: 'hover 展示',
};
const props4 = {
    title: 'hover',
    tooltip: 'hover 展示',
    afterTitle: '我的优先级更高',
};
const prefixCls = 'dtc-block-header';

describe('test BlockHeader render', () => {
    afterEach(() => {
        cleanup();
    });
    test('should render BlockHeader success render', () => {
        const wrapper = render(<BlockHeader {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
    test('should render BlockHeader default BlockHeader render', () => {
        const { getByText, rerender } = render(<BlockHeader {...props} />);
        expect(getByText(props.title)).toBeTruthy();
        rerender(<BlockHeader title="标题2" />);
        expect(getByText('标题2')).toBeTruthy();
    });
    test('should render BlockHeader props default in BlockHeader', () => {
        const { container } = render(<BlockHeader title="测试" isSmall showBackground />);
        const wrap = container.firstChild;
        expect(wrap!.firstChild!.firstChild!.firstChild).toHaveClass(`${prefixCls}-before-title`);
        expect(wrap!.firstChild!.firstChild!.firstChild!.firstChild).toHaveClass('small');
        fireEvent.click(document.getElementsByClassName(`${prefixCls}-title-row`)[0]);
    });
    test('should render BlockHeader with different props', () => {
        const { container, getByText } = render(<BlockHeader {...props2} />);
        const wrap = container.firstChild;
        expect(wrap).toHaveClass(`${prefixCls}`);
        expect(wrap!.lastChild).toHaveClass(`${prefixCls}-content`);
        expect(wrap!.firstChild).toHaveClass(`test-row-className`);
        expect(getByText('标题2')).toHaveClass('test-title-className');
        expect(getByText('说明文字')).toHaveClass(`${prefixCls}-after-title`);
        expect(getByText('新增按钮')).toHaveClass(`test-button-after`);
        expect(getByText('Icon')).toBeTruthy();
    });
    test('should render BlockHeader test click event', () => {
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
    test('should render BlockHeader with different props', () => {
        const { container, getByText } = render(<BlockHeader {...props2} />);
        const wrap = container.firstChild;
        expect(wrap).toHaveClass(`${prefixCls}`);
        expect(wrap!.lastChild).toHaveClass(`${prefixCls}-content`);
        expect(wrap!.firstChild).toHaveClass(`test-row-className`);
        expect(getByText('标题2')).toHaveClass('test-title-className');
        expect(getByText('说明文字')).toHaveClass(`${prefixCls}-after-title`);
        expect(getByText('Icon')).toBeTruthy();
    });
    test('should render BlockHeader className when isSmall is small', () => {
        const props = { title: '测试1', showBackground: false };
        const { container } = render(<BlockHeader {...props} />);
        const wrap = container.firstChild;
        expect(wrap!.firstChild).not.toHaveClass(`background`);
    });
    test('should render BlockHeader className when isSmall is small', () => {
        const { container, getByText } = render(<BlockHeader {...props2} />);
        const wrap = container.firstChild!;
        expect(wrap).toHaveClass(`${prefixCls}`);
        expect(wrap.lastChild).toHaveClass(`${prefixCls}-content`);
        expect(wrap.firstChild).toHaveClass(`test-row-className`);
        expect(getByText('标题2')).toHaveClass('test-title-className');
        expect(getByText('说明文字')).toHaveClass(`${prefixCls}-after-title`);
        expect(getByText('Icon')).toBeTruthy();
    });

    test('should render BlockHeader tooltip success', () => {
        const { container } = render(<BlockHeader {...props3} />);
        const wrap = container.firstChild!;
        const afterTitleWrap = wrap.firstChild!.firstChild!.lastChild;
        expect(afterTitleWrap!.firstChild).toHaveClass('anticon-question-circle');
    });

    test('should render BlockHeader tooltip and afterTitle success', () => {
        const { container } = render(<BlockHeader {...props4} />);
        const wrap = container.firstChild!;
        const afterTitleWrap = wrap.firstChild!.firstChild!.lastChild;
        expect(afterTitleWrap).toHaveTextContent('我的优先级更高');
    });
    test('should render BlockHeader correct dom length', () => {
        const { container } = render(<BlockHeader title="分类级别" beforeTitle="" />);
        const titleBoxWrap = container.firstChild!.firstChild!.firstChild;
        expect(titleBoxWrap!.childNodes.length).toEqual(1);

        const { container: container1 } = render(
            <BlockHeader title="分类级别" afterTitle="测试" />
        );
        const titleBoxWrap1 = container1.firstChild!.firstChild!.firstChild;
        expect(titleBoxWrap1!.childNodes.length).toEqual(3);
    });
    test('should render BlockHeader correct margin-bottom', () => {
        const { container: noStyle } = render(<BlockHeader title="分类级别" beforeTitle="" />);
        expect(noStyle.querySelector('.dtc-block-header')).not.toHaveAttribute('style');
        const { container: defaultBottom } = render(
            <BlockHeader title="分类级别" beforeTitle="" />
        );
        expect(defaultBottom.querySelector('.dtc-block-header')).toHaveStyle({ marginBottom: 16 });
        const { container: customizeBottom } = render(
            <BlockHeader title="分类级别" beforeTitle="" hasBottom spaceBottom={10} />
        );
        expect(customizeBottom.querySelector('.dtc-block-header')).toHaveStyle({
            marginBottom: 10,
        });
    });
});
