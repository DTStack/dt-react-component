(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{2887:function(module,exports){eval("module.exports = function(hljs) {\n  var GO_KEYWORDS = {\n    keyword:\n      'break default func interface select case map struct chan else goto package switch ' +\n      'const fallthrough if range type continue for import return var go defer ' +\n      'bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 ' +\n      'uint16 uint32 uint64 int uint uintptr rune',\n    literal:\n       'true false iota nil',\n    built_in:\n      'append cap close complex copy imag len make new panic print println real recover delete'\n  };\n  return {\n    aliases: ['golang'],\n    keywords: GO_KEYWORDS,\n    illegal: '</',\n    contains: [\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.C_BLOCK_COMMENT_MODE,\n      {\n        className: 'string',\n        variants: [\n          hljs.QUOTE_STRING_MODE,\n          hljs.APOS_STRING_MODE,\n          {begin: '`', end: '`'},\n        ]\n      },\n      {\n        className: 'number',\n        variants: [\n          {begin: hljs.C_NUMBER_RE + '[i]', relevance: 1},\n          hljs.C_NUMBER_MODE\n        ]\n      },\n      {\n        begin: /:=/ // relevance booster\n      },\n      {\n        className: 'function',\n        beginKeywords: 'func', end: '\\\\s*(\\\\{|$)', excludeEnd: true,\n        contains: [\n          hljs.TITLE_MODE,\n          {\n            className: 'params',\n            begin: /\\(/, end: /\\)/,\n            keywords: GO_KEYWORDS,\n            illegal: /[\"']/\n          }\n        ]\n      }\n    ]\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/react-storybook-addon-chapters/node_modules/highlight.js/lib/languages/go.js?")}}]);