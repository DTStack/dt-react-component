import React from 'react';
import { Space } from 'antd';
import { StatusTag } from 'dt-react-component';

export default () => {
    return (
        <Space direction="vertical">
            <StatusTag type="run">运行中</StatusTag>
            <StatusTag type="success">成功</StatusTag>
            <StatusTag type="stopped">取消</StatusTag>
            <StatusTag type="error">运行失败</StatusTag>
            <StatusTag type="warning">提交中</StatusTag>
        </Space>
    );
};
