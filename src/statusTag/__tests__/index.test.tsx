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
    test('should support StatusTag render the default className in StatusTag', () => {
        const { container } = render(<StatusTag>完成</StatusTag>);
        expect(container.firstChild).toHaveClass(...[`${prefixCls}`, `${prefixCls}__border`]);
    });
    test('should render StatusTag render correct type', () => {
        const { container } = render(<StatusTag type="run">完成</StatusTag>);
        expect(container.querySelector(`.${prefixCls}__run`)).toBeInTheDocument();
    });
    test('should render StatusTag render correct color', () => {
        const { container } = render(<StatusTag color="#2177b8">完成</StatusTag>);
        const textWapper = container.querySelector(`.${prefixCls}__default`);
        expect(textWapper).toHaveStyle({ background: '#2177b8' });
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
