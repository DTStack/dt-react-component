import { useEffect, useRef } from 'react';
import type { DebounceSettings } from 'lodash';
import { debounce } from 'lodash';

const useDebounce = <T extends (...args: any) => any>(
    func: T,
    wait = 500,
    options?: DebounceSettings
) => {
    const debouncedFuncRef = useRef(debounce(func, wait, options));
    const debounceFnnc = debouncedFuncRef.current;
    useEffect(() => () => debounceFnnc.cancel(), []);

    return debounceFnnc;
};

export default useDebounce;
