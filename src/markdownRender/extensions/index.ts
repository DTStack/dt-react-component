import type * as Hljs from 'highlight.js';
import hljsCore from 'highlight.js/lib/core';
import sql from 'highlight.js/lib/languages/sql';
import showdown from 'showdown';

import 'highlight.js/styles/default.css';
import '../theme/vs.scss';
import '../theme/vs-dark.scss';

const hljs = hljsCore as typeof Hljs;

hljs.registerLanguage('sql', sql);

export default function sqlHighlightExtension(): showdown.ShowdownExtension {
    return {
        type: 'output',
        filter: function (text) {
            return showdown.helper.replaceRecursiveRegExp(
                text.replace(/&gt;/g, '>').replace(/&lt;/g, '<'),
                (_: string, match: string, left: string, right: string) => {
                    const lang = (left.match(/class=\"([^ \"]+)/) || [])[1];

                    // Append hljs class
                    const prefix = left.slice(0, 18) + 'hljs ' + left.slice(18);
                    if (lang && hljs.getLanguage(lang)) {
                        return prefix + hljs.highlight(match, { language: lang }).value + right;
                    } else {
                        return prefix + hljs.highlightAuto(match).value + right;
                    }
                },
                '<pre><code\\b[^>]*>',
                '</code></pre>',
                'g'
            );
        },
    };
}
