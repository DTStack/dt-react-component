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

    useIntersectionObserver(handleObserverCb, imgRef, {});

    return (
        <div style={{ height: 300, overflow: 'scroll' }}>
            <div style={{ height: 330 }}>占位，往下滑动</div>
            <img
                data-src="https://dtstack.github.io/dt-react-component/static/empty_overview.43b0eedf.png"
                ref={imgRef}
            />
        </div>
    );
};

export default Basic;
