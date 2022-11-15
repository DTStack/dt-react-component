const type = require('@babel/types');

module.exports = function () {
    return {
        visitor: {
            ImportDeclaration(path) {
                const { node } = path;

                if (!node) return;

                const {
                    source: { value: libName },
                } = node;

                if (libName === './style.scss') {
                    path.replaceWith(type.importDeclaration([], type.stringLiteral('./style.css')));
                }
            },
        },
    };
};
