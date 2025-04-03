import React from 'react';

import { Locale, LocaleContext } from '../locale/useLocale';

const ConfigProvider = ({ locale, children }: { locale: Locale; children: React.ReactNode }) => {
    return <LocaleContext.Provider value={{ locale }}>{children}</LocaleContext.Provider>;
};

export default ConfigProvider;
