import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { PropsTable } from './components/propsTable';
import DragDrawerRender from './components/dragDrawer';

const stories = storiesOf('SlidePane 右侧面板', module);
stories.addDecorator(withKnobs);

const propDefinitions = [
    {
        property: 'visible',
        propType: 'boolean',
        required: true,
        description: 'Drawer 是否可见',
        defaultValue: '-',
    },
    {
        property: 'draggable',
        propType: 'boolean',
        required: false,
        description: 'Drawer 是否可拖拽',
        defaultValue: 'true',
    },
    {
        property: 'width',
        propType: 'number',
        required: false,
        description: 'Drawer 的宽度',
        defaultValue: 1000,
    },
    {
        property: 'minWidth',
        propType: 'number',
        required: false,
        description: 'Drawer 的最小宽度，单位 px',
        defaultValue: 720,
    },
    {
        property: 'maxWidth',
        propType: 'number',
        required: false,
        description: 'Drawer 的最大宽度，单位 px',
        defaultValue: 1256,
    },
    {
        property: 'closable',
        propType: 'boolean',
        required: false,
        description: '是否显示左上角的关闭按钮，关闭按钮在右上角',
        defaultValue: 'false',
    },
    {
        property: 'mask',
        propType: 'boolean',
        required: false,
        description: '是否展示遮罩',
        defaultValue: 'false',
    },
    {
        property: 'bodyStyle',
        propType: 'CSSProperties',
        required: false,
        description: '可用于设置 Drawer 内容部分的样式',
        defaultValue: '{ padding: 0 }',
    },
    {
        property: 'title',
        propType: 'React.ReactNode',
        required: false,
        description: '标题',
        defaultValue: 'null',
    },
    {
        property: 'placement',
        propType: 'string',
        required: false,
        description: '抽屉的方向，目前固定为 right',
        defaultValue: 'right',
    },
    {
        property: 'onDrag',
        propType: 'function(e)',
        required: false,
        description: '拖拽时的回调',
        defaultValue: '-',
    },
    {
        property: '更多参数',
        propType: '-',
        required: false,
        description: '更多属性请参考 https://ant.design/components/drawer-cn/#API',
        defaultValue: '-',
    },
];

stories.add(
    'DragDrawer 可拖拽的抽屉',
    () => (
        <div className="story_wrapper">
            <h2>何时使用</h2>
            <p>{`用户点击表格对应字段，抽屉式浮窗展开的默认状态`}</p>
            <h2>示例</h2>
            <DragDrawerRender />
        </div>
    ),
    {
        info: {
            text: `
            代码示例：
            ~~~js
            <p style={style}>1、可拖拽，有关闭图标</p>
            <Button type="primary" onClick={() => store.set({ visible1: !state.visible1 })}>{state.visible1 ? '关闭' : '打开'}</Button>
            <DragDrawer visible={state.visible1} closable onClose={() => store.set({ visible1: false })}>
                {drawerRender(state.drawerStr)}
            </DragDrawer>

            <p style={style}>2、不可拖拽，无关闭图标</p>
            <Button type="primary" onClick={() => store.set({ visible2: !state.visible2 })}>{state.visible2 ? '关闭' : '打开'}</Button>
            <DragDrawer draggable={false} visible={state.visible2} width={500} onClose={() => store.set({ visible2: false })}>
                {drawerRender(state.drawerStr)}
            </DragDrawer>

            <p style={style}>3、展开后可更换抽屉内容</p>
            <Button type="primary" onClick={() => store.set({ visible3: !state.visible3 })}>{state.visible3 ? '关闭' : '打开'}</Button>
            {
                state.visible3 && (<Button type="primary" style={{ marginLeft: 12 }} onClick={() => store.set({ drawerStr: state.drawerStr === '我是新的抽屉内容' ? drawerStr : '我是新的抽屉内容' })}>更换内容</Button>)
            }
            <DragDrawer visible={state.visible3} onClose={() => store.set({ visible3: false })}>
                {drawerRender(state.drawerStr)}
            </DragDrawer>

            <p style={style}>4、有蒙层，点击蒙层可关闭</p>
            <Button type="primary" onClick={() => store.set({ visible4: !state.visible4 })}>{state.visible4 ? '关闭' : '打开'}</Button>
            <DragDrawer draggable={false} mask visible={state.visible4} onClose={() => store.set({ visible4: false })}>
                {drawerRender(state.drawerStr)}
            </DragDrawer>
            ~~~
        `,
            TableComponent: () => PropsTable({ propDefinitions }),
        },
    }
);
