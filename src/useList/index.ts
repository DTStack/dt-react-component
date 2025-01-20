import { useEffect, useMemo, useRef, useState } from 'react';
import { merge } from 'lodash-es';

export type Fetcher<T, P> = (params: P) => Promise<{ data: T[]; total: number }>;

export interface IMutateOptions {
    /**
     * 是否数据重新获取
     */
    revalidate?: boolean;
    /**
     * 在mutate发起请求前是否清空data(包括data total error)
     */
    clearData?: boolean;
}

export interface IUseListOptions {
    /**
     * 是否立即执行 fetch 在初始化的时候
     */
    immediate?: boolean;
}

/**
 * 返回值
 */
export interface UseListResponseState<
    T extends Record<string, any>,
    P extends Record<string, any>
> {
    /**
     * 请求是否执行中
     */
    loading: boolean;
    /**
     * 请求的相关参数以及结果数据的总数
     */
    params: P & { total: number };
    /**
     * 错误信息
     */
    error?: Error;
    /**
     * 返回的数据
     */
    data: T[];
    mutate: (params?: Partial<P> | ((prev: P) => P), options?: IMutateOptions) => void;
    /**
     * 清空所有数据和状态
     */
    clear: () => void;
    /**
     * 清空数据
     */
    clearData: () => void;
}

export default function useList<T extends Record<string, any>, P extends Record<string, any>>(
    fetcher: Fetcher<T, P>,
    initialParams: P | (() => P),
    rawOptions: IUseListOptions = { immediate: true }
): UseListResponseState<T, P> {
    const [error, setError] = useState<Error | undefined>(undefined);
    const [data, setData] = useState<T[]>([]);
    const [total, setTotal] = useState(0);
    const [params, setParams] = useState<P>(initialParams);
    const [loading, setLoading] = useState(false);
    const lastRequestId = useRef<symbol | undefined>(undefined);

    const options = useMemo(() => merge({ immediate: true }, rawOptions), [rawOptions]);

    const performFetch = (raw = params) => {
        const requestId = Symbol('id');
        lastRequestId.current = requestId;
        setLoading(true);
        fetcher(raw)
            .then(({ data, total }) => {
                setData(data);
                setTotal(total);
            })
            .catch(setError)
            .finally(() => {
                lastRequestId.current === requestId && setLoading(false);
            });
    };

    const mutate = (next: Partial<P> | ((prev: P) => P) = params, options: IMutateOptions = {}) => {
        const defaultOptions: IMutateOptions = {
            revalidate: true,
            clearData: true,
        };
        const nextOptions = merge(defaultOptions, options);

        const tmp = typeof next === 'function' ? next(params) : { ...merge({}, params, next) };
        setParams(tmp);

        if (nextOptions.revalidate) {
            if (nextOptions.clearData) {
                clearData();
            }
            performFetch(tmp);
        }
    };

    const clearData = () => {
        setData([]);
        setTotal(0);
        setError(undefined);
    };

    const clear = () => {
        clearData();
        setParams(initialParams);
        setLoading(false);
    };

    useEffect(() => {
        if (options.immediate) {
            performFetch();
        }
    }, []);

    return { loading, params: { ...params, total }, error, data, mutate, clear, clearData };
}
