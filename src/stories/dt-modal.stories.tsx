import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from 'antd';
import DTModal from '../components/dt-modal';
import { PropsTable } from './components/propsTable';
import { State, Store } from '@sambego/storybook-state';
const stories = storiesOf('DT-Modal', module)

const store = new Store({
    visible: false
});

const propDefinitions = [{
    property: 'toolbox',
    propType: 'React.ReactNode',
    required: false,
    description: 'modal右上方操作',
    defaultValue: '-'
}, {
    property: 'fullscreen',
    propType: 'boolean',
    required: false,
    description: '是否页面全屏',
    defaultValue: 'false'
}]
stories.add('DTModal', () => {
    return <p className='story_wrapper'>
        <p>基于antd Modal 实现的可全屏的Modal</p>
        <Button onClick={() => {
            const actionVal: any = store.get('visible')
            action(actionVal)
            store.set({
                visible: true
            })
        }}>点击我一下吧</Button>
        <State store={store}>
            <DTModal
                bodyStyle={{
                    padding: '16px',
                    position: 'relative'
                }}
                title={'数据探查（展示前100条数据）'}
                width={800}
                style={{ height: '400px' }}
                visible={store.get('visible')}
                onOk={() => {
                    store.set({
                        visible: false
                    })
                }}
                onCancel={() => {
                    store.set({
                        visible: false
                    })
                }}
            >
                <p>test~~</p>
            </DTModal>
        </State>
    </p>
}, {
    info: {
        TableComponent: () => PropsTable({ propDefinitions }),
        text: `
            #### 使用示例
            ~~~js
            <DTModal
                title='modal'
                style={{ height: '400px' }}
                visible={}
                onOk={}
                onCancel={}
            >
                {children}
            </DTModal>
            ~~~
        `,
        propTablesExclude: [Button, State]
    }
})
