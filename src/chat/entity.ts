import { immerable } from 'immer';

import { BaseCommandItem, CurrentFileItem } from './input/type';

/**
 * 消息状态
 */
export enum MessageStatus {
    /**
     * 等待生成
     */
    PENDING,
    /**
     * 生成中
     */
    GENERATING,
    /**
     * 生成完成
     */
    DONE,
    /**
     * 生成终止
     */
    STOPPED,
}

export type Id = string;
type Timestamp = number;

export type ConversationProperties = {
    id: string;
    assistantId?: string;
    createdAt?: Timestamp;
    title?: string;
    prompts?: Prompt[];
    commandList?: BaseCommandItem[];
    fileList?: CurrentFileItem[];
};

export type PromptProperties = {
    id: Id;
    assistantId?: string;
    createdAt?: Timestamp;
    title: string;
    messages?: Message[];
    commandList?: BaseCommandItem[];
    fileList?: CurrentFileItem[];
};

export interface MessageProperties {
    id: Id;
    assistantId?: string;
    creator?: string;
    createdAt?: Timestamp;
    // 离线使用到的字段
    taskType?: number;
    content?: string;
    status?: MessageStatus;
    commandList?: BaseCommandItem[];
    fileList?: CurrentFileItem[];
}

/**
 * 新对话
 */
export abstract class Conversation {
    id: Id;
    // 后端 Id
    assistantId?: string;
    createdAt: Timestamp;
    title?: string;
    prompts: Prompt[];
    commandList?: BaseCommandItem[];
    fileList?: CurrentFileItem[];

    [immerable] = true;

    constructor(props: ConversationProperties) {
        this.id = props.id;
        this.assistantId = props.assistantId;
        this.createdAt = props.createdAt || new Date().valueOf();
        this.title = props.title;
        this.prompts = props.prompts || [];
        this.commandList = props.commandList;
        this.fileList = props.fileList;
    }
}

/**
 * 一轮对话
 */
export abstract class Prompt {
    id: Id;
    // 后端 Id
    assistantId?: string;
    createdAt: Timestamp;
    title: string;
    messages: Message[];
    commandList?: BaseCommandItem[];
    fileList?: CurrentFileItem[];

    [immerable] = true;

    constructor(props: PromptProperties) {
        this.id = props.id;
        this.assistantId = props.assistantId;
        this.createdAt = props.createdAt || new Date().valueOf();
        this.title = props.title;
        this.messages = props.messages || [];
        this.commandList = props.commandList;
        this.fileList = props.fileList;
    }
}

/**
 * 消息实体
 */
export abstract class Message {
    id: Id;
    // 后端 Id
    assistantId?: string;
    creator?: string;
    createdAt: Timestamp;
    // 离线使用到的字段
    taskType?: number;
    content: string;
    status: MessageStatus;
    commandList?: BaseCommandItem[];
    fileList?: CurrentFileItem[];

    [immerable] = true;

    constructor(props: MessageProperties) {
        this.id = props.id;
        this.creator = props.creator;
        this.assistantId = props.assistantId;
        this.createdAt = props.createdAt || new Date().valueOf();
        // 离线使用到的字段
        this.taskType = props.taskType;
        this.content = props.content ?? '';
        this.status = props.status ?? MessageStatus.PENDING;
        this.commandList = props.commandList;
        this.fileList = props.fileList;
    }
}
