import React, { useState } from 'react';
import { Divider, Radio, Space } from 'antd';
import { StatusTag } from 'dt-react-component';
import { StatusTagType } from 'dt-react-component/statusTag';

export default () => {
    const presets = ['warning', 'error', 'success', 'run', 'stopped', 'frozen'];

    const [type, setType] = useState<StatusTagType>('default');

    return (
        <>
            <Radio.Group value={type} onChange={(e) => setType(e.target.value)}>
                <Radio.Button value="default">无外边框</Radio.Button>
                <Radio.Button value="outline">有外边框</Radio.Button>
                <Radio.Button value="fill">有背景色</Radio.Button>
            </Radio.Group>
            <Divider orientation="left">Presets</Divider>
            <Space direction="vertical">
                {presets.map((preset) => (
                    <StatusTag key={preset} type={type} color={preset}>
                        {preset}
                    </StatusTag>
                ))}
            </Space>
            <Divider orientation="left">Custom</Divider>
            <Space direction="vertical">
                <StatusTag type={type} color="#f50">
                    #f50
                </StatusTag>
                <StatusTag type={type} color="rgb(45, 183, 245)">
                    rgb(45, 183, 245)
                </StatusTag>
                <StatusTag type={type} color="#a31980">
                    #a31980
                </StatusTag>
                <StatusTag type={type} color="#0fd5e8">
                    #0fd5e8
                </StatusTag>
            </Space>
        </>
    );
};
