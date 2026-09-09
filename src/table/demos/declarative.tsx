import React from 'react';
import { Table } from 'dt-react-component';

interface DataType {
    id: number;
    name: string;
    age: number;
    address: string;
}

const dataSource: DataType[] = [
    { id: 1, name: 'ZhangSan', age: 17, address: 'New York No. 1 Lake Park' },
    { id: 2, name: 'LiSi', age: 20, address: 'Bei Jing No. 1 Lake Park' },
    { id: 3, name: 'WangWu', age: 23, address: 'Zhe Jiang No. 1 Lake Park' },
];

export default () => (
    <Table<DataType> rowKey="id" dataSource={dataSource} pagination={false}>
        <Table.Column<DataType> title="Name" dataIndex="name" />
        <Table.Column<DataType> title="Age" dataIndex="age" />
        <Table.Column<DataType> title="Address" dataIndex="address" />
    </Table>
);
