import React from 'react'
import { storiesOf } from '@storybook/react';
import { State, Store } from '@sambego/storybook-state';
import { Button } from 'antd';
import { PropsTable } from './components/propsTable';
import ToolModal from '../components/toolModal';

import '../styles/index.scss';

const propDefinitions = [{
    property: 'visible',
    propType: 'boolean',
    required: false,
    description: '控制 modal 显示隐藏',
    defaultValue: 'false'
}, {
    property: 'toolbox',
    propType: 'React.DOM',
    required: false,
    description: '用户自定义一些 tool',
    defaultValue: 'null'
}, {
    property: 'fullscreen',
    propType: 'boolean',
    required: false,
    description: '是否使用 FullScreenButton 组件内置的图标',
    defaultValue: 'false'
}]
const store = new Store({
    visible: false
})

const stories = storiesOf('ToolModal 工具弹框', module);
stories.add('toolModal', () => {
    return (
        <div className='story_wrapper'>
            <h2>何时使用</h2>
            <p>带有全屏以及可在 modal 上自定义一些 tool</p>
            <h2>示例</h2>
            <Button onClick={() => {
                store.set({ visible: true })
            }}>click me</Button>
            <State store={store}>
                <ToolModal
                    bodyStyle={{
                        padding: '0 0 0 0',
                        position: 'relative'
                    }}
                    title="ToolModal"
                    width={800}
                    maskClosable={false}
                    style={{ height: '560px' }}
                    wrapClassName="vertical-center-modal m-log-modal dt_modal-close__icon"
                    visible={store.get('visible')}
                    onOk={() => { store.set({ visible: false }) }}
                    onCancel={() => { store.set({ visible: false }) }}
                >
                    <p style={{ textAlign: 'center' }}>i am tool modal</p>
                </ToolModal>
            </State>
        </div>
    )
}, {
    info: {
        text: `
        代码示例：
        ~~~js
            import { ToolModal } from 'dt-react-component';
            <ToolModal
                bodyStyle={{
                    position: 'relative'
                }}
                title="ToolModal"
                width={800}
                maskClosable={false}
                visible={visible}
                onOk={() => {  }}
                onCancel={() => {  }}
            >
                <p style={{ textAlign: 'center' }}>i am tool modal</p>
            </ToolModal>
        ~~~
        `,
        propTablesExclude: [State, Button],
        TableComponent: () => PropsTable({ propDefinitions })
    }
})
