import React, { useRef } from 'react';

import useIntersectionObserver from '..';

const Basic = () => {
    const imgRef = useRef<HTMLImageElement>(null);

    const handleObserverCb = ([entry]: IntersectionObserverEntry[]) => {
        const { target, isIntersecting } = entry;
        if (isIntersecting) {
            const _target = target as HTMLImageElement;
            _target.src = _target.dataset['src'] ?? '';
            _target.onload = () => {
                _target.style.opacity = '1';
            };
        }
    };

    useIntersectionObserver(handleObserverCb, imgRef.current as Element);

    return (
        <div style={{ height: 300, overflow: 'scroll' }}>
            <div style={{ height: 330 }}>占位</div>
            <img data-src="./empty_chart.png" ref={imgRef} />
        </div>
    );
};

export default Basic;
