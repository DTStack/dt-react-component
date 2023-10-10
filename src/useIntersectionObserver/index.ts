import { useEffect } from 'react';

const useIntersectionObserver = (
    callback: IntersectionObserverCallback,
    target: Element,
    options: IntersectionObserverInit = {}
) => {
    useEffect(() => {
        const observer = new IntersectionObserver(callback, options);
        target && observer.observe(target);
        return () => {
            observer.disconnect();
        };
    }, [target, options, callback]);
};

export default useIntersectionObserver;
