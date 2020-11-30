import React from 'react'
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { PropsTable } from './components/propsTable';
import { State, Store } from '@sambego/storybook-state';
import Resize from '../components/resize';

const store = new Store({
    width: 0
});
const stories = storiesOf('Resize Resize 事件监听', module);
stories.addDecorator(withKnobs)

const propDefinitions = [{
    property: 'onResize',
    propType: 'Function',
    required: false,
    description: '重置元素大小的函数',
    defaultValue: ''
}, {
    property: 'children',
    propType: 'ReactNode',
    required: true,
    description: '子元素',
    defaultValue: ''
}]

stories.add('resize', () => {
    const onResize = () => {
        const box = document.getElementById('box');
        store.set({ width: box.clientWidth });
        console.log(store.get('width'))
    }

    return (
        <div className='story_wrapper'>
            <h2>何时使用</h2>
            <p>元素大小自适应调整，常用于图表</p>
            <h2>示例</h2>
            <p>请调整窗口大小以查看效果</p>
            <State store={store}>
                {
                    (state) => {
                        console.log(state);
                        return (
                            <Resize onResize={onResize}>
                                <div
                                    id="box"
                                    style={{
                                        height: '240px',
                                        width: '100%',
                                        padding: '10px',
                                        border: '1px solid rgba(0,0,0,.1)'
                                    }}
                                >
                                    {store.get('width')}
                                </div>
                            </Resize>
                        )
                    }
                }
            </State>
            {/* Prop Types 无法识别 State 回调的 Resize，这里做下处理 */}
            <Resize><div style={{ display: 'none' }}></div></Resize>
        </div>
    )
}, {
    info: {
        TableComponent: () => PropsTable({ propDefinitions }),
        propTablesExclude: [State],
        text: `
            代码示例：
            ~~~js
            import { Resize } from 'dt-react-component'
            <Resize onResize={onResize}>
                <div
                    id="chart"
                    style={{
                        height: '100%',
                        width: '100%'
                    }}
                >
                </div>
            </Resize>
            ~~~
        `
    }
})
