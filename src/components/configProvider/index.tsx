import React, { createContext } from 'react';

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
        extract: string;
        head: string;
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

const ConfigProvider = ({ locale, children }) => {
    return <LocaleContext.Provider value={{ ...locale }}>{children}</LocaleContext.Provider>;
};

export default ConfigProvider;
