import { useMemo } from 'react';

export type MergeOption<T extends Record<string, any>> = boolean | T;

export type ReturnMergeOption<T extends Record<string, any>> = {
    disabled: boolean;
    options: T;
};

export default function useMergeOption<T extends Record<string, any>>(
    opt: MergeOption<T>,
    defaultOpt?: T
): ReturnMergeOption<T> {
    return useMemo(() => {
        if (typeof opt === 'object' && !!opt) {
            return {
                disabled: false,
                options: { ...defaultOpt, ...opt },
            };
        }
        return {
            disabled: !opt,
            options: <T>{ ...defaultOpt },
        };
    }, [opt]);
}
