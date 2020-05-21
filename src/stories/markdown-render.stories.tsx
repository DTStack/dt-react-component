import * as React from 'react';
import { storiesOf } from '@storybook/react';
import MarkdownRender from '../components/markdown-render';
import { PropsTable } from './components/propsTable';
import * as html from './markdown/createTable.md';
const stories = storiesOf('MarkdownRender', module)

const propDefinitions = [{
    property: 'text',
    propType: 'string',
    required: false,
    description: 'markdown语法数据',
    defaultValue: '-'
}, {
    property: 'dark',
    propType: 'boolean',
    required: false,
    description: '主题',
    defaultValue: 'false'
}]
stories.add('MarkdownRender', () => {
    console.log(html.default)
    return <p className='story_wrapper'>
        <p>MarkdownRender</p>
        <MarkdownRender
            text={`${html.default}`}
            dark={true}
        />
    </p>
}, {
    info: {
        TableComponent: () => PropsTable({ propDefinitions }),
        text: `
            #### 使用示例
            ~~~js
            <MarkdownRender text='# hello' />
            ~~~
        `
    }
})
