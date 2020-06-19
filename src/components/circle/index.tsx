import * as React from 'react'
import classNames from 'classnames'

export function Circle (props: any) {
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
