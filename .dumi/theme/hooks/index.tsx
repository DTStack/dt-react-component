import { useEffect, useMemo, useState } from 'react';

const RESPONSIVE_MOBILE = 768;

export function useMobile() {
    const [isMobile] = useState<boolean>(window.innerWidth < RESPONSIVE_MOBILE);
    return isMobile;
}

export function useScrollWithShadow<E extends HTMLElement>() {
    const [element, ref] = useState<E | null>(null);

    const [scrollTop, setScrollTop] = useState(0);
    const [scrollHeight, setScrollHeight] = useState(0);
    const [clientHeight, setClientHeight] = useState(0);

    useEffect(() => {
        if (!element) return;

        function scrollHandler(event: Event) {
            const ele = event.target as E;
            setScrollTop(ele.scrollTop);
            setScrollHeight(ele.scrollHeight);
            setClientHeight(ele.clientHeight);
        }

        element.addEventListener('scroll', scrollHandler);

        return () => {
            element.removeEventListener('scroll', scrollHandler);
        };
    }, [element]);

    const shadow = useMemo(() => {
        const isBottom = clientHeight === scrollHeight - scrollTop;
        const isTop = scrollTop === 0;
        const isBetween = scrollTop > 0 && clientHeight < scrollHeight - scrollTop;
        return {
            top: isBottom || isBetween,
            bottom: isTop || isBetween,
        };
    }, [scrollTop, scrollHeight, clientHeight]);

    return [ref, shadow] as const;
}
