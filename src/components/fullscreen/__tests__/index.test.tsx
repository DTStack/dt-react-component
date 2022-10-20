import React from 'react';
import Fullscreen from '../index';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
describe('test Fullscreen', () => {
    afterEach(() => {
        cleanup();
    });
    test('should icon render correct', () => {
        const { getByTestId } = render(<Fullscreen />);
        const element = getByTestId('test_myIcon');
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass('dtc-fullscreen-icon');
    });
    test('should button render correct', () => {
        const { getByTestId } = render(<Fullscreen />);
        const element = getByTestId('test_myButton');
        expect(element).toBeInTheDocument();
        expect(element).toHaveTextContent('全屏');
    });
    test('button fireEvent correct', () => {
        const { container, getByTestId } = render(<Fullscreen />);
        const element = getByTestId('test_myButton');
        fireEvent.click(element);
        expect(container.innerHTML).toMatch('全屏');
    });
});
