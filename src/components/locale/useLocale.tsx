import { createContext, useContext, useMemo } from 'react';

import defaultLocaleData from './zh-CN';

export interface Locale {
    locale: string;
    BlockHeader?: { expand: string; collapse: string };
    ChromeDownload?: { description: string; download: string };
    CopyIcon?: { copied: string; notSupport: string; copy: string };
    EditCell?: { complete: string; cancel: string; modify: string };
    EditInput?: { description: string };
    Fullscreen?: { exitFull: string; full: string };
    GlobalLoading?: {
        loading: string;
    };
    GoBack?: {
        back: string;
    };
    LoadError?: {
        please: string;
        get: string;
        refresh: string;
        title: string;
    };
    ModalWithForm?: {
        okText: string;
        cancelText: string;
    };
    MulSelectDropdown?: {
        open: string;
        cancelText: string;
        okText: string;
        selectAll: string;
    };
    MultiSearchInput?: {
        case: string;
        precise: string;
        front: string;
        tail: string;
    };
    MxGraph?: { newNode: string };
    NotFound?: {
        description: string;
    };
    ProgressLine?: {
        description: string;
    };
    RenderFormItem?: {
        description: string;
    };
    SearchModal?: {
        title: string;
        placeholder: string;
    };
    SpreadSheet?: {
        description: string;
        copy: string;
        copyAll: string;
    };
}

export interface LocaleContextProps {
    locale: Locale;
}

export const LocaleContext = createContext<LocaleContextProps>(undefined);

export type LocaleComponentName = keyof Locale;

const useLocale = <C extends LocaleComponentName = LocaleComponentName>(
    componentName: C
): NonNullable<Locale[C]> => {
    const fullLocale = useContext<LocaleContextProps | undefined>(LocaleContext);

    const getLocale = useMemo(() => {
        const locale = defaultLocaleData[componentName] ?? {};
        const localeFromContext = fullLocale?.[componentName as keyof LocaleContextProps] ?? {};
        return {
            ...locale,
            ...localeFromContext,
        } as NonNullable<Locale[C]>;
    }, [componentName, fullLocale]);

    return getLocale;
};

export default useLocale;
