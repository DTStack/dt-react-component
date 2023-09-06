import React from 'react';
import { Input } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { ContentLayout } from 'dt-react-component';

export default () => {
    const columns: ColumnsType<{
        key: string;
        name: string;
        age: number;
        address: string;
    }> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text: string) => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];
    return (
        <ContentLayout height="400px">
            <ContentLayout.Header>
                <Input.Search placeholder="请输入搜索内容" style={{ width: 256 }} />
            </ContentLayout.Header>
            <ContentLayout.Table
                columns={columns}
                dataSource={[
                    {
                        key: '1',
                        name: 'John Brown',
                        age: 32,
                        address: 'New York No. 1 Lake Park',
                    },
                    {
                        key: '2',
                        name: 'Jim Green',
                        age: 42,
                        address: 'London No. 1 Lake Park',
                    },
                    {
                        key: '3',
                        name: 'Joe Black',
                        age: 32,
                        address: 'Sidney No. 1 Lake Park',
                    },
                    {
                        key: '4',
                        name: 'Joe Black1',
                        age: 32,
                        address: 'Sidney No. 1 Lake Park',
                    },
                    {
                        key: '5',
                        name: 'Joe Black2',
                        age: 32,
                        address: 'Sidney No. 1 Lake Park',
                    },
                    {
                        key: '6',
                        name: 'Joe Black3',
                        age: 32,
                        address: 'Sidney No. 1 Lake Park',
                    },
                ]}
                pagination={false}
            />
        </ContentLayout>
    );
};
