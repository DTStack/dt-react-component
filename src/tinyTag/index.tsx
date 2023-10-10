import React from 'react';
import classNames from 'classnames';

import './style.scss';

interface ITinyTag {
    value?: string;
    className?: string;
}

export default function TinyTag({ value, className }: ITinyTag) {
    return <span className={classNames('dtc-tinyTag', className)}>{value}</span>;
}
