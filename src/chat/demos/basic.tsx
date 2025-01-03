import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { Chat } from 'dt-react-component';

import { mockSSE } from './mockSSE';

export default function () {
    const chat = Chat.useChat();
    const [value, setValue] = useState('');

    const handleSubmit = (raw: string = value) => {
        const val = raw.trim();
        if (chat.loading() || !val) return;
        setValue('');
        const promptId = new Date().valueOf().toString();
        const messageId = (new Date().valueOf() + 1).toString();
        chat.prompt.create({ id: promptId, title: val });
        chat.message.create(promptId, { id: messageId, content: '' });
        mockSSE({
            message: val,
            onopen() {
                chat.start(promptId, messageId);
            },
            onmessage(str) {
                chat.push(promptId, messageId, str);
            },
            onstop() {
                chat.close(promptId, messageId);
            },
        });
    };

    useEffect(() => {
        chat.conversation.create({ id: new Date().valueOf().toString() });
    }, []);

    return (
        <div style={{ width: '100%', height: 400 }}>
            <Chat chat={chat}>
                <Chat.Content
                    data={chat.conversation.get()?.prompts || []}
                    placeholder={
                        <h1>
                            有什么可以帮忙的？
                            <br />
                            <Button onClick={() => handleSubmit('请告诉我一首诗')}>
                                返回一首诗
                            </Button>
                        </h1>
                    }
                />
                <div style={{ display: 'flex', gap: 4 }}>
                    <Chat.Input
                        value={value}
                        onChange={setValue}
                        onPressEnter={() => handleSubmit()}
                        placeholder="请输入想咨询的内容…"
                    />
                    <Chat.Button
                        type="primary"
                        onClick={() => handleSubmit()}
                        disabled={chat.loading() || !value}
                    >
                        <Chat.Icon.SendIcon style={{ fontSize: 16 }} />
                    </Chat.Button>
                </div>
            </Chat>
        </div>
    );
}
