import React from 'react';
import { storiesOf } from '@storybook/react';
import ExampleContainer from './components/exampleCode';
import Circle from '../components/circle';
import { PropsTable } from './components/propsTable';
import './style/index.scss';
import '../styles/index.scss';

const stories = storiesOf('Circle 圆点', module);
const propDefinitions = [
    {
        property: 'type',
        propType: 'string',
        required: false,
        description: '设置圆点类型，可选值为 warning、error、success、run、stopped',
        defaultValue: 'success'
    },
    {
        property: 'showBorder',
        propType: 'boolean',
        required: false,
        description: '是否展示外面的border',
        defaultValue: 'true'
    },
    {
        property: 'color',
        propType: 'string',
        required: false,
        description: '自定义颜色(当 type 所支持的颜色不满足时可用，优先级更高)',
        defaultValue: '-'
    },
    {
        property: 'onClick',
        propType: '() => void',
        required: false,
        description: '点击事件',
        defaultValue: '-'
    }
];

const otherDependencies = `import { Circle } from 'dt-react-component';`;
const typeCode = `<Circle type="run">运行中</Circle>
            <Circle type="success">成功</Circle>
            <Circle type="stopped">取消</Circle>
            <Circle type="error">运行失败</Circle>
            <Circle type="warning">提交中</Circle>`;
const noBorderCode = `<Circle type="run" showBorder={false}>运行中</Circle>
            <Circle type="error" showBorder={false}>运行失败</Circle>
            <Circle type="success" showBorder={false}>成功</Circle>
            <Circle type="stopped" showBorder={false}>取消</Circle>
            <Circle type="warning" showBorder={false}>等待提交</Circle>`;
const customizeCode = `<Circle type="run" color="#bc84a8">运行中</Circle>
            <Circle type="run" color="#2177b8" showBorder={false}>运行中</Circle>`

stories.add(
    'circle',
    () => {
        return (
            <div className="story_wrapper">
                <h2>何时使用</h2>
                <p>circle 组件作用于任务运行状态效果展示</p>
                <h2>常规 type 的使用</h2>
                <ExampleContainer
                    otherDependencies={otherDependencies}
                    code={typeCode}
                    hasCodeSandBox={true}
                >
                    <Circle type="run">运行中</Circle>
                    <Circle type="success">成功</Circle>
                    <Circle type="stopped">取消</Circle>
                    <Circle type="error">运行失败</Circle>
                    <Circle type="warning">提交中</Circle>
                </ExampleContainer>
                <h2>没有外边框的使用</h2>
                <ExampleContainer
                    otherDependencies={otherDependencies}
                    code={noBorderCode}
                    hasCodeSandBox={true}
                >
                    <Circle type="run" showBorder={false}>运行中</Circle>
                    <Circle type="error" showBorder={false}>运行失败</Circle>
                    <Circle type="success" showBorder={false}>成功</Circle>
                    <Circle type="stopped" showBorder={false}>取消</Circle>
                    <Circle type="warning" showBorder={false}>等待提交</Circle>
                </ExampleContainer>
                <h2>自定义颜色</h2>
                <ExampleContainer
                    otherDependencies={otherDependencies}
                    code={customizeCode}
                    hasCodeSandBox={true}
                >
                    <Circle type="run" color="#bc84a8">运行中</Circle>
                    <Circle type="run" color="#2177b8" showBorder={false}>运行中</Circle>
                </ExampleContainer>
            </div>
        );
    },
    {
        info: {
            text: `
        代码示例：
        ~~~js
        1. 常规 type 的使用
        <Circle type='success' >完成</Circle>
        2. 没有外边框的使用
        <Circle type="run" showBorder={false}>运行中</Circle>
        3. 自定义颜色
        <Circle type="run" color="#bc84a8">运行中</Circle>
        ~~~
        `,
            TableComponent: () => PropsTable({ propDefinitions })
        }
    }
);
