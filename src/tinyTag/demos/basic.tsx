import React from 'react';
import { Space } from 'antd';
import { TinyTag } from 'dt-react-component';

export default () => {
    return (
        <Space size={6}>
            <TinyTag value="袋鼠云" />
            <TinyTag value="数据驱动" />
            <TinyTag value="UED" />
        </Space>
    );
};
