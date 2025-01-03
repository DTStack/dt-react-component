import React, { useReducer, useRef, useState } from 'react';
import { Space } from 'antd';
import { Chat } from 'dt-react-component';
import { Prompt } from 'dt-react-component/chat/entity';

const updateReducer = (num: number): number => (num + 1) % 1_000_000;

export default function () {
    const [value, setValue] = useState('');
    const [, update] = useReducer(updateReducer, 0);
    const prompt = useRef(new (class extends Prompt {})({ id: '1', title: 'test' }));

    function setContent(data: string) {
        prompt.current.title = data;
        update();
    }

    return (
        <Space direction="vertical" style={{ width: '100%' }}>
            <Chat.Prompt data={prompt.current} />
            <Space>
                <Chat.Input
                    value={value}
                    onChange={setValue}
                    placeholder="请输入"
                    onPressEnter={() => value.trim() && setContent(value.trim())}
                />
                <Chat.Button
                    type="primary"
                    disabled={!value.trim()}
                    icon={<Chat.Icon.SendIcon style={{ fontSize: 16 }} />}
                    onClick={() => setContent(value.trim())}
                />
            </Space>
        </Space>
    );
}
