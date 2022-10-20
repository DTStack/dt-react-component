import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from 'antd';
import { State, Store } from '@sambego/storybook-state';
import { text, object } from '@storybook/addon-knobs';
import SlidePane from '../components/slidePane';
import ExampleContainer from './components/exampleCode';
import { PropsTable } from './components/propsTable';
const store = new Store({
    visible: false,
});
const otherDependencies = `import { Button } from 'antd';
import { SlidePane } from 'dt-react-component';`;

const functionCode = `state={
    visible: false
}`;

const code = `<div>
                <Button
                    style={{ marginBottom: '10px' }}
                    onClick={() => {
                        this.setState({
                            visible: true
                        })
                    }}
                >
                    click me
                </Button>
                <SlidePane
                    visible={this.state.visible}
                    style={{
                        right: '-20px',
                        width: '80%',
                        minHeight: '600px',
                        height: '100%'
                    }}
                    onClose={() => {
                        this.setState({
                            visible: false
                        })
                    }}
                >
                    <div>hello slidePanel</div>
                </SlidePane>
            </div>`;

// 定制化component props
const propDefinitions = [
    {
        property: 'visible',
        propType: 'boolean',
        required: true,
        description: 'slidepanel 是否可见',
        defaultValue: 'false',
    },
    {
        property: 'onClose',
        propType: 'function',
        required: false,
        description: '点击 slidepanel 回调',
        defaultValue: '',
    },
];
const stories = storiesOf('SlidePane 右侧面板', module);
stories.add(
    'slidepanel 右侧面板',
    () => {
        const groupId = 'slidepanel';
        const defaultStyle = {
            right: '-20px',
            width: '80%',
            minHeight: '600px',
            height: '100%',
        };
        const style = object('style', defaultStyle, groupId);
        const defayltText = 'hello slidePanel';
        const children = text('children', defayltText, groupId);
        return (
            <div className="story_wrapper">
                <h2>何时使用</h2>
                <p>从页面右侧弹出面板，展示相应内容</p>
                <h2>示例</h2>
                <ExampleContainer
                    otherDependencies={otherDependencies}
                    code={code}
                    hasCodeSandBox={true}
                    functionCode={functionCode}
                >
                    <Button
                        style={{ marginBottom: '10px' }}
                        onClick={() => {
                            const actionVal: any = store.get('visible');
                            action(actionVal);
                            store.set({
                                visible: !store.get('visible'),
                            });
                        }}
                    >
                        click me
                    </Button>
                </ExampleContainer>
                <p>尝试在 knobs 栏调试 slidePanel 组件</p>
                <State store={store}>
                    <SlidePane
                        visible={store.get('visible')}
                        style={style}
                        onClose={() => {
                            action('我该关闭啦');
                            store.set({
                                visible: false,
                            });
                        }}
                    >
                        <div>{children}</div>
                    </SlidePane>
                </State>
            </div>
        );
    },
    {
        info: {
            source: false,
            text: `
        **代码示例：**
        ~~~js
        <SlidePane
            visible={this.props.visible}
            style={style}
            onClose={this.props.onClose}
        >
            'hello slidePanel'
        </SlidePane>
        ~~~
        `,
            TableComponent: () => PropsTable({ propDefinitions }),
            propTablesExclude: [Button, State],
        },
    }
);
