import { act, waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import useList from '..';

describe('Test useList hook', () => {
    it('Should get initial data with default params', () => {
        const fetcher = jest.fn().mockResolvedValue({
            total: 1,
            data: [{ uuid: 1 }],
        });

        const { result } = renderHook(() => useList(fetcher, { current: 1, pageSize: 20 }));

        expect(fetcher).toBeCalledTimes(1);
        waitFor(() => {
            expect(result.current.data.length).toBe(1);
            expect(result.current.params).toBe(
                expect.objectContaining({ current: 1, pageSize: 20, total: 1 })
            );
        });
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

        waitFor(() => {
            expect(fetcher).toBeCalledTimes(2);
            expect(result.current.params).toBe(expect.objectContaining({ search: 'test' }));
        });
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

        waitFor(() => {
            expect(result.current.params).toBe(expect.objectContaining({ search: 'test' }));
        });
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

        waitFor(() => {
            expect(fetcher).toBeCalledTimes(2);
        });
    });
});
