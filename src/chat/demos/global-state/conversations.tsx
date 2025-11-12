import React, { useEffect, useState } from 'react';
import { NewChatOutlined, ThumbsUpOutlined } from '@dtinsight/react-icons';
import { Button, Menu } from 'antd';
import { Chat, Flex } from 'dt-react-component';
import { ConversationInfo } from 'dt-react-component/chat/conversations';
import { ConversationProperties } from 'dt-react-component/chat/entity';
import { produce } from 'immer';
import { cloneDeep } from 'lodash-es';

import CustomConversionItem from '../components/customConversationItem';
import { mockSSE } from '../mockSSE';
import '../index.scss';

export default function () {
    const chat = Chat.useChat();
    const [value, setValue] = useState<string | undefined>('');
    const [convert, setConvert] = useState(false);
    const [data, setData] = useState<ConversationProperties[]>([]);
    const [edit, setEdit] = React.useState<ConversationInfo | undefined>();

    const handleSelectChat = (conversation: ConversationProperties) => {
        chat.conversation.remove();
        chat.conversation.create({ ...conversation });
    };

    const handleRenameChat = (_conversation: ConversationProperties, _value: string) => {
        setData((prev) => {
            const idx = prev.findIndex((i) => i.id === _conversation.id);
            if (idx === -1) return prev;
            return produce(prev, (draft) => {
                draft[idx].title = _value;
            });
        });
        return Promise.resolve(true);
    };

    const handleDeleteChat = (conversation: ConversationProperties) => {
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
    const handleCreateChat = () => {
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
    const renderMenu = (info: ConversationInfo) => ({
        overlay: (
            <Menu onClick={(e) => e.domEvent.stopPropagation()}>
                <Menu.Item
                    key="rename"
                    onClick={() => {
                        console.log(info);
                        setEdit(info);
                    }}
                >
                    重命名
                </Menu.Item>
                <Menu.Item key="delete" onClick={() => handleDeleteChat?.(info)}>
                    删除
                </Menu.Item>
            </Menu>
        ),
    });

    useEffect(() => {
        chat.conversation.create({ id: new Date().valueOf().toString() });
    }, []);

    return (
        <div className="dtc-aigc__demo" style={{ height: 600, width: '100%' }}>
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
                <Flex style={{ width: '100%', height: '100%' }} gap={16}>
                    <Chat.Conversations
                        loading={false}
                        groupable
                        collapsed
                        conversations={data}
                        activeKey={chat.conversation.get()?.id}
                        onItemClick={handleSelectChat}
                        dropdown={renderMenu}
                        renderItem={(props) => (
                            <CustomConversionItem
                                {...props}
                                edit={edit}
                                onRename={handleRenameChat}
                                setEdit={setEdit}
                            />
                        )}
                        header={
                            <Chat.Button
                                type="secondary"
                                icon={<NewChatOutlined />}
                                onClick={handleCreateChat}
                                className="prompt-float-chat-add"
                                style={{
                                    margin: '16px',
                                    gap: 4,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                开启新对话
                            </Chat.Button>
                        }
                        style={{
                            backgroundColor: '#F9F9FA',
                            borderRight: '1px solid #E5E7EB',
                        }}
                    />
                    <Flex vertical flex={1}>
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
                    </Flex>
                </Flex>
            </Chat>
        </div>
    );
}
