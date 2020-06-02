import * as React from 'react'
import classNames from 'classnames'

export function Circle (props: any) {
    const classes = classNames('circle_default', props.className)
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
