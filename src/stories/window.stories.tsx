import React from 'react'
import { storiesOf } from '@storybook/react';
import { PropsTable } from './components/propsTable';
import { State, Store } from '@sambego/storybook-state';
import SwitchWindow from '../components/switchWindow';

const store = new Store({
    msg: ''
});
const stories = storiesOf('SwitchWindow 窗口切换事件监听', module);

const propDefinitions = [{
    property: 'onSwitch',
    propType: 'Function',
    required: false,
    description: '切换函数',
    defaultValue: ''
}]

stories.add('switchWindow', () => {
    const onSwitch = () => {
        store.set({ msg: 'window listener' })
        console.log('window listener')
    }

    return (
        <div className='story_wrapper'>
            <h2>何时使用</h2>
            <p>窗口切换事件监听</p>
            <h2>示例</h2>
            <p>请点击该页面任务区域</p>
            <State store={store}>
                {
                    (state) => {
                        return (
                            <SwitchWindow onSwitch={onSwitch}>
                                <div
                                    id="box"
                                    style={{
                                        height: '240px',
                                        width: '100%',
                                        padding: '10px',
                                        border: '1px solid rgba(0,0,0,.1)'
                                    }}
                                >
                                    {state.msg}
                                </div>
                            </SwitchWindow>
                        )
                    }
                }
            </State>
            {/* Prop Types 无法识别 State 回调的 SwitchWindow */}
            <SwitchWindow style={{ display: 'none' }} />
        </div>
    )
}, {
    info: {
        TableComponent: () => PropsTable({ propDefinitions }),
        propTablesExclude: [State],
        text: `
            代码示例：
            ~~~js
            import { SwitchWindow } from 'dt-react-component'
            <SwitchWindow onSwitch={onSwitch}>
                <div
                    id="chart"
                    style={{
                        height: '100%',
                        width: '100%'
                    }}
                >
                </div>
            </SwitchWindow>
            ~~~
        `
    }
})
