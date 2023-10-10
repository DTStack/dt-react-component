import React from 'react';
import { Table, TinyTag } from 'dt-react-component';

interface DataType {
    id: number;
    name: string;
    age: number;
    type: 0 | 1 | 2;
    address: string;
}

const dataSource = [
    { id: 1, type: 0, name: 'ZhangSan', age: 17, address: 'New York No. 1 Lake Park' },
    { id: 2, type: 1, name: 'LiSi', age: 17, address: 'Bei Jing No. 1 Lake Park' },
    { id: 3, type: 2, name: 'WangWu', age: 17, address: 'Zhe Jiang No. 1 Lake Park' },
] as DataType[];

const typpings = ['卫生委员', '班长', '团委书记'];

export default () => {
    return (
        <Table<DataType>
            rowKey="id"
            columns={[
                {
                    dataIndex: 'name',
                    title: 'Name',
                    render(text, record) {
                        return (
                            <span>
                                {text}
                                <TinyTag value={typpings[record.type]} />
                            </span>
                        );
                    },
                },
                {
                    dataIndex: 'age',
                    title: 'Age',
                },
                { dataIndex: 'address', title: 'Address' },
            ]}
            dataSource={dataSource}
            pagination={false}
            bordered
        />
    );
};
