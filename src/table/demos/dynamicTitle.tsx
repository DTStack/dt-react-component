import React from 'react';
import { Table } from 'dt-react-component';

import type { ColumnsType } from '..';

interface DataType {
    id: number;
    name: string;
    age: number;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: ({ sortColumns }) => {
            const sortOrder = sortColumns?.find(({ column }) => column.dataIndex === 'age')?.order;
            const sortText = sortOrder === 'ascend' ? 'ascending' : 'descending';
            return sortOrder ? `Age (${sortText})` : 'Age';
        },
        dataIndex: 'age',
        sorter: (previous, next) => previous.age - next.age,
        tooltip: 'Click the sorter to see the title update',
    },
];

const dataSource: DataType[] = [
    { id: 1, name: 'ZhangSan', age: 23 },
    { id: 2, name: 'LiSi', age: 17 },
    { id: 3, name: 'WangWu', age: 20 },
];

export default () => (
    <Table<DataType> rowKey="id" columns={columns} dataSource={dataSource} pagination={false} />
);
