import React, { useMemo, useState } from 'react';
import { Tabs } from 'antd';
import { Chat } from 'dt-react-component';
import { Conversation, Message, MessageStatus, Prompt } from 'dt-react-component/chat/entity';
import { produce } from 'immer';

import { mockSSE } from '../mockSSE';

export default function () {
    const [tabs, setTabs] = useState([{ label: 'Tab 1', children: 'Content of Tab 1', key: '1' }]);
    const [activeKey, setActiveKey] = useState('1');

    const [conversations, setConversations] = useState<Record<string, Conversation>>({});

    const add = () => {
        const newActiveKey = new Date().valueOf().toString();
        const newPanes = [...tabs];
        newPanes.push({ label: 'New Tab', children: 'Content of new Tab', key: newActiveKey });
        setTabs(newPanes);
        setActiveKey(newActiveKey);
    };

    const remove = (targetKey: string) => {
        let newActiveKey = activeKey;
        let lastIndex = -1;
        tabs.forEach((item, i) => {
            if (item.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const newPanes = tabs.filter((item) => item.key !== targetKey);
        if (newPanes.length && newActiveKey === targetKey) {
            if (lastIndex >= 0) {
                newActiveKey = newPanes[lastIndex].key;
            } else {
                newActiveKey = newPanes[0].key;
            }
        }
        setTabs(newPanes);
        setActiveKey(newActiveKey);
    };

    const data = useMemo(() => {
        return conversations[activeKey];
    }, [activeKey, conversations]);

    const handleSubmit = (val = '') => {
        if (!data) {
            const promptId = new Date().valueOf().toString();
            const messageId = (new Date().valueOf() + 1).toString();
            const conversationId = (new Date().valueOf() + 2).toString();
            const message = new (class extends Message {})({ id: messageId });
            const prompt = new (class extends Prompt {})({
                id: promptId,
                title: val,
                messages: [message],
            });
            const conversation = new (class extends Conversation {})({
                id: conversationId,
                prompts: [prompt],
            });
            setConversations((prev) => ({ ...prev, [activeKey]: conversation }));
            mockSSE({
                message: val,
                onopen() {
                    setConversations((prev) => ({
                        ...prev,
                        [activeKey]: produce(prev[activeKey], (draft) => {
                            const prompt = draft.prompts.find((i) => i.id === promptId);
                            const message = prompt?.messages.find((i) => i.id === messageId);
                            if (!message) return;
                            message.status = MessageStatus.GENERATING;
                        }),
                    }));
                },
                onmessage(str) {
                    setConversations((prev) => ({
                        ...prev,
                        [activeKey]: produce(prev[activeKey], (draft) => {
                            const prompt = draft.prompts.find((i) => i.id === promptId);
                            const message = prompt?.messages.find((i) => i.id === messageId);
                            if (!message) return;
                            message.content += str;
                        }),
                    }));
                },
                onstop() {
                    setConversations((prev) => ({
                        ...prev,
                        [activeKey]: produce(prev[activeKey], (draft) => {
                            const prompt = draft.prompts.find((i) => i.id === promptId);
                            const message = prompt?.messages.find((i) => i.id === messageId);
                            if (!message) return;
                            message.status = MessageStatus.DONE;
                        }),
                    }));
                },
            });
        }
    };

    return (
        <>
            <Tabs
                type="editable-card"
                onChange={setActiveKey}
                activeKey={activeKey}
                onEdit={(targetKey, action) => {
                    if (action === 'add') {
                        add();
                    } else {
                        remove(targetKey as string);
                    }
                }}
            >
                {tabs.map((i) => (
                    <Tabs.TabPane tab={i.label} key={i.key} closable={tabs.length !== 1} />
                ))}
            </Tabs>
            <AI data={data} onSubmit={handleSubmit} />
        </>
    );
}

function AI({ data, onSubmit }: { data?: Conversation; onSubmit?: (str?: string) => void }) {
    const chat = Chat.useChat();
    const [value, setValue] = useState<string | undefined>('');

    return (
        <div style={{ width: '100%', height: 400, display: 'flex', flexDirection: 'column' }}>
            <Chat chat={chat}>
                <Chat.Content
                    data={data?.prompts || []}
                    placeholder={
                        <h1>
                            <Chat.Welcome
                                title="dt-react-component"
                                description="React UI component library based on antd package"
                            />
                            <br />
                            <Chat.Tag onClick={() => onSubmit?.('请告诉我一首诗')}>
                                返回一首诗
                            </Chat.Tag>
                        </h1>
                    }
                />
                <Chat.Input
                    value={value}
                    onChange={setValue}
                    onPressEnter={() => onSubmit?.(value)}
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
