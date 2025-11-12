import React, { useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import './style.scss';

type UseSvgRef = (element: SVGTextElement) => void;
type UseSvgWidthResult = [UseSvgRef, number, number, number];

interface ITinyTag extends React.HTMLAttributes<HTMLSpanElement> {
    value: string;
    /** 自定义图标 */
    icon?: React.ReactNode;
}

const useSvgWidth = (hasIcon: boolean): UseSvgWidthResult => {
    const [element, ref] = useState<SVGTextElement | null>(null);
    const [svgWidth, setSvgWidth] = useState(0);
    const [rectWidth, setRectWidth] = useState(0);
    const [textX, setTextX] = useState(4);

    const getWidth = useCallback(() => {
        if (!element) return;
        const paddingWidth = 8;
        const iconWidth = hasIcon ? 14 : 0;
        const textWidth = Math.round(element.getBoundingClientRect()?.width);
        const svgWidth = textWidth + paddingWidth + iconWidth;
        setSvgWidth(svgWidth);
        setRectWidth(Math.max(svgWidth - 1, 0));
        setTextX(hasIcon ? 16 : 4);
    }, [element, hasIcon]);

    useEffect(() => {
        getWidth();
    }, [element, hasIcon]);

    return [ref, svgWidth, rectWidth, textX];
};

export default function TinyTag({ value, icon, className, style, ...restProps }: ITinyTag) {
    const [ref, svgWidth, rectWidth, textX] = useSvgWidth(!!icon);
    const iconRef = useRef<HTMLSpanElement>(null);

    return (
        <span className={classNames('dtc-tinyTag', className)} style={style} {...restProps}>
            <svg
                width={svgWidth}
                height="15"
                viewBox={`0 0 ${svgWidth} 15`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    x="0.5"
                    y="0.5"
                    width={rectWidth}
                    height="14"
                    rx="1.5"
                    stroke="currentColor"
                    strokeLinejoin="bevel"
                />
                <text
                    ref={ref}
                    fill="currentColor"
                    xmlSpace="preserve"
                    fontSize="10"
                    letterSpacing="0px"
                >
                    <tspan x={textX} y="11.1">
                        {value}
                    </tspan>
                </text>
            </svg>
            {icon && (
                <span ref={iconRef} className="dtc-tinyTag__icon">
                    {icon}
                </span>
            )}
        </span>
    );
}
