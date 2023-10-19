import React from 'react';
import { Space } from 'antd';
import { TinyTag } from 'dt-react-component';

export default () => {
    return (
        <Space size={6}>
            <TinyTag value="袋鼠云" title="袋鼠云" />
            <TinyTag color="#d1d1d1" value="数据驱动" role="tag" />
            <TinyTag color="#d56161" value="UED" />
        </Space>
    );
};
