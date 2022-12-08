const t = require('babel-types');

const replaceArr = [
    {
        source: 'react-router-3',
        replacer: 'react-router',
    },
];

module.exports = function () {
    return {
        visitor: {
            ImportDeclaration: (path) => {
                const value = path.node.source.value;
                const isReplace = replaceArr.find((i) => i.source === value);
                if (isReplace) {
                    const transformer = t.importDeclaration(
                        path.node.specifiers,
                        t.stringLiteral(isReplace.replacer)
                    );

                    path.replaceWith(transformer);
                }
            },
        },
    };
};
