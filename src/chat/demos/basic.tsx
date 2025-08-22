import React, { useEffect, useState } from 'react';
import { ThumbsUpOutlined } from '@dtinsight/react-icons';
import { Button } from 'antd';
import { Chat, Flex } from 'dt-react-component';

import { mockSSE } from './mockSSE';
import './index.scss';

export default function () {
    const chat = Chat.useChat();
    const [value, setValue] = useState<string | undefined>('');

    const [convert, setConvert] = useState(false);

    const handleSubmit = (raw = value) => {
        const val = raw?.trim();
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
        <div className="dtc-aigc__demo">
            <Chat
                chat={chat}
                codeBlock={{
                    convert,
                }}
                messageIcons={() => <ThumbsUpOutlined className="dtc__message__icon" />}
                components={{
                    a: ({ children }) => (
                        <Button
                            type="primary"
                            size="small"
                            ghost
                            onClick={() => setConvert((p) => !p)}
                        >
                            {children}
                        </Button>
                    ),
                }}
            >
                <Chat.Content
                    data={chat.conversation.get()?.prompts || []}
                    placeholder={
                        <h1>
                            <Chat.Welcome
                                title="dt-react-component"
                                description="React UI component library based on antd package"
                            />
                            <br />
                            <Flex vertical align="start" gap="4px">
                                <Chat.Tag onClick={() => handleSubmit('请告诉我一首诗')}>
                                    返回一首诗
                                </Chat.Tag>
                                <Chat.Tag onClick={() => handleSubmit('生成 CodeBlock')}>
                                    生成 CodeBlock
                                </Chat.Tag>
                            </Flex>
                        </h1>
                    }
                />
                <Chat.Input
                    value={value}
                    onChange={setValue}
                    onPressEnter={() => handleSubmit()}
                    onPressShiftEnter={() => setValue((v) => v + '\n')}
                    button={{
                        disabled: chat.loading() || !value?.trim(),
                    }}
                    placeholder="请输入想咨询的内容…"
                />
            </Chat>
        </div>
    );
}
