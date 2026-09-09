import React from 'react';
import { Table } from 'dt-react-component';

import type { ColumnsType } from '..';

interface DataType {
    id: number;
    name: string;
    age: number;
    city: string;
    address: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Basic Information',
        tooltip: 'Personal information',
        children: [
            {
                title: 'Name',
                dataIndex: 'name',
                tooltip: 'User name',
            },
            {
                title: 'Age',
                dataIndex: 'age',
            },
        ],
    },
    {
        title: 'Contact Address',
        children: [
            {
                title: 'City',
                dataIndex: 'city',
            },
            {
                title: 'Address',
                dataIndex: 'address',
                tooltip: 'Detailed contact address',
            },
        ],
    },
];

const dataSource: DataType[] = [
    {
        id: 1,
        name: 'ZhangSan',
        age: 17,
        city: 'New York',
        address: 'No. 1 Lake Park',
    },
    {
        id: 2,
        name: 'LiSi',
        age: 20,
        city: 'Beijing',
        address: 'No. 1 Lake Park',
    },
];

export default () => (
    <Table<DataType> rowKey="id" columns={columns} dataSource={dataSource} pagination={false} />
);
