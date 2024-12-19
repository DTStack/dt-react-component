import React, { useState } from 'react';
import { Space } from 'antd';
import { Chat } from 'dt-react-component';

export default function () {
    const [value, setValue] = useState('');
    const [content, setContent] = useState('# 大标题\n## 小标题');

    return (
        <Space direction="vertical" style={{ width: '100%' }}>
            <Chat.Prompt content={content} />
            <Space>
                <Chat.Input
                    value={value}
                    onChange={setValue}
                    placeholder="请输入"
                    onPressEnter={() => value.trim() && setContent(value.trim())}
                />
                <Chat.Button
                    type="primary"
                    disabled={!value.trim()}
                    icon={<Chat.Icon.SendIcon style={{ fontSize: 16, padding: '8px 16px' }} />}
                    onClick={() => setContent(value.trim())}
                />
            </Space>
        </Space>
    );
}
