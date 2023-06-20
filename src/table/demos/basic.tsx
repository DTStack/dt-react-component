import React from 'react';
import { Table } from 'dt-react-component';
import { ColumnType } from '..';

interface DataType {
    id: number;
    name: string;
    age: number;
    address: string;
}

const columns: ColumnType<DataType>[] = [
    { dataIndex: 'name', title: 'Name', tooltip: 'This is Name!' },
    {
        dataIndex: 'age',
        title: 'Age',
        tooltip: { icon: <span>❓</span>, title: 'This is Age!', color: 'pink' },
    },
    { dataIndex: 'address', title: 'Address' },
];

const dataSource = [
    { id: 1, name: 'ZhangSan', age: 17, address: 'New York No. 1 Lake Park' },
    { id: 2, name: 'LiSi', age: 17, address: 'Bei Jing No. 1 Lake Park' },
    { id: 3, name: 'WangWu', age: 17, address: 'Zhe Jiang No. 1 Lake Park' },
];

export default () => {
    return <Table rowKey="id" columns={columns} dataSource={dataSource} />;
};
