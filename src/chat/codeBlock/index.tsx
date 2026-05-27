import React, { useMemo } from 'react';
import { Prism as SyntaxHighlighter, SyntaxHighlighterProps } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import classNames from 'classnames';

import Copy from '../../copy';
import { Message as MessageEntity } from '../entity';
import { CopyOptions } from '../useContext';
import './index.scss';

export interface ICodeBlockProps<M extends MessageEntity = MessageEntity> {
    copy?: boolean | CopyOptions;
    className?: string;
    style?: React.CSSProperties;
    message?: M;
    convert?: boolean;
    toolbars?: React.ReactNode | ((code: string, message?: M) => React.ReactNode);
    options?: Partial<SyntaxHighlighterProps>;
    children: React.ReactNode & React.ReactNode[];
}

export default function CodeBlock<M extends MessageEntity = MessageEntity>({
    className,
    style,
    toolbars,
    message,
    copy: rawCopy,
    convert,
    children,
    options: { lineNumberStyle = {}, ...rest } = {},
}: ICodeBlockProps<M>) {
    const { value, language } = useMemo(() => {
        const child = children[0] as React.ReactElement;
        const match = /language-(\w+)/.exec(child.props.className || '');
        const language = match ? match[1] : 'SQL';
        const value = String(child.props.children).replace(/\n$/, '');
        return { value, language };
    }, [children]);

    const copy = useMemo<{ disabled: boolean; options: CopyOptions }>(() => {
        if (typeof rawCopy === 'boolean') {
            return {
                disabled: !rawCopy,
                options: {},
            };
        }
        return {
            disabled: false,
            options: { ...(rawCopy || {}) },
        };
    }, [rawCopy]);

    const text = value || '';

    return (
        <div
            className={classNames(
                'dtc__aigc__codeblock',
                convert && 'dtc__aigc__codeblock--convert',
                className
            )}
            style={style}
        >
            <div className="dtc__aigc__codeblock__header">
                <span className="dtc__aigc__codeblock__language">
                    {language.toLocaleLowerCase()}
                </span>
                <div className="dtc__aigc__codeblock__tool">
                    {typeof toolbars === 'function' ? toolbars(text, message) : toolbars}
                    {/* FIXME：Copy 组件后续可以支持一下 disabled 属性 */}
                    {!copy.disabled && <Copy text={text} {...copy.options} />}
                </div>
            </div>
            <SyntaxHighlighter
                language={language.toLocaleLowerCase()}
                wrapLines
                style={{
                    ...oneLight,
                    'code[class*="language-"]': {
                        ...oneLight['code[class*="language-"]'],
                        background: convert ? '#F9F9FA' : '#fff',
                    },
                    'pre[class*="language-"]': {
                        ...oneLight['pre[class*="language-"]'],
                        background: convert ? '#F9F9FA' : '#fff',
                        margin: 0,
                        overflow: 'auto',
                        maxHeight: 270,
                        borderRadius: '0 0 4px 4px',
                    },
                }}
                lineNumberStyle={{
                    fontStyle: 'normal',
                    ...lineNumberStyle,
                }}
                showLineNumbers
                {...rest}
            >
                {text}
            </SyntaxHighlighter>
        </div>
    );
}
