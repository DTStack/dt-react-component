import { createContext, useContext, useMemo } from 'react';

import defaultLocaleData from './zh-CN';

export interface Locale {
    locale: string;
    BlockHeader: { expand: string; collapse: string };
    Copy: { copied: string; copy: string };
    Dropdown: { selectAll: string; resetText: string; okText: string };
    Fullscreen: { exitFull: string; full: string };
    GlobalLoading: { loading: string };
    Input: {
        case: string;
        precise: string;
        front: string;
        tail: string;
    };
    LoadError: {
        please: string;
        get: string;
        refresh: string;
        title: string;
    };
    Modal: {
        okText: string;
        cancelText: string;
    };
    MxGraph: { newNode: string };
    NotFound: {
        description: string;
    };
    SpreadSheet: {
        description: string;
        copy: string;
        copyAll: string;
    };
}

export interface LocaleContextProps {
    locale: Locale;
}

export const LocaleContext = createContext<LocaleContextProps>({ locale: {} as Locale });

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
