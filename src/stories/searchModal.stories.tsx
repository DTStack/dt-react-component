import React from 'react';
import { storiesOf } from '@storybook/react';
import SearchModal from '../components/searchModal';
import { Button, Select } from 'antd';
import { State, Store } from '@sambego/storybook-state';
import { PropsTable } from './components/propsTable';
import ExampleContainer from './components/exampleCode';
import '../styles/index.scss';

const { Option } = Select;
const initDataSource = ['gmail.com', '163.com', 'qq.com'];

const store = new Store({
    visible: false,
    visible1: false,
    dataSource: initDataSource,
    key: Math.random(),
});
const propDefinitions = [
    {
        property: 'title',
        propType: 'string',
        required: false,
        description: 'modal 标题',
        defaultValue: '搜索并打开',
    },
    {
        property: 'dataSource',
        propType: 'Array',
        required: true,
        description: '自定义DOM前缀',
        defaultValue: '【】',
    },
    {
        property: 'placeholder',
        propType: 'string',
        required: false,
        description: '搜索框提示信息',
        defaultValue: '',
    },
    {
        property: 'prefixRender',
        propType: 'ReactNode',
        required: false,
        description: '自定义DOM前缀',
        defaultValue: '搜索并打开',
    },
    {
        property: '其余属性',
        propType: '--',
        required: false,
        description: '继承 Antd Modal、AutoComplete API',
        defaultValue: '',
    },
];

const otherDependencies = `import { Button } from 'antd';
import { SearchModal } from 'dt-react-component';`;

const functionCode = `initDataSource = ['gmail.com', '163.com', 'qq.com'];
    state = {
        visible: false,
        dataSource: this.initDataSource,
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
                <SearchModal
                    prefixRender={
                        <Select defaultValue={1} style={{ width: '100%' }}>
                            <Option value={1}>任务名称</Option>
                            <Option value={2}>任务描述</Option>
                        </Select>
                    }
                    dataSource={state.dataSource}
                    visible={state.visible}
                    onCancel={() => {
                        store.set({ visible: false });
                    }}
                    onSelect={(value, option) => {
                        console.log('onSelect, ' + value, option);
                    }}
                    onChange={(value) => {
                        console.log('onChange' + value);
                        store.set({
                            dataSource: this.initDataSource.filter((item: string) => item.indexOf(value) !== -1)
                        });
                    }}
            />
                />
            </div>`;

const searchCode = `<div>
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
                    key={state.key}
                    dataSource={state.dataSource}
                    closable={false}
                    mask={false}
                    visible={state.visible1}
                    placeholder="选中后将关闭modal"
                    onSelect={(value, option) => {
                        console.log('onSelect, ' + value, option);
                        store.set({ visible1: false });
                    }}
                    onChange={(value) => {
                        console.log('onChange' + value);
                        store.set({
                            dataSource: this.initDataSource.filter((item: string) => item.indexOf(value) !== -1)
                        });
                    }}
                    title={null}
            />
            </div>`;
const stories = storiesOf('SearchModal 全局搜索弹框', module);
stories.add(
    'searchModal',
    () => {
        return (
            <div className="story_wrapper">
                <h2>何时使用</h2>
                <p>路由未匹配上的展示页</p>
                <h2>示例1</h2>
                <p>带有自定义DOM前缀</p>
                <ExampleContainer
                    otherDependencies={otherDependencies}
                    code={code}
                    hasCodeSandBox
                    functionCode={functionCode}
                >
                    <Button
                        onClick={() => {
                            store.set({ visible: true });
                        }}
                    >
                        点击我
                    </Button>
                    <State store={store}>
                        {(state) => (
                            <SearchModal
                                prefixRender={
                                    <Select defaultValue={1} style={{ width: '100%' }}>
                                        <Option value={1}>任务名称</Option>
                                        <Option value={2}>任务描述</Option>
                                    </Select>
                                }
                                dataSource={state.dataSource}
                                key={state.key}
                                visible={state.visible}
                                onCancel={() => {
                                    store.set({ visible: false, key: Math.random() });
                                }}
                                onSelect={(value, option) => {
                                    console.log('onSelect, ' + value, option);
                                }}
                                onChange={(value) => {
                                    console.log('onChange' + value);
                                    store.set({
                                        dataSource: initDataSource.filter(
                                            (item: string) => item.indexOf(value) !== -1
                                        ),
                                    });
                                }}
                            />
                        )}
                    </State>
                </ExampleContainer>
                <h2>示例2</h2>
                <p>只有搜索框</p>
                <ExampleContainer
                    otherDependencies={otherDependencies}
                    code={searchCode}
                    hasCodeSandBox
                    functionCode={functionCode}
                >
                    <Button
                        onClick={() => {
                            store.set({ visible1: true });
                        }}
                    >
                        点击我
                    </Button>
                    <State store={store}>
                        {(state) => (
                            <SearchModal
                                dataSource={state.dataSource}
                                closable={false}
                                mask={false}
                                visible={state.visible1}
                                placeholder="选中后将关闭modal"
                                onSelect={(value, option) => {
                                    console.log('onSelect, ' + value, option);
                                    store.set({ visible1: false });
                                }}
                                onChange={(value) => {
                                    console.log('onChange' + value);
                                    store.set({
                                        dataSource: initDataSource.filter(
                                            (item: string) => item.indexOf(value) !== -1
                                        ),
                                    });
                                }}
                                title={null}
                            />
                        )}
                    </State>
                </ExampleContainer>
            </div>
        );
    },
    {
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
            propTablesExclude: [Button, State],
        },
    }
);
