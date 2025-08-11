import React, { memo, type PropsWithChildren, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { type ReactMarkdownOptions } from 'react-markdown/lib/react-markdown';
import classNames from 'classnames';
import remarkGfm from 'remark-gfm';

import Image from '../../image';
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
                    table({ children }) {
                        return <table className="dtc__aigc__markdown__table">{children}</table>;
                    },
                    p: (data) => {
                        // avoid validateDOMNesting error for div as a descendant of p
                        if (data.node.children.every((child) => child.type === 'text')) {
                            return <p>{data.children}</p>;
                        } else {
                            return <div>{data.children}</div>;
                        }
                    },
                    img({ src, ...rest }) {
                        return (
                            <Image
                                className="dtc__aigc__markdown__img"
                                src={src}
                                {...(rest as any)}
                            />
                        );
                    },
                    ...components,
                }}
                includeElementIndex
                {...rest}
            >
                {ensureTag(children)}
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

/**
 * 确保 HTML 标签的前后都有两个换行符
 */
function ensureTag(children: string) {
    if (typeof children !== 'string') return children;
    const next = children.replace(/<\/?[a-z].[^<]*>/g, (str) => '\n\n' + str + '\n\n');
    return next;
}
