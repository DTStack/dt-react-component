import React from 'react';
import { storiesOf } from '@storybook/react';
import KeyEventListener from '../components/keyEventListener';
import { PropsTable } from './components/propsTable';
import ExampleContainer from './components/exampleCode';
import './style';

const { KeyCombiner } = KeyEventListener;

const propDefinitions = [
    {
        property: 'keyMap',
        propType: 'object',
        required: false,
        description:
            '监听的一组 key map，eg: { 70: true, 91: true, 16: true } 则表示监听 command+shift+f 组合键',
        defaultValue: '',
    },
    {
        property: 'onTrigger',
        propType: 'function',
        required: false,
        description: '触发事件',
        defaultValue: '',
    },
];

const keyListenerPropDefinitions = [
    {
        property: 'onkeyDown',
        propType: 'function',
        required: false,
        description: '触发键盘按下事件',
        defaultValue: '',
    },
    {
        property: 'onKeyUp',
        propType: 'function',
        required: false,
        description: '触发键盘弹起事件',
        defaultValue: '',
    },
];

const stories = storiesOf('KeyEventListener 键盘监听', module);

// keyCombiner
stories.add(
    'keyCombiner',
    () => {
        const otherDependencies = `import KeyEventListener from 'dt-react-component';
const { KeyCombiner } = KeyEventListener`;
        const code = `keyAction = (evt: any) => {
                    evt.preventDefault();
                    console.log('command+shift+f action')
            }
            <KeyCombiner onTrigger={this.keyAction} keyMap={{
                70: true,
                91: true,
                16: true
            }}>
                {this.props.children}
            </KeyCombiner>`;
        const keyAction = (evt: any) => {
            evt.preventDefault();
            console.log('command+shift+f action');
        };
        return (
            <div className="story_wrapper">
                <h2>何时使用</h2>
                <p>监听键盘事件</p>
                <h2>示例</h2>
                <ExampleContainer otherDependencies={otherDependencies} code={code} hasCodeSandBox>
                    <KeyCombiner
                        onTrigger={keyAction}
                        keyMap={{
                            70: true,
                            91: true,
                            16: true,
                        }}
                    >
                        {<div>尝试按下 command+shift+f 看看控制台是否监听了键盘事件</div>}
                    </KeyCombiner>
                </ExampleContainer>
            </div>
        );
    },
    {
        info: {
            text: `
        代码示例：
        ~~~js
        <KeyCombiner onTrigger={keyAction} keyMap={{
            70: true,
            91: true,
            16: true
        }}>
            {<div>尝试按下 command+shift+f 看看控制台是否监听了键盘事件</div>}
        </KeyCombiner>
        ~~~
        `,
            TableComponent: () => PropsTable({ propDefinitions }),
        },
    }
);

// keyEventListener
stories.add(
    'keyEventListener',
    () => {
        const otherDependencies = `import KeyEventListener from 'dt-react-component';`;
        const code = `onkeyDown = (evt: any) => {
                evt.preventDefault();
                console.log('onkeyDown')
            }
            <KeyEventListener
                onKeyDown={this.onkeyDown}
                >
                    {this.props.children}
            </KeyEventListener>`;

        const onkeyDown = (evt: any) => {
            evt.preventDefault();
            console.log('onkeyDown');
        };
        return (
            <div className="story_wrapper">
                <h2>何时使用</h2>
                <p>监听键盘事件</p>
                <h2>示例</h2>
                <ExampleContainer otherDependencies={otherDependencies} code={code} hasCodeSandBox>
                    <KeyEventListener onKeyDown={onkeyDown}>
                        {<div>尝试按下任意键盘，看看控制台打印结果</div>}
                    </KeyEventListener>
                </ExampleContainer>
            </div>
        );
    },
    {
        info: {
            text: `
        代码示例：
        ~~~js
        <KeyEventListener onKeyDown={onkeyDown}>
            {<div>尝试按下任意键盘，看看控制台打印结果</div>}
        </KeyEventListener>
        ~~~
        `,
            TableComponent: () => PropsTable({ propDefinitions: keyListenerPropDefinitions }),
        },
    }
);
