import React from 'react';
import { Components } from 'react-markdown';
import { render } from '@testing-library/react';

import { Prompt as PromptEntity } from '../entity';
import Prompt from '../prompt';
import Chat from '../';

jest.mock('remark-gfm', () => () => {});
jest.mock('rehype-raw', () => () => {});
class BasePrompt extends PromptEntity {}

function generatePrompt() {
    const prompt = new BasePrompt({
        id: '1',
        title: 'What is your name?',
        messages: [],
        createdAt: 1736479532239,
    });

    return prompt;
}

describe('Test Chat Prompt', () => {
    it('Match Snapshots', () => {
        expect(render(<Prompt />).asFragment()).toMatchSnapshot('empty');
        expect(
            render(<Prompt className="test" data={generatePrompt()} />).asFragment()
        ).toMatchSnapshot('default');
        const _empty = generatePrompt();
        _empty.title = '';
        expect(render(<Prompt className="test" data={_empty} />).asFragment()).toMatchSnapshot(
            'empty title'
        );
    });

    it('Should support components', () => {
        const data = generatePrompt();
        data.title += `\`inlineCode\``;
        const { getByTestId } = render(
            <Chat
                chat={{} as any}
                components={
                    {
                        code({ children }: any, _: any, extra: any) {
                            return (
                                <span data-testid="fakeCode" data-promptid={extra.promptId}>
                                    {children}
                                </span>
                            );
                        },
                    } as Components
                }
            >
                <Prompt className="test" data={data} />
            </Chat>
        );

        expect(getByTestId('fakeCode').dataset.promptid).toBe('1');
    });

    it('Should support extraRender', () => {
        const data = generatePrompt();
        const { container } = render(
            <Prompt
                data={data}
                extraRender={
                    <div className="dtc__prompt__extra__render" data-testid="fakePromptExtraRender">
                        PromptExtraDom
                    </div>
                }
            />
        );
        const nodeList = container.querySelectorAll<HTMLDivElement>('.dtc__prompt__extra__render');
        const ele = nodeList?.item(nodeList?.length - 1);
        expect(ele).not.toBeNull();
        expect(ele?.textContent).toBe('PromptExtraDom');
    });
});
