import React from 'react';
import { Space } from 'antd';
import { Input } from 'dt-react-component';

export default () => {
    return (
        <Space direction="vertical">
            <Input
                style={{ width: 500 }}
                placeholder="输入中文回车不会触发 onPressEnter 事件"
                onPressEnter={() => alert('触发')}
            />
            <Input
                style={{ width: 500 }}
                placeholder="任意回车均触发 onPressEnterNative 事件"
                onPressEnterNative={() => alert('触发')}
            />
        </Space>
    );
};
