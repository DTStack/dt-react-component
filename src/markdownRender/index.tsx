import React from 'react';

import showdown from 'showdown';
import hljs from 'highlight.js';
import sql from 'highlight.js/lib/languages/sql';
import classNames from 'classnames';
import './style.scss';

export interface MarkdownRenderProps {
    text?: string;
    className?: string;
    dark?: boolean;
}

hljs.registerLanguage('sql', sql);
showdown.extension('highlight', function () {
    return [
        {
            type: 'output',
            filter: function (text: string, _converter: any, _options: any) {
                let textTemp = text;
                const left = '<pre><code\\b[^>]*>';
                const right = '</code></pre>';
                const flags = 'g';
                const replacement = function (wholeMatch: any, match: any, left: any, right: any) {
                    // Append hljs class
                    let leftTemp = left;
                    leftTemp = leftTemp.slice(0, 18) + 'hljs ' + leftTemp.slice(18);

                    const lang = (leftTemp.match(/class=\"([^ \"]+)/) || [])[1];
                    if (lang && hljs.getLanguage(lang)) {
                        return leftTemp + hljs.highlight(lang, match).value + right;
                    } else {
                        return leftTemp + hljs.highlightAuto(match).value + right;
                    }
                };

                textTemp = textTemp.replace(/&gt;/g, '>');
                textTemp = textTemp.replace(/&lt;/g, '<');

                return showdown.helper.replaceRecursiveRegExp(
                    textTemp,
                    replacement,
                    left,
                    right,
                    flags
                );
            },
        },
    ];
});
showdown.setOption('optionKey', 'value');

export default function MarkdownRender(props: MarkdownRenderProps) {
    const { text, className, dark } = props;
    const cls = classNames('dtc-markdown-render-body', dark ? 'dtc-vs-dark' : 'dtc-vs', className);
    const converter = new showdown.Converter({
        extensions: ['highlight'],
        emoji: true,
    });
    const result = converter.makeHtml(text);
    return <div className={cls} dangerouslySetInnerHTML={{ __html: result }} />;
}
