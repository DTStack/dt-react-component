import React from 'react'

import { Icon } from 'antd'

export default class NotFound extends React.Component<any, any> {
    render () {
        return (
            <div style={{ lineHeight: '200px', textAlign: 'center' }}>
                <h1><Icon type="frown-o" /> 亲，是不是走错地方了？</h1>
            </div>
        )
    }
}
