import React, { useEffect, useState } from 'react';
import { Button, Space } from 'antd';
import { Chat } from 'dt-react-component';

import { mockSSE } from '../mockSSE';
import { connect, dispatch, Store } from './redux';

const ChatComponent = connect(function ({ data }: Store) {
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
        if (!data) {
            chat.conversation.create({ id: new Date().valueOf().toString() });
        } else {
            chat.restoreViewState(data);
        }

        return () => {
            dispatch('update', { data: chat.saveViewState() });
        };
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
                        <Chat.Icon.SendIcon style={{ fontSize: 16, padding: '8px 16px' }} />
                    </Chat.Button>
                </div>
            </Chat>
        </div>
    );
});

export default function () {
    const [current, setCurrent] = useState('link1');
    return (
        <>
            <Space>
                <Button type="link" onClick={() => setCurrent('link1')}>
                    link1
                </Button>
                <Button type="link" onClick={() => setCurrent('link2')}>
                    link2
                </Button>
            </Space>
            {current === 'link1' && <ChatComponent />}
        </>
    );
}
