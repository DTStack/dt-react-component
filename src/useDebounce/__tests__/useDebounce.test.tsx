import { renderHook } from '@testing-library/react-hooks';

import useDebounce from '..';

describe('test useDebounce', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });
    afterEach(() => {
        jest.useRealTimers();
    });
    test('debounce should work', () => {
        let count = 0;
        const updateCount = (step: number) => {
            count += step;
        };
        const hook = renderHook(() => useDebounce(updateCount, 300));

        const debouncedFn = hook.result.current;

        debouncedFn(1);
        debouncedFn(2);
        debouncedFn(3);
        expect(count).toBe(0);

        jest.advanceTimersByTime(300);
        expect(count).toBe(3);

        debouncedFn(1);
        debouncedFn.flush();
        expect(count).toBe(4);

        debouncedFn(1);
        debouncedFn.cancel();
        jest.advanceTimersByTime(300);
        expect(count).toBe(4);

        debouncedFn(1);
        hook.unmount();
        jest.advanceTimersByTime(300);
        expect(count).toBe(4);
    });
});
