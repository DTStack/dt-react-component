import React, { type PropsWithChildren } from 'react';
import ReactMarkdown from 'react-markdown';
import { type ReactMarkdownOptions } from 'react-markdown/lib/react-markdown';
import classNames from 'classnames';
import remarkGfm from 'remark-gfm';

import CodeBlock from '../codeBlock';
import './index.scss';

type IMarkdownProps = { typing?: boolean } & ReactMarkdownOptions;

export default function Markdown({
    typing,
    className,
    rehypePlugins = [],
    remarkPlugins = [],
    components,
    children,
    ...rest
}: PropsWithChildren<IMarkdownProps>) {
    return (
        <ReactMarkdown
            className={classNames(
                'dtc__aigc__markdown',
                typing && 'dtc__aigc__markdown--blink',
                className
            )}
            rehypePlugins={rehypePlugins}
            remarkPlugins={[remarkGfm, ...remarkPlugins]}
            components={{
                code({ children }) {
                    return <code className="dtc__aigc__markdown__inlineCode">{children}</code>;
                },
                pre({ children }) {
                    const child = children[0] as React.ReactElement;
                    const match = /language-(\w+)/.exec(child.props.className || '');
                    const language = match ? match[1] : 'SQL';
                    const value = String(child.props.children).replace(/\n$/, '');
                    return <CodeBlock value={value} language={language} />;
                },
                ...components,
            }}
            {...rest}
        >
            {children}
        </ReactMarkdown>
    );
}
