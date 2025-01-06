import React from 'react';
import { LocaleContext } from '../locale/useLocale';

const ConfigProvider = ({ locale, children }) => {
    return <LocaleContext.Provider value={{ ...locale }}>{children}</LocaleContext.Provider>;
};

export default ConfigProvider;
