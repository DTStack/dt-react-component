import React from 'react'
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { PropsTable } from './components/propsTable';
import Tag from '../components/tag';

const stories = storiesOf('Tag', module);
stories.addDecorator(withKnobs)

const propDefinitions = [
  {
    property: 'closable',
    propType: 'boolean',
    required: false,
    description: '是否可以关闭',
    defaultValue: 'false'
  }, {
    property: 'hit',
    propType: 'boolean',
    required: false,
    description: '是否显示边框',
    defaultValue: 'false'
  }, {
    property: 'size',
    propType: 'string',
    required: false,
    description: '尺寸(medium / small / mini)',
    defaultValue: '--'
  }, {
    property: 'effect',
    propType: 'string',
    required: false,
    description: '主题样式(light / plain)',
    defaultValue: 'light'
  }, {
    property: 'onClose',
    propType: 'Function',
    required: false,
    description: '标签关闭回调',
    defaultValue: '--'
  }
]

stories.add('Tag 标签', () => (
  <div className='story_wrapper'>
    <h2>何时使用</h2>
    <p>{`用于标记和选择。`}</p>
    <Tag>标签</Tag>
    <Tag effect="plain">标签</Tag>
  </div>
), {
  info: {
    text: `
            代码示例：
            ~~~js
            <Tag>标签</Tag>
            <Tag effect="plain">标签</Tag>
            ~~~
        `,
    TableComponent: () => PropsTable({ propDefinitions })
  }
})
