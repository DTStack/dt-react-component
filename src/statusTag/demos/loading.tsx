import React from 'react';
import { Space } from 'antd';
import { StatusTag } from 'dt-react-component';

export default () => {
    return (
        <Space direction="vertical">
            <StatusTag type="success" showBorder={false} loading>
                成功
            </StatusTag>
            <StatusTag type="run" loading>
                运行中
            </StatusTag>
        </Space>
    );
};
