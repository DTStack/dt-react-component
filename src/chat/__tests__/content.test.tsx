/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import { act, cleanup, fireEvent, render } from '@testing-library/react';
import { produce } from 'immer';
import '@testing-library/jest-dom/extend-expect';

import Content, { type IContentRef } from '../content';
import { Message, Prompt } from '../entity';

class BasePrompt extends Prompt {}
class BaseMessage extends Message {}

// Mock the message and prompt component
jest.mock('../message', () => {
    return ({ onRegenerate, onStop, onLazyRendered, ...rest }: any) => (
        <div data-testid="fakeMessage">
            <pre>{JSON.stringify(rest)}</pre>
            <button data-testid="fakeOnRegenerate" onClick={onRegenerate}>
                onRegenerate
            </button>
            <button data-testid="fakeOnStop" onClick={onStop}>
                onStop
            </button>
            <button
                data-testid="fakeOnLazyRendered"
                onClick={() => {
                    onLazyRendered?.(() => Promise.resolve());
                }}
            >
                onLazyRendered
            </button>
        </div>
    );
});
jest.mock('../prompt', () => {
    return (props: any) => <pre data-testid="fakePrompt">{JSON.stringify(props)}</pre>;
});

const CustomPrompt = (props: any) => (
    <pre className="custom-prompt-replaced" data-testid="fakeCustomPrompt">
        {JSON.stringify(props)}
    </pre>
);
const CustomMessage = (props: any) => (
    <pre className="custom-message-replaced" data-testid="fakeCustomMessage">
        {JSON.stringify(props)}
    </pre>
);
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

function generatePromptWithGeneratingMessage() {
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
            status: 1,
        })
    );
    return prompt;
}

describe('Test Chat Content', () => {
    let originalRAF: typeof window.requestAnimationFrame;
    beforeEach(() => {
        jest.useFakeTimers();
        cleanup();
        originalRAF = window.requestAnimationFrame;
        window.requestAnimationFrame = jest.fn((cb) => cb(0)) as any;
    });
    afterEach(() => {
        window.requestAnimationFrame = originalRAF;
    });

    it('Match snapshot', () => {
        expect(
            render(<Content data={[]} placeholder={<div>placeholder</div>} />).asFragment()
        ).toMatchSnapshot('placeholder');

        expect(
            render(
                <Content data={[generatePrompt()]} placeholder={<div>placeholder</div>} />
            ).asFragment()
        ).toMatchSnapshot('normal');
    });

    it('Should disabled', () => {
        const { container } = render(
            <Content data={[]} placeholder={<div>placeholder</div>} scrollable={false} />
        );

        const ele = container.querySelector('.dtc__aigc__content__container');
        expect(ele).toBeInTheDocument();
        expect(ele?.className).toContain('dtc__aigc__content__container--disabled');
    });

    it("Should support trigger message's functions", async () => {
        const fakeOnRegenerate = jest.fn();
        const fakeOnStop = jest.fn();
        const { container, getByTestId } = render(
            <Content
                data={[generatePrompt()]}
                placeholder={<div>placeholder</div>}
                onRegenerate={fakeOnRegenerate}
                onStop={fakeOnStop}
            />
        );

        act(() => {
            getByTestId('fakeOnRegenerate').click();
            getByTestId('fakeOnStop').click();
        });

        expect(fakeOnRegenerate).toBeCalledTimes(1);
        expect(fakeOnStop).toBeCalledTimes(1);

        const ele = container.querySelector('.dtc__aigc__content__container')!;
        jest.spyOn(ele, 'scrollHeight', 'get').mockReturnValue(100);
        jest.spyOn(ele, 'clientHeight', 'get').mockReturnValue(200);
        const fn = jest.spyOn(ele, 'scrollTop', 'set');
        await act(async () => {
            getByTestId('fakeOnLazyRendered').click();
            jest.runAllTimers();
        });

        expect(fn).toBeCalledTimes(1);
        expect(fn).toBeCalledWith(100);
    });

    it('Should always scroll to bottom', () => {
        let data = generatePromptWithGeneratingMessage();
        const { container, rerender } = render(
            <Content data={[data]} placeholder={<div>placeholder</div>} />
        );

        const ele = container.querySelector('.dtc__aigc__content__container')!;
        jest.spyOn(ele, 'scrollHeight', 'get')
            .mockReturnValueOnce(100)
            .mockReturnValueOnce(400)
            .mockReturnValue(200);
        jest.spyOn(ele, 'clientHeight', 'get').mockReturnValue(200);

        const fn = jest.spyOn(ele, 'scrollTop', 'set');
        expect(fn).not.toBeCalled();

        data = produce(data, (draft) => {
            draft.messages[0].content += ', I am a developer';
        });
        rerender(<Content data={[data]} placeholder={<div>placeholder</div>} />);

        expect(fn).toBeCalledTimes(1);
        expect(fn).toBeCalledWith(100);

        // Simulate user scroll to top and will not scroll to bottom
        fireEvent(ele, new Event('scroll'));
        expect(fn).toBeCalledTimes(1);

        // Simulate user scroll to bottom and will keep sticky at bottom
        fireEvent(ele, new Event('scroll'));
        expect(fn).toBeCalledTimes(2);
        expect(fn).lastCalledWith(200);
    });

    it('Should get ref', () => {
        const ref = React.createRef<IContentRef>();
        const { container } = render(
            <Content ref={ref} data={[generatePrompt()]} placeholder={<div>placeholder</div>} />
        );

        const ele = container.querySelector('.dtc__aigc__content__container')!;
        expect(ref.current?.nativeElement).toBe(ele);

        jest.spyOn(ele, 'scrollHeight', 'get').mockReturnValue(200);
        const fn = jest.fn();
        ele.scrollTo = fn;

        act(() => {
            ref.current?.scrollToBottom();
        });

        expect(fn).toBeCalledTimes(1);
        expect(fn).lastCalledWith({ top: 200, left: 0, behavior: 'instant' });
    });
    it('Should support replacePrompt and replaceMessage', () => {
        const { container, getByTestId } = render(
            <Content
                data={[generatePrompt()]}
                replacePrompt={(promptProps) => <CustomPrompt data={promptProps} />}
                replaceMessage={(messageProps) => <CustomMessage data={messageProps} />}
            />
        );
        expect(getByTestId('fakeCustomPrompt')).toBeInTheDocument();
        const ele1 = container.querySelector('.custom-prompt-replaced')!;
        expect(ele1.textContent).not.toBeNull();

        expect(getByTestId('fakeCustomMessage')).toBeInTheDocument();
        const ele2 = container.querySelector('.custom-message-replaced')!;
        expect(ele2.textContent).not.toBeNull();
    });
});
