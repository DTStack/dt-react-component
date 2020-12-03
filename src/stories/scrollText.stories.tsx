import React from 'react'
import { storiesOf } from '@storybook/react';
import { PropsTable } from './components/propsTable';
import ScrollText from '../components/scrollText';

const propDefinitions = [{
    property: 'value',
    propType: 'string',
    required: false,
    description: '输入框显示值',
    defaultValue: ''
}]
const stories = storiesOf('ScrollText 输入框', module);
stories.add('scrollText', () => {
    return (
        <div className='story_wrapper'>
            <h2>何时使用</h2>
            <p>数据同步任务字段类型输入框</p>
            <h2>示例</h2>
            <ScrollText value='string'/>
        </div>
    )
}, {
    info: {
        text: `
        代码示例：
        ~~~js
        import { ScrollText } from 'dt-react-component';
        <ScrollText value='string'/>
        ~~~
        `,
        TableComponent: () => PropsTable({ propDefinitions })
    }
})
