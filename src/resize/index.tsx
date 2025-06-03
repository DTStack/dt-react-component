import React, { ReactNode, useEffect, useRef } from 'react';

export interface ResizeProps {
    observerEle?: HTMLElement | null;
    children?: ReactNode;
    onResize?: () => void;
}

const Resize: React.FC<ResizeProps> = ({ observerEle, onResize, children }) => {
    const resizeEventRef = useRef<ResizeProps['onResize']>(onResize);
    resizeEventRef.current = onResize;

    useEffect(() => {
        const onResizeProxy = () => {
            if (typeof resizeEventRef.current === 'function') {
                resizeEventRef.current();
            }
        };
        if (!observerEle) {
            window.addEventListener('resize', onResizeProxy, false);
            return () => {
                window.removeEventListener('resize', onResizeProxy, false);
            };
        } else {
            const resizeObserver = new ResizeObserver(onResizeProxy);
            resizeObserver.observe(observerEle);
            return () => {
                resizeObserver.unobserve(observerEle);
            };
        }
    }, [observerEle]);

    return <>{children}</>;
};

export default Resize;
