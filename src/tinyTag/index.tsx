import React from 'react';
import classNames from 'classnames';

import './style.scss';

interface ITinyTag extends React.HTMLAttributes<HTMLSpanElement> {
    value?: string;
    color?: string;
}

export default function TinyTag({ color, value, className, ...restProps }: ITinyTag) {
    return (
        <span
            className={classNames('dtc-tinyTag', className)}
            style={{ borderColor: color, color }}
            {...restProps}
        >
            {value}
        </span>
    );
}
