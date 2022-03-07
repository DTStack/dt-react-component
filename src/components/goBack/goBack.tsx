import React from 'react'
import { LeftCircleOutlined } from '@ant-design/icons';
import { browserHistory, hashHistory } from 'react-router'
import { GoBackProps } from './index'

export default class GoBack extends React.Component<GoBackProps, any> {
    go = () => {
        const { url, history, autoClose } = this.props

        if (url) {
            if (history) { browserHistory.push(url) } else { hashHistory.push(url) }
        } else {
            if (window.history.length == 1) {
                if (autoClose) {
                    window.close();
                }
            } else {
                hashHistory.go(-1);
            }
        }
    }

    static GoBackButton: typeof import('./goBackButton').default

    getButtonView () {
        const { style } = this.props;

        let iconStyle: React.CSSProperties = {
            cursor: 'pointer',
            fontFamily: 'anticon',
            fontSize: '18px',
            color: 'rgb(148, 168, 198)',
            letterSpacing: '5px',
            position: 'relative',
            top: '2px'
        }

        if (style) {
            iconStyle = Object.assign(iconStyle, style)
        }

        return (
            <LeftCircleOutlined
                style={iconStyle}
                onClick={this.go}
            />
        )
    }

    render () {
        return this.getButtonView();
    }
}
