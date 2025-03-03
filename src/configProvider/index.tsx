import React, { createContext } from 'react';

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
        copyCol: string;
        copyAll: string;
    };
}

export interface LocaleContextProps {
    locale: Locale;
}

export const LocaleContext = createContext<LocaleContextProps>({ locale: {} as Locale });

const ConfigProvider = ({
    locale,
    children,
}: {
    locale: LocaleContextProps;
    children: React.ReactNode;
}) => {
    return <LocaleContext.Provider value={{ ...locale }}>{children}</LocaleContext.Provider>;
};

export default ConfigProvider;
