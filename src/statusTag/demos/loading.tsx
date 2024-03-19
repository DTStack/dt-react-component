import React from 'react';
import { Space } from 'antd';
import { StatusTag } from 'dt-react-component';

export default () => {
    return (
        <Space direction="vertical">
            <StatusTag color="success" type="outline" loading>
                成功
            </StatusTag>
            <StatusTag color="run" type="outline" loading>
                运行中
            </StatusTag>
        </Space>
    );
};
