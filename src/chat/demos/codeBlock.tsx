/**
 * background: '#f6f7f9'
 */
import React from 'react';
import { PlusCircleOutlined } from '@dtinsight/react-icons';
import { Chat } from 'dt-react-component';

const children = `
\`\`\` sql
SELECT * FROM table_name;
\`\`\`
`;
export default function CodeBlock() {
    return (
        <Chat.Markdown
            components={{
                pre({ children }) {
                    return (
                        <Chat.CodeBlock copy={false} toolbars={() => <PlusCircleOutlined />}>
                            {children}
                        </Chat.CodeBlock>
                    );
                },
            }}
        >
            {children}
        </Chat.Markdown>
    );
}
