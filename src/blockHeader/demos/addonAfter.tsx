import React from 'react';
import { Input, Space } from 'antd';
import { BlockHeader } from 'dt-react-component';

export default () => (
    <Space size={12} direction="vertical" style={{ width: '100%' }}>
        <BlockHeader title="分类标题" addonAfter="这是 addonAfter 内容" />
        <BlockHeader
            background={false}
            title="分类标题"
            addonAfter={<Input placeholder="请输入" />}
        />
    </Space>
);
