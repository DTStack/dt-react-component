import { RefObject, useEffect, useState } from 'react';

const useIntersectionObserver = (
    callback: IntersectionObserverCallback,
    target: RefObject<Element>,
    options: IntersectionObserverInit & { freezeOnceVisible?: boolean } = {}
) => {
    const { threshold = 0, root = null, rootMargin = '0%', freezeOnceVisible = false } = options;
    const [entry, setEntry] = useState<IntersectionObserverEntry>();
    const frozen = entry?.isIntersecting && freezeOnceVisible;

    const handleCallBack = (
        entries: IntersectionObserverEntry[],
        observer: IntersectionObserver
    ) => {
        setEntry(entries[0]);
        callback(entries, observer);
    };

    useEffect(() => {
        const node = target?.current; // DOM Ref
        const hasIOSupport = !!window.IntersectionObserver;

        if (frozen || !node) return;
        if (!hasIOSupport) {
            // 如果不支持 IntersectionObserver 执行一个默认行为
            const callbackEntry = {
                boundingClientRect: node?.getBoundingClientRect() ?? null,
                intersectionRatio: node ? 1 : 0,
                intersectionRect: node?.getBoundingClientRect() ?? null,
                isIntersecting: !!node,
                rootBounds: null,
                target: node,
                time: Date.now(),
            };
            handleCallBack([callbackEntry], null as unknown as IntersectionObserver);
        }

        const observer = new IntersectionObserver(handleCallBack, { threshold, root, rootMargin });

        observer.observe(node);
        return () => observer.disconnect();
    }, [target?.current, JSON.stringify(threshold), root, rootMargin, frozen]);
};

export default useIntersectionObserver;
