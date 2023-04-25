import React from 'react';
import Resize from '../index';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Resize', () => {
    let originalResizeObserver: typeof global.ResizeObserver;
    beforeEach(() => {
        originalResizeObserver = global.ResizeObserver;
        global.ResizeObserver = class {
            callback: any;
            constructor(callback: any) {
                this.callback = callback;
            }
            observe() {
                this.callback();
            }
            unobserve() {}
            disconnect() {}
        };
    });

    afterEach(() => {
        global.ResizeObserver = originalResizeObserver;
    });

    test('should render children', () => {
        const { getByText } = render(<Resize>test</Resize>);
        expect(getByText('test')).toBeInTheDocument();
    });

    test('should add resize event listener to window if observerEle is not provided', () => {
        const onResize = jest.fn();
        const { unmount } = render(<Resize onResize={onResize} />);
        fireEvent(window, new Event('resize'));

        expect(onResize).toBeCalledTimes(1);
        unmount();
    });

    test('should add resize observer to observerEle if observerEle is provided', () => {
        const onResize = jest.fn();
        const observerEle = document.createElement('div');
        const { unmount } = render(<Resize onResize={onResize} observerEle={observerEle} />);
        observerEle.style.width = '100px';
        observerEle.style.height = '100px';
        global.dispatchEvent(new Event('resize'));

        expect(onResize).toHaveBeenCalled();
        unmount();
    });
});
