import * as React from 'react'
import { Button } from 'antd'
import { browserHistory, hashHistory } from 'react-router'

export default class GoBackButton extends React.Component<any, any> {
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

    render () {
        const { title } = this.props
        return (
            <Button {...this.props} onClick={this.go}>{title || '返回' }</Button>
        )
    }
}
