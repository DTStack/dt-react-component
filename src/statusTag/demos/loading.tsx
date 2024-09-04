import React from 'react';
import { Space } from 'antd';
import { StatusTag } from 'dt-react-component';

export default () => {
    return (
        <Space direction="vertical">
            <StatusTag color="green" type="outline" loading>
                成功
            </StatusTag>
            <StatusTag color="blue" type="outline" loading>
                运行中
            </StatusTag>
        </Space>
    );
};
