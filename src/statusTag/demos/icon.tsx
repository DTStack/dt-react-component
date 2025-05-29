import React from 'react';
import { TargetFilled } from '@dtinsight/react-icons';
import { Space } from 'antd';
import { StatusTag } from 'dt-react-component';

export default () => {
    return (
        <Space direction="vertical">
            <StatusTag color="green" type="outline" icon={<TargetFilled />}>
                成功
            </StatusTag>
            <StatusTag color="blue" icon={<TargetFilled />}>
                运行中
            </StatusTag>
            <StatusTag color="yellow" type="fill" icon={<TargetFilled />}>
                运行中
            </StatusTag>
            <StatusTag color="#2f10fb" type="fill" icon={<TargetFilled />}>
                运行中
            </StatusTag>
        </Space>
    );
};
