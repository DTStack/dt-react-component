import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import StatusTag from '../index';

describe('test StatusTag suite', () => {
    const prefixCls = 'dtc-statusTag';
    test('should support StatusTag success render', () => {
        const wrapper = render(<StatusTag>完成</StatusTag>);
        expect(wrapper).toMatchSnapshot();
    });
    test('should support StatusTag render correct', () => {
        const { container, rerender } = render(<StatusTag>完成</StatusTag>);
        expect(container.firstChild).toHaveClass(...[`${prefixCls}`]);
        rerender(<StatusTag type="outline">完成</StatusTag>);
        expect(container.firstChild).toHaveClass(...[`${prefixCls}`, `${prefixCls}--border`]);
        rerender(<StatusTag type="fill">完成</StatusTag>);
        expect(container.firstChild).toHaveClass(...[`${prefixCls}`, `${prefixCls}--fill`]);
    });
    test('should render StatusTag render correct inner color', () => {
        const { container, rerender } = render(<StatusTag color="run">完成</StatusTag>);
        expect(container.querySelector(`.${prefixCls}__run--iconBg`)).toBeInTheDocument();
        rerender(
            <StatusTag color="stopped" type="fill">
                完成
            </StatusTag>
        );
        expect(container.querySelector(`.${prefixCls}__stopped--fill`)).toBeInTheDocument();
    });
    test('should render StatusTag render correct custom color', () => {
        const { container, rerender } = render(<StatusTag color="#2177b8">完成</StatusTag>);
        let wrapper = container.querySelector(`.${prefixCls}__icon--default`);
        expect(wrapper).toHaveStyle({ background: '#2177b8' });
        rerender(
            <StatusTag color="#2177b8" type="fill">
                完成
            </StatusTag>
        );
        wrapper = container.querySelector(`.${prefixCls}--fill`);
        expect(wrapper).toHaveStyle({
            color: 'rgb(33, 119, 184)',
            background: 'rgba(33, 119, 184, 0.3)',
        });
    });
    test('should render StatusTag render correct text', () => {
        const { container } = render(<StatusTag>自定义文案</StatusTag>);
        const textWapper = container.querySelector(`.${prefixCls}__text`)!;
        expect(textWapper.innerHTML).toEqual('自定义文案');
    });
    test('should render StatusTag loading', () => {
        const { container } = render(<StatusTag loading>自定义文案</StatusTag>);
        const loadingWapper = container.querySelector(`.ant-spin-spinning`)!;
        expect(loadingWapper).toBeInTheDocument();
    });
});
