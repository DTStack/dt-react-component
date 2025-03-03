import { useContext, useMemo } from 'react';

import type { Locale, LocaleContextProps } from '../configProvider';
import { LocaleContext } from '../configProvider';
import defaultLocaleData from './zh-CN';

export type LocaleComponentName = keyof Locale;

const useLocale = <C extends LocaleComponentName = LocaleComponentName>(
    componentName: C
): NonNullable<Locale[C]> => {
    const fullLocale = useContext<LocaleContextProps>(LocaleContext);

    const getLocale = useMemo(() => {
        const locale = defaultLocaleData[componentName] ?? {};
        const localeFromContext = fullLocale?.[componentName as keyof LocaleContextProps] ?? {};
        return {
            ...(locale as unknown as object),
            ...(localeFromContext as unknown as object),
        } as NonNullable<Locale[C]>;
    }, [componentName, fullLocale]);

    return getLocale;
};

export default useLocale;
