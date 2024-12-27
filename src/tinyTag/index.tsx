import React, { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';

import './style.scss';

type UseSvgRef = (element: SVGTextElement) => void;
type UseSvgWidthResult = [UseSvgRef, number, number];

interface ITinyTag extends React.HTMLAttributes<HTMLSpanElement> {
    value: string;
}

const useSvgWidth = (): UseSvgWidthResult => {
    const [element, ref] = useState<SVGTextElement | null>(null);
    const [svgWidth, setSvgWidth] = useState(0);
    const [rectWidth, setRectWidth] = useState(0);

    const getWidth = useCallback(() => {
        if (!element) return;
        const paddingWidth = 8;
        const textWidth = Math.round(element.getBoundingClientRect()?.width);
        const svgWidth = textWidth + paddingWidth;
        setSvgWidth(svgWidth);
        setRectWidth(Math.max(svgWidth - 1, 0));
    }, [element]);

    useEffect(() => {
        getWidth();
    }, [element]);

    return [ref, svgWidth, rectWidth];
};

export default function TinyTag({ value, className, style, ...restProps }: ITinyTag) {
    const [ref, svgWidth, rectWidth] = useSvgWidth();
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
                    <tspan x="4" y="11.1">
                        {value}
                    </tspan>
                </text>
            </svg>
        </span>
    );
}
