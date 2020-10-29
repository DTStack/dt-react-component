import * as React from 'react'
import classNames from 'classnames'

export const tuple = <T extends string[]>(...args: T) => args;
const CicleTypes = tuple('running', 'finished', 'stopped', 'frozen', 'fail',
    'submitting', 'restarting', 'waitSubmit');
export type CicleType = typeof CicleTypes[number]

export interface CircleProps {
    type?: CicleType;
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
    children?: React.ReactNode;
}
export default function Circle (props: CircleProps) {
    const { className, type } = props;
    const prefixCls = 'dtc-circle';
    const classes = classNames(`${prefixCls}-default`, className, {
        [`${prefixCls}-${type}`]: type
    })
    const { ...other } = props;
    return (
        <div
            {...other}
            className={classes}
        >
            {props.children || ''}
        </div>
    )
}
