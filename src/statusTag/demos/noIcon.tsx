import React from 'react';
import { Space } from 'antd';
import { StatusTag } from 'dt-react-component';

export default () => {
    const presets = ['blue', 'yellow', 'green', 'gray', 'red', 'purple', 'cyan', 'pink'];

    return (
        <Space direction="vertical">
            {presets.map((preset) => (
                <StatusTag key={preset} type="fill" color={preset} icon={false}>
                    {preset}
                </StatusTag>
            ))}
        </Space>
    );
};
