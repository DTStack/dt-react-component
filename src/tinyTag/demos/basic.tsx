import React from 'react';
import { Space } from 'antd';
import { TinyTag } from 'dt-react-component';

import './style.scss';

export default () => {
    return (
        <Space size={6}>
            <TinyTag value="袋鼠云" />
            <TinyTag className="data-tag" value="数据驱动" />
            <TinyTag className="ued-tag" value="UED" />
            <TinyTag type="fill" bgColor="#D56161" color="#fff" value="实体标签" />
        </Space>
    );
};
