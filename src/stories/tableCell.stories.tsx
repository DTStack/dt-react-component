import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Table } from 'antd';
import TableCell from '../components/tableCell';

import '../styles/index.scss';

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

const stories = storiesOf('TableCell 表格内文本框', module);
stories.add('tableCell', () => {
    const cols = getCols();
    return (
        <div className='story_wrapper'>
            <h2>何时使用</h2>
            <p>表格内文本区域</p>
            <h2>示例</h2>
            <p>纯文本输入</p>
            <TableCell style={{ border: '1px solid #ccc' }} />
            <p>表格内渲染</p>
            <Table
                dataSource={mockData}
                columns={cols}
            />
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
        // TableComponent: () => PropsTable({ propDefinitions }),
        propTablesExclude: [Table, TableCell]
    }
})
