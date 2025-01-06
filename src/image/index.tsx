import React, { CSSProperties } from 'react';
import { Spin } from 'antd';

import useIntersectionObserver from '../useIntersectionObserver';

interface IProps {
    src: string;
    lazy?: boolean;
    alt?: string;
    className?: string;
    style?: CSSProperties;
    width?: number;
    height?: number;
    loader?: JSX.Element | null;
}

function loadImage(src: string) {
    return new Promise((resolve, reject) => {
        const i = new Image();
        i.onload = () => resolve(true);
        i.onerror = reject;
        i.src = src;
    });
}

export function useImage({ src }: { src: string }): {
    src: string | undefined;
    isLoading: boolean;
} {
    const [loading, setLoading] = React.useState(true);
    const [value, setValue] = React.useState<string | undefined>(undefined);

    React.useEffect(() => {
        loadImage(src)
            .then(() => {
                setLoading(false);
                setValue(src);
            })
            .finally(() => {
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
    const { src, className, style, ...rest } = props;
    const imgRef = useIntersectionObserver<HTMLImageElement>(([entry]) => {
        const { target, isIntersecting } = entry;
        if (isIntersecting) {
            const _target = target as HTMLImageElement;
            _target.src = _target.dataset['src'] ?? '';
            _target.onload = () => {
                _target.style.opacity = '1';
            };
        }
    });
    return <img className={className} style={style} ref={imgRef} {...rest} data-src={src} />;
};

const NormalImage = (props: IProps) => {
    const { src: originSrc, className, style, loader = <Spin spinning />, ...rest } = props;
    const { src, isLoading } = useImage({ src: originSrc });
    if (src) return <img {...rest} className={className} style={style} src={src} />;
    if (isLoading) return loader;
    return null;
};

export default ImageComponent;
