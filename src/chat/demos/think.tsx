import React from 'react';
import type { ReactMarkdownProps } from 'react-markdown/lib/complex-types';
import { Chat } from 'dt-react-component';

const children = `
这里是 Think 的内容示例

- 列表项 A
- 列表项 B
`;

export default function () {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
    const data = { children } as ReactMarkdownProps;
    return <Chat.Think data={data} loading={loading} />;
}
