import { useEffect, useRef } from 'react';
import utils from '../utils';

export interface Fields {
    key: string;
    value: string | null;
}
export interface ICookieOptions {
    intervalTime?: number; // 轮训间隔
    immediately?: boolean; // 当Cookie字段为新增时是否会触发
}

const defaultOptions: ICookieOptions = {
    intervalTime: 200,
    immediately: false,
};

type CompareCookieHandler = (params: {
    oldCookies: string;
    newCookies: string;
    changedFields?: Fields[];
}) => void;

const useCookieListener = (
    handler: CompareCookieHandler,
    watchFields: string[],
    options: ICookieOptions = defaultOptions
) => {
    const { intervalTime, immediately } = options;
    const timerRef = useRef<number>();
    const currentCookiesRef = useRef<string>(document.cookie);
    const isWatchAll = !watchFields.length;

    useEffect(() => {
        timerRef.current = window.setInterval(() => {
            compareValue();
        }, intervalTime);
        return () => {
            window.clearInterval(timerRef.current);
        };
    }, []);

    const onFieldsChange = (oldCookies: string, newCookies: string) => {
        const changedFields: Fields[] = [];
        for (let i = 0; i < watchFields.length; i++) {
            const key = watchFields[i];
            const originValue = utils.getCookie(key, oldCookies);
            const newValue = utils.getCookie(key, newCookies);
            if ((originValue !== null || immediately) && originValue !== newValue) {
                changedFields.push({ key, value: newValue });
            }
        }
        changedFields.length && handler({ changedFields, oldCookies, newCookies });
    };

    const compareValue = () => {
        const oldCookies = currentCookiesRef.current;
        const newCookies = document.cookie;
        if (oldCookies !== newCookies) {
            isWatchAll
                ? handler({ oldCookies, newCookies })
                : onFieldsChange(oldCookies, newCookies);
            currentCookiesRef.current = newCookies;
        }
    };
};

export default useCookieListener;
