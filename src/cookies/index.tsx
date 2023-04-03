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

    const onFieldsChange = (old: string, newCookies: string) => {
        if (watchFields) {
            const changedFields: Fields[] = [];
            for (let i = 0; i < watchFields.length; i++) {
                const key = watchFields[i];
                const originValue = utils.getCookieValue(old, key);
                const newValue = utils.getCookieValue(newCookies, key);
                if (originValue !== null && originValue !== newValue) {
                    changedFields.push({ key, value: newValue });
                }
            }
            if (onFieldsChanged) {
                onFieldsChanged(changedFields);
            }
        }
    };

    const compareValue = () => {
        const old = '' + currentCookiesRef.current;
        const newCookies = document.cookie;
        if (old !== newCookies) {
            if (onChanged) onChanged(old, newCookies);
            currentCookiesRef.current = newCookies;
            onFieldsChange(old, newCookies);
        }
    };

    return <React.Fragment>{children}</React.Fragment>;
};

export default Cookies;
