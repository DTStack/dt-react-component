import React from 'react';
import { storiesOf } from '@storybook/react';

import { withKnobs } from '@storybook/addon-knobs';
import { PropsTable } from './components/propsTable';
import EditCell from '../components/editCell';

const stories = storiesOf('EditCell 可编辑长文本省略框', module);
stories.addDecorator(withKnobs);

const propDefinitions = [
    {
        property: 'value',
        propType: 'string',
        required: true,
        description: '默认显示的文本内容',
        defaultValue: '--',
    },
    {
        property: 'keyField',
        propType: 'string',
        required: true,
        description: '其他需要携带的信息',
        defaultValue: '--',
    },
    {
        property: 'isView',
        propType: 'string',
        required: false,
        description: '是否展示修改按钮',
        defaultValue: '--',
    },
    {
        property: 'onHandleEdit',
        propType: 'string',
        required: true,
        description:
            '点击确定的按钮触发的回调函数，接受两个参数keyField：其他需要携带的信息，editValue：输入框的文本值',
        defaultValue: '--',
    },
];

const defaultProps = {
    value: '我是很长长长长长长长长长长长长长长长长长长长长长长长长长长的文本',
    keyField: '123',
    isView: false,
    onHandleEdit: (keyField, value) => console.log(keyField, value),
};
stories.add(
    'EditCell',
    () => (
        <div className="story_wrapper">
            <h2>何时使用</h2>
            <p>
                对长文本内容显示做一定限制，超出指定宽度显示省略号，hover显示完整内容，并且可以对显示的内容作出修改
            </p>
            <h2>示例</h2>
            <EditCell {...defaultProps} />
        </div>
    ),
    {
        info: {
            TableComponent: () => PropsTable({ propDefinitions }),
            text: `
            代码示例：
            ~~~js
            import { EditCell } from 'dt-react-component';
            <EditCell 
                value: '我是很长长长长长长长长长长长长长长长长长长长长长长长长长长的文本',
                keyField: '123',
                isView: false,
                onHandleEdit: (keyField, value) => console.log(keyField, value),
            />
            ~~~
        `,
        },
    }
);
