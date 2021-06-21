import React from 'react'
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { PropsTable } from './components/propsTable';
import SelectTree from '../components/selectTree';

const stories = storiesOf('SelectTree', module);
stories.addDecorator(withKnobs)

const propDefinitions = [
  {
    property: 'disable',
    propType: 'boolean',
    required: false,
    description: '是否禁用',
    defaultValue: 'false'
  }, {
    property: 'dataSource',
    propType: 'array',
    required: false,
    description: '数据源（数据格式{id:Number,title:String,children:[]}）',
    defaultValue: '[]'
  }, {
    property: 'onChange',
    propType: 'Function',
    required: false,
    description: '选择改变回调',
    defaultValue: '--'
  }
]

stories.add('SelectTree 标签', () => (
  <div className='story_wrapper'>
    <h2>何时使用</h2>
    <p>{`用于下拉树形数据的多项选择`}</p>
    <SelectTree
      dataSource={[
        {
          id: 1,
          title: "1",
          children: [
            {
              id: 3,
              title: "1-3",
              children: []
            },
            {
              id: 4,
              title: "1-4",
              children: []
            },
          ]
        },
        {
          id: 2,
          title: "2",
          children: []
        }
      ]}
    />
  </div>
), {
  info: {
    text: `
            代码示例：
            ~~~js
            <SelectTree
              dataSource={[
                {
                  id: 1,
                  title: "1",
                  children: [
                    {
                      id: 3,
                      title: "1-3",
                      children: []
                    },
                    {
                      id: 4,
                      title: "1-4",
                      children: []
                    },
                  ]
                },
                {
                  id: 2,
                  title: "2",
                  children: []
                }
              ]}
            />
            ~~~
        `,
    TableComponent: () => PropsTable({ propDefinitions })
  }
})
