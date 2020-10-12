import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { PropsTable } from './components/propsTable';
import MarkdownRender from '../components/markdownRender';
import '../styles/index.scss';
const testHtml = require('./markdown/testData.md');
const stories = storiesOf('MarkdownRender markdown 渲染', module);
const propDefinitions = [{
    property: 'text',
    propType: 'string',
    required: false,
    description: 'markdown 文本数据',
    defaultValue: ''
}, {
    property: 'dark',
    propType: 'boolean',
    required: false,
    description: '主题设置',
    defaultValue: ''
}]
stories.add('markdownRender', () => {
    return (
        <div className='story_wrapper'>
            <h2>何时使用</h2>
            <p>路由未匹配上的展示页</p>
            <h2>示例</h2>
            <MarkdownRender
                text={`${testHtml && testHtml.default}`}
                dark={false}
            />
        </div>
    )
}, {
    info: {
        text: `
        代码示例：
        ~~~js
        import { MarkdownRender } from 'dt-react-component'
        <MarkdownRender
        text={mdDoc}
        dark={false}
        />
        ~~~
        `,
        TableComponent: () => PropsTable({ propDefinitions })
    }
})
