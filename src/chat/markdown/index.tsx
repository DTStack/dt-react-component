import React, { memo, type PropsWithChildren, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { type ReactMarkdownOptions } from 'react-markdown/lib/react-markdown';
import classNames from 'classnames';
import remarkGfm from 'remark-gfm';

import CodeBlock, { type ICodeBlockProps } from '../codeBlock';
import './index.scss';

type IMarkdownProps = {
    typing?: boolean;
    codeBlock?: Omit<ICodeBlockProps, 'children'>;
    onMount?: () => void;
} & ReactMarkdownOptions;

export default memo(
    function Markdown({
        typing,
        className,
        rehypePlugins = [],
        remarkPlugins = [],
        codeBlock,
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
                        return <CodeBlock {...codeBlock}>{children}</CodeBlock>;
                    },
                    hr() {
                        return <hr color="#ebecf0" className="dtc__aigc__markdown__hr" />;
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
        if (prev.codeBlock !== next.codeBlock) return false;
        return true;
    }
);
