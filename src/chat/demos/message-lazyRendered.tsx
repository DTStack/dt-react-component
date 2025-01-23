import React, { useMemo } from 'react';
import { Chat } from 'dt-react-component';
import { MessageStatus } from 'dt-react-component/chat/entity';

export default function () {
    const data = useMemo(() => {
        return [
            {
                id: new Date().valueOf().toString(),
                content: '# 大标题',
                status: MessageStatus.DONE,
            } as any,
        ];
    }, []);

    return (
        <div style={{ height: 200, overflow: 'auto' }}>
            <div style={{ height: 600 }}>往下拉</div>
            <Chat.Message
                data={data}
                regenerate
                onLazyRendered={(cb) => {
                    console.log('beforeRender', window.performance.now());
                    cb().then(() => {
                        console.log('rendered', window.performance.now());
                    });
                }}
            />
        </div>
    );
}
