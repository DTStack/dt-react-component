(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{2832:function(module,exports){eval("module.exports = function(hljs) {\n  return {\n    aliases: ['adoc'],\n    contains: [\n      // block comment\n      hljs.COMMENT(\n        '^/{4,}\\\\n',\n        '\\\\n/{4,}$',\n        // can also be done as...\n        //'^/{4,}$',\n        //'^/{4,}$',\n        {\n          relevance: 10\n        }\n      ),\n      // line comment\n      hljs.COMMENT(\n        '^//',\n        '$',\n        {\n          relevance: 0\n        }\n      ),\n      // title\n      {\n        className: 'title',\n        begin: '^\\\\.\\\\w.*$'\n      },\n      // example, admonition & sidebar blocks\n      {\n        begin: '^[=\\\\*]{4,}\\\\n',\n        end: '\\\\n^[=\\\\*]{4,}$',\n        relevance: 10\n      },\n      // headings\n      {\n        className: 'section',\n        relevance: 10,\n        variants: [\n          {begin: '^(={1,5}) .+?( \\\\1)?$'},\n          {begin: '^[^\\\\[\\\\]\\\\n]+?\\\\n[=\\\\-~\\\\^\\\\+]{2,}$'},\n        ]\n      },\n      // document attributes\n      {\n        className: 'meta',\n        begin: '^:.+?:',\n        end: '\\\\s',\n        excludeEnd: true,\n        relevance: 10\n      },\n      // block attributes\n      {\n        className: 'meta',\n        begin: '^\\\\[.+?\\\\]$',\n        relevance: 0\n      },\n      // quoteblocks\n      {\n        className: 'quote',\n        begin: '^_{4,}\\\\n',\n        end: '\\\\n_{4,}$',\n        relevance: 10\n      },\n      // listing and literal blocks\n      {\n        className: 'code',\n        begin: '^[\\\\-\\\\.]{4,}\\\\n',\n        end: '\\\\n[\\\\-\\\\.]{4,}$',\n        relevance: 10\n      },\n      // passthrough blocks\n      {\n        begin: '^\\\\+{4,}\\\\n',\n        end: '\\\\n\\\\+{4,}$',\n        contains: [\n          {\n            begin: '<', end: '>',\n            subLanguage: 'xml',\n            relevance: 0\n          }\n        ],\n        relevance: 10\n      },\n      // lists (can only capture indicators)\n      {\n        className: 'bullet',\n        begin: '^(\\\\*+|\\\\-+|\\\\.+|[^\\\\n]+?::)\\\\s+'\n      },\n      // admonition\n      {\n        className: 'symbol',\n        begin: '^(NOTE|TIP|IMPORTANT|WARNING|CAUTION):\\\\s+',\n        relevance: 10\n      },\n      // inline strong\n      {\n        className: 'strong',\n        // must not follow a word character or be followed by an asterisk or space\n        begin: '\\\\B\\\\*(?![\\\\*\\\\s])',\n        end: '(\\\\n{2}|\\\\*)',\n        // allow escaped asterisk followed by word char\n        contains: [\n          {\n            begin: '\\\\\\\\*\\\\w',\n            relevance: 0\n          }\n        ]\n      },\n      // inline emphasis\n      {\n        className: 'emphasis',\n        // must not follow a word character or be followed by a single quote or space\n        begin: '\\\\B\\'(?![\\'\\\\s])',\n        end: '(\\\\n{2}|\\')',\n        // allow escaped single quote followed by word char\n        contains: [\n          {\n            begin: '\\\\\\\\\\'\\\\w',\n            relevance: 0\n          }\n        ],\n        relevance: 0\n      },\n      // inline emphasis (alt)\n      {\n        className: 'emphasis',\n        // must not follow a word character or be followed by an underline or space\n        begin: '_(?![_\\\\s])',\n        end: '(\\\\n{2}|_)',\n        relevance: 0\n      },\n      // inline smart quotes\n      {\n        className: 'string',\n        variants: [\n          {begin: \"``.+?''\"},\n          {begin: \"`.+?'\"}\n        ]\n      },\n      // inline code snippets (TODO should get same treatment as strong and emphasis)\n      {\n        className: 'code',\n        begin: '(`.+?`|\\\\+.+?\\\\+)',\n        relevance: 0\n      },\n      // indented literal block\n      {\n        className: 'code',\n        begin: '^[ \\\\t]',\n        end: '$',\n        relevance: 0\n      },\n      // horizontal rules\n      {\n        begin: '^\\'{3,}[ \\\\t]*$',\n        relevance: 10\n      },\n      // images and links\n      {\n        begin: '(link:)?(http|https|ftp|file|irc|image:?):\\\\S+\\\\[.*?\\\\]',\n        returnBegin: true,\n        contains: [\n          {\n            begin: '(link|image:?):',\n            relevance: 0\n          },\n          {\n            className: 'link',\n            begin: '\\\\w',\n            end: '[^\\\\[]+',\n            relevance: 0\n          },\n          {\n            className: 'string',\n            begin: '\\\\[',\n            end: '\\\\]',\n            excludeBegin: true,\n            excludeEnd: true,\n            relevance: 0\n          }\n        ],\n        relevance: 10\n      }\n    ]\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/react-storybook-addon-chapters/node_modules/highlight.js/lib/languages/asciidoc.js?")}}]);