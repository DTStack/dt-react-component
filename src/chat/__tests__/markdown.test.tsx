import React from 'react';
import { act } from 'react-dom/test-utils';
import { cleanup, render } from '@testing-library/react';

import Markdown from '../markdown';

jest.mock('remark-gfm', () => () => {});

describe('Test Chat Markdown', () => {
    beforeEach(cleanup);

    it('Match Snapshots', () => {
        expect(render(<Markdown># title</Markdown>).asFragment()).toMatchSnapshot('default');
        expect(
            render(
                <Markdown typing className="test">
                    {`\`inline code test \`

                    \`\`\`sql
                    SELECT * FROM table;
                    \`\`\`
                    `}
                </Markdown>
            ).asFragment()
        ).toMatchSnapshot('typing');
    });

    it('Should be a memoized component', () => {
        const fakeOnMount = jest.fn();
        const { container, rerender } = render(
            <Markdown typing={false} onMount={fakeOnMount}>
                # title
            </Markdown>
        );

        expect(fakeOnMount).toBeCalledTimes(1);
        expect(
            container
                .querySelector('.dtc__aigc__markdown')
                ?.classList.contains('dtc__aigc__markdown--blink')
        ).toBeFalsy();

        act(() => {
            rerender(<Markdown typing># title</Markdown>);
        });
        expect(
            container
                .querySelector('.dtc__aigc__markdown')
                ?.classList.contains('dtc__aigc__markdown--blink')
        ).toBeTruthy();

        act(() => {
            rerender(
                <Markdown typing className="jest">
                    # title
                </Markdown>
            );
        });
        expect(
            container.querySelector('.dtc__aigc__markdown')?.classList.contains('jest')
        ).toBeTruthy();

        act(() => {
            rerender(
                <Markdown typing className="jest">
                    ## subtitle
                </Markdown>
            );
        });
        expect(container.querySelector('.dtc__aigc__markdown')?.firstChild?.textContent).toBe(
            'subtitle'
        );
    });

    it('Should not re-render since configs change', () => {
        const origin = render(
            <Markdown typing={false} disallowedElements={['h1']}>
                # title
            </Markdown>
        );

        const { container, rerender } = render(<Markdown typing={false}># title</Markdown>);

        const innerHTML = container.querySelector('.dtc__aigc__markdown')?.innerHTML;
        expect(innerHTML).toBe('<h1>title</h1>');

        rerender(
            <Markdown typing={false} disallowedElements={['h1']}>
                # title
            </Markdown>
        );

        expect(container.querySelector('.dtc__aigc__markdown')?.innerHTML).not.toBe(
            origin.container.querySelector('.dtc__aigc__markdown')?.innerHTML
        );
        expect(container.querySelector('.dtc__aigc__markdown')?.innerHTML).toBe(innerHTML);
    });
});
