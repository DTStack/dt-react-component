import useWindowSwitchListener from '../index';
import { cleanup, renderHook } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('test useWindowSwitchListener hooks', () => {
    afterEach(() => {
        cleanup();
        jest.resetAllMocks();
    });
    test('test callBack to called', () => {
        const fn = jest.fn();
        renderHook(() => useWindowSwitchListener({ onSwitch: fn }));
        window.dispatchEvent(new Event('focus'));
        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledTimes(1);
    });
    test('test callBack not to called', () => {
        const fn = jest.fn();
        renderHook(() => useWindowSwitchListener({}));
        window.dispatchEvent(new Event('focus'));
        expect(fn).not.toHaveBeenCalled();
    });
});
