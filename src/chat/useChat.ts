import { useReducer, useRef } from 'react';
import { produce } from 'immer';

import useTyping from '../useTyping';
import {
    Conversation,
    ConversationProperties,
    Id,
    Message,
    MessageProperties,
    MessageStatus,
    Prompt,
} from './entity';

class BaseConversation extends Conversation {}
class BasePrompt extends Prompt {}
class BaseMessage extends Message {}

interface IUseChatProps<C, P, M> {
    ctor?: {
        Conversation?: C;
        Prompt?: P;
        Message?: M;
    };
}

const updateReducer = (num: number): number => (num + 1) % 1_000_000;

export default function useChat<
    // eslint-disable-next-line space-before-function-paren
    C extends { new (...params: ConstructorParameters<typeof Conversation>): Conversation },
    P extends { new (...params: ConstructorParameters<typeof Prompt>): Prompt },
    M extends { new (...params: ConstructorParameters<typeof Message>): Message }
>(props?: IUseChatProps<C, P, M>) {
    const [, update] = useReducer(updateReducer, 0);

    const state = useRef<Conversation | undefined>(undefined);
    const typing = useTyping({
        onTyping(post) {
            _updateMessage(typingIds.current.promptId, typingIds.current.messageId, {
                content: post,
            });
        },
    });
    const typingIds = useRef<{ promptId: Id; messageId: Id }>({
        promptId: '',
        messageId: '',
    });
    const closing = useRef<boolean>(false);

    // ================================== Typing ==================================
    function _start(promptId: Id, messageId: Id) {
        typing.start();
        _updateMessage(promptId, messageId, { status: MessageStatus.PENDING });
        typingIds.current = { promptId, messageId };
    }

    function _push(promptId: Id, messageId: Id, str: string) {
        if (promptId === typingIds.current.promptId && messageId === typingIds.current.messageId) {
            typing.push(str);
            if (_getMessage(promptId, messageId)?.status !== MessageStatus.GENERATING) {
                _updateMessage(promptId, messageId, { status: MessageStatus.GENERATING });
            }
        }
    }

    function _close(promptId: Id, messageId: Id) {
        closing.current = true;
        typing.close().then(() => {
            closing.current = false;
            _updateMessage(promptId, messageId, { status: MessageStatus.DONE });
        });
    }

    // ================================== Conversation ==================================
    function _createConversation(data: ConversationProperties) {
        const ConversationCtor = props?.ctor?.Conversation || BaseConversation;
        state.current = new ConversationCtor(data);
        update();
    }

    function _removeConversation() {
        state.current = undefined;
        update();
    }

    function _updateConversation(data: Partial<Omit<ConversationProperties, 'id'>>) {
        if (!state.current) return;
        state.current = produce(state.current, (draft) => {
            Object.assign(draft, data);
        });
        update();
    }

    function _getConversation() {
        return state.current;
    }

    // ================================== Prompt ==================================
    function _createPrompt(...args: ConstructorParameters<P>) {
        if (!state.current) return;
        const PromptCtor = props?.ctor?.Prompt || <P>BasePrompt;
        state.current = produce(state.current, (draft) => {
            draft.prompts?.push(new PromptCtor(args[0]));
        });
        update();
    }

    function _removePrompt(promptId: Id) {
        if (!state.current) return;
        state.current = produce(state.current, (draft) => {
            const index = draft.prompts?.findIndex((p) => p.id === promptId);
            if (index !== -1) draft.prompts?.splice(index, 1);
        });
        update();
    }

    function _updatePrompt(promptId: Id, predicate: (prompt: Prompt) => Prompt): void;
    function _updatePrompt(
        promptId: Id,
        data: Partial<Omit<ConstructorParameters<P>[0], 'id'>>
    ): void;
    function _updatePrompt(
        promptId: Id,
        dataOrPredicate:
            | Partial<Omit<ConstructorParameters<P>[0], 'id'>>
            | ((prompt: Prompt) => Prompt)
    ) {
        if (!state.current) return;
        state.current = produce(state.current, (draft) => {
            const prompt = draft.prompts.find((i) => i.id === promptId);
            if (!prompt) return;
            if (typeof dataOrPredicate === 'function') {
                Object.assign(prompt, dataOrPredicate(<Prompt>prompt));
            } else {
                Object.assign(prompt, dataOrPredicate);
            }
        });
        update();
    }

    function _getPrompt(predicate: (prompt: Prompt) => boolean): Prompt | undefined;
    function _getPrompt(id: Id): Prompt | undefined;
    function _getPrompt(idOrPredicate: Id | ((prompt: Prompt) => boolean)): Prompt | undefined {
        return state.current?.prompts?.find((p) =>
            typeof idOrPredicate === 'function' ? idOrPredicate(p) : p.id === idOrPredicate
        );
    }

    // ================================== Message ==================================
    function _createMessage(promptId: Id, ...args: ConstructorParameters<M>) {
        if (!state.current) return;
        const MessageCtor = props?.ctor?.Message || <M>BaseMessage;
        state.current = produce(state.current, (draft) => {
            const prompt = draft.prompts.find((i) => i.id === promptId);
            if (!prompt) return;
            prompt.messages.push(new MessageCtor(args[0]));
        });
        update();
    }

    function _removeMessage(promptId: Id, messageId: Id) {
        if (!state.current) return;
        state.current = produce(state.current, (draft) => {
            const prompt = draft.prompts.find((i) => i.id === promptId);
            if (!prompt) return;
            const index = prompt.messages?.findIndex((m) => m.id === messageId);
            if (index !== -1) prompt.messages?.splice(index, 1);
        });
        update();
    }

    function _updateMessage(
        promptId: Id,
        messageId: Id,
        predicate: (message: Message) => Message,
        triggerRerender?: boolean
    ): void;
    function _updateMessage(
        promptId: Id,
        messageId: Id,
        data: Partial<Omit<MessageProperties, 'id'>>,
        triggerRerender?: boolean
    ): void;
    function _updateMessage(
        promptId: Id,
        messageId: Id,
        dataOrPredicate: Partial<Omit<MessageProperties, 'id'>> | ((message: Message) => Message),
        triggerRerender?: boolean
    ) {
        if (!state.current) return;
        state.current = produce(state.current, (draft) => {
            const prompt = draft.prompts.find((i) => i.id === promptId);
            const message = prompt?.messages?.find((m) => m.id === messageId);
            if (!message) return;
            if (typeof dataOrPredicate === 'function') {
                Object.assign(message, dataOrPredicate(<Message>message));
            } else {
                Object.assign(message, dataOrPredicate);
            }
        });
        if (triggerRerender !== false) {
            update();
        }
    }

    function _getMessage(promptId: Id, messageId: Id) {
        return state.current?.prompts
            ?.find((p) => p.id === promptId)
            ?.messages?.find((m) => m.id === messageId);
    }

    // ================================== Global ==================================
    function _isProcessing() {
        const lastPrompt = state.current?.prompts?.[state.current?.prompts.length - 1];
        const last = lastPrompt?.messages?.[lastPrompt.messages.length - 1];
        if (!last) return false;
        return last.status === MessageStatus.PENDING || last.status === MessageStatus.GENERATING;
    }

    async function _saveViewState() {
        const lastPrompt = state.current?.prompts?.[state.current?.prompts.length - 1];
        const message = lastPrompt?.messages?.[lastPrompt.messages.length - 1];
        if (message?.status === MessageStatus.GENERATING) {
            await typing.close(true);
            if (closing.current) {
                _updateMessage(lastPrompt!.id, message.id, { status: MessageStatus.DONE });
            }
        } else {
            typing.stop();
        }
        return _getConversation();
    }

    function _restoreViewState(raw: Conversation) {
        state.current = raw;
        closing.current = false;
        if (_isProcessing()) {
            const conversation = _getConversation();
            const prompt = conversation?.prompts?.[conversation?.prompts.length - 1];
            const message = prompt?.messages?.[prompt.messages.length - 1];
            // 理论上这里不会出现没有 prompt 或 message 的情况
            /* istanbul ignore next */
            if (!prompt || !message) return state.current;
            typing.start(message.content);
            typingIds.current = { promptId: prompt.id, messageId: message.id };
        }

        update();
        return state.current;
    }

    return {
        conversation: {
            create: _createConversation,
            remove: _removeConversation,
            update: _updateConversation,
            get: _getConversation,
        },
        prompt: {
            create: _createPrompt,
            remove: _removePrompt,
            update: _updatePrompt,
            get: _getPrompt,
        },
        message: {
            create: _createMessage,
            remove: _removeMessage,
            update: _updateMessage,
            get: _getMessage,
        },
        loading: _isProcessing,
        start: _start,
        push: _push,
        close: _close,
        stop: typing.stop,
        isTyping: typing.isTyping,
        saveViewState: _saveViewState,
        restoreViewState: _restoreViewState,
    };
}
