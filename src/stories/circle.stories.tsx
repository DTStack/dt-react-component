import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { object } from '@storybook/addon-knobs';
import { Circle } from '../components/circle';
import { PropsTable } from './components/propsTable';
import './style/index.scss';
import '../styles/index.scss';
const stories = storiesOf('Circle', module);
const propDefinitions = [{
    property: 'className',
    propType: 'string',
    required: false,
    description: '默认类名',
    defaultValue: 'circle_default'
}]

stories.add('circle', () => {
    const groupId = 'circle';
    const defaultStyle = {
        background: 'black'
    }
    const style = object('Style', defaultStyle, groupId);

    return (
        <div className='story_wrapper'>
            <h2>
                circle组件作用于任务运行状态效果展示
            </h2>
            <div className='strory-code_border'>
                <div>
                    <Circle className='status_running' onClick={action('clicked')}></Circle>&nbsp;
                  运行中
                </div>
                <div>
                    <Circle className='status_finished'></Circle>&nbsp;
                  成功
                </div>
                <div>
                    <Circle className='status_stoped'></Circle>&nbsp;
                  取消
                </div>
                <div>
                    <Circle className='status_run_fail'></Circle>&nbsp;
                  运行失败
                </div>
                <div>
                    <Circle className='status_submitting'></Circle>&nbsp;
                  提交中
                </div>
                <div>
                    <Circle className='status_submit_failed'></Circle>&nbsp;
                  提交失败
                </div>
                <div>
                    <Circle className='status_submit_failed'></Circle>&nbsp;
                  上游失败
                </div>
                <div>
                    <Circle className='status_frozen'></Circle>&nbsp;
                  冻结
                </div>
                <div>
                    <Circle className='status_killed'></Circle>&nbsp;
                  已停止
                </div>
                <div>
                    <Circle className='status_restarting'></Circle>&nbsp;
                  重试中
                </div>
                <div>
                    <Circle className='status_wait_submit'></Circle>&nbsp;
                  等待提交
                </div>
            </div>
            <h2>
                在knobs栏中尝试自定义style属性
            </h2>
            <div className='strory-code_border'>
                <Circle style={style}></Circle>&nbsp;
            </div>
        </div>
    )
}, {
    info: {
        inline: true,
        source: true,
        text: `
      #### 使用示例
      ~~~js
      <Circle style={style} ></Circle>
      ~~~
    `,
        TableComponent: () => PropsTable({ propDefinitions })
    }
})
