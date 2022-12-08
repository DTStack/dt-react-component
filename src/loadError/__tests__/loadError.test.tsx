import React from 'react';
import LoadError from '../index';
import { fireEvent, render, RenderResult } from '@testing-library/react';

let wrapper: RenderResult;

describe('test error', () => {
    const location: Location = window.location;
    // @ts-ignore
    delete window.location;
    window.location = {
        ...location,
        reload: jest.fn(),
    };
    beforeEach(() => {
        wrapper = render(<LoadError />);
    });
    afterEach(() => {
        jest.restoreAllMocks();
        window.location = location;
    });
    test('calls reload function', () => {
        const eleA = wrapper.getByText('刷新');
        fireEvent.click(eleA);
        expect(window.location.reload).toHaveBeenCalledTimes(1);
    });
});
