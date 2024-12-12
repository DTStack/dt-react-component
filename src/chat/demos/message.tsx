import React, { useMemo, useState } from 'react';
import { Button, Space } from 'antd';
import { Chat } from 'dt-react-component';
import { MessageStatus } from 'dt-react-component/chat/entity';

export default function () {
    const [status, setStatus] = useState<MessageStatus>(MessageStatus.DONE);

    const data = useMemo(() => {
        return [
            {
                id: new Date().valueOf().toString(),
                content: status === MessageStatus.DONE ? '输出完成' : '正在打字中...',
                status,
            } as any,
        ];
    }, [status]);

    return (
        <>
            <Space style={{ marginBottom: 6 }}>
                <Button type="primary" onClick={() => setStatus(MessageStatus.PENDING)}>
                    置为等待生成
                </Button>
                <Button type="primary" onClick={() => setStatus(MessageStatus.GENERATING)}>
                    置为生成中
                </Button>
                <Button type="primary" onClick={() => setStatus(MessageStatus.DONE)}>
                    置为完成
                </Button>
            </Space>
            <Chat.Message
                data={data}
                regenerate
                onStop={() => setStatus(MessageStatus.STOPPED)}
                onRegenerate={() => console.log('regenerate')}
            />
        </>
    );
}
