import React, { useMemo } from 'react';
import { Prism as SyntaxHighlighter, SyntaxHighlighterProps } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import classNames from 'classnames';

import Copy, { type ICopyProps } from '../../copy';
import './index.scss';

interface ICodeBlockProps {
    language: string;
    copy?: boolean | ICopyProps;
    value?: string;
    className?: string;
    style?: React.CSSProperties;
    convert?: boolean;
    options?: Partial<SyntaxHighlighterProps>;
}

export default function CodeBlock({
    className,
    style,
    language,
    copy: rawCopy,
    value,
    convert,
    options: { lineNumberStyle = {}, ...rest } = {},
}: ICodeBlockProps) {
    const copy = useMemo<{ disabled: boolean; options: Partial<ICopyProps> }>(() => {
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
