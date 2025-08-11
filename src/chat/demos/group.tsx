import React from 'react';

import Button from '../button';
import { ConversationProperties } from '../entity';
import Group from '../group';

export default function (props: { children: React.ReactNode }) {
    console.log(props);
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

    return (
        <div style={{ overflow: 'hidden', height: 600 }}>
            <Button type="default" onClick={() => setIsExpand((p) => !p)}>
                toggle
            </Button>
            <Group
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
                {props.children}
            </Group>
        </div>
    );
}
