import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from 'antd';
import { State, Store } from '@sambego/storybook-state';
import { text, object } from '@storybook/addon-knobs';
import SlidePane from '../components/slidePane';
import { PropsTable } from './components/propsTable';
const store = new Store({
    visible: false
});

// 定制化component props
const propDefinitions = [{
    property: 'visible',
    propType: 'boolean',
    required: true,
    description: 'slidepanel是否可见',
    defaultValue: 'false'
}, {
    property: 'children',
    propType: 'ReactNode',
    required: false,
    description: 'slidepanel内容',
    defaultValue: ''
}, {
    property: 'className',
    propType: 'string',
    required: false,
    description: '类名',
    defaultValue: ''
}, {
    property: 'onClose',
    propType: 'function',
    required: false,
    description: '点击slidepanel回调',
    defaultValue: ''
}]
const stories = storiesOf('slidePane', module);
stories.add('slidepanel', () => {
    const groupId = 'slidepanel'
    const defaultStyle = {
        right: '-20px',
        width: '80%',
        minHeight: '600px',
        height: '100%'
    }
    const style = object('style', defaultStyle, groupId);
    const defayltText = 'hello slidePanel'
    const children = text('children', defayltText, groupId)
    return (
        <div className='story_wrapper'>
            <h2>
                slidepanel面板组件作用于右侧展示更多信息
            </h2>
            <Button onClick={() => {
                const actionVal: any = store.get('visible')
                action(actionVal)
                store.set({
                    visible: !store.get('visible')
                })
            }}>click me</Button>
            <h3>
                尝试在 knobs 栏调试 slidePanel 组件吧
            </h3>
            <State store={store}>
                <SlidePane
                    visible={store.get('visible')}
                    style={style}
                    onClose={() => {
                        action('我该关闭啦')
                        store.set({
                            visible: false
                        })
                    }}
                >
                    <div>{children}</div>
                </SlidePane>
            </State>
        </div>
    )
}, {
    info: {
        text: `
        #### 使用示例
        ~~~js
        <SlidePane
            className="m-tabs"
            visible={this.props.visible}
            style={style}
            onClose={this.props.onClose}
        />
        ~~~
        `,
        TableComponent: () => PropsTable({ propDefinitions }),
        propTablesExclude: [Button, State]
    }
})
