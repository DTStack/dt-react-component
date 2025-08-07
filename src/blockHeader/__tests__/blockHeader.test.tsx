import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import BlockHeader, { IBlockHeaderProps, SizeType } from '../index';

const props: IBlockHeaderProps = {
    title: '标题1',
};
const props2: IBlockHeaderProps = {
    title: '标题2',
    addonBefore: <span>Icon</span>,
    description: '说明文字',
    addonAfter: <div className="test-button-after">新增按钮</div>,
    size: 'small' as SizeType,
    className: 'test__className',
    style: { height: '100px' },
};
const props3: IBlockHeaderProps = {
    title: 'hover',
    tooltip: 'hover 展示',
};
const props4: IBlockHeaderProps = {
    title: 'hover',
    tooltip: 'hover 展示',
    description: '说明文字',
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
        expect(getByText(props.title as any)).toBeTruthy();
        rerender(<BlockHeader title="标题2" />);
        expect(getByText('标题2')).toBeTruthy();
    });
    test('should render BlockHeader props default in BlockHeader', () => {
        const { container } = render(<BlockHeader title="测试" background />);
        const wrap = container.firstChild;
        expect(wrap!.firstChild!.firstChild!.firstChild).toHaveClass('title__addon-before');
        fireEvent.click(document.getElementsByClassName(`${prefixCls}__title`)[0]);
    });
    test('should render BlockHeader test click event', () => {
        const onChange = jest.fn();
        const { getByText } = render(
            <BlockHeader defaultExpand onExpand={onChange} title="测试">
                <div>1111</div>
            </BlockHeader>
        );
        expect(getByText('收起')).toBeTruthy();
        fireEvent.click(document.getElementsByClassName(`${prefixCls}__title`)[0]);
        expect(getByText('展开')).toBeTruthy();
        expect(onChange).toHaveBeenCalledTimes(1);
    });
    test('should not render collapsed content normally', () => {
        render(
            <BlockHeader title="测试">
                <div>Hello World!</div>
            </BlockHeader>
        );
        const collapse = document.getElementsByClassName('title__collapse')[0];
        expect(collapse).toBeFalsy();
    });
    test('should render content class and style', () => {
        render(
            <BlockHeader
                title="测试"
                contentStyle={{ height: 200 }}
                contentClassName="custom__content"
            >
                <div>Hello World!</div>
            </BlockHeader>
        );
        const container = document.getElementsByClassName(`${prefixCls}__content`)[0];
        expect(container).toHaveStyle({ height: '200px' });
        expect(container).toHaveClass(
            'dtc-block-header__content dtc-block-header__content--active custom__content'
        );
    });
    test('should render BlockHeader with different props', () => {
        const { container, getByText } = render(<BlockHeader {...props2} />);
        const wrap = container.firstChild;
        expect(wrap).toHaveClass(`${prefixCls} test__className`);
        expect(wrap).toHaveStyle({ height: '100px', marginBottom: '16px' });
        expect(getByText('标题2')).toHaveClass('title__text');
        expect(getByText('说明文字')).toHaveClass('title__description');
        expect(getByText('Icon')).toBeTruthy();
    });
    test('should render BlockHeader background false success', () => {
        const props = { title: '测试1', background: false };
        const { container } = render(<BlockHeader {...props} />);
        const wrap = container.firstChild;
        expect(wrap!.firstChild).not.toHaveClass(`dtc-block-header__title--background`);
    });
    test('should render BlockHeader className when size is small', () => {
        const { container, getByText } = render(<BlockHeader {...props2} />);
        const wrap = container.firstChild!;
        expect(wrap).toHaveClass(`${prefixCls} test__className`);
        expect(wrap.firstChild).toHaveClass(
            `dtc-block-header__title dtc-block-header__title--small dtc-block-header__title--background`
        );
        expect(getByText('标题2')).toHaveClass('title__text');
        expect(getByText('说明文字')).toHaveClass('title__description');
        expect(getByText('Icon')).toBeTruthy();
    });

    test('should render BlockHeader tooltip success', () => {
        const { container } = render(<BlockHeader {...props3} />);
        const wrap = container.firstChild!;
        const tooltipWrap = wrap.firstChild!.firstChild!.lastChild;
        expect(tooltipWrap!.firstChild).toHaveAttribute('data-mock-icon', 'QuestionOutlined');
    });

    test('should render BlockHeader description success', () => {
        const { container } = render(<BlockHeader {...props4} />);
        const wrap = container.firstChild!;
        const description = wrap.firstChild!.firstChild!.lastChild;
        expect(description).toHaveTextContent('说明文字');
    });

    test('should render BlockHeader correct dom length', () => {
        const { container } = render(<BlockHeader title="分类级别" addonBefore="" />);
        const titleBoxWrap = container.firstChild!.firstChild!.firstChild;
        expect(titleBoxWrap!.childNodes.length).toEqual(1);

        const { container: container1 } = render(
            <BlockHeader title="分类级别" description="测试" />
        );
        const titleBoxWrap1 = container1.firstChild!.firstChild!.firstChild;
        expect(titleBoxWrap1!.childNodes.length).toEqual(3);
    });

    test('should render BlockHeader correct margin-bottom', () => {
        const { container: haveStyle } = render(<BlockHeader title="分类级别" addonBefore="" />);
        expect(haveStyle.querySelector('.dtc-block-header')).toHaveAttribute('style');
        const { container: defaultBottom } = render(
            <BlockHeader title="分类级别" addonBefore="" />
        );
        expect(defaultBottom.querySelector('.dtc-block-header')).toHaveStyle({ marginBottom: 16 });
        const { container: customizeBottom } = render(
            <BlockHeader title="分类级别" addonBefore="" spaceBottom={10} />
        );
        expect(customizeBottom.querySelector('.dtc-block-header')).toHaveStyle({
            marginBottom: 10,
        });
    });
});
