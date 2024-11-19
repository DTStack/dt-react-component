import React, { useState } from 'react';
import { Chat } from 'dt-react-component';

export default function () {
    const [value, setValue] = useState('');
    return (
        <Chat.Input
            placeholder="输入 Shift + Enter 换行"
            value={value}
            onChange={setValue}
            onPressEnter={() => console.log('value:', value)}
        />
    );
}
