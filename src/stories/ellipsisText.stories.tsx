import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { withKnobs } from '@storybook/addon-knobs';
import { PropsTable } from './components/propsTable';
import EllipsisText from '../components/ellipsisText';

const stories = storiesOf('EllipsisText 长文本省略显示', module);
stories.addDecorator(withKnobs)

const propDefinitions = [{
    property: 'value',
    propType: 'string',
    required: true,
    description: '显示文本内容',
    defaultValue: ''
}, {
    property: 'className',
    propType: 'string',
    required: false,
    description: '为文本内容所在节点添加自定义样式名',
    defaultValue: ''
}, {
    property: 'maxWidth',
    propType: 'string | number',
    required: false,
    description: '文本内容的最大宽度',
    defaultValue: ''
}, {
    property: 'title',
    propType: 'string',
    required: false,
    description: '提示文字',
    defaultValue: ''
}, {
    property: '其他参数',
    propType: '',
    required: false,
    description: <a href="https://3x.ant.design/components/tooltip-cn/#header">继承antd3.x的Tooltip</a>,
    defaultValue: ''
}]
stories.add('ellipsisText', () => (
    <div className='story_wrapper'>
        <h2>何时使用</h2>
        <p>对长文本内容显示做一定限制，根据最近块级父元素自动计算最大宽度，也可以手动传最大宽度，hover 显示完整内容。</p>
        <ul>
            <li>自动计算宽度仅限于最近块级父元素下都为行内元素</li>
            <li>如果最近块级元素为行内块级元素，必须设置宽度</li>
            <li>使用antd table当表头fixed：true时，请传maxWidth</li>
            <li>使用多个EllipsisText最好传maxWidth</li>
        </ul>
        <h2>示例</h2>
        <span>场景一：</span>
        <EllipsisText
            value={'我是很长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长的文本'}
            maxWidth={200}
        />
        <div>
            场景二（请更改窗口大小）：
            <EllipsisText
                value={'我是很长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长的文本'}
            />
        </div>
    </div>
), {
    info: {
        TableComponent: () => PropsTable({ propDefinitions }),
        text: `
            代码示例：
            ~~~js
            <EllipsisText
                value={'我是很长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长的文本'}
                maxWidth={200}
            />
            
            <div>
                <span>场景二（请更改窗口大小）：</span>
                <EllipsisText
                    value={'我是很长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长的文本'}
                />
            </div>
            ~~~
        `
    }
})
