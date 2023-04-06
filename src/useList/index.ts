import { merge } from 'lodash';
import { useEffect, useState } from 'react';

export type Fetcher<T, P> = (params: P) => Promise<{ data: T[]; total: number }>;

export interface IMutateOptions {
    revalidate?: boolean;
}

export default function useList<T extends Record<string, any>, P extends Record<string, any>>(
    fetcher: Fetcher<T, P>,
    initialParams: P
) {
    const [error, setError] = useState<Error | undefined>(undefined);
    const [data, setData] = useState<T[]>([]);
    const [total, setTotal] = useState(0);
    const [params, setParams] = useState<P>(initialParams);
    const [loading, setLoading] = useState(false);

    const performFetch = () => {
        setLoading(true);
        fetcher(params)
            .then(({ data, total }) => {
                setData(data);
                setTotal(total);
            })
            .catch(setError)
            .finally(() => {
                setLoading(false);
            });
    };

    const mutate = (next: Partial<P> = params, options: IMutateOptions = {}) => {
        setParams({ ...merge(params, next) });

        const defaultOptions: IMutateOptions = {
            revalidate: true,
        };

        const nextOptions = merge(defaultOptions, options);
        if (nextOptions.revalidate) {
            performFetch();
        }
    };

    useEffect(() => {
        performFetch();
    }, []);

    return { loading, params: { ...params, total }, error, data, mutate };
}
