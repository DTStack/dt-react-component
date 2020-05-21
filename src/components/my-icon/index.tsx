import * as React from 'react'
import classNames from 'classnames'
const imgBase = 'public/img/icon'
const imgDarkBase = 'public/img/theme-dark'

export default class Icon extends React.Component<any, any> {
    render () {
        const props = this.props
        const base = !props.themeDark ? imgBase : imgDarkBase;
        const cls = classNames('m-icon', props.className)
        return (<img
            {...props}
            className={cls}
            alt={props.alt} src={`${base}/${props.type}.svg`} />
        )
    }
}
