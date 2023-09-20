import React from 'react';
import { cleanup, render } from '@testing-library/react';

import MarkdownRender from '..';

describe('Test MarkdownRender Component', () => {
    beforeEach(cleanup);
    it('Should match snapshot', () => {
        const { asFragment } = render(
            <MarkdownRender
                value={`
# h1
## h2
### h3

- a
- b
- c

[url](https://github.com/DTStack/dt-react-component)

**strong1**

__strong2__

_Italic_

> blockquote

\`code block\`

---

<table>
    <tr>
        <td>Foo</td>
    </tr>
</table>

\`\`\`sql
-- desc
select * from employees
\`\`\`
        `}
            />
        );

        expect(asFragment()).toMatchSnapshot();
    });

    it('Should render dark', () => {
        const { container } = render(
            <MarkdownRender
                dark
                value={`
\`\`\`sql
-- desc
select * from employees
\`\`\`
        `}
            />
        );

        const renderBody = container.querySelector<HTMLDivElement>('.dtc-markdown-render-body');

        expect(renderBody).not.toBeNull();
        expect(renderBody?.className).toContain('dtc-vs-dark');
    });

    it('Should detect language by highlight', () => {
        const { asFragment } = render(
            <MarkdownRender
                dark
                value={`
\`\`\`
console.log('test');
\`\`\`
        `}
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('Should render empty value', () => {
        const { container } = render(<MarkdownRender />);
        expect(container.querySelector('.dtc-markdown-render-body')?.innerHTML).toBe('');
    });
});
