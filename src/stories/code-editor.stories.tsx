import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { PropsTable } from './components/propsTable';
import CodeEditor from '../components/code-editor';
const stories = storiesOf('CodeEditor', module)

const propDefinitions = [{
    property: 'options',
    propType: 'object',
    required: false,
    description: '编辑器配置项',
    defaultValue: `{
        mode: 'text/x-sql',
        lint: true,
        indentWithTabs: true,
        smartIndent: true,
        lineNumbers: true,
        autofocus: false,
        lineWrapping: true,
        readOnly: undefined
    }`
}, {
    property: 'value',
    propType: 'string',
    required: false,
    description: '编辑器显示值',
    defaultValue: '-'
}, {
    property: 'onChange',
    propType: 'Function',
    required: false,
    description: '触发时更新',
    defaultValue: '-'
}, {
    property: 'sync',
    propType: 'boolean',
    required: false,
    description: '是否自动更新编辑器',
    defaultValue: '-'
}]

stories.add('CodeEditor', () => {
    return <p className='story_wrapper'>
        <p>编辑器</p>
        <CodeEditor
            style={{ height: '600px', marginTop: '1px' }}
            value={'试一试吧～'}
        />
    </p>
}, {
    info: {
        TableComponent: () => PropsTable({ propDefinitions }),
        text: `
            #### 使用示例
            直接引用即可
            ~~~js
            <CodeEditor />
            ~~~
        `
    }
})
