import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import './style.scss';

interface ITinyTag extends React.HTMLAttributes<HTMLSpanElement> {
    value?: string;
    color?: string;
}

const DEFAULT_COLOR = '#1D78FF';

export default function TinyTag({
    color = DEFAULT_COLOR,
    value,
    className,
    ...restProps
}: ITinyTag) {
    const domRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    const getTextWidth = () => {
        const text = domRef?.current?.getElementsByTagName('text')?.[0];
        const paddingWidth = 9;
        if (!text) return;
        const widthSvg = text.getBoundingClientRect()?.width + paddingWidth;
        setWidth(widthSvg);
    };
    useEffect(() => {
        getTextWidth();
    }, []);
    return (
        <span ref={domRef} className={classNames('dtc-tinyTag', className)} {...restProps}>
            <svg
                height="16"
                viewBox={`0 0 ${width} 16`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    x="0.5"
                    y="1"
                    width={width - 1}
                    height="14"
                    rx="1.5"
                    stroke={color}
                    strokeLinejoin="bevel"
                />
                <text
                    fill={color}
                    xmlSpace="preserve"
                    fontFamily="PingFang SC"
                    fontSize="10"
                    letterSpacing="0px"
                >
                    <tspan x="4" y="11.6">
                        {value}
                    </tspan>
                </text>
            </svg>
        </span>
    );
}
