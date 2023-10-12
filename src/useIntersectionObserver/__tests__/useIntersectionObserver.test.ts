import { RefObject } from 'react';
import { act, renderHook } from '@testing-library/react-hooks';

import useIntersectionObserver from '../index';

describe('useIntersectionObserver', () => {
    let observeMock: jest.Mock;
    let disconnectMock: jest.Mock;

    beforeEach(() => {
        observeMock = jest.fn();
        disconnectMock = jest.fn();
        jest.spyOn(window, 'IntersectionObserver').mockImplementation(
            (
                _callback: IntersectionObserverCallback,
                _options?: IntersectionObserverInit | undefined
            ) => ({
                observe: observeMock,
                disconnect: disconnectMock,
                root: null,
                rootMargin: '',
                thresholds: [],
                takeRecords: jest.fn(),
                unobserve: jest.fn(),
            })
        );
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should observe target element and disconnect on unmount', () => {
        const ref = { current: document.createElement('div') };
        const callback = jest.fn();
        const options = { threshold: 0, root: null, rootMargin: '0%' };
        const { unmount } = renderHook(() => useIntersectionObserver(callback, ref, options));
        expect(window.IntersectionObserver).toHaveBeenCalledWith(expect.any(Function), options);
        expect(observeMock).toHaveBeenCalledWith(ref.current);
        act(() => {
            unmount();
        });
        expect(disconnectMock).toHaveBeenCalled();
    });

    it('should not observe target element if not provided', () => {
        const callback = jest.fn();
        const options = { threshold: 0, root: null, rootMargin: '0%' };
        const { unmount } = renderHook(() =>
            useIntersectionObserver(callback, null as unknown as RefObject<Element>, options)
        );
        expect(window.IntersectionObserver).toHaveBeenCalledWith(expect.any(Function), options);
        expect(observeMock).not.toHaveBeenCalled();
        act(() => {
            unmount();
        });
        expect(callback).not.toHaveBeenCalled();
    });
});
