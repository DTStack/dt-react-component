import React from 'react'
import { storiesOf } from '@storybook/react';
import { Table } from 'antd';
import { cloneDeep } from 'lodash'
import { State, Store } from '@sambego/storybook-state';
// import { text } from '@storybook/addon-knobs';
import TableCell from '../components/tableCell';
import ExampleContainer from './components/exampleCode';
import { PropsTable } from './components/propsTable';

import '../styles/index.scss';

const propDefinitions = [{
    property: 'value',
    propType: 'string',
    required: false,
    description: '表格内文本框的值',
    defaultValue: ''
}]

const mockData = [{
    index: 1,
    textVal: '我是测试数据'
}, {
    index: 2,
    textVal: '我是样本数据'
}]

const store = new Store({
    dataSource: mockData,
    value: ''
});

const onValuesChange = (index, field, value) => {
    const dataSource = cloneDeep(store.get('dataSource'))
    dataSource[index][field] = value
    store.set({
        dataSource: dataSource
    })
}

// tableCell没有定义onChange 属性
const getCols = () => {
    return [{
        title: 'index',
        dataIndex: 'index'
    }, {
        title: '文本',
        dataIndex: 'textVal',
        render: (text, record, index) => {
            return <TableCell
                value={text}
                onChange={e => {
                    onValuesChange(index, 'textVal', e?.target?.value)
                }}
            />
        }
    }]
}

const otherDependencies = `import { Table } from 'antd'
import { cloneDeep } from 'lodash'
import { TableCell } from 'dt-react-component'
`

// 由于没有定义一个参数可以插入mockData的定义代码， 暂时存在组件中
const functionCode = `state={
    dataSource: this.mockData
}

mockData = [{
    index: 1,
    textVal: '我是测试数据'
}, {
    index: 2,
    textVal: '我是样本数据'
}]

getCols = () => {
    return [{
        title: 'index',
        dataIndex: 'index'
    }, {
        title: '文本',
        dataIndex: 'textVal',
        render: (text, record, index) => {
            return <TableCell
                value={text}
                onChange={e => {
                    this.onValuesChange(index, 'textVal', e.target.value)
                }}
            />
        }
    }]
}

onValuesChange = (index, field, value) => {
    const dataSource = cloneDeep(this.state.dataSource)
    dataSource[index][field] = value
    this.setState({
        dataSource: dataSource
    })
}
`

const code = `
<div>
    <p>纯文本输入</p>
    <TableCell style={{ border: '1px solid #ccc' }} />
    <p>表格内渲染</p>
    <Table
    dataSource={this.state.dataSource}
    columns={this.getCols}
    />
</div>
`

const stories = storiesOf('TableCell 表格内文本框', module);
stories.add('tableCell', () => {
    // const groupId = 'tablecell'
    const cols = getCols();
    // text('value', '', groupId)
    return (
        <div className='story_wrapper'>
            <h2>何时使用</h2>
            <p>表格内文本区域</p>
            <h2>示例</h2>
            <p>纯文本输入</p>
            <ExampleContainer
                code={code}
                functionCode={functionCode}
                otherDependencies={otherDependencies}
                hasCodeSandBox
            >
                <p>表格内渲染</p>
                <State store={store}>
                    <TableCell style={{ border: '1px solid #ccc' }} />
                </State>

                <State store={store}>
                    {state =>
                        <Table
                            dataSource={state.dataSource}
                            columns={cols}
                        />
                    }
                </State>
            </ExampleContainer>
        </div>
    )
}, {
    info: {
        text: `
        代码示例：
        ~~~js
        // 基础使用
        import { TableCell } from 'dt-react-component'
        <TableCell />
        ~~~
        ~~~js
        // 表格内使用
        const mockData = [{
            index: 1,
            textVal: '我是测试数据'
        }, {
            index: 2,
            textVal: '我是样本数据'
        }]
        const getCols = () => {
            return [{
                title: 'index',
                dataIndex: 'index'
            }, {
                title: '文本',
                dataIndex: 'textVal',
                render: (text) => {
                    return <TableCell value={text} />
                }
            }]
        }
        <Table
            dataSource={mockData}
            columns={cols}
        />
        ~~~
        `,
        TableComponent: () => PropsTable({ propDefinitions }),
        // 此处处理方法有待讨论
        propTablesExclude: [Table, TableCell, State]
    }
})
