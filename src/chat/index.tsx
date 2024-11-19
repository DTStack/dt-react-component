import React, { type PropsWithChildren } from 'react';

import Button from './button';
import CodeBlock from './codeBlock';
import Content from './content';
import { SendIcon } from './icon';
import Input from './input';
import Loading from './loading';
import Markdown from './markdown';
import Message from './message';
import Pagination from './pagination';
import Prompt from './prompt';
import useChat from './useChat';
import { context, type IChatContext, useContext } from './useContext';

type IChatProps = IChatContext;

const DEFAULT_MAX_REGENERATE_COUNT = 5;

type ChatProviderConfig = Omit<IChatProps, 'maxRegenerateCount'> &
    Partial<Pick<IChatProps, 'maxRegenerateCount'>>;

function Chat({
    chat,
    components,
    maxRegenerateCount = DEFAULT_MAX_REGENERATE_COUNT,
    copy,
    children,
}: PropsWithChildren<ChatProviderConfig>) {
    return (
        <context.Provider value={{ chat, components, maxRegenerateCount, copy }}>
            {children}
        </context.Provider>
    );
}

Chat.useChat = useChat;
Chat.useContext = useContext;

Chat.Loading = Loading;
Chat.Button = Button;
Chat.CodeBlock = CodeBlock;
Chat.Input = Input;
Chat.Markdown = Markdown;
Chat.Pagination = Pagination;
Chat.Message = Message;
Chat.Prompt = Prompt;
Chat.Content = Content;

Chat.Icon = {
    SendIcon,
};

export { type IContentRef } from './content';
export default Chat;
