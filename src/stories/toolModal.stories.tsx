import React from 'react';
import { storiesOf } from '@storybook/react';
import { State, Store } from '@sambego/storybook-state';
import { text, boolean, array } from '@storybook/addon-knobs';
import { LockOutlined, UnlockOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { PropsTable } from './components/propsTable';
import ExampleContainer from './components/exampleCode';
import ToolModal from '../components/toolModal';

import '../styles/index.scss';

const propDefinitions = [
    {
        property: 'fullscreen',
        propType: 'boolean',
        required: false,
        description: '是否使用 FullScreenButton 组件内置的图标',
        defaultValue: 'false',
    },
    {
        property: 'toolbox',
        propType: 'React.DOM || []',
        required: false,
        description: '用户自定义一些 tool',
        defaultValue: 'null',
    },
    {
        property: 'visible',
        propType: 'boolean',
        required: true,
        description: '控制 modal 显示隐藏',
        defaultValue: 'false',
    },
    {
        property: '其余属性',
        propType: '--',
        required: false,
        description: '继承自Antd Modal API',
        defaultValue: '--',
    },
];
const store = new Store({
    visible: false,
});

const otherDependencies = `import { Button } from 'antd';
import { LockOutlined, UnlockOutlined } from '@ant-design/icons';
import { ToolModal } from 'dt-react-component'`;

const functionCode = `state={
        visible: false
    }
`;

const code = `<div>
                <Button onClick={() => {
                    this.setState({
                        visible: true
                    })
                }}>click me</Button>
                <ToolModal
                    title="ToolModal"
                    wrapClassName="vertical-center-modal m-log-modal dt_modal-close__icon"
                    bodyStyle={{
                        padding: '0 0 0 0',
                        position: 'relative'
                    }}
                    style={{ height: '560px' }}
                    fullScreen={true}
                    width={800}
                    toolbox={[<LockOutlined key='1' />, <UnlockOutlined key='2' />]}
                    visible={this.state.visible}
                    maskClosable={false}
                    onOk={() => {this.setState({ visible: false })}}
                    onCancel={() => { this.setState({ visible: false }) }}
                >
                    <p style={{ textAlign: 'center' }}>i am tool modal</p>
                </ToolModal>
            </div>`;

const stories = storiesOf('ToolModal 工具弹框', module);

stories.add(
    'toolModal',
    () => {
        const groupId = 'toolmodal';
        const defaultTitle = `ToolModal`;
        const defaultMaskClosable = false;
        const maskClosable = boolean('maskClosable', defaultMaskClosable, groupId);
        const defaultFullscreen = true;
        const fullscreen = boolean('fullscreen', defaultFullscreen, groupId);
        const title = text('title', defaultTitle, groupId);
        const defaultText = `i am tool modal`;
        const children = text('children', defaultText, groupId);
        const defaultToolbox = [<LockOutlined key="1" />, <UnlockOutlined key="2" />];
        const toolbox = array('toolbox', defaultToolbox, groupId);

        return (
            <div className="story_wrapper">
                <h2>何时使用</h2>
                <p>带有全屏以及可在 modal 上自定义一些 tool</p>
                <h2>示例</h2>
                <ExampleContainer
                    otherDependencies={otherDependencies}
                    code={code}
                    hasCodeSandBox
                    functionCode={functionCode}
                >
                    <Button
                        onClick={() => {
                            store.set({
                                visible: !store.get('visible'),
                            });
                        }}
                    >
                        click me
                    </Button>
                    <State store={store}>
                        <ToolModal
                            bodyStyle={{
                                padding: '0 0 0 0',
                                position: 'relative',
                            }}
                            title={title}
                            width={800}
                            maskClosable={maskClosable}
                            fullscreen={fullscreen}
                            toolbox={toolbox}
                            style={{ height: '560px' }}
                            wrapClassName="vertical-center-modal m-log-modal dt_modal-close__icon"
                            visible={store.get('visible')}
                            onOk={() => {
                                store.set({ visible: false });
                            }}
                            onCancel={() => {
                                store.set({ visible: false });
                            }}
                        >
                            <p style={{ textAlign: 'center' }}>{children}</p>
                        </ToolModal>
                    </State>
                </ExampleContainer>
                <p>尝试在 knobs 栏调试 toolModal 组件</p>
            </div>
        );
    },
    {
        info: {
            text: `
        代码示例：
        ~~~js
            import { ToolModal } from 'dt-react-component';
            import { LockOutlined, UnlockOutlined } from '@ant-design/icons'
            <ToolModal
                bodyStyle={{
                    position: 'relative'
                }}
                title="ToolModal"
                width={800}
                maskClosable={false}
                visible={visible}
                toolbox={[<LockOutlined key='1' />, <UnlockOutlined key='2' />]}
                onOk={() => {  }}
                onCancel={() => {  }}
            >
                <p style={{ textAlign: 'center' }}>i am tool modal</p>
            </ToolModal>
        ~~~
        `,
            propTablesExclude: [State, Button],
            TableComponent: () => PropsTable({ propDefinitions }),
        },
    }
);
