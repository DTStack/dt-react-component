import React from 'react';

import { LocaleContext, LocaleContextProps } from '../locale/useLocale';

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
