
import React from 'react';
import { Circle } from '../index';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('test Circle suite', () => {
    const defaultCls = 'dtc-circle-default';
    let wrapper, wrapperCus, element, elementCus
    beforeEach(() => {
        wrapper = render(<Circle data-testid='test1'></Circle>)
        wrapperCus = render(<Circle type='finished' data-testid='test2' />)
        element = wrapper.getByTestId('test1');
        elementCus = wrapperCus.getByTestId('test2')
    })
    afterEach(() => {
        cleanup();
    })
    test('should render the correct className in Circle', () => {
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass(defaultCls);
    })
    test('should render the finished className in Circle', () => {
        expect(elementCus).toHaveClass('dtc-circle-finished');
    })
})
