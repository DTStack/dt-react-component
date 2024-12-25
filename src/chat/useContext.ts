import React from 'react';
import { type Components } from 'react-markdown';

import { type ICopyProps } from '../copy';
import type { Message, Prompt } from './entity';
import type useChat from './useChat';

export type CopyOptions = Partial<ICopyProps> & {
    formatText?: (content?: string) => string;
};

export interface IChatContext {
    /**
     * Chat 实例
     */
    chat: ReturnType<typeof useChat>;
    /**
     * markdown 自定义的组件
     */
    components?: Components;
    /**
     * 重新回答的最大次数
     */
    maxRegenerateCount: number;
    copy?: boolean | CopyOptions;
    messageIcons?: React.ReactNode | ((record: Message, prompt: Prompt) => React.ReactNode);
}

export const context = React.createContext<IChatContext>({
    chat: undefined,
    maxRegenerateCount: 5,
} as any);

export function useContext() {
    return React.useContext(context);
}
