import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import enUS from '../../locale/en-US';
import { LocaleContext } from '../../locale/useLocale';
import zhCN from '../../locale/zh-CN';
import ConfigProvider from '..';

describe('ConfigProvider', () => {
    it('renders children correctly', () => {
        const { getByText } = render(
            <ConfigProvider locale={zhCN}>
                <div>Test Content</div>
            </ConfigProvider>
        );
        expect(getByText('Test Content')).toBeInTheDocument();
    });

    it('provides locale context correctly', () => {
        const TestComponent = () => {
            const { locale } = React.useContext(LocaleContext);
            return <div data-testid="locale-value">{locale.locale}</div>;
        };

        const { getByTestId } = render(
            <ConfigProvider locale={zhCN}>
                <TestComponent />
            </ConfigProvider>
        );

        expect(getByTestId('locale-value').textContent).toBe(zhCN.locale);
    });

    it('updates context when locale changes', () => {
        const TestComponent = () => {
            const { locale } = React.useContext(LocaleContext);
            return <div data-testid="locale-value">{locale.locale}</div>;
        };

        const { getByTestId, rerender } = render(
            <ConfigProvider locale={zhCN}>
                <TestComponent />
            </ConfigProvider>
        );

        expect(getByTestId('locale-value').textContent).toBe(zhCN.locale);

        // 重新渲染，使用英文语言包
        rerender(
            <ConfigProvider locale={enUS}>
                <TestComponent />
            </ConfigProvider>
        );

        expect(getByTestId('locale-value').textContent).toBe(enUS.locale);
    });
});
