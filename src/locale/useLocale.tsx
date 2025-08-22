import { createContext, useContext, useMemo } from 'react';

import defaultLocaleData from './zh-CN';

export interface Locale {
    locale: string;
    BlockHeader: { expand: string; collapse: string };
    Catalogue: { searchPlaceholder: string; inputPlaceholder: string };
    Chat: {
        stoped: string;
        stop: string;
        regenerate: string;
        conversationEmpty: string;
        createConversation: string;
        rename: string;
        delete: string;
        renameError: string;
        today: string;
        yesterday: string;
        recent7Days: string;
        recent15Days: string;
        recent30Days: string;
        other: string;
    };
    Copy: { copied: string; copy: string };
    Dropdown: { selectAll: string; resetText: string; okText: string };
    ErrorBoundary: {
        please: string;
        get: string;
        refresh: string;
        title: string;
    };
    FilterRules: {
        message: string;
    };
    Fullscreen: { exitFull: string; full: string };
    GlobalLoading: { loading: string };
    Input: {
        case: string;
        precise: string;
        front: string;
        tail: string;
    };
    NotFound: {
        description: string;
    };
    SpreadSheet: {
        description: string;
        copy: string;
        copyCol: string;
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
        const localeFromContext = fullLocale?.locale[componentName] ?? {};

        return Object.assign({}, locale, localeFromContext) as NonNullable<Locale[C]>;
    }, [componentName, fullLocale]);

    return getLocale;
};

export default useLocale;
