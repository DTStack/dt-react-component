import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { PropsTable } from './components/propsTable';
import Breadcrumb from '../components/breadcrumb';

const stories = storiesOf('Breadcrumb 与react-router共用', module);
stories.addDecorator(withKnobs)

const propDefinitions = [
    {
        property: 'routes',
        propType: 'array',
        required: true,
        description: 'router的路由栈信息',
        defaultValue: 'routes[]'
    }, {
        property: 'style',
        propType: 'object',
        required: false,
        description: '面包屑组件样式',
        defaultValue: '--'
    }
]
stories.add('breadcrumb', () => (
    <div className='story_wrapper'>
        <h2>简述</h2>
        <p>{` react-router 一起使用时，默认生成的 url 路径是带有 # 的`}</p>
        <h2>示例</h2>
        <Breadcrumb
            routes = {[{ name: 'home', path: '/home' }, { name: 'about', path: '/about' }]}
            style = {{ background: 'dedede' }}
        />
    </div>
), {
    info: {
        text: `
            代码示例：
            ~~~js
            <Breadcrumb
                routes = {[{ name: 'home', path: '/home' }, { name: 'about', path: '/about' }]}
                style = {{ background: 'dedede' }}
            />
            ~~~
        `,
        TableComponent: () => PropsTable({ propDefinitions })
    }
})
