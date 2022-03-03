import React from 'react'

import { FrownOutlined } from '@ant-design/icons';

export default class NotFound extends React.Component<any, any> {
    render () {
        return (
            <div style={{ lineHeight: '200px', textAlign: 'center' }}>
                <h1><FrownOutlined /> 亲，是不是走错地方了？</h1>
            </div>
        );
    }
}
