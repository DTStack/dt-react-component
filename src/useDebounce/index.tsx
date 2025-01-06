import { useCallback, useEffect, useRef } from 'react';
import type { DebounceSettings } from 'lodash-es';
import { debounce } from 'lodash-es';

const useDebounce = <T extends (...args: any) => any>(
    func: T,
    wait = 500,
    options?: DebounceSettings
) => {
    const funcRef = useRef(func);
    funcRef.current = func;

    const debouncedFunc = useCallback(
        debounce((...args) => funcRef.current(...args), wait, options),
        []
    );

    useEffect(() => () => debouncedFunc.cancel(), []);

    return debouncedFunc;
};

export default useDebounce;
