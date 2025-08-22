import React from 'react';
import { Space } from 'antd';
import { Button, Popconfirm } from 'dt-react-component';

export default () => (
    <Space>
        <Popconfirm title="主操作" type="primary">
            <Button type="primary">主操作</Button>
        </Popconfirm>
        <Popconfirm title="警告操作" type="warning">
            <Button type="default">警告</Button>
        </Popconfirm>
        <Popconfirm title="危险操作" type="danger">
            <Button danger>危险</Button>
        </Popconfirm>
    </Space>
);
