import React from 'react'
import { storiesOf } from '@storybook/react';
import { object, select } from '@storybook/addon-knobs';
import ExampleContainer from './components/exampleCode';
import Circle from '../components/circle';
import { PropsTable } from './components/propsTable';
import './style/index.scss';
import '../styles/index.scss';
import SearchInput from '../components/searchInput';
const stories = storiesOf('SearchInput 搜索框', module);
const propDefinitions = [{
    property: 'className',
    propType: 'string',
    required: false,
    description: '根元素的类名称',
    defaultValue: ''
}, {
    property: 'style',
    propType: 'string',
    required: false,
    description: '根节点的样式',
    defaultValue: ''
}, {
    property: 'placeholder',
    propType: 'string',
    required: false,
    description: 'input 占位符',
    defaultValue: '请输入搜索内容'
}, {
    property: 'allowClear',
    propType: 'boolean',
    required: false,
    description: '可以点击清除图标删除内容',
    defaultValue: 'true'
}, {
    property: 'allowEmptySearch',
    propType: 'boolean',
    required: false,
    description: '内容为空时可以进行搜索',
    defaultValue: 'true'
}, {
    property: 'enterButton',
    propType: 'ReactNode | boolean',
    required: false,
    description: '搜索按钮',
    defaultValue: 'false'
}, {
    property: 'defaultValue',
    propType: 'string',
    required: false,
    description: '默认内容',
    defaultValue: '-'
}, {
    property: 'suffix',
    propType: 'ReactNode',
    required: false,
    description: '带有后缀图标的 input',
    defaultValue: '-'
}, {
    property: 'onChange',
    propType: 'function(value)',
    required: false,
    description: '输入框内容变化时的回调',
    defaultValue: ''
}, {
    property: 'onSearch',
    propType: 'function(value)',
    required: true,
    description: '点击搜索或按下回车键时的回调',
    defaultValue: ''
}]

const otherDependencies = `import { SearchInput } from 'dt-react-component';`
const code = `<div>
                <SearchInput
                    onSearch={(value) => {
                        console.log("搜索：", value)
                    }}
                />
            </div>`

stories.add('searchInput', () => {
    return (
        <div className='story_wrapper'>
            <h2>何时使用</h2>
            <p>搜索框</p>
            <h2>
                示例
            </h2>
            <ExampleContainer otherDependencies={otherDependencies} code={code} hasCodeSandBox={true}>
                <div>
                    <SearchInput
                        onSearch={(value) => {
                            console.log("搜索：", value)
                        }}
                    />
                </div>
            </ExampleContainer>

            <div style={{marginTop: 20}}>
                带搜索按钮
                <SearchInput
                    onSearch={(value) => {
                        console.log("搜索：", value)
                    }}
                    enterButton={true}
                />
            </div>
        </div>
    )
}, {
    info: {
        text: `
        代码示例：
        ~~~js
        <SearchInput
            onSearch={(value) => {
                console.log("搜索：", value)
            }}
        />
        ~~~
        `,
        TableComponent: () => PropsTable({ propDefinitions })
    }
})
