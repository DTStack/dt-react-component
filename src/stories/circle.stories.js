import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { Circle } from '../components/circle';
import '../components/circle/circle-color.scss';
import circleText from '../markdown/circle.md';

const stories = storiesOf('Circle', module);

// 动态修改react组件属性(测试)
// 可在config文件中全局配置
stories.addDecorator(withKnobs);
stories.add('圆点', () => (
        <div>
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
    ), {
        notes: {
           markdown: circleText
        }
    })