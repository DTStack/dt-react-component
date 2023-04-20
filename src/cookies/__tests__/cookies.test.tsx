import { cleanup, renderHook } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import useCookieListener from '../index';

jest.useFakeTimers({ advanceTimers: true });
jest.spyOn(global, 'setInterval');
jest.spyOn(global, 'setTimeout');

let cookies: { key: string; value: string }[] = [];

Object.defineProperty(window.document, 'cookie', {
    get() {
        return cookies.map((item) => `${item.key}=${item.value}`).join('; ');
    },
    set(value) {
        const arr = value.split('=');
        if (arr.length !== 2) return;
        const [key, val] = arr;
        const cookie = cookies.find((item) => item.key === key);
        cookie ? (cookie.value = val) : cookies.push({ key, value: val });
    },
});

describe('test cookies', () => {
    beforeEach(() => {
        cleanup();
        cookies = [];
    });

    // 新增的cookie项不会触发
    test('should not trigger when change cookie from an empty value', () => {
        const mockFieldsChanged = jest.fn();
        const timeout = 200;

        renderHook(() =>
            useCookieListener(
                ({ changedFields }) => mockFieldsChanged(changedFields),
                ['dt_token'],
                { timeout }
            )
        );

        document.cookie = 'dt_token=token1';

        return new Promise((resolve) => {
            setTimeout(() => {
                expect(mockFieldsChanged).not.toBeCalled();
                resolve(true);
            }, timeout);
            jest.runAllTimers();
        });
    });

    test('should trigger when change cookie from an empty value with immediately option', () => {
        const mockFieldsChanged = jest.fn();
        const timeout = 200;

        renderHook(() =>
            useCookieListener(
                ({ changedFields }) => mockFieldsChanged(changedFields),
                ['dt_token'],
                { timeout, immediately: true }
            )
        );

        document.cookie = 'dt_token=token1';

        return new Promise((resolve) => {
            setTimeout(() => {
                expect(mockFieldsChanged).toBeCalled();
                expect(mockFieldsChanged.mock.calls[0][0]).toEqual([
                    { key: 'dt_token', value: 'token1' },
                ]);
                resolve(true);
            }, timeout);
            jest.runAllTimers();
        });
    });

    test('should trigger when change cookie from an exist value', () => {
        const mockFieldsChanged = jest.fn();
        const timeout = 200;

        document.cookie = 'dt_token=token1';
        renderHook(() =>
            useCookieListener(
                ({ changedFields }) => mockFieldsChanged(changedFields),
                ['dt_token'],
                { timeout }
            )
        );
        document.cookie = 'dt_token=token2';

        return new Promise((resolve) => {
            setTimeout(() => {
                expect(mockFieldsChanged.mock.calls).toHaveLength(1);
                expect(mockFieldsChanged.mock.calls[0][0]).toEqual([
                    { key: 'dt_token', value: 'token2' },
                ]);
                resolve(true);
            }, timeout);
            jest.runAllTimers();
        });
    });

    test('should trigger with prevCookies and nextCookies when change cookie with empty watchfields', () => {
        const mockCookiesChanged = jest.fn();
        const timeout = 200;

        renderHook(() => useCookieListener(mockCookiesChanged, [], { timeout }));

        document.cookie = 'dt_token=token1';
        document.cookie = 'dt_userId=123';

        return new Promise((resolve) => {
            setTimeout(() => {
                expect(mockCookiesChanged.mock.calls).toHaveLength(1);
                expect(mockCookiesChanged).toBeCalledWith({
                    prevCookies: '',
                    nextCookies: 'dt_token=token1; dt_userId=123',
                });
                resolve(true);
            }, timeout);
            jest.runAllTimers();
        });
    });

    test('should compare cookie every timeout', () => {
        const mockCookiesChanged = jest.fn();
        const timeout = 100;

        renderHook(() => useCookieListener(mockCookiesChanged, [], { timeout }));

        document.cookie = 'dt_token=token1';
        document.cookie = 'dt_userId=123';

        setTimeout(() => {
            document.cookie = 'dt_token=token2';
            document.cookie = 'dt_userId=1234';
        }, 1.5 * timeout);

        return new Promise((resolve) => {
            setTimeout(() => {
                expect(mockCookiesChanged.mock.calls).toHaveLength(2);
                expect(mockCookiesChanged.mock.calls[0][0]).toEqual({
                    prevCookies: '',
                    nextCookies: 'dt_token=token1; dt_userId=123',
                });
                expect(mockCookiesChanged.mock.calls[1][0]).toEqual({
                    prevCookies: 'dt_token=token1; dt_userId=123',
                    nextCookies: 'dt_token=token2; dt_userId=1234',
                });
                resolve(true);
            }, 2 * timeout);
            jest.runAllTimers();
        });
    });
});
