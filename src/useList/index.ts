import { useEffect, useMemo, useState } from 'react';
import { merge } from 'lodash';

export type Fetcher<T, P> = (params: P) => Promise<{ data: T[]; total: number }>;

export interface IMutateOptions {
    /**
     * 是否数据重新获取
     */
    revalidate?: boolean;
}

export interface IUseListOptions {
    /**
     * 是否立即执行 fetch 在初始化的时候
     */
    immediate?: boolean;
}

export default function useList<T extends Record<string, any>, P extends Record<string, any>>(
    fetcher: Fetcher<T, P>,
    initialParams: P,
    rawOptions: IUseListOptions = { immediate: true }
) {
    const [error, setError] = useState<Error | undefined>(undefined);
    const [data, setData] = useState<T[]>([]);
    const [total, setTotal] = useState(0);
    const [params, setParams] = useState<P>(initialParams);
    const [loading, setLoading] = useState(false);

    const options = useMemo(() => merge({ immediate: true }, rawOptions), [rawOptions]);

    const performFetch = (raw = params) => {
        setLoading(true);
        fetcher(raw)
            .then(({ data, total }) => {
                setData(data);
                setTotal(total);
            })
            .catch(setError)
            .finally(() => {
                setLoading(false);
            });
    };

    const mutate = (next: Partial<P> | ((prev: P) => P) = params, options: IMutateOptions = {}) => {
        const defaultOptions: IMutateOptions = {
            revalidate: true,
        };
        const nextOptions = merge(defaultOptions, options);

        const tmp = typeof next === 'function' ? next(params) : { ...merge({}, params, next) };
        setParams(tmp);

        if (nextOptions.revalidate) {
            performFetch(tmp);
        }
    };

    const clear = () => {
        setData([]);
        setTotal(0);
        setParams(initialParams);
        setLoading(false);
        setError(undefined);
    };

    useEffect(() => {
        if (options.immediate) {
            performFetch();
        }
    }, []);

    return { loading, params: { ...params, total }, error, data, mutate, clear };
}
