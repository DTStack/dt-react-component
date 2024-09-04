import React from 'react';
import { SketchOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import { StatusTag } from 'dt-react-component';

export default () => {
    return (
        <Space direction="vertical">
            <StatusTag color="green" type="outline" icon={<SketchOutlined />}>
                成功
            </StatusTag>
            <StatusTag color="blue" icon={<SketchOutlined />}>
                运行中
            </StatusTag>
            <StatusTag color="yellow" type="fill" icon={<SketchOutlined />}>
                运行中
            </StatusTag>
            <StatusTag color="#2f10fb" type="fill" icon={<SketchOutlined />}>
                运行中
            </StatusTag>
        </Space>
    );
};
