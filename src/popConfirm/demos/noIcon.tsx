import React from 'react';
import { PlusCircleFilled } from '@dtinsight/react-icons';
import { Space } from 'antd';
import { Button, Popconfirm } from 'dt-react-component';

export default () => (
    <Space>
        <Popconfirm title="没有图标" showIcon={false}>
            <Button>无图标确认</Button>
        </Popconfirm>
        <Popconfirm title="警告操作" icon={<PlusCircleFilled />}>
            <Button type="default">自定义icon</Button>
        </Popconfirm>
    </Space>
);
