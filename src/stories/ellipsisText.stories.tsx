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
    property: 'style',
    propType: 'object',
    required: false,
    description: '为文本内容所在节点添加自定义样式',
    defaultValue: ''
}, {
    property: 'placement',
    propType: 'string',
    required: false,
    description: '设置 hover 显示的 Tooltip 位置, 可设置值 top | left | right | bottom | topLeft | topRight | bottomLeft | bottomRight | leftTop | leftBottom | rightTop | rightBottom',
    defaultValue: 'top'
}]
stories.add('ellipsisText', () => (
    <div className='story_wrapper'>
        <h2>何时使用</h2>
        <p>对长文本内容显示做一定限制，超出指定（默认120px）宽度显示省略号，hover 显示完整内容。</p>
        <h2>示例</h2>
        <EllipsisText
            value={'我是很长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长的文本'}
            style={{ width: 200 }}
            placement={'topLeft'}
        />
    </div>
), {
    info: {
        TableComponent: () => PropsTable({ propDefinitions }),
        text: `
            代码示例：
            ~~~js
            <EllipsisText
                value={'我是很长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长的文本'}
                style={{ width: 200 }}
                placement={'topLeft'}
            />
            ~~~
        `
    }
})
