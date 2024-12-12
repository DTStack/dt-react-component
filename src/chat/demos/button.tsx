import React from 'react';
import { Space } from 'antd';
import { Chat } from 'dt-react-component';

export default function () {
    return (
        <Space>
            <Chat.Button
                type="primary"
                icon={<Chat.Icon.SendIcon style={{ fontSize: 16, padding: '8px 16px' }} />}
            />
            <Chat.Button
                type="primary"
                disabled
                icon={<Chat.Icon.SendIcon style={{ fontSize: 16, padding: '8px 16px' }} />}
            />
            <Chat.Button
                type="secondary"
                icon={<Chat.Icon.SendIcon style={{ fontSize: 16, padding: '8px 16px' }} />}
            />
            <Chat.Button
                type="secondary"
                disabled
                icon={<Chat.Icon.SendIcon style={{ fontSize: 16, padding: '8px 16px' }} />}
            />
        </Space>
    );
}
