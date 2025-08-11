import React, { type PropsWithChildren } from 'react';

import Button from './button';
import CodeBlock from './codeBlock';
import Content from './content';
import Group from './group';
import Input from './input';
import Loading from './loading';
import Markdown from './markdown';
import Message from './message';
import Pagination from './pagination';
import Prompt from './prompt';
import Tag from './tag';
import useChat from './useChat';
import { context, type IChatContext, useContext } from './useContext';
import Welcome from './welcome';

type IChatProps = IChatContext;

const DEFAULT_MAX_REGENERATE_COUNT = 5;

type ChatProviderConfig = Omit<IChatProps, 'maxRegenerateCount'> &
    Partial<Pick<IChatProps, 'maxRegenerateCount'>>;

function Chat({
    chat,
    components,
    maxRegenerateCount = DEFAULT_MAX_REGENERATE_COUNT,
    regenerate,
    copy,
    codeBlock,
    messageIcons,
    rehypePlugins,
    remarkPlugins,
    children,
}: PropsWithChildren<ChatProviderConfig>) {
    return (
        <context.Provider
            value={{
                chat,
                components,
                maxRegenerateCount,
                copy,
                codeBlock,
                messageIcons,
                regenerate,
                rehypePlugins,
                remarkPlugins,
            }}
        >
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
Chat.Tag = Tag;
Chat.Welcome = Welcome;
Chat.Group = Group;

export { type IContentRef } from './content';
export default Chat;
