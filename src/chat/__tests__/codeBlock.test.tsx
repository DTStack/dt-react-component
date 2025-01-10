import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import CodeBlock, { ICodeBlockProps } from '../codeBlock';

function Container({
    language,
    children,
    ...rest
}: { language: string; children: React.ReactNode } & Omit<ICodeBlockProps, 'children'>) {
    return (
        <CodeBlock {...rest}>
            <span className={`language-${language}`}>{children}</span>
            <></>
        </CodeBlock>
    );
}

describe('Test Chat CodeBlock', () => {
    beforeEach(cleanup);

    it('Match snapshot', () => {
        expect(
            render(
                <Container language="javascript" className="jest_test" style={{ color: 'red' }}>
                    const a = 1
                </Container>
            ).asFragment()
        ).toMatchSnapshot('normal');

        expect(
            render(
                <Container language="javascript" convert>
                    const a = 1
                </Container>
            ).asFragment()
        ).toMatchSnapshot('normal');
    });

    it('Should support configure copy', () => {
        const { container, getByTestId, rerender } = render(
            <Container
                language="javascript"
                copy={{ text: '测试', button: <button data-testid="copyButton">测试</button> }}
            >
                const a = 1
            </Container>
        );
        expect(getByTestId('copyButton')).toBeInTheDocument();

        rerender(
            <Container language="javascript" copy={false}>
                const a = 1
            </Container>
        );
        expect(container.querySelector('.dtc-copy')).toBeNull();
    });
});
