import { immerable } from 'immer';

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
    updatedAt?: Timestamp;
    title?: string;
    prompts?: Prompt[];
};

export type PromptProperties = {
    id: Id;
    assistantId?: string;
    createdAt?: Timestamp;
    title: string;
    messages?: Message[];
};

export type MessageProperties = {
    id: Id;
    assistantId?: string;
    creator?: string;
    createdAt?: Timestamp;
    content?: string;
    status?: MessageStatus;
};

/**
 * 新对话
 */
export abstract class Conversation {
    id: Id;
    // 后端 Id
    assistantId?: string;
    createdAt: Timestamp;
    updatedAt: Timestamp;
    title?: string;
    prompts: Prompt[];

    [immerable] = true;

    constructor(props: ConversationProperties) {
        this.id = props.id;
        this.assistantId = props.assistantId;
        this.createdAt = props.createdAt || new Date().valueOf();
        this.updatedAt = props.updatedAt || new Date().valueOf();
        this.title = props.title;
        this.prompts = props.prompts || [];
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

    [immerable] = true;

    constructor(props: PromptProperties) {
        this.id = props.id;
        this.assistantId = props.assistantId;
        this.createdAt = props.createdAt || new Date().valueOf();
        this.title = props.title;
        this.messages = props.messages || [];
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
    content: string;
    status: MessageStatus;

    [immerable] = true;

    constructor(props: MessageProperties) {
        this.id = props.id;
        this.creator = props.creator;
        this.assistantId = props.assistantId;
        this.createdAt = props.createdAt || new Date().valueOf();
        this.content = props.content ?? '';
        this.status = props.status ?? MessageStatus.PENDING;
    }
}
