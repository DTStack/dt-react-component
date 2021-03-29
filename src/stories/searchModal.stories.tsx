import React from 'react'
import { storiesOf } from '@storybook/react';
import SearchModal from '../components/searchModal';
import { Button } from 'antd';
import { State, Store } from '@sambego/storybook-state';
import { PropsTable } from './components/propsTable';
import ExampleContainer from './components/exampleCode';
import '../styles/index.scss';

const store = new Store({
    visible: false,
    key: Math.random()
})
const propDefinitions = [{
    property: 'title',
    propType: 'string',
    required: false,
    description: 'modal 标题',
    defaultValue: '搜索并打开'
}, {
    property: '其余属性',
    propType: '--',
    required: false,
    description: '继承 Antd Modal、AutoComplete API',
    defaultValue: ''
}]

const otherDependencies = `import { Button } from 'antd';
import { SearchModal } from 'dt-react-component';`;

const functionCode = `state={
        visible: false,
        key: Math.random()
    }`;

const code = `<div>
                <Button
                    onClick={() => {
                        this.setState({
                            visible: true
                        })
                    }}
                >
                    点击我
                </Button>
                <SearchModal
                    name='notebook'
                    title='搜索并打开 notebook'
                    key={this.state.key}
                    visible={this.state.visible}
                    onSelect={() => { console.log('onSelect') }}
                    onChange={() => { console.log('onChange') }}
                    onCancel={() => {
                        this.setState({
                            visible: false,
                            key: Math.random() 
                        })
                    }}
                />
            </div>`;
const stories = storiesOf('SearchModal 全局搜索弹框', module);
stories.add('searchModal', () => {
    return (
        <div className='story_wrapper'>
            <h2>何时使用</h2>
            <p>路由未匹配上的展示页</p>
            <h2>示例</h2>
            <ExampleContainer
                otherDependencies={otherDependencies}
                code={code}
                hasCodeSandBox={true}
                functionCode={functionCode}
            >
                <Button onClick={() => {
                    store.set({ visible: true })
                }}>点击我</Button>
                <State store={store} >
                    {
                        (state) => <SearchModal
                            key={state.key}
                            visible={state.visible}
                            onCancel={() => {
                                store.set({ visible: false, key: Math.random() })
                            }}
                            onSelect={() => { console.log('onSelect') }}
                            onChange={() => { console.log('onChange') }}
                            title='搜索并打开 notebook'
                            name='notebook'
                        />
                    }
                </State>
                <SearchModal visible={false} style={{ display: 'none' }} />
            </ExampleContainer>
        </div>
    )
}, {
    info: {
        text: `
        代码示例：
        ~~~js
        import { SearchModal } from 'dt-react-component'
        <SearchModal
            visible={visible}
            onCancel={}
            onSelect={}
            onChange={}
            title=''
            name='notebook'
        />
        ~~~
        `,
        TableComponent: () => PropsTable({ propDefinitions }),
        propTablesExclude: [Button, State]
    }
})
