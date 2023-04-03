import React from 'react';
import Cookies from '../index';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

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
    test('shoud trigger onFieldsChanged with empty array when change cookie from an empty value', () => {
        const mockFieldsChanged = jest.fn();
        const intervalTime = 200;

        render(<Cookies watchFields={['dt_token']} onFieldsChanged={mockFieldsChanged} />);
        document.cookie = 'dt_token=token1';

        return new Promise((resolve) => {
            setTimeout(() => {
                expect(mockFieldsChanged.mock.calls).toHaveLength(1);
                expect(mockFieldsChanged.mock.calls[0][0]).toEqual([]);
                resolve(true);
            }, intervalTime);
            jest.runAllTimers();
        });
    });

    test('shoud trigger onFieldsChanged with fields when change cookie from an exist value', () => {
        const mockFieldsChanged = jest.fn();
        const intervalTime = 200;

        document.cookie = 'dt_token=token1';
        render(<Cookies watchFields={['dt_token']} onFieldsChanged={mockFieldsChanged} />);
        document.cookie = 'dt_token=token2';

        return new Promise((resolve) => {
            setTimeout(() => {
                expect(mockFieldsChanged.mock.calls).toHaveLength(1);
                expect(mockFieldsChanged.mock.calls[0][0]).toEqual([
                    { key: 'dt_token', value: 'token2' },
                ]);
                resolve(true);
            }, intervalTime);
            jest.runAllTimers();
        });
    });

    test('shoud trigger onChanged when change cookies', () => {
        const mockCookiesChanged = jest.fn();
        const intervalTime = 200;

        render(<Cookies onChanged={mockCookiesChanged} />);
        document.cookie = 'dt_token=token1';
        document.cookie = 'dt_userId=123';

        return new Promise((resolve) => {
            setTimeout(() => {
                expect(mockCookiesChanged.mock.calls).toHaveLength(1);
                expect(mockCookiesChanged.mock.calls[0][0]).toBe('');
                expect(mockCookiesChanged.mock.calls[0][1]).toBe('dt_token=token1; dt_userId=123');
                resolve(true);
            }, intervalTime);
            jest.runAllTimers();
        });
    });

    test('should compare cookie every intervalTime', () => {
        const mockCookiesChanged = jest.fn();
        const intervalTime = 100;

        render(<Cookies intervalTime={intervalTime} onChanged={mockCookiesChanged} />);
        document.cookie = 'dt_token=token1';
        document.cookie = 'dt_userId=123';

        setTimeout(() => {
            document.cookie = 'dt_token=token2';
            document.cookie = 'dt_userId=1234';
        }, 1.5 * intervalTime);

        return new Promise((resolve) => {
            setTimeout(() => {
                expect(mockCookiesChanged.mock.calls).toHaveLength(2);
                expect(mockCookiesChanged.mock.calls[0][0]).toBe('');
                expect(mockCookiesChanged.mock.calls[0][1]).toBe('dt_token=token1; dt_userId=123');
                expect(mockCookiesChanged.mock.calls[1][0]).toBe('dt_token=token1; dt_userId=123');
                expect(mockCookiesChanged.mock.calls[1][1]).toBe('dt_token=token2; dt_userId=1234');
                resolve(true);
            }, 2 * intervalTime);
            jest.runAllTimers();
        });
    });
});
