import React from 'react';
import { storiesOf } from '@storybook/react';
import ExampleContainer from './components/exampleCode';
import StatusTag from '../components/statusTag';
import { PropsTable } from './components/propsTable';
import './style/index.scss';
import '../styles/index.scss';

const stories = storiesOf('StatusTag 状态标签', module);
const propDefinitions = [
    {
        property: 'type',
        propType: 'string',
        required: false,
        description: '设置状态类型，可选值为 warning、error、success、run、stopped',
        defaultValue: 'success',
    },
    {
        property: 'showBorder',
        propType: 'boolean',
        required: false,
        description: '是否展示外面的border',
        defaultValue: 'true',
    },
    {
        property: 'color',
        propType: 'string',
        required: false,
        description: '自定义颜色(当 type 所支持的颜色不满足时可用，优先级更高)',
        defaultValue: '-',
    },
    {
        property: 'onClick',
        propType: '() => void',
        required: false,
        description: '点击事件',
        defaultValue: '-',
    },
];

const otherDependencies = `import { StatusTag } from 'dt-react-component';`;
const typeCode = `<StatusTag type="run">运行中</StatusTag>
            <StatusTag type="success">成功</StatusTag>
            <StatusTag type="stopped">取消</StatusTag>
            <StatusTag type="error">运行失败</StatusTag>
            <StatusTag type="warning">提交中</StatusTag>`;
const noBorderCode = `<StatusTag type="run" showBorder={false}>运行中</StatusTag>
            <StatusTag type="error" showBorder={false}>运行失败</StatusTag>
            <StatusTag type="success" showBorder={false}>成功</StatusTag>
            <StatusTag type="stopped" showBorder={false}>取消</StatusTag>
            <StatusTag type="warning" showBorder={false}>等待提交</StatusTag>`;
const customizeCode = `<StatusTag type="run" color="#bc84a8">运行中</StatusTag>
            <StatusTag type="run" color="#2177b8" showBorder={false}>运行中</StatusTag>`;
const circleCode = `<StatusTag type="run" showBorder={false}/>
            <StatusTag color="#2177b8" showBorder={false}/>`;

stories.add(
    'StatusTag',
    () => {
        return (
            <div className="story_wrapper">
                <h2>何时使用</h2>
                <p>StatusTag 组件作用于任务运行状态效果展示</p>
                <h2>常规 type 的使用</h2>
                <ExampleContainer
                    otherDependencies={otherDependencies}
                    code={typeCode}
                    hasCodeSandBox={true}
                >
                    <StatusTag type="run">运行中</StatusTag>
                    <StatusTag type="success">成功</StatusTag>
                    <StatusTag type="stopped">取消</StatusTag>
                    <StatusTag type="error">运行失败</StatusTag>
                    <StatusTag type="warning">提交中</StatusTag>
                </ExampleContainer>
                <h2>没有外边框的使用</h2>
                <ExampleContainer
                    otherDependencies={otherDependencies}
                    code={noBorderCode}
                    hasCodeSandBox={true}
                >
                    <StatusTag type="run" showBorder={false}>
                        运行中
                    </StatusTag>
                    <StatusTag type="error" showBorder={false}>
                        运行失败
                    </StatusTag>
                    <StatusTag type="success" showBorder={false}>
                        成功
                    </StatusTag>
                    <StatusTag type="stopped" showBorder={false}>
                        取消
                    </StatusTag>
                    <StatusTag type="warning" showBorder={false}>
                        等待提交
                    </StatusTag>
                </ExampleContainer>
                <h2>自定义颜色</h2>
                <ExampleContainer
                    otherDependencies={otherDependencies}
                    code={customizeCode}
                    hasCodeSandBox={true}
                >
                    <StatusTag type="run" color="#bc84a8">
                        运行中
                    </StatusTag>
                    <StatusTag type="run" color="#2177b8" showBorder={false}>
                        运行中
                    </StatusTag>
                </ExampleContainer>
                <h2>圆点使用</h2>
                <ExampleContainer
                    otherDependencies={otherDependencies}
                    code={circleCode}
                    hasCodeSandBox={true}
                >
                    <StatusTag type="run" showBorder={false} />
                    <StatusTag color="#2177b8" showBorder={false} />
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
        <StatusTag type='success'>完成</StatusTag>
        2. 没有外边框的使用
        <StatusTag type="run" showBorder={false}>运行中</StatusTag>
        3. 自定义颜色
        <StatusTag type="run" color="#bc84a8">运行中</StatusTag>
        4. 作为圆点使用
        <StatusTag type="run" showBorder={false}/>
        ~~~
        `,
            TableComponent: () => PropsTable({ propDefinitions }),
        },
    }
);
