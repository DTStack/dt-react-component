import { act, waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import useList from '..';

const awaitTimers = async () => {
    for (let i = 0; i < 10; i++) {
        await Promise.resolve();
    }
};

describe('Test useList hook', () => {
    afterEach(() => jest.useRealTimers());

    it('Should get initial data with default params', async () => {
        const fetcher = jest.fn().mockResolvedValue({
            total: 1,
            data: [{ uuid: 1 }],
        });

        const { result } = renderHook(() => useList(fetcher, { current: 1, pageSize: 20 }));

        expect(fetcher).toBeCalledTimes(1);
        await waitFor(() => {
            expect(result.current.data.length).toBe(1);
        });
        expect(result.current.params).toEqual(
            expect.objectContaining({ current: 1, pageSize: 20, total: 1 })
        );
    });

    it('Should get data after mutating', () => {
        const fetcher = jest.fn().mockResolvedValue({
            total: 1,
            data: [{ uuid: 1 }],
        });

        const { result } = renderHook(() =>
            useList(fetcher, { current: 1, pageSize: 20, search: '' })
        );
        expect(fetcher).toBeCalledTimes(1);

        act(() => {
            result.current.mutate({ search: 'test' });
        });

        expect(fetcher).toBeCalledTimes(2);
        expect(result.current.params).toEqual(expect.objectContaining({ search: 'test' }));
        expect(fetcher.mock.calls[1][0]).toEqual(expect.objectContaining({ search: 'test' }));
    });

    it('Should support revalidate after mutating', () => {
        const fetcher = jest.fn().mockResolvedValue({
            total: 1,
            data: [{ uuid: 1 }],
        });

        const { result } = renderHook(() =>
            useList(fetcher, { current: 1, pageSize: 20, search: '' })
        );
        expect(fetcher).toBeCalledTimes(1);

        act(() => {
            result.current.mutate({ search: 'test' }, { revalidate: false });
        });

        expect(result.current.params).toEqual(expect.objectContaining({ search: 'test' }));
    });

    it('Should support get data with current params', () => {
        const fetcher = jest.fn().mockResolvedValue({
            total: 1,
            data: [{ uuid: 1 }],
        });

        const { result } = renderHook(() =>
            useList(fetcher, { current: 1, pageSize: 20, search: '' })
        );
        expect(fetcher).toBeCalledTimes(1);

        act(() => {
            result.current.mutate();
        });

        expect(fetcher).toBeCalledTimes(2);
    });

    it('Should support immediate option', () => {
        const fetcher = jest.fn();

        renderHook(() => useList(fetcher, {}, { immediate: false }));

        expect(fetcher).not.toBeCalled();
    });

    it('Should hide loading after the last fetching done', async () => {
        jest.useFakeTimers({ advanceTimers: true });
        const fetcher = jest
            .fn()
            .mockReturnValueOnce(
                new Promise((resolve) => {
                    setTimeout(() => {
                        resolve({
                            total: 0,
                            data: [],
                        });
                    }, 100);
                })
            )
            .mockReturnValueOnce(
                new Promise((resolve) => {
                    setTimeout(() => {
                        resolve({
                            total: 0,
                            data: [],
                        });
                    }, 200);
                })
            );

        const { result } = renderHook(() => useList(fetcher, {}, { immediate: false }));

        act(() => {
            result.current.mutate();
            result.current.mutate();
        });

        jest.advanceTimersByTime(100);
        await awaitTimers();
        expect(result.current.loading).toBe(true);

        jest.advanceTimersByTime(100);
        await awaitTimers();
        expect(result.current.loading).toBe(false);
    });

    it('Should support clear data before mutate', async () => {
        const fetcher = jest.fn().mockResolvedValue({
            total: 1,
            data: [{ uuid: 1 }],
            error: new Error('testError'),
        });
        const { result } = renderHook(() =>
            useList(fetcher, { current: 1, pageSize: 20, search: '' })
        );
        expect(fetcher).toBeCalledTimes(1);
        await waitFor(() => {
            expect(result.current.data.length).toBe(1);
        });
        act(() => {
            result.current.mutate({ search: 'test' }, { clearData: true });
        });
        expect(result.current.data).toStrictEqual([]);
        expect(result.current.params.total).toBe(0);
        expect(result.current.error).toBe(undefined);
    });

    it('Should ONLY clear data while not reset loading', async () => {
        const fetcher = jest.fn().mockImplementation(
            () =>
                new Promise((resolve) => {
                    setTimeout(() => {
                        resolve({
                            total: 1,
                            data: [{ uuid: 1 }],
                        });
                    }, 1000);
                })
        );

        const { result } = renderHook(() =>
            useList(fetcher, { current: 1, pageSize: 20, search: '' }, { immediate: false })
        );
        act(() => {
            result.current.mutate({ current: 2 });
        });

        expect(result.current.loading).toBe(true);
        expect(result.current.params.current).toBe(2);

        act(() => {
            result.current.clearData();
        });
        // clearData won't reset params and loading status
        expect(result.current.loading).toBe(true);
        expect(result.current.params.current).toBe(2);

        act(() => {
            result.current.clear();
        });
        // clear method will clear all data including params and loading status
        expect(result.current.loading).toBe(false);
        expect(result.current.params.current).toBe(1);
    });
});
