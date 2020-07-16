import React from 'react';
import Input from '../index';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
const defaultProps = {
    value: 'input',
    onChange: jest.fn(),
    max: 10
}

let wrapper, element;
describe('test edit input', () => {
    beforeEach(() => {
        wrapper = render(<Input {...defaultProps} />);
        element = wrapper.getByTestId('test-input') as HTMLInputElement;
    })
    afterEach(() => {
        cleanup();
    })

    test('should render the correct value', () => {
        expect(element).toBeInTheDocument();
        expect(element).toHaveAttribute('value', 'input');
    })
    test('should change value when change', () => {
        element.onblur = jest.fn();
        fireEvent.blur(element);
        expect(element.onblur).toHaveBeenCalled();
        fireEvent.change(element, { target: { value: '1' } });
        expect(defaultProps.onChange).toHaveBeenCalled();
        expect(element.value).toEqual('1');
    })
    test('should render message when length more then max', () => {
        fireEvent.change(element, { target: { value: '12345678910' } });
        expect(wrapper.getByText('字符长度不可超过10')).toBeInTheDocument();
    })
})
