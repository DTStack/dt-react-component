import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import enUS from '../en-US';
import { LocaleContext } from '../useLocale';
import zhCN from '../zh-CN';

describe('LocaleContext', () => {
    it('should provide locale context to children', () => {
        const TestComponent = () => {
            const { locale } = React.useContext(LocaleContext);
            return <div data-testid="locale-value">{locale.locale}</div>;
        };

        const { getByTestId } = render(
            <LocaleContext.Provider value={{ locale: zhCN }}>
                <TestComponent />
            </LocaleContext.Provider>
        );

        expect(getByTestId('locale-value').textContent).toBe('zh-CN');
    });

    it('should update context when locale changes', () => {
        const TestComponent = () => {
            const { locale } = React.useContext(LocaleContext);
            return <div data-testid="locale-value">{locale.locale}</div>;
        };

        const { getByTestId, rerender } = render(
            <LocaleContext.Provider value={{ locale: zhCN }}>
                <TestComponent />
            </LocaleContext.Provider>
        );

        expect(getByTestId('locale-value').textContent).toBe('zh-CN');

        // 重新渲染，使用英文语言包
        rerender(
            <LocaleContext.Provider value={{ locale: enUS }}>
                <TestComponent />
            </LocaleContext.Provider>
        );

        expect(getByTestId('locale-value').textContent).toBe('en-US');
    });

    it('should provide nested locale context correctly', () => {
        const InnerTestComponent = () => {
            const { locale } = React.useContext(LocaleContext);
            return <div data-testid="inner-locale-value">{locale.locale}</div>;
        };

        const OuterTestComponent = () => {
            const { locale } = React.useContext(LocaleContext);
            return (
                <div>
                    <div data-testid="outer-locale-value">{locale.locale}</div>
                    <LocaleContext.Provider value={{ locale: enUS }}>
                        <InnerTestComponent />
                    </LocaleContext.Provider>
                </div>
            );
        };

        const { getByTestId } = render(
            <LocaleContext.Provider value={{ locale: zhCN }}>
                <OuterTestComponent />
            </LocaleContext.Provider>
        );

        expect(getByTestId('outer-locale-value').textContent).toBe('zh-CN');
        expect(getByTestId('inner-locale-value').textContent).toBe('en-US');
    });

    it('should handle empty locale object', () => {
        // 创建一个空的语言包
        const emptyLocale = {} as any;

        const TestComponent = () => {
            const { locale } = React.useContext(LocaleContext);
            return <div data-testid="locale-value">{locale?.locale || 'undefined'}</div>;
        };

        const { getByTestId } = render(
            <LocaleContext.Provider value={{ locale: emptyLocale }}>
                <TestComponent />
            </LocaleContext.Provider>
        );

        expect(getByTestId('locale-value').textContent).toBe('undefined');
    });
});
