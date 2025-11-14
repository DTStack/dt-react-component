import React from 'react';
import { NewChatOutlined } from '@dtinsight/react-icons';
import { Menu } from 'antd';
import { Button, Chat } from 'dt-react-component';
import { ConversationInfo } from 'dt-react-component/chat/conversations';
import { ConversationProperties } from 'dt-react-component/chat/entity';

import CustomConversionItem from './components/customConversationItem';
import './index.scss';

export default function ({ conversations = [] }: { conversations: ConversationProperties[] }) {
    const [data, setData] = React.useState<ConversationProperties[]>(conversations);
    const [selectId, setSelectId] = React.useState<string | undefined>('1');
    const [collapsed, setCollapsed] = React.useState(true);
    const [edit, setEdit] = React.useState<ConversationInfo | undefined>();

    const handleSelectChat = (conversation: ConversationProperties) => {
        setSelectId(conversation.id);
    };

    const handleRenameChat = (_conversation: ConversationProperties, _value: string) => {
        data.forEach((item) => {
            if (item.id === _conversation.id) {
                item.title = _value;
            }
        });
        setData(data);
        return Promise.resolve(true);
    };

    const handleClearChat = (conversation: ConversationProperties) => {
        console.log(conversation);
    };
    const handleNewChat = () => {
        setData((prev) => {
            const idx = prev.length + 1;
            return [
                ...prev,
                {
                    id: idx.toString(),
                    title: `对话${idx}`,
                    assistantId: idx.toString(),
                    createdAt: new Date().valueOf(),
                    updatedAt: new Date().valueOf(),
                },
            ];
        });
    };
    const renderMenu = (info: ConversationInfo) => ({
        overlay: (
            <Menu onClick={(e) => e.domEvent.stopPropagation()}>
                <Menu.Item
                    key="rename"
                    onClick={() => {
                        setEdit(info);
                    }}
                >
                    重命名
                </Menu.Item>
                <Menu.Item key="delete" onClick={() => handleClearChat?.(info)}>
                    删除
                </Menu.Item>
            </Menu>
        ),
    });

    return (
        <div style={{ overflow: 'hidden', height: 600 }}>
            <Button type="default" onClick={() => setCollapsed((p) => !p)}>
                {collapsed ? '收起' : '展开'}
            </Button>
            <Chat.Conversations
                loading={false}
                groupable
                collapsed={collapsed}
                conversations={data}
                activeKey={selectId}
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
                        onClick={handleNewChat}
                        className="prompt-float-chat-add"
                    >
                        开启新对话
                    </Chat.Button>
                }
            />
        </div>
    );
}
