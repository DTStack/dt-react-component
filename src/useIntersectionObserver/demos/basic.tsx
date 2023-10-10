import React, { useRef } from 'react';

import useIntersectionObserver from '..';

const Basic = () => {
    const divRef = useRef<HTMLDivElement>(null);

    const handleObserverCb = ([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting) alert('hi, 我展示了');
    };

    useIntersectionObserver(handleObserverCb, null as unknown as Element);

    return (
        <div style={{ height: 300, overflow: 'scroll' }}>
            <div style={{ height: 330 }}>占位，往下滑动</div>
            <div ref={divRef}>展示了</div>
        </div>
    );
};

export default Basic;
