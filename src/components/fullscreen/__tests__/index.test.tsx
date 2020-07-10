import React from 'react'
import FullScreenButton from '../index';
import { render, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
describe('test breadcrumb', () => {
    afterEach(() => {
        cleanup();
    })
    test('should icon render correct', () => {
        const { getByTestId } = render(<FullScreenButton />);
        const element = getByTestId('test_myIcon');
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass('dtc-fullscreen-icon');
    })
    test('should button render correct', () => {
        const { getByTestId } = render(<FullScreenButton />);
        const element = getByTestId('test_myButton');
        expect(element).toBeInTheDocument();
        expect(element).toHaveTextContent('全屏');
    })
    test('button fireEvent correct', () => {
        const { container, getByTestId } = render(<FullScreenButton />);
        const element = getByTestId('test_myButton');
        fireEvent.click(element);
        // console.log('html', container.innerHTML);
        expect(container.innerHTML).toMatch('全屏')
    })
})
