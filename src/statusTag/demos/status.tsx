import React from 'react';
import { Space } from 'antd';
import { StatusTag } from 'dt-react-component';

export default () => {
    return (
        <Space direction="vertical">
            <StatusTag color="run" />
            <StatusTag color="success" />
            <StatusTag color="stopped" />
            <StatusTag color="warning" />
        </Space>
    );
};
