import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import '@testing-library/jest-dom/extend-expect';

import enUS from '../en-US';
import useLocale, { Locale, LocaleComponentName, LocaleContext } from '../useLocale';
import zhCN from '../zh-CN';

describe('useLocale', () => {
    it('should return default locale when no provider is used', () => {
        const { result } = renderHook(() => useLocale('BlockHeader'));

        expect(result.current).toEqual({
            expand: '展开',
            collapse: '收起',
        });
    });

    it('should return locale from context when provider is used', () => {
        const wrapper = ({ children }: { children: React.ReactNode; [key: string]: any }) => (
            <LocaleContext.Provider value={{ locale: enUS }}>{children}</LocaleContext.Provider>
        );

        const { result } = renderHook(() => useLocale('BlockHeader'), { wrapper });

        expect(result.current).toEqual({
            expand: 'Expand',
            collapse: 'Collapse',
        });
    });

    it('should merge default locale with context locale', () => {
        const customLocale: Locale = {
            ...zhCN,
            BlockHeader: {
                expand: '自定义展开',
                collapse: '自定义收起',
            },
        };

        const wrapper = ({ children }: { children: React.ReactNode; [key: string]: any }) => (
            <LocaleContext.Provider value={{ locale: customLocale }}>
                {children}
            </LocaleContext.Provider>
        );

        const { result } = renderHook(() => useLocale('BlockHeader'), { wrapper });

        expect(result.current).toEqual({
            expand: '自定义展开',
            collapse: '自定义收起',
        });
    });

    it('should handle missing component in locale', () => {
        const incompleteLocale = {
            locale: 'incomplete',
        } as Locale;

        const wrapper = ({ children }: { children: React.ReactNode; [key: string]: any }) => (
            <LocaleContext.Provider value={{ locale: incompleteLocale }}>
                {children}
            </LocaleContext.Provider>
        );

        const { result } = renderHook(() => useLocale('BlockHeader'), { wrapper });

        expect(result.current).toEqual({
            expand: '展开',
            collapse: '收起',
        });
    });

    it('should handle component name changes', () => {
        const wrapper = ({ children }: { children: React.ReactNode; [key: string]: any }) => (
            <LocaleContext.Provider value={{ locale: enUS }}>{children}</LocaleContext.Provider>
        );

        const { result, rerender } = renderHook(
            (props) => useLocale(props.componentName as LocaleComponentName),
            {
                wrapper,
                initialProps: { componentName: 'BlockHeader', children: <div /> },
            }
        );

        expect(result.current).toEqual({
            expand: 'Expand',
            collapse: 'Collapse',
        });

        rerender({ componentName: 'Copy', children: <div /> });

        expect(result.current).toEqual({
            copied: 'Copied',
            copy: 'Copy',
        });
    });

    it('should memoize the result', () => {
        const wrapper = ({ children }: { children: React.ReactNode; [key: string]: any }) => (
            <LocaleContext.Provider value={{ locale: enUS }}>{children}</LocaleContext.Provider>
        );

        const { result, rerender } = renderHook(() => useLocale('BlockHeader'), { wrapper });
        const firstResult = JSON.stringify(result.current);

        rerender();

        expect(JSON.stringify(result.current)).toBe(firstResult);
    });
});
