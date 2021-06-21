import React from 'react'
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import CountDown from '../components/countDown';
import { PropsTable } from './components/propsTable';
import ExampleContainer from './components/exampleCode';

const stories = storiesOf('CountDown 数字滚动动画', module);
stories.addDecorator(withKnobs)

const propDefinitions = [{
    property: 'start',
    propType: 'number',
    description: '数字滚动初始值',
    defaultValue: 0
}, {
    property: 'end',
    propType: 'number',
    required: false,
    description: '数字滚动终止值',
    defaultValue: 1000
}, {
    property: 'timeInterval',
    propType: 'number',
    required: false,
    description: '数字动画持续时间(ms)',
    defaultValue: 3000
}, {
    property: 'format',
    propType: '(number) => string',
    required: false,
    description: '数字展示格式化',
    defaultValue: 'v => v.toString()'
}, {
    property: 'className',
    propType: 'string',
    required: false,
    description: '文本类名，内嵌span标签',
    defaultValue: ''
}, {
    property: 'style',
    propType: 'React.CSSProperties',
    required: false,
    description: '文本行间样式',
    defaultValue: '{}'
}];

const code = `<CountDown
                start={100}
                end={10000}
                timeInterval={10000}
                style={{ color: 'orange', fontWeight: 900 }}
                format={v => {
                    return (v.toFixed(2) + '')
                        .replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,')
                }}
            />`

stories.add('CountDown', () => (
    <div className='story_wrapper'>
        <h2>何时使用</h2>
        <p>{`数据概览页面，涉及数字文本时，可能需要添加数字滚动动画`}</p>
        <h2>示例</h2>
        <ExampleContainer otherDependencies='' code={code} hasCodeSandBox={true}>
            <p>一般用法</p>
            <CountDown
                start={100}
                end={10000}
                timeInterval={10000}
                style={{ color: 'orange', fontWeight: 900 }}
                format={v => {
                    return (v.toFixed(2) + '')
                        .replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,')
                }}
            />
        </ExampleContainer>
    </div>
), {
    info: {
        text: `
            代码示例：
            ~~~js
            <CountDown
                start={100}
                end={10000}
                timeInterval={10000}
                style={{ color: 'orange', fontWeight: 900 }}
                format={v => {
                    return (v.toFixed(2) + '')
                        .replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,')
                }}
            />
            ~~~
        `,
        TableComponent: () => PropsTable({ propDefinitions })
    }
})
