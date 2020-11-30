import React from 'react'
import { storiesOf } from '@storybook/react';

import { withKnobs } from '@storybook/addon-knobs';
import { PropsTable } from './components/propsTable';
import MulSelectDropdown from '../components/mulSelectDropdown';

const stories = storiesOf('MulSelectDropdown 可多选的下拉菜单', module);
stories.addDecorator(withKnobs)

const propDefinitions = [{
    property: 'value',
    propType: 'Array',
    required: true,
    description: '当前选中的值',
    defaultValue: ''
}, {
    property: 'onOk',
    propType: 'function(selectValues)',
    required: true,
    description: '确认 callback , 该函数包含一个参数，参数为当前选中的参数',
    defaultValue: ''
}, {
    property: 'renderNode',
    propType: '(openFun) => ReactNode',
    required: true,
    description: '渲染触发显示下拉菜单的节点，函数包含一个参数（触发显示下拉菜单的函数），返回一个节点',
    defaultValue: '(openFun) => (<span onClick={openFun}>打开</span>)'
}, {
    property: 'options',
    propType: 'Array',
    required: true,
    description: '设置下拉菜单的选项，选项内容为格式为 { label: string, value: string | number }',
    defaultValue: ''
}, {
    property: 'onChange',
    propType: 'function(selectValues)',
    required: false,
    description: '选中或改变选项时，调用此函数',
    defaultValue: ''
}, {
    property: 'popupContainer',
    propType: '() => Node',
    required: false,
    description: '下拉菜单渲染的父节点，默认渲染到 body 上',
    defaultValue: '() => document.body'
}]
stories.add('mulSelectDropdown', () => (
    <div className='story_wrapper'>
        <h2>何时使用</h2>
        <p>当页面上的操作命令过多时，用此组件可以收纳操作元素。点击触点，会出现一个多选下拉菜单。可在列表中进行选择，并执行相应的命令。</p>
        <h2>示例</h2>
        <MulSelectDropdown
            options={[{ label: '选项一', value: 1 }, { label: '选项二', value: 2, disabled: true }]}
            onOk={(value) => { console.log(value); }}
            renderNode={(openFun) => <a onClick={openFun}>打开下拉</a>}
            value={[2]}
        />
    </div>
), {
    info: {
        TableComponent: () => PropsTable({ propDefinitions }),
        text: `
            代码示例：
            ~~~js
            <MulSelectDropdown
                options={[{ label: '选项一', value: 1 }, { label: '选项二', value: 2, disabled: true }]}
                onOk={(value) => { console.log(value); }}
                renderNode={(openFun) => <a onClick={openFun}>打开下拉</a>}
                value={[2]}
            />
            ~~~
        `
    }
})
