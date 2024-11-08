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
        const callback = jest.fn();
        const options = { threshold: 0, root: null, rootMargin: '0%' };

        const divElement = document.createElement('div');
        document.body.appendChild(divElement);

        const { unmount } = renderHook(() => {
            const [ref] = useIntersectionObserver(callback, options);
            ref.current = divElement;
            return ref;
        });
        expect(window.IntersectionObserver).toHaveBeenCalledWith(expect.any(Function), options);
        expect(observeMock).toHaveBeenCalledWith(divElement);
        act(() => {
            unmount();
        });
        expect(disconnectMock).toHaveBeenCalled();
    });

    it('should not observe target element if ref is null', () => {
        const callback = jest.fn();
        const options = { threshold: 0, root: null, rootMargin: '0%' };

        const { unmount } = renderHook(() => {
            const [ref] = useIntersectionObserver(callback, options);
            ref.current = null;
            return ref;
        });

        expect(observeMock).not.toHaveBeenCalled();
        act(() => {
            unmount();
        });
        expect(callback).not.toHaveBeenCalled();
    });
});
