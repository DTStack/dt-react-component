import React from 'react'
import { storiesOf } from '@storybook/react';
import { PropsTable } from './components/propsTable';
import { State, Store } from '@sambego/storybook-state';
import { object } from '@storybook/addon-knobs';
import SwitchWindow from '../components/switchWindow';
import ExampleContainer from './components/exampleCode'

const store = new Store({
    msg: ''
});

const otherDependencies = `import { SwitchWindow } from 'dt-react-component'`

const functionCode = `
    state={
        msg: ''
    }

    onSwitch = () => {
        this.setState({
            msg: 'window listener'
        })
        console.log('window listener')
    }
`

const code = `<SwitchWindow onSwitch={this.onSwitch}>
                <div
                    id="box"
                    style={{
                        height: '240px',
                        width: '100%',
                        padding: '10px',
                        border: '1px solid rgba(0,0,0,.1)'
                    }}
                >
                    {this.state.msg}
                </div>
            </SwitchWindow>`

const stories = storiesOf('SwitchWindow 窗口切换事件监听', module);

const propDefinitions = [{
    property: 'onSwitch',
    propType: 'Function',
    required: false,
    description: '切换函数',
    defaultValue: ''
}]

stories.add('switchWindow', () => {
    const groupId = 'switchWindow'
    const defaultStyle = {
        height: '240px',
        width: '100%',
        padding: '10px',
        border: '1px solid rgba(0,0,0,.1)'
    }
    const style = object('style', defaultStyle, groupId)
    const onSwitch = (e) => {
        store.set({ msg: 'window listener' })
        console.log('window listener')
    }

    return (
        <div className='story_wrapper'>
            <h2>何时使用</h2>
            <p>窗口切换事件监听</p>
            <h2>示例</h2>
            <p>请点击该页面任务区域</p>
            <ExampleContainer
                otherDependencies={otherDependencies}
                code={code}
                hasCodeSandBox={true}
                functionCode={functionCode}
            >
                <SwitchWindow onSwitch={onSwitch}>
                    <div
                        id="box"
                        style={style}
                    >
                        {store.get('msg')}
                    </div>
                </SwitchWindow>
            </ExampleContainer>
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
