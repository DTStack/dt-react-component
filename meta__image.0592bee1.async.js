"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[3998],{28779:function(r,e,n){n.r(e),n.d(e,{demos:function(){return a}});var t=n(75271),a={"image-demo-basic":{component:t.memo(t.lazy(function(){return Promise.all([n.e(9048),n.e(4180),n.e(8633)]).then(n.bind(n,85426))})),asset:{type:"BLOCK",id:"image-demo-basic",refAtomIds:["image"],dependencies:{"index.tsx":{type:"FILE",value:n(39747).Z},react:{type:"NPM",value:"18.3.1"},"...tsx":{type:"FILE",value:n(72824).Z},antd:{type:"NPM",value:"4.22.5"},"../useIntersectionObserver.ts":{type:"FILE",value:n(70073).Z}},entry:"index.tsx",title:"\u57FA\u7840\u4F7F\u7528"},context:void 0,renderOpts:void 0},"image-demo-lazy":{component:t.memo(t.lazy(function(){return Promise.all([n.e(9048),n.e(4180),n.e(8633)]).then(n.bind(n,81045))})),asset:{type:"BLOCK",id:"image-demo-lazy",refAtomIds:["image"],dependencies:{"index.tsx":{type:"FILE",value:n(61897).Z},react:{type:"NPM",value:"18.3.1"},"...tsx":{type:"FILE",value:n(72824).Z},antd:{type:"NPM",value:"4.22.5"},"../useIntersectionObserver.ts":{type:"FILE",value:n(70073).Z}},entry:"index.tsx",title:"\u56FE\u7247\u61D2\u52A0\u8F7D"},context:void 0,renderOpts:void 0}}},34577:function(r,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[{value:"\u5C55\u793A\u56FE\u7247",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:1,tocIndex:6},{value:"\u8BF4\u660E",paraId:1,tocIndex:6},{value:"\u7C7B\u578B",paraId:1,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:6},{value:"src",paraId:1,tocIndex:6},{value:"\u56FE\u7247\u8D44\u6E90",paraId:1,tocIndex:6},{value:"string",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"lazy",paraId:1,tocIndex:6},{value:"\u662F\u5426\u5F00\u542F\u56FE\u7247\u61D2\u52A0\u8F7D",paraId:1,tocIndex:6},{value:"boolean",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"className",paraId:1,tocIndex:6},{value:"\u56FE\u7247\u6837\u5F0F\u540D",paraId:1,tocIndex:6},{value:"string",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"style",paraId:1,tocIndex:6},{value:"\u56FE\u7247\u6837\u5F0F",paraId:1,tocIndex:6},{value:"React.CSSProperties",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"width",paraId:1,tocIndex:6},{value:"\u56FE\u7247\u5BBD\u5EA6",paraId:1,tocIndex:6},{value:"number",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"height",paraId:1,tocIndex:6},{value:"\u56FE\u7247\u9AD8\u5EA6",paraId:1,tocIndex:6},{value:"number",paraId:1,tocIndex:6},{value:"-",paraId:1,tocIndex:6},{value:"loader",paraId:1,tocIndex:6},{value:"\u56FE\u7247 loading \u65F6\u5C55\u793A\u5185\u5BB9",paraId:1,tocIndex:6},{value:"JSX.Element | null",paraId:1,tocIndex:6},{value:"<Spin />",paraId:1,tocIndex:6}]},39747:function(r,e){e.Z=`import React from 'react';

import Image from '..';

export default function Component() {
    return (
        <div style={{ height: 200 }}>
            <Image
                height={200}
                width={200}
                src="https://dtstack.github.io/dt-react-component/static/empty_overview.43b0eedf.png"
                style={{ borderColor: 'red' }}
            />
        </div>
    );
}
`},61897:function(r,e){e.Z=`import React from 'react';

import Image from '..';

export default function Component() {
    return (
        <div style={{ height: 200, overflow: 'scroll' }}>
            <div style={{ height: 300 }}>\u5360\u4F4D</div>
            <Image
                height={200}
                width={200}
                lazy
                src="https://dtstack.github.io/dt-react-component/static/empty_permission.35e2808b.png"
            />
        </div>
    );
}
`},72824:function(r,e){e.Z=`import React, { CSSProperties } from 'react';
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
`},70073:function(r,e){e.Z=`import { MutableRefObject, useEffect, useRef, useState } from 'react';

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
            // \u5982\u679C\u4E0D\u652F\u6301 IntersectionObserver \u6267\u884C\u4E00\u4E2A\u9ED8\u8BA4\u884C\u4E3A
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
`}}]);
