import React from 'react';
import { act } from 'react-dom/test-utils';
import { Components } from 'react-markdown';
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import { button, tooltip } from 'ant-design-testing';
import '@testing-library/jest-dom/extend-expect';

import { Message as MessageEntity, MessageStatus, Prompt as PromptEntity } from '../entity';
import Message from '../message';
import Chat from '..';

jest.mock('remark-gfm', () => () => {});

class BasePrompt extends PromptEntity {}
class BaseMessage extends MessageEntity {}

function generatePrompt() {
    const prompt = new BasePrompt({
        id: '1',
        title: 'What is your name?',
        messages: [],
        createdAt: 1736479532239,
    });
    prompt.messages.push(
        new BaseMessage({
            id: '1',
            content: 'My Name is dt-react-component',
            createdAt: 1736479532239,
        })
    );
    return prompt;
}

describe('Test Chat Message', () => {
    let original: any;
    beforeEach(() => {
        cleanup();
        document.body.innerHTML = '';
        original = window.IntersectionObserver;
        jest.useFakeTimers();
    });

    afterEach(() => {
        window.IntersectionObserver = original;
        jest.useRealTimers();
    });

    it('Match Snapshots', () => {
        const prompt = generatePrompt();
        prompt.messages[0].status = MessageStatus.DONE;
        expect(
            render(<Message prompt={prompt} data={prompt.messages} />).asFragment()
        ).toMatchSnapshot('default');

        const generatingPrompt = generatePrompt();
        generatingPrompt.messages[0].status = MessageStatus.GENERATING;
        expect(
            render(
                <Message prompt={generatingPrompt} data={generatingPrompt.messages} />
            ).asFragment()
        ).toMatchSnapshot('generating');

        const pendingPrompt = generatePrompt();
        pendingPrompt.messages[0].status = MessageStatus.PENDING;
        expect(
            render(<Message prompt={pendingPrompt} data={pendingPrompt.messages} />).asFragment()
        ).toMatchSnapshot('pending');

        const stoppedPrompt = generatePrompt();
        stoppedPrompt.messages[0].status = MessageStatus.STOPPED;
        expect(
            render(<Message prompt={stoppedPrompt} data={stoppedPrompt.messages} />).asFragment()
        ).toMatchSnapshot('stopped');

        const emptyPrompt = generatePrompt();
        emptyPrompt.messages = [];
        expect(
            render(<Message prompt={emptyPrompt} data={emptyPrompt.messages} />).asFragment()
        ).toMatchSnapshot('empty');
    });

    it('Should support lazy render', async () => {
        let listener: ((rect: any) => void) | undefined;
        (window as any).IntersectionObserver = class IntersectionObserver {
            constructor(ls: any) {
                listener = ls;
            }
            observe() {}
            disconnect() {}
        };

        const prompt = generatePrompt();
        prompt.messages[0].status = MessageStatus.DONE;
        const cb = jest.fn();
        const onLazyRendered = jest.fn((func) => (func() as Promise<any>).then(cb));
        const { container } = render(
            <Message prompt={prompt} data={prompt.messages} onLazyRendered={onLazyRendered} />
        );
        expect(container.querySelector('.dtc__aigc__markdown')).toBeNull();
        expect(onLazyRendered).not.toBeCalled();

        // Simulate intersectionObserver called
        act(() => {
            listener!([{ isIntersecting: true }]);
        });

        expect(onLazyRendered).toBeCalled();
        expect(cb).not.toBeCalled();
        expect(container.querySelector('.dtc__aigc__markdown')).not.toBeNull();

        await waitFor(() => {
            expect(cb).toBeCalled();
        });
    });

    it('Should render pagination since multiple messages', () => {
        let listener: ((rect: any) => void) | undefined;
        (window as any).IntersectionObserver = class IntersectionObserver {
            constructor(ls: any) {
                listener = ls;
            }
            observe() {}
            disconnect() {}
        };

        const prompt = generatePrompt();
        prompt.messages[0].status = MessageStatus.DONE;
        prompt.messages.push(
            new BaseMessage({
                id: '2',
                content: 'My Name is dt-react-component2',
                createdAt: 1736479532239,
                status: MessageStatus.DONE,
            })
        );
        const { container } = render(<Message prompt={prompt} data={prompt.messages} />);
        // Simulate intersectionObserver called
        act(() => {
            listener!([{ isIntersecting: true }]);
        });

        expect(container.querySelector('.dtc-aigc-pagination')).not.toBeNull();
        expect(container.querySelector('.dtc-aigc-pagination section')?.textContent).toBe('2/2');
        expect(container.querySelector('.dtc__aigc__markdown')?.textContent).toBe(
            'My Name is dt-react-component2'
        );

        act(() => {
            fireEvent.click(container.querySelector('.dtc-aigc-pagination')!.firstElementChild!);
        });

        expect(container.querySelector('.dtc__aigc__markdown')?.textContent).toBe(
            'My Name is dt-react-component'
        );
        expect(container.querySelector('.dtc-aigc-pagination section')?.textContent).toBe('1/2');
    });

    it('Should support stop answer', () => {
        const prompt = generatePrompt();
        const onStop = jest.fn();
        const { container } = render(
            <Message prompt={prompt} data={prompt.messages} onStop={onStop} />
        );

        const btn = container.querySelector<HTMLDivElement>('.dtc__message__stopBtn');
        expect(onStop).not.toBeCalled();
        expect(btn).not.toBeNull();

        act(() => {
            button.fireClick(btn!);
        });

        expect(onStop).toBeCalledWith(prompt.messages[prompt.messages.length - 1]);
    });

    it('Should support configure copy', async () => {
        const onCopy = jest.fn();
        const prompt = generatePrompt();
        prompt.messages[0].status = MessageStatus.DONE;
        const { container, rerender } = render(
            <Message prompt={prompt} data={prompt.messages} copy={{ onCopy }} />
        );

        const classNames = '.dtc__message__icon.dtc-copy';
        const ele = container.querySelector(classNames);
        expect(ele).not.toBeNull();
        act(() => {
            fireEvent.click(ele!);
        });
        expect(onCopy).toBeCalledWith('My Name is dt-react-component');

        // FIXME：这里应该给 false 表示不支持复制，但是代码里是相反的，最好是反一下
        rerender(<Message prompt={prompt} data={prompt.messages} copy />);
        expect(container.querySelector(classNames)).toBeNull();

        onCopy.mockRestore();
        rerender(
            <Message
                prompt={prompt}
                data={prompt.messages}
                copy={{ formatText: (text) => text + ' jest', onCopy }}
            />
        );
        act(() => {
            fireEvent.click(container.querySelector(classNames)!);
        });
        expect(onCopy).toBeCalledWith('My Name is dt-react-component jest');
    });

    it('Should support render message icons', () => {
        const prompt = generatePrompt();
        prompt.messages[0].status = MessageStatus.DONE;
        const { getByTestId, rerender } = render(
            <Chat chat={{} as any} messageIcons={<span data-testid="fakeMessageIcons">icons</span>}>
                <Message prompt={prompt} data={prompt.messages} />
            </Chat>
        );

        expect(getByTestId('fakeMessageIcons')).toBeInTheDocument();

        rerender(
            <Chat
                chat={{} as any}
                messageIcons={() => <span data-testid="fakeMessageIcons">icons</span>}
            >
                <Message prompt={prompt} data={prompt.messages} />
            </Chat>
        );
        expect(getByTestId('fakeMessageIcons')).toBeInTheDocument();
    });

    it('Should support regenerate', () => {
        const prompt = generatePrompt();
        prompt.messages[0].status = MessageStatus.DONE;
        const onRegenerate = jest.fn();
        const { container, getByText } = render(
            <Message
                prompt={prompt}
                regenerate
                data={prompt.messages}
                onRegenerate={onRegenerate}
            />
        );

        const nodeList = container
            .querySelector('.dtc__message__iconGroup')
            ?.querySelectorAll<HTMLDivElement>('.dtc__message__icon');
        const ele = nodeList?.item(nodeList?.length - 1);
        expect(onRegenerate).not.toBeCalled();
        expect(ele).not.toBeNull();

        act(() => {
            fireEvent.click(ele!);
        });
        expect(onRegenerate).toBeCalledWith(prompt.messages[prompt.messages.length - 1]);

        tooltip.fireOpen(ele);
        expect(getByText('重新生成')).toBeInTheDocument();
    });

    it('Should support composed component', () => {
        const prompt = generatePrompt();
        prompt.messages[0].status = MessageStatus.DONE;
        prompt.messages[0].content += `\`inlineCode\``;
        let listener: ((rect: any) => void) | undefined;
        (window as any).IntersectionObserver = class IntersectionObserver {
            constructor(ls: any) {
                listener = ls;
            }
            observe() {}
            disconnect() {}
        };

        const { getByTestId } = render(
            <Chat
                chat={{} as any}
                components={
                    {
                        code({ children }: any, _: any, extra: any) {
                            return (
                                <span
                                    data-testid="fakeCode"
                                    data-messageid={extra.messageId}
                                    data-promptid={extra.promptId}
                                >
                                    {children}
                                </span>
                            );
                        },
                    } as Components
                }
            >
                <Message prompt={prompt} regenerate data={prompt.messages} />
            </Chat>
        );

        // Simulate intersectionObserver called
        act(() => {
            listener!([{ isIntersecting: true }]);
        });

        const ele = getByTestId('fakeCode');
        expect(ele.dataset.messageid).toBe('1');
        expect(ele.dataset.promptid).toBe('1');
    });
});
