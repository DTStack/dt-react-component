import React, { useEffect, useRef } from 'react';
import utils from '../utils';

export interface Fields {
    key?: string;
    value?: string | null;
}
export interface CookiesProps {
    watchFields?: string[];
    intervalTime?: number;
    onChanged?: (old: string, newCookie: string) => void;
    onFieldsChanged?: (fields: Fields[]) => void;
    children?: React.ReactNode;
}
/**
 * Cookies 组件
 * 用法：
 * <Cookies onChanged={callback}></Cookies>
 */

const Cookies: React.FC<CookiesProps> = (props) => {
    const { watchFields, intervalTime = 200, onChanged, onFieldsChanged, children } = props;
    const timerRef = useRef<number>();
    const currentCookiesRef = useRef<string>(document.cookie);

    useEffect(() => {
        timerRef.current = window.setInterval(() => {
            compareValue();
        }, intervalTime);
        return () => {
            window.clearInterval(timerRef.current);
        };
    }, []);

    const onFieldsChange = (oldCookies: string, newCookies: string) => {
        if (watchFields?.length && onFieldsChanged) {
            const changedFields: Fields[] = [];
            for (let i = 0; i < watchFields.length; i++) {
                const key = watchFields[i];
                const originValue = utils.getCookie(key, oldCookies);
                const newValue = utils.getCookie(key, newCookies);
                if (originValue !== null && originValue !== newValue) {
                    changedFields.push({ key, value: newValue });
                }
            }
            onFieldsChanged(changedFields);
        }
    };

    const compareValue = () => {
        const oldCookies = currentCookiesRef.current;
        const newCookies = document.cookie;
        if (oldCookies !== newCookies) {
            onChanged?.(oldCookies, newCookies);
            onFieldsChange(oldCookies, newCookies);
            currentCookiesRef.current = newCookies;
        }
    };

    return <React.Fragment>{children}</React.Fragment>;
};

export default Cookies;
