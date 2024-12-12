import React from 'react';
import { Chat } from 'dt-react-component';

export default function CodeBlock() {
    return <Chat.CodeBlock language="sql" copy={false} value="select * from table;" convert />;
}
