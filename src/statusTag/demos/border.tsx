import React, { useState } from 'react';
import { Radio, Space } from 'antd';
import { StatusTag } from 'dt-react-component';

export default () => {
    const [showBorder, setShowBorder] = useState<boolean>(true);
    return (
        <>
            <Space direction="vertical">
                <Radio.Group value={showBorder} onChange={(e) => setShowBorder(e.target.value)}>
                    <Radio.Button value>Default</Radio.Button>
                    <Radio.Button value={false}>无外边框</Radio.Button>
                </Radio.Group>
                <br />
                <StatusTag type="run" showBorder={showBorder}>
                    运行中
                </StatusTag>
                <StatusTag color="rgb(45, 183, 245)" showBorder={showBorder}>
                    rgb(45, 183, 245)
                </StatusTag>
            </Space>
        </>
    );
};
