import React from 'react'
import classNames from 'classnames'

export type CircleType = 'running'| 'finished'| 'stopped'| 'frozen'| 'fail'| 'submitting'| 'restarting'| 'waitSubmit'

export interface CircleProps {
    type?: CircleType;
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
    children?: React.ReactNode;
}

const Circle: React.FC<CircleProps> = function Circle (props) {
    const { className, type, ...other  } = props;
    const prefixCls = 'dtc-circle';

    const classes = classNames(
        `${prefixCls}-default`,
        className,
        {[`${prefixCls}-${type}`]: type}
    )

    return (
        <div
            {...other}
            className={classes}
        >
            {props.children || ''}
        </div>
    )
}

export default Circle
