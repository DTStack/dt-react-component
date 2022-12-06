import React from 'react';
import GlobalLoading from '../index';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('test GlobalLoading', () => {
    let wrapper, element;
    const text = 'BatchWorks · 离线开发';
    beforeEach(() => {
        wrapper = render(<GlobalLoading loadingTitle={text} className="testGlobalLoading" />);
        element = wrapper.getByTestId('test-globalLoading');
    });
    afterEach(() => {
        cleanup();
    });
    test('should render the correct text', () => {
        expect(element).toBeInTheDocument();
        expect(element).toHaveStyle({
            background: '#F2F7FA',
        });
    });

    test('should render GlobalLoading custom className', () => {
        expect(wrapper.container.firstChild).toHaveClass('testGlobalLoading');
    });
});
