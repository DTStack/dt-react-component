import React, { useEffect } from 'react';

export interface ResizeProps {
    observerEle?: HTMLElement | null;
    children?: React.ReactNode;
    onResize?: () => void;
}

const Resize: React.FC<ResizeProps> = ({ observerEle, onResize, children }) => {
    useEffect(() => {
        if (typeof onResize !== 'function') return;
        if (!observerEle) {
            window.addEventListener('resize', onResize, false);
            return () => {
                window.removeEventListener('resize', onResize, false);
            };
        } else {
            const resizeObserver = new ResizeObserver(onResize);
            resizeObserver.observe(observerEle);
            return () => {
                resizeObserver.unobserve(observerEle);
            };
        }
    }, [onResize, observerEle]);

    return <>{children}</>;
};

export default Resize;
