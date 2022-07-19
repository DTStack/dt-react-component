import React from 'react'
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { PropsTable } from './components/propsTable';
import DragDrawerRender from './components/dragDrawer';

const stories = storiesOf('SlidePane 右侧面板', module);
stories.addDecorator(withKnobs)

const propDefinitions = [
    {
        property: 'visible',
        propType: 'boolean',
        required: true,
        description: 'Drawer 是否可见',
        defaultValue: '-'
    },
    {
        property: 'draggable',
        propType: 'boolean',
        required: false,
        description: 'Drawer 是否可拖拽',
        defaultValue: 'true'
    },
    {
        property: 'width',
        propType: 'number',
        required: false,
        description: 'Drawer 的宽度',
        defaultValue: 1000
    },
    {
        property: 'minWidth',
        propType: 'number',
        required: false,
        description: 'Drawer 的最小宽度，单位 px',
        defaultValue: 720
    },
    {
        property: 'maxWidth',
        propType: 'number',
        required: false,
        description: 'Drawer 的最大宽度，单位 px',
        defaultValue: 1256
    },
    {
        property: 'maskStyle',
        propType: 'CSSProperties',
        required: false,
        description: '遮罩样式',
        defaultValue: "{ opacity: 0, animation: 'none' }"
    },
    {
        property: 'closable',
        propType: 'boolean',
        required: false,
        description: '是否显示左上角的关闭按钮',
        defaultValue: 'false'
    },
    {
        property: 'title',
        propType: 'React.ReactNode',
        required: false,
        description: '标题',
        defaultValue: 'null'
    },
    {
        property: 'placement',
        propType: 'string',
        required: false,
        description: '抽屉的方向，目前固定为 right',
        defaultValue: 'right'
    },
    {
        property: 'onDrag',
        propType: 'function(e)',
        required: false,
        description: '拖拽时的回调',
        defaultValue: '-'
    },
    {
        property: '更多参数',
        propType: '-',
        required: false,
        description: '更多属性请参考 https://ant.design/components/drawer-cn/#API',
        defaultValue: '-'
    }
]

stories.add('DragDrawer 可拖拽的抽屉', () => (
    <div className='story_wrapper'>
        <h2>何时使用</h2>
        <p>{`用户点击表格对应字段，抽屉式浮窗展开的默认状态`}</p>
        <h2>示例</h2>
        <DragDrawerRender />
    </div>
), {
    info: {
        text: `
            代码示例：
            ~~~js
            <p style={style}>1、可拖拽</p>
            <Button type="primary" onClick={() => store.set({ visible1: true })}>Open</Button>
            <DragDrawer visible={state.visible1} onClose={() => store.set({ visible1: false })}>
                {drawerRender}
            </DragDrawer>

            <p style={style}>2、不可拖拽</p>
            <Button type="primary" onClick={() => store.set({ visible2: true })}>Open</Button>
            <DragDrawer draggable={false} visible={state.visible2} width={500} onClose={() => store.set({ visible2: false })}>
                {drawerRender}
            </DragDrawer>
            ~~~
        `,
        TableComponent: () => PropsTable({ propDefinitions })
    }
})
