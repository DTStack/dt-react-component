import React from 'react'
import { storiesOf } from '@storybook/react';
import { object, select } from '@storybook/addon-knobs';
import ExampleContainer from './components/exampleCode';
import Circle from '../components/circle';
import { PropsTable } from './components/propsTable';
import './style/index.scss';
import '../styles/index.scss';
const stories = storiesOf('Circle 圆点', module);
const propDefinitions = [{
    property: 'type',
    propType: 'string',
    required: false,
    description: '设置圆点类型，可选值为running、finished、stopped、frozen、fail、submitting、restarting、waitSubmit',
    defaultValue: '-'
}]

const otherDependencies = `import { Circle } from 'dt-react-component';`
const code = `<div>
                <div>
                    <Circle type='running'></Circle>&nbsp;
                    运行中
                </div>
                <div>
                    <Circle type='finished' className='status_finished'></Circle>&nbsp;
                    成功
                </div>
                <div>
                    <Circle type='stopped'></Circle>&nbsp;
                    取消
                </div>
                <div>
                    <Circle type='frozen'></Circle>&nbsp;
                    冻结
                </div>
                <div>
                    <Circle type='stopped'></Circle>&nbsp;
                    已停止
                </div>
                <div>
                    <Circle type='fail'></Circle>&nbsp;
                    运行失败
                </div>
                <div>
                    <Circle type='fail'></Circle>&nbsp;
                    提交失败
                </div>
                <div>
                    <Circle type='fail'></Circle>&nbsp;
                    上游失败
                </div>
                <div>
                    <Circle type='submitting'></Circle>&nbsp;
                    提交中
                </div>
                <div>
                    <Circle type='restarting'></Circle>&nbsp;
                    重试中
                </div>
                <div>
                    <Circle type='waitSubmit'></Circle>&nbsp;
                    等待提交
                </div>
            </div>`

stories.add('circle', () => {
    const groupId = 'circle';
    const defaultStyle = {
        background: 'black'
    }
    const defaultType = 'running'
    const options = ['running', 'finished', 'stopped', 'frozen', 'stopped', 'fail', 'submitting', 'restarting', 'waitSubmit']

    const type = select('type', options, defaultType, groupId)
    const style = object('Style', defaultStyle, groupId);

    return (
        <div className='story_wrapper'>
            <h2>何时使用</h2>
            <p>circle 组件作用于任务运行状态效果展示</p>
            <h2>
                示例
            </h2>
            <ExampleContainer otherDependencies={otherDependencies} code={code} hasCodeSandBox={true}>
                <div>
                    <div>
                        <Circle type='running'></Circle>&nbsp;
                        运行中
                    </div>
                    <div>
                        <Circle type='finished' className='status_finished'></Circle>&nbsp;
                        成功
                    </div>
                    <div>
                        <Circle type='stopped'></Circle>&nbsp;
                        取消
                    </div>
                    <div>
                        <Circle type='frozen'></Circle>&nbsp;
                        冻结
                    </div>
                    <div>
                        <Circle type='stopped'></Circle>&nbsp;
                        已停止
                    </div>
                    <div>
                        <Circle type='fail'></Circle>&nbsp;
                        运行失败
                    </div>
                    <div>
                        <Circle type='fail'></Circle>&nbsp;
                        提交失败
                    </div>
                    <div>
                        <Circle type='fail'></Circle>&nbsp;
                        上游失败
                    </div>
                    <div>
                        <Circle type='submitting'></Circle>&nbsp;
                        提交中
                    </div>
                    <div>
                        <Circle type='restarting'></Circle>&nbsp;
                        重试中
                    </div>
                    <div>
                        <Circle type='waitSubmit'></Circle>&nbsp;
                        等待提交
                    </div>
                </div>
            </ExampleContainer>
            <p style={{ marginTop: '10px' }}>通过组件预置的几种 type 控制颜色</p>
            <div className='strory-code_border'>
                <Circle type={type}></Circle>
            </div>
            <p style={{ marginTop: '10px' }}>通过自定义 style 属性控制颜色</p>
            <div className='strory-code_border'>
                <Circle style={style}></Circle>&nbsp;
            </div>
        </div>
    )
}, {
    info: {
        text: `
        代码示例：
        ~~~js
        <Circle type='finished' ></Circle>
        ~~~
        `,
        TableComponent: () => PropsTable({ propDefinitions })
    }
})
