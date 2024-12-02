import { MutableRefObject, useEffect, useRef, useState } from 'react';

const useIntersectionObserver = <T extends Element>(
    callback: IntersectionObserverCallback,
    options: IntersectionObserverInit & { freezeOnceVisible?: boolean } = {}
) => {
    const ref = useRef<T | null>(null);

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
        const node = ref.current;
        const hasIOSupport = !!window.IntersectionObserver;

        if (frozen || !node) return;
        if (!hasIOSupport) {
            // 如果不支持 IntersectionObserver 执行一个默认行为
            const callbackEntry = {
                boundingClientRect: node.getBoundingClientRect() ?? null,
                intersectionRatio: 1,
                intersectionRect: node.getBoundingClientRect() ?? null,
                isIntersecting: true,
                rootBounds: null,
                target: node,
                time: Date.now(),
            };
            handleCallBack([callbackEntry], null as unknown as IntersectionObserver);
        }

        const observer = new IntersectionObserver(handleCallBack, { threshold, root, rootMargin });

        observer.observe(node);
        return () => observer.disconnect();
    }, [JSON.stringify(threshold), root, rootMargin, frozen]);

    return ref as MutableRefObject<T | null>;
};

export default useIntersectionObserver;
