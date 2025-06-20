import { renderHook } from '@testing-library/react-hooks';

import useMergeOption from '..';

describe('Test useMergeOption', () => {
    test('should return default value when state is false', () => {
        const { result } = renderHook(() => useMergeOption(false, { day: true }));
        expect(result.current).toEqual({ disabled: true, options: { day: true } });
    });

    test('should return default value when state is true', () => {
        const { result } = renderHook(() => useMergeOption(true, { day: true }));
        expect(result.current).toEqual({ disabled: false, options: { day: true } });
    });

    test('should return merged value when state is an object', () => {
        const { result } = renderHook(() => useMergeOption({ day: false }, { day: true }));
        expect(result.current).toEqual({ disabled: false, options: { day: false } });
    });
});
