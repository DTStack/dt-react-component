import React, { useState } from 'react';
import { Button } from 'antd';
import { useTyping } from 'dt-react-component';

export default () => {
    const [text, setText] = useState('');
    const typing = useTyping({
        onTyping(post) {
            setText(post);
        },
    });

    const handleStart = () => {
        typing.start();
        typing.push('这是一段测试文字');
        window.setTimeout(() => {
            typing.push('这是一段延迟一秒测试文字');
            typing.close();
        }, 1000);
    };

    return (
        <div>
            <Button type="primary" onClick={handleStart}>
                开始输入
            </Button>
            打字中：{typing.isTyping ? '是' : '否'}
            <p>文案：{text}</p>
        </div>
    );
};
