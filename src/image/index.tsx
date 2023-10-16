import React, { CSSProperties, useRef } from 'react';
import { Spin } from 'antd';

import useIntersectionObserver from '../useIntersectionObserver';

interface IProps {
    src: string;
    lazy?: boolean;
    className?: string;
    style?: CSSProperties;
    width?: number;
    height?: number;
    loader?: JSX.Element | null;
}

function imgPromise(src: string) {
    return new Promise((resolve, reject) => {
        const i = new Image();
        i.onload = () => resolve(true);
        i.onerror = reject;
        i.src = src;
    });
}

function useImage({ src }: { src: string }): {
    src: string | undefined;
    isLoading: boolean;
} {
    const [loading, setLoading] = React.useState(true);
    const [value, setValue] = React.useState<string | undefined>(undefined);

    React.useEffect(() => {
        imgPromise(src)
            .then(() => {
                setLoading(false);
                setValue(src);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [src]);

    return { isLoading: loading, src: value };
}

const ImageComponent = (props: IProps) => {
    const { lazy } = props;
    if (lazy) return <LazyImage {...props} />;
    return <NormalImage {...props} />;
};

const LazyImage = (props: IProps) => {
    const { src, ...rest } = props;
    const imgRef = useRef<HTMLImageElement>(null);
    useIntersectionObserver(([entry]) => {
        const { target, isIntersecting } = entry;
        if (isIntersecting) {
            const _target = target as HTMLImageElement;
            _target.src = _target.dataset['src'] ?? '';
            _target.onload = () => {
                _target.style.opacity = '1';
            };
        }
    }, imgRef);
    return <img ref={imgRef} {...rest} data-src={src} />;
};

const NormalImage = (props: IProps) => {
    const { src: originSrc, loader = <Spin spinning />, ...rest } = props;
    const { src, isLoading } = useImage({ src: originSrc });
    if (src) return <img {...rest} src={src} />;
    if (isLoading) return loader;
};

export default ImageComponent;
