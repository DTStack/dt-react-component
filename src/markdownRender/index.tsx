import React, { useMemo } from 'react';
import showdown from 'showdown';
import classnames from 'classnames';
import sqlHighlightExtension from './extensions';
import './style.scss';

export interface IMarkdownRenderProps {
    /**
     * 当前渲染的值
     */
    value?: string;
    className?: string;
    /**
     * 暗黑模式
     */
    dark?: boolean;
}

export default function MarkdownRender({ value = '', className, dark }: IMarkdownRenderProps) {
    const result = useMemo(() => {
        const converter = new showdown.Converter({
            extensions: [sqlHighlightExtension],
            emoji: true,
        });
        return converter.makeHtml(value);
    }, [value]);

    return (
        <div
            className={classnames(
                'dtc-markdown-render-body',
                dark ? 'dtc-vs-dark' : 'dtc-vs',
                className
            )}
            dangerouslySetInnerHTML={{ __html: result }}
        />
    );
}
