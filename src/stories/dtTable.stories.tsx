import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';
import ExampleContainer from './components/exampleCode';
import DtTable from '../components/dtTable';
import { PropsTable } from './components/propsTable';
import './style/index.scss';
import '../styles/index.scss';

const stories = storiesOf('DtTable 带分页的表格', module);
const propDefinitions = [
    {
        property: 'pagination',
        propType: '-',
        required: false,
        description: '是否展示分页，参数同 Antd Pagination Props: https://3x.ant.design/components/pagination-cn/#API',
        defaultValue: 'PaginationProps|false'
    },
    {
        property: 'emptyText',
        propType: 'string',
        required: false,
        description: '没有数据时展示的文字',
        defaultValue: '--'
    },
    {
        property: 'TableProps',
        propType: '-',
        required: false,
        description: '参数同 Antd Table Props: https://3x.ant.design/components/table-cn/#Table',
        defaultValue: 'TableProps'
    }
]

const otherDependencies = `import { DtTable } from 'dt-react-component';`

const code = `<div>
                <DtTable
                    columns={[
                        {
                            title: 'Name',
                            dataIndex: 'name',
                            key: 'name',
                            filters: [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }],
                            render: text => <a>{text}</a>
                        },
                        {
                            title: 'Age',
                            dataIndex: 'age',
                            key: 'age'
                        },
                        {
                            title: 'Address',
                            dataIndex: 'address',
                            key: 'address'
                        },
                        {
                            title: 'Action',
                            key: 'action',
                            render: (text, record) => (
                                <span>
                                    <a>Invite {record.name}</a> | <a>Delete</a>
                                </span>)
                        }
                    ]}
                    dataSource={[
                        {
                            key: '2',
                            name: 'Jim Green',
                            age: 42,
                            address: 'London No. 1 Lake Park'
                        },
                        {
                            key: '3',
                            name: 'Joe Black',
                            age: 32,
                            address: 'Sidney No. 1 Lake Park'
                        }
                    ]}
                    pagination={
                        {
                            total: 2,
                            pageSize: 20,
                            current: 1,
                            showTotal: () => (
                                <div>
                                    总共 <a>{2}</a> 条数据,每页显示{20}条
                                </div>
                            )
                        }
                    }
                    onChange={(pagination, filters, sorter) => {
                        console.log('handleTableChange', pagination, filters, sorter)
                    }}
                />
            </div>`

stories.add('DtTable', () => {
    const groupId = 'dtTable';
    const defaultColumns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            filters: [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }],
            render: text => <a>{text}</a>
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age'
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address'
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span>
                    <a>Invite {record.name}</a> | <a>Delete</a>
                </span>)
        }
    ]
    const defaultDataSource = [
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park'
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park'
        }
    ]
    const total = defaultDataSource.length;
    const pageSize = 20;
    const defaultPagination = {
        total,
        pageSize,
        current: 1,
        showTotal: () => (
            <div>
                总共 <a>{total}</a> 条数据,每页显示{pageSize}条
            </div>
        )
    };
    const handleTableChange = (pagination, filters, sorter) => {
        console.log('handleTableChange', pagination, filters, sorter)
    }

    const columns = object('columns', defaultColumns, groupId);
    const dataSource = object('dataSource', defaultDataSource, groupId);
    const pagination = object('pagination', defaultPagination, groupId);
    const labelStyle = { margin: '20px 16px' };
    return (
        <div className='story_wrapper'>
            <h2>何时使用</h2>
            <p>DtTable 组件作用于展示带有分页的列表</p>
            <h2>示例</h2>
            <ExampleContainer otherDependencies={otherDependencies} code={code} hasCodeSandBox={true}>
                <div>
                    <div style={labelStyle}>基本用法:</div>
                    <DtTable columns={columns} dataSource={dataSource} pagination={pagination} onChange={handleTableChange} />
                </div>
                <div>
                    <div style={labelStyle}>加载中:</div>
                    <DtTable columns={columns} dataSource={dataSource} pagination={pagination} loading={true} onChange={handleTableChange} />
                </div>
            </ExampleContainer>
        </div>
    )
}, {
    info: {
        text: `
        代码示例：
        ~~~js
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                filters: [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }],
                render: text => <a>{text}</a>
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age'
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address'
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <span>
                        <a>Invite {record.name}</a>
                        <Divider type="vertical" />
                        <a>Delete</a>
                    </span>)
            }
        ]
        const dataSource = [
            {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park'
            },
            {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park'
            }
        ]

        const total = defaultDataSource.length;
        const pageSize = 20;
        const pagination = {
            total,
            pageSize,
            current: 1,
            showTotal: () => (
                <div>
                    总共 <a>{total}</a> 条数据,每页显示{pageSize}条
                </div>
            )
        };

        const handleTableChange = (pagination, filters, sorter) => {
            console.log('handleTableChange', pagination, filters, sorter)
        }

        <DtTable columns={columns} dataSource={dataSource} pagination={pagination} onChange={handleTableChange} />
        ~~~
        `,
        TableComponent: () => PropsTable({ propDefinitions })
    }
})
