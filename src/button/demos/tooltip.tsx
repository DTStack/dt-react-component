import React from 'react';
import { DeleteOutlined, UploadOutlined } from '@dtinsight/react-icons';
import { Space } from 'antd';
import { Button } from 'dt-react-component';

export default function TooltipDemo() {
    return (
        <Space>
            <Button tooltip="上传文件">上传</Button>
            <Button icon={<UploadOutlined />} tooltip="上传文件" />
            <Button disabled tooltip="暂无操作权限">
                禁用按钮
            </Button>
            <Button
                danger
                icon={<DeleteOutlined />}
                tooltip={{ title: '删除后无法恢复', placement: 'bottom' }}
            >
                删除
            </Button>
        </Space>
    );
}
