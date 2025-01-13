import { useEffect } from 'react';
import { act } from 'react-dom/test-utils';
import { renderHook } from '@testing-library/react-hooks';
import { produce } from 'immer';

import {
    Conversation,
    ConversationProperties,
    Message,
    MessageProperties,
    MessageStatus,
    Prompt,
    PromptProperties,
} from '../entity';
import useChat from '../useChat';

class BaseConversation extends Conversation {}
class BasePrompt extends Prompt {}
class BaseMessage extends Message {}

const mockConversation = <ConversationProperties>{ id: 'conversation_1', createdAt: 1736479532239 };
const mockPrompt = <PromptProperties>{
    id: 'prompt_1',
    title: 'this is question',
    createdAt: 1736479532239,
};
const mockMessage = <Message>{
    id: 'message_1',
    content: 'this is message',
    createdAt: 1736479532239,
};

describe('Test useChat', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.clearAllTimers();
        jest.useRealTimers();
    });

    it('Should init with default state', () => {
        const { result } = renderHook(() => useChat());
        expect(result.current.isTyping).toBeFalsy();
    });

    it('Should support CRUD conversation, prompt & message', () => {
        const fn = jest.fn();
        const { result } = renderHook(() => {
            useEffect(() => {
                fn();
            });
            return useChat();
        });

        // #region Conversation
        act(() => {
            result.current.conversation.create(mockConversation);
        });
        expect(result.current.conversation.get()).toEqual<BaseConversation>(
            new BaseConversation(mockConversation)
        );

        act(() => {
            result.current.conversation.update({
                assistantId: 'assistant_1',
            });
        });
        expect(result.current.conversation.get()).toEqual<BaseConversation>(
            new BaseConversation({
                ...mockConversation,
                assistantId: 'assistant_1',
            })
        );

        act(() => {
            result.current.conversation.remove();
        });
        expect(result.current.conversation.get()).toEqual(undefined);
        // #endregion

        // #region Prompt
        act(() => {
            result.current.conversation.create(mockConversation);
            result.current.prompt.create(mockPrompt);
        });
        expect(result.current.prompt.get(mockPrompt.id)).toEqual<BasePrompt>(
            new BasePrompt(mockPrompt)
        );
        expect(result.current.conversation.get()).toEqual<BaseConversation>(
            new BaseConversation({
                ...mockConversation,
                prompts: [new BasePrompt(mockPrompt)],
            })
        );

        act(() => {
            result.current.prompt.update(mockPrompt.id, (p) => ({
                ...p,
                assistantId: 'assistant_prompt_id',
            }));
        });
        expect(result.current.prompt.get(mockPrompt.id)).toEqual<BasePrompt>(
            new BasePrompt({ ...mockPrompt, assistantId: 'assistant_prompt_id' })
        );
        expect(result.current.prompt.get((i) => i.assistantId === 'assistant_prompt_id')).toBe(
            result.current.prompt.get(mockPrompt.id)
        );

        act(() => {
            result.current.prompt.update(mockPrompt.id, {
                assistantId: 'assistant_prompt_id_test',
            });
        });
        expect(result.current.prompt.get(mockPrompt.id)).toEqual<BasePrompt>(
            new BasePrompt({ ...mockPrompt, assistantId: 'assistant_prompt_id_test' })
        );

        act(() => {
            result.current.prompt.remove(mockPrompt.id);
        });
        expect(result.current.prompt.get(mockPrompt.id)).toEqual(undefined);
        expect(result.current.conversation.get()).toEqual<BaseConversation>(
            new BaseConversation(mockConversation)
        );
        // #endregion

        // #region Message
        act(() => {
            result.current.prompt.create(mockPrompt);
            result.current.message.create(mockPrompt.id, mockMessage);
        });
        expect(result.current.message.get(mockPrompt.id, mockMessage.id)).toEqual<BaseMessage>(
            new BaseMessage(mockMessage)
        );

        act(() => {
            result.current.message.update(mockPrompt.id, mockMessage.id, (m) => ({
                ...m,
                assistantId: 111,
            }));
        });
        expect(result.current.message.get(mockPrompt.id, mockMessage.id)).toEqual<BaseMessage>(
            new BaseMessage({ ...mockMessage, assistantId: 111 })
        );

        fn.mockRestore();
        act(() => {
            result.current.message.update(mockPrompt.id, mockMessage.id, {
                assistantId: 123,
            });
        });
        expect(result.current.message.get(mockPrompt.id, mockMessage.id)).toEqual<BaseMessage>(
            new BaseMessage({ ...mockMessage, assistantId: 123 })
        );
        expect(fn).toBeCalledTimes(1);

        act(() => {
            result.current.message.update(
                mockPrompt.id,
                mockMessage.id,
                (m) => ({
                    ...m,
                    assistantId: 111,
                }),
                false
            );
        });
        expect(result.current.message.get(mockPrompt.id, mockMessage.id)).toEqual<BaseMessage>(
            new BaseMessage({ ...mockMessage, assistantId: 111 })
        );
        expect(fn).toBeCalledTimes(1);

        act(() => {
            result.current.message.remove(mockPrompt.id, mockMessage.id);
        });
        expect(result.current.message.get(mockPrompt.id, mockMessage.id)).toEqual(undefined);
        // #endregion
    });

    it('Should support get typing states', () => {
        const { result } = renderHook(() => useChat());

        act(() => {
            result.current.conversation.create(mockConversation);
            result.current.prompt.create(mockPrompt);
            result.current.message.create(mockPrompt.id, mockMessage);
        });

        expect(result.current.loading()).toBeTruthy();
        expect(result.current.isTyping).toBeFalsy();

        act(() => {
            result.current.start(mockPrompt.id, mockMessage.id);
        });
        expect(result.current.isTyping).toBeTruthy();

        act(() => {
            result.current.push(mockPrompt.id, mockMessage.id, 'this is typing message');
            jest.advanceTimersByTime(1000);
        });
        expect(result.current.message.get(mockPrompt.id, mockMessage.id)?.content).toBe(
            'this is typing message'
        );
        expect(result.current.isTyping).toBeTruthy();

        act(() => {
            result.current.push(mockPrompt.id, mockMessage.id, 'this is typing message');
            result.current.close(mockPrompt.id, mockMessage.id);
            jest.advanceTimersByTime(1000);
        });
        expect(result.current.message.get(mockPrompt.id, mockMessage.id)?.content).toBe(
            'this is typing messagethis is typing message'
        );
        expect(result.current.isTyping).toBeFalsy();
        expect(result.current.loading()).toBeTruthy();
    });

    it('Should support save & restore view state', async () => {
        const { result } = renderHook(() => useChat());

        act(() => {
            result.current.conversation.create(mockConversation);
            result.current.prompt.create(mockPrompt);
            result.current.message.create(mockPrompt.id, mockMessage);
        });

        act(() => {
            result.current.start(mockPrompt.id, mockMessage.id);
            result.current.push(mockPrompt.id, mockMessage.id, 'this is typing message');
        });

        let viewState = await act(async () => {
            return await result.current.saveViewState();
        });

        expect(viewState).toEqual<BaseConversation>(
            new BaseConversation({
                ...mockConversation,
                prompts: [
                    new BasePrompt({
                        ...mockPrompt,
                        messages: [
                            new BaseMessage({
                                ...mockMessage,
                                content: 'this is typing message',
                                status: MessageStatus.GENERATING,
                            }),
                        ],
                    }),
                ],
            })
        );

        viewState = produce(viewState!, (draft) => {
            const message = draft.prompts[0].messages[0];
            message!.content = "It's done";
            message!.status = MessageStatus.DONE;
        });

        act(() => {
            result.current.restoreViewState(viewState!);
        });

        const message = result.current.message.get(mockPrompt.id, mockMessage.id);
        expect(message?.content).toBe("It's done");
        expect(message?.status).toBe(MessageStatus.DONE);

        act(() => {
            result.current.start(mockPrompt.id, mockMessage.id);
        });
        expect(result.current.isTyping).toBeTruthy();
        viewState = await act(async () => {
            return await result.current.saveViewState();
        });
        expect(result.current.isTyping).toBeFalsy();
    });

    it("Should update message's status to be done", async () => {
        const { result } = renderHook(() => useChat());

        act(() => {
            result.current.conversation.create(mockConversation);
            result.current.prompt.create(mockPrompt);
            result.current.message.create(mockPrompt.id, mockMessage);
        });

        act(() => {
            result.current.start(mockPrompt.id, mockMessage.id);
            result.current.push(mockPrompt.id, mockMessage.id, 'this is typing message');
            result.current.close(mockPrompt.id, mockMessage.id);
        });

        const viewState = await act(async () => {
            return await result.current.saveViewState();
        });

        expect(viewState?.prompts[0].messages[0].status).toBe(MessageStatus.DONE);
    });

    it('Should support restore loading message', () => {
        const { result } = renderHook(() => useChat());

        const viewState = new BaseConversation({
            ...mockConversation,
            prompts: [
                new BasePrompt({
                    ...mockPrompt,
                    messages: [
                        new BaseMessage({
                            ...mockMessage,
                            content: 'this is typing message',
                            status: MessageStatus.GENERATING,
                        }),
                    ],
                }),
            ],
        });

        act(() => {
            result.current.restoreViewState(viewState);
        });

        expect(result.current.loading()).toBeTruthy();
        expect(result.current.isTyping).toBeTruthy();

        act(() => {
            result.current.push(mockPrompt.id, mockMessage.id, '\nthis is another typing message');
            result.current.close(mockPrompt.id, mockMessage.id);
            jest.runAllTimers();
        });

        expect(result.current.message.get(mockPrompt.id, mockMessage.id)?.content).toBe(
            'this is typing message\nthis is another typing message'
        );
    });

    it('Should support custom entity', () => {
        class MyConversation extends Conversation {
            data: {};
            constructor(props: ConversationProperties & { data?: any }) {
                super(props);
                this.data = props.data ?? {};
            }
        }
        class MyPrompt extends Prompt {
            data: {};
            constructor(props: PromptProperties & { data?: any }) {
                super(props);
                this.data = props.data ?? {};
            }
        }
        class MyMessage extends Message {
            data: {};
            constructor(props: MessageProperties & { data?: any }) {
                super(props);
                this.data = props.data ?? {};
            }
        }

        const { result } = renderHook(() =>
            useChat({
                ctor: { Conversation: MyConversation, Prompt: MyPrompt, Message: MyMessage },
            })
        );

        act(() => {
            result.current.conversation.create(mockConversation);
            // FIXME: 这里类型推断有问题
            result.current.conversation.update({
                data: { test: 'conversation' },
            } as any);
        });
        expect(result.current.conversation.get()).toEqual<MyConversation>(
            new MyConversation({
                ...mockConversation,
                data: { test: 'conversation' },
            })
        );

        act(() => {
            result.current.prompt.create({ ...mockPrompt, data: { test: 'prompt' } });
        });
        // FIXME: 这里类型推断有问题
        expect((result.current.prompt.get(mockPrompt.id) as any).data).toEqual({ test: 'prompt' });

        act(() => {
            result.current.message.create(mockPrompt.id, {
                ...mockMessage,
                data: { test: 'message' },
            });
        });
        // FIXME: 这里类型推断有问题
        expect((result.current.message.get(mockPrompt.id, mockMessage.id) as any).data).toEqual({
            test: 'message',
        });
    });

    it('Should check edge cases', () => {
        const { result } = renderHook(() => useChat());

        act(() => {
            result.current.conversation.update({
                assistantId: 'assistant_1',
            });
        });
        expect(result.error).toBeUndefined();
        expect(result.current.loading()).toBeFalsy();

        act(() => {
            result.current.prompt.create(mockPrompt);
            result.current.prompt.update(mockPrompt.id, { assistantId: 'assistant_prompt_id' });
            result.current.prompt.remove(mockPrompt.id);
        });
        expect(result.error).toBeUndefined();

        act(() => {
            result.current.message.create(mockPrompt.id, mockMessage);
            result.current.message.update(mockPrompt.id, mockMessage.id, {
                assistantId: 1,
            });
            result.current.message.remove(mockPrompt.id, mockMessage.id);
        });
        expect(result.error).toBeUndefined();

        act(() => {
            result.current.conversation.create(mockConversation);
            result.current.prompt.update(mockPrompt.id, { assistantId: 'assistant_prompt_id' });
            result.current.message.create(mockPrompt.id, mockMessage);
            result.current.message.update(mockPrompt.id, mockMessage.id, { assistantId: 1 });
            result.current.message.remove(mockPrompt.id, mockMessage.id);
        });
        expect(result.error).toBeUndefined();
    });
});
