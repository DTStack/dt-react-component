import React, { useEffect } from 'react';

import { Locale, LocaleContext } from '../locale/useLocale';
import { changeConfirmLocale } from '../modal/locale';

const ConfigProvider = ({ locale, children }: { locale: Locale; children: React.ReactNode }) => {
    useEffect(() => {
        const clearLocale = changeConfirmLocale(locale?.Modal);
        return clearLocale;
    }, [locale]);

    return <LocaleContext.Provider value={{ locale }}>{children}</LocaleContext.Provider>;
};

export default ConfigProvider;
