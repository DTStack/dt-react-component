import React, { useState } from 'react';
import { Chat } from 'dt-react-component';

export default function () {
    const [value, setValue] = useState<string | undefined>('');
    return (
        <Chat.Input
            placeholder="输入 Shift + Enter 换行"
            value={value}
            onChange={setValue}
            button={{
                disabled: !value?.trim(),
            }}
            onPressEnter={() => console.log('value:', value)}
        />
    );
}
