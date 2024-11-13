import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import './style.scss';

interface ITinyTag extends React.HTMLAttributes<HTMLSpanElement> {
    value: string;
}

export default function TinyTag({ value, className, ...restProps }: ITinyTag) {
    const domRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    const getTextWidth = () => {
        const text = domRef?.current?.getElementsByTagName('text')?.[0];
        const paddingWidth = 8;
        if (!text) return;
        const textWidth = Math.round(text.getBoundingClientRect()?.width);
        const widthSvg = textWidth + paddingWidth;
        setWidth(widthSvg);
    };
    useEffect(() => {
        getTextWidth();
    }, []);
    return (
        <span ref={domRef} className={classNames('dtc-tinyTag', className)} {...restProps}>
            <svg
                width={width}
                height="15"
                viewBox={`0 0 ${width} 15`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    x="0.5"
                    y="0.5"
                    width={width - 1}
                    height="14"
                    rx="1.5"
                    stroke="currentColor"
                    strokeLinejoin="bevel"
                />
                <text fill="currentColor" xmlSpace="preserve" fontSize="10" letterSpacing="0px">
                    <tspan x="4" y="11.1">
                        {value}
                    </tspan>
                </text>
            </svg>
        </span>
    );
}
