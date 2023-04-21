import React from 'react';
import { Divider, Space } from 'antd';
import { StatusTag } from 'dt-react-component';
import { StatusTagType } from '../index';

export default () => {
    const types = ['warning', 'error', 'success', 'run', 'stopped'] as StatusTagType[];

    return (
        <>
            <Divider orientation="left">Presets</Divider>
            <Space direction="vertical">
                {types.map((type) => (
                    <StatusTag key={type} type={type}>
                        {type}
                    </StatusTag>
                ))}
            </Space>
            <Divider orientation="left">Custom</Divider>
            <Space direction="vertical">
                <StatusTag color="#f50">#f50</StatusTag>
                <StatusTag color="rgb(45, 183, 245)">rgb(45, 183, 245)</StatusTag>
                <StatusTag color="hsl(102, 53%, 61%)">hsl(102, 53%, 61%)</StatusTag>
                <StatusTag color="hwb(205 6% 9%)">hwb(205 6% 9%)</StatusTag>
            </Space>
        </>
    );
};
