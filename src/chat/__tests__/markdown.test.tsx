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

    it('Should call onMount', () => {
        const fakeOnMount = jest.fn();
        render(
            <Markdown typing={false} onMount={fakeOnMount}>
                # title
            </Markdown>
        );
        expect(fakeOnMount).toBeCalled();
    });

    it('Should be a memoized component', () => {
        function getContainer(container: HTMLElement) {
            return container.querySelector('.dtc__aigc__markdown');
        }
        function isBlink(container: HTMLElement) {
            return !!getContainer(container)?.classList.contains('dtc__aigc__markdown--blink');
        }

        const { container, rerender } = render(<Markdown typing={false}># title</Markdown>);

        // Typing changed caused re-render
        expect(isBlink(container)).toBeFalsy();
        act(() => {
            rerender(<Markdown typing># title</Markdown>);
        });
        expect(isBlink(container)).toBeTruthy();

        // className changed caused re-render
        expect(getContainer(container)?.classList.contains('jest')).toBeFalsy();
        act(() => {
            rerender(
                <Markdown typing className="jest">
                    # title
                </Markdown>
            );
        });
        expect(getContainer(container)?.classList.contains('jest')).toBeTruthy();

        // children changed caused re-render
        expect(getContainer(container)?.firstChild?.textContent).toBe('title');
        act(() => {
            rerender(
                <Markdown typing className="jest">
                    {'```sql\nSELECT * FROM table;\n```'}
                </Markdown>
            );
        });
        expect(getContainer(container)).toMatchSnapshot('code block');

        const codeBlock = { convert: true };
        // codeBlock properties changed caused re-render
        act(() => {
            rerender(
                <Markdown typing className="jest" codeBlock={codeBlock}>
                    {'```sql\nSELECT * FROM table;\n```'}
                </Markdown>
            );
        });
        expect(getContainer(container)).toMatchSnapshot('code block with convert');

        // others changed not caused re-render
        act(() => [
            rerender(
                <Markdown
                    typing
                    className="jest"
                    codeBlock={codeBlock}
                    components={{ pre: ({ children }) => <div data-testid="pre">{children}</div> }}
                >
                    {'```sql\nSELECT * FROM table;\n```'}
                </Markdown>
            ),
        ]);
        expect(getContainer(container)?.querySelector('[data-testid="pre"]')).toBeFalsy();
    });
});
