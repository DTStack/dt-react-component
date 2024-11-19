import React, { memo, type PropsWithChildren, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { type ReactMarkdownOptions } from 'react-markdown/lib/react-markdown';
import classNames from 'classnames';
import remarkGfm from 'remark-gfm';

import CodeBlock from '../codeBlock';
import './index.scss';

type IMarkdownProps = { typing?: boolean; onMount?: () => void } & ReactMarkdownOptions;

export default memo(
    function Markdown({
        typing,
        className,
        rehypePlugins = [],
        remarkPlugins = [],
        components,
        children,
        onMount,
        ...rest
    }: PropsWithChildren<IMarkdownProps>) {
        useEffect(() => {
            onMount?.();
        }, []);

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
    },
    (prev, next) => {
        // 理论上来说，只要 children 不变，就不会触发重新渲染
        // 其他的 plugins 或者 options 都不应该改变
        if (prev.typing !== next.typing) return false;
        if (prev.className !== next.className) return false;
        if (prev.children !== next.children) return false;
        return true;
    }
);
