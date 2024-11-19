/**
 * background: '#f6f7f9'
 */
import React from 'react';
import { message, Space } from 'antd';
import { Chat } from 'dt-react-component';

export default function CodeBlock() {
    return (
        <Space direction="vertical" style={{ width: '100%' }}>
            <Chat.CodeBlock language="sql" copy={false} value="select * from table;" />
            <Chat.CodeBlock
                language="sql"
                copy={{
                    text: 'select',
                    tooltip: '点我复制',
                    onCopy: () => message.success('Copied'),
                }}
                value="select * from table;"
                convert={false}
            />
        </Space>
    );
}
