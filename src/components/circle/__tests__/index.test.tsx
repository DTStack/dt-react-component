
import React from 'react';
import Circle from '../index';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('test Circle suite', () => {
    test('should support circle success render', () => {
        const wrapper = render(<Circle>完成</Circle>)
        expect(wrapper).toMatchSnapshot();
    })
    test('should support circle render the default className in Circle', () => {
        const { container } = render(<Circle>完成</Circle>)
        expect(container.firstChild).toHaveClass(...['dtc-circle', 'dtc-circle-border']);
    })
    test('should render circle render correct type', () => {
        const { container } = render(<Circle type="run">完成</Circle>)
        expect(container.firstChild.firstChild).toHaveClass('dtc-circle-run');
    })
    test('should render circle render correct color', () => {
        const { container } = render(<Circle color="#2177b8">完成</Circle>)
        const textWapper = container.firstChild.firstChild
        expect(textWapper).toHaveStyle({ background: '#2177b8' });
    })
    test('should render circle render correct text', () => {
        const { container } = render(<Circle>自定义文案</Circle>)
        const textWapper = container.querySelector('.dtc-circle-text')
        expect(textWapper.innerHTML).toEqual('自定义文案');
    })
})
