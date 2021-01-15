import React from 'react'
import { storiesOf } from '@storybook/react';
import { PropsTable } from './components/propsTable';
import EditInput from '../components/editInput'
const propDefinitions = [
    {
        property: 'value',
        propType: 'string | number',
        required: false,
        description: 'input框初始值',
        defaultValue: '--'
    }, {
        property: 'onChange',
        propType: 'Function',
        required: false,
        description: '输入框聚焦blur时的回调',
        defaultValue: '--'
    }, {
        property: 'max',
        propType: 'number',
        required: false,
        description: '输入字符串的最大长度',
        defaultValue: '--'
    }
]

const stories = storiesOf('EditInput 输入框', module);
stories.add('EditInput', () => {
    const defaultProps = {
        max: 20,
        value: 'dt-react-component'
    }
    return (
        <div className='story_wrapper'>
            <h2>何时使用</h2>
            <p>当需要对input框的输入长度做校验时使用，超出长度的时候会有message提示，而不是在输入框下提示</p>
            <h2>示例</h2>
            <div style={{ width: '300px' }}>
                <EditInput {...defaultProps} />
            </div>
        </div >
    )
}, {
    info: {
        text: `
        代码示例：
        ~~~js
        import { EditInput } from 'dt-react-component'
        const defaultProps = {
            max: 20,
            value: 'dt-react-component'
        }
        <EditInput {...defaultProps}/>
        ~~~
        `,
        TableComponent: () => PropsTable({ propDefinitions })
    }
})
