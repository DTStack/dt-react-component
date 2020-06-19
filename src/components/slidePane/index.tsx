import { assign } from 'lodash'
import { Icon } from 'antd'
import * as React from 'react'

import classNames from 'classnames'

export interface SlidePaneProps {
    children: any;
    visible: boolean;
    left?: string | number;
    width?: string | number;
    className?: string;
    style?: object;
    onClose?<HTMLSpanElement, MouseEvent>(): void;
}

class SlidePane extends React.Component<SlidePaneProps, any> {
    constructor (props: any) {
        super(props);
    }

    render () {
        const { children, visible, style, className, onClose } = this.props
        const slidePrefixCls = 'dtc-slide-pane';
        let myStyle: any = {
            top: 0,
            transform: visible ? undefined : 'translate3d(150%, 0, 0)'
        }
        const classes = classNames(slidePrefixCls, className)
        if (!visible) {
            myStyle['pointerEvents'] = 'none'
        }
        if (style) myStyle = assign(myStyle, style);

        return (
            <div className={ classes } style={myStyle} >
                <div className={`${slidePrefixCls}-conent`} style={{ display: visible ? 'block' : 'none', height: '100%' }}>
                    { children }
                </div>
                <span className={`${slidePrefixCls}-toggle`} onClick={onClose} {...{ onClick: onClose }}>
                    <Icon type="double-right" />
                </span>
            </div>
        )
    }
}

export default SlidePane
