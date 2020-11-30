import React from 'react'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { object } from '@storybook/addon-knobs';
import { Circle } from '../components/circle';
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

stories.add('circle', () => {
    const groupId = 'circle';
    const defaultStyle = {
        background: 'black'
    }
    const style = object('Style', defaultStyle, groupId);

    return (
        <div className='story_wrapper'>
            <h2>何时使用</h2>
            <p>circle 组件作用于任务运行状态效果展示</p>
            <h2>
                示例
            </h2>
            <div className='strory-code_border'>
                <div>
                    <Circle type='running' onClick={action('clicked')}></Circle>&nbsp;
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
            <p style={{ marginTop: '10px' }}>在knobs栏中尝试自定义style属性</p>
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
