import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { object } from '@storybook/addon-knobs';
import { Circle } from '../components/circle';
import '../components/circle/circle_color.scss';
import '../style/index.scss';
const stories = storiesOf('Circle', module);

// info-addons源样式
// Overrides styles of addon. The object should follow this shape:
// https://github.com/storybookjs/storybook/blob/master/addons/info/src/components/Story.js#L19

// 定制化component props
const propDefinitions = [{
    property: 'className',
    propType: 'string',
    required: false,
    description: '默认类名',
    defaultValue: 'circle_default'
}]
const Red = props => <span style={{ color: 'red' }} {...props} />;
const TableComponent = () => {
    const props = propDefinitions.map(
        ({ property, propType, required, description, defaultValue }) => {
            return (
                <tr key={property}>
                    <td>
                        {property}
                        {required ? <Red>*</Red> : null}
                    </td>
                    <td>{description}</td>
                    <td>{propType}</td>
                    <td>{defaultValue}</td>
                </tr>
            );
        }
    );

    return (
        <table width="90%">
            <thead>
                <tr>
                    <th>参数</th>
                    <th>说明</th>
                    <th>类型</th>
                    <th>默认值</th>
                </tr>
            </thead>
            <tbody>{props}</tbody>
        </table>
    );
};

stories.add('circle', () => {
    const groupId = 'circle';
    const defaultStyle = {
        background: 'black'
    }
    const style = object('Style', defaultStyle, groupId);

    return (
        <div className='story_wrapper'>
            <section>
                circle组件作用于任务运行状态效果展示
            </section>
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
            <section>
                在knobs栏中尝试自定义style属性
            </section>
            <div className='strory-code_border'>
                <Circle style={style}></Circle>&nbsp;
            </div>
        </div>
    )
}, {
    info: {
        inline: true, // Displays info inline vs click button to view
        source: true,
        text: `
      #### 使用示例
      ~~~js
      <Circle style={style} ></Circle>
      ~~~
    `,
        TableComponent
    }
})
