import React from 'react';
import { act, cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Content from '../content';
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

describe('Test Content', () => {
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

    it('Should support hidden robot icon', () => {
        const { container } = render(
            <Content data={[]} placeholder={<div>placeholder</div>} robotIcon={false} />
        );

        expect(container.querySelector('.dtc__icon')).toBeNull();
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
    });
});
