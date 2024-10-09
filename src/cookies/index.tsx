import { useEffect, useRef } from 'react';
import { Cookie } from '@dtinsight/dt-utils';

export interface Fields {
    key: string;
    value: string | null;
}
export interface ICookieOptions {
    timeout?: number; // 轮训间隔
    immediately?: boolean; // 当Cookie字段为新增时是否会触发
}

const defaultOptions: ICookieOptions = {
    timeout: 200,
    immediately: false,
};

type CompareCookieHandler = (params: {
    prevCookies: string;
    nextCookies: string;
    changedFields?: Fields[];
}) => void;

const useCookieListener = (
    handler: CompareCookieHandler,
    watchFields: string[],
    options: ICookieOptions = defaultOptions
) => {
    const { timeout, immediately } = options;
    const isWatchAll = !watchFields.length;
    const timerRef = useRef<number>();
    const currentCookiesRef = useRef<string>(document.cookie);
    const handlerRef = useRef<CompareCookieHandler>();
    handlerRef.current = handler;

    useEffect(() => {
        timerRef.current = window.setInterval(() => {
            compareValue();
        }, timeout);
        return () => {
            window.clearInterval(timerRef.current);
        };
    }, []);

    const handleFieldsChange = (prevCookies: string, nextCookies: string) => {
        const changedFields: Fields[] = [];
        for (let i = 0; i < watchFields.length; i++) {
            const key = watchFields[i];
            const originValue = Cookie.getCookie(key, prevCookies);
            const newValue = Cookie.getCookie(key, nextCookies);
            if (
                (originValue !== null || (originValue === null && immediately)) &&
                originValue !== newValue
            ) {
                changedFields.push({ key, value: newValue });
            }
        }
        changedFields.length && handlerRef.current?.({ changedFields, prevCookies, nextCookies });
    };

    const compareValue = () => {
        const prevCookies = currentCookiesRef.current;
        const nextCookies = document.cookie;
        if (prevCookies !== nextCookies) {
            isWatchAll
                ? handlerRef.current?.({ prevCookies, nextCookies })
                : handleFieldsChange(prevCookies, nextCookies);
            currentCookiesRef.current = nextCookies;
        }
    };
};

export default useCookieListener;
