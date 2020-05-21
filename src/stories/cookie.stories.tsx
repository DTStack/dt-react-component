import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Cookies from '../components/cookies';
import { PropsTable } from './components/propsTable';
const stories = storiesOf('Cookies', module)

const propDefinitions = [{
    property: 'watchFields',
    propType: 'Array',
    required: false,
    description: '监听值',
    defaultValue: '-'
}, {
    property: 'onFieldsChanged',
    propType: 'Function(changedFields)',
    required: false,
    description: '监听的cookie更新时触发',
    defaultValue: '-'
}]
stories.add('cookie', () => {
    return <p className='story_wrapper'>
        <p>监听页面cookie变更，watchFields字段的值发生变更时会触发页面刷新</p>
        <Cookies />
    </p>
}, {
    info: {
        TableComponent: () => PropsTable({ propDefinitions }),
        text: `
            #### 使用示例
            ~~~js
                <Cookies
                watchFields={[
                    'token', 'project'
                ]}
                onFieldsChanged={this.onFieldsChanged}
            >
            ~~~
        `
    }
})
