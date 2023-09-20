import { cleanup, renderHook } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import useWindowSwitchListener from '../index';

describe('test useWindowSwitchListener hooks', () => {
    afterEach(() => {
        cleanup();
        jest.resetAllMocks();
    });
    test('test callBack to called', () => {
        const fn = jest.fn();
        renderHook(() =>
            useWindowSwitchListener(() => {
                fn();
            })
        );
        window.dispatchEvent(new Event('focus'));
        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledTimes(1);
    });
});
