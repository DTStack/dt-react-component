import React, { useEffect, useState } from 'react';
import { ThumbsUpOutlined } from '@dtinsight/react-icons';
import { Button } from 'antd';
import { Chat, Flex } from 'dt-react-component';
import { cloneDeep } from 'lodash-es';

import { ConversationProperties } from '../../entity';
import { mockSSE } from '../mockSSE';

export default function () {
    const chat = Chat.useChat();
    const [value, setValue] = useState<string | undefined>('');

    const [convert, setConvert] = useState(false);

    const [data, setData] = React.useState<ConversationProperties[]>([]);

    const [selectId, setSelectId] = React.useState<string | undefined>('1');
    const [expand, setIsExpand] = React.useState(true);

    const handleSelectChat = (conversation: ConversationProperties) => {
        setSelectId(conversation.id);
    };

    const handleRename = (_conversation: ConversationProperties, _value: string) => {
        return Promise.resolve(true);
    };

    const handleClearChat = (conversation: ConversationProperties) => {
        const list = cloneDeep(data).filter((i) => i.id !== conversation.id);
        if (conversation.id === chat.conversation.get()?.id) {
            chat.conversation.remove();
            if (list.length) {
                handleSelectChat(list[0]);
                chat.conversation.create({ ...list[0] });
            }
        }
        setData(list);
    };
    const handleNewChat = () => {
        chat.conversation.remove();
        chat.conversation.create({ id: new Date().valueOf().toString() });
    };

    const addData = (str: string) => {
        setData((prev) => {
            const idx = prev.length + 1;
            return [
                ...prev,
                {
                    id: chat.conversation.get()!.id,
                    title: str,
                    assistantId: idx.toString(),
                    createdAt: new Date().valueOf(),
                    updatedAt: new Date().valueOf(),
                },
            ];
        });
        handleSelectChat(chat.conversation.get()!);
    };

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
                addData(val);
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
        <div style={{ width: '100%', height: 600, display: 'flex', flexDirection: 'column' }}>
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
                <Chat.Group
                    loading={false}
                    expand={expand}
                    fullscreen
                    data={data}
                    openFloat={false}
                    listProps={{
                        selectId,
                        onRename: handleRename,
                        onDelete: handleClearChat,
                        onItemClick: handleSelectChat,
                    }}
                    dialogButtonProps={{
                        onClick: handleNewChat,
                    }}
                    onExpandChange={setIsExpand}
                >
                    <Chat.Content
                        data={chat.conversation.get()?.prompts || []}
                        placeholder={
                            <div className="dtc__aigc__content__inner__holder">
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
                            </div>
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
                </Chat.Group>
            </Chat>
        </div>
    );
}
