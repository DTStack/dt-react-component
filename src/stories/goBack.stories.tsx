import React from 'react'
import { storiesOf } from '@storybook/react';

import { withKnobs } from '@storybook/addon-knobs';
import { PropsTable } from './components/propsTable';
import GoBack from '../components/goBack';

const stories = storiesOf('GoBack 返回', module);
stories.addDecorator(withKnobs)

const propDefinitions = [{
    property: 'url',
    propType: 'string',
    required: false,
    description: '返回的路由， 如不传参数，则默认返回浏览器上一级url',
    defaultValue: ''
}, {
    property: 'autoClose',
    propType: 'boolean',
    required: false,
    description: '是否关闭浏览器窗口',
    defaultValue: 'false'
}]
stories.add('goback', () => (
    <div className='story_wrapper'>
        <h2>何时使用</h2>
        <p>返回匹配的路由， 默认返回浏览器上一级路由</p>
        <h2>示例</h2>
        <p>点击我试试看</p>
        <GoBack />
    </div>
), {
    info: {
        TableComponent: () => PropsTable({ propDefinitions }),
        text: `
            代码示例：
            ~~~js
            <GoBack url='/api/manage' />
            ~~~
        `
    }
})
