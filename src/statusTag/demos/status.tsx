import React from 'react';
import { Space } from 'antd';
import { StatusTag } from 'dt-react-component';

export default () => {
    return (
        <Space direction="horizontal">
            <StatusTag color="blue" />
            <StatusTag color="green" />
            <StatusTag color="purple" />
            <StatusTag color="yellow" />
        </Space>
    );
};
