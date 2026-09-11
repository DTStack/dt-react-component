import React, { useState } from 'react';
import { Button, Space } from 'antd';
import { TinyTag } from 'dt-react-component';

export default () => {
    const [visible, setVisible] = useState(false);

    return (
        <Space direction="vertical" size={8}>
            <Button type="primary" onClick={() => setVisible(!visible)}>
                {visible ? '隐藏标签' : '显示标签'}
            </Button>
            <div style={{ display: visible ? 'block' : 'none' }}>
                <TinyTag value="隐藏渲染后显示的标签" />
            </div>
        </Space>
    );
};
