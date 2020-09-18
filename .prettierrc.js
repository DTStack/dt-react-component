'use strict';
module.exports = {
    singleQuote: true,
    trailingComma: 'none',
    printWidth: 100,
    tabWidth: 4,
    proseWrap: 'never',
    overrides: [
        {
            files: '.prettierrc',
            options: {
                parser: 'json',
            },
        },
    ],
};
