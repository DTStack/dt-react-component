import React from 'react';
import { SketchOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import { StatusTag } from 'dt-react-component';

export default () => {
    return (
        <Space direction="vertical">
            <StatusTag color="success" type="outline" icon={<SketchOutlined />}>
                成功
            </StatusTag>
            <StatusTag color="run" icon={<SketchOutlined />}>
                运行中
            </StatusTag>
            <StatusTag color="warning" type="fill" icon={<SketchOutlined />}>
                运行中
            </StatusTag>
            <StatusTag color="#2f10fb" type="fill" icon={<SketchOutlined />}>
                运行中
            </StatusTag>
        </Space>
    );
};
