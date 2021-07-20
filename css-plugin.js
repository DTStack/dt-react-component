const type = require('@babel/types');

module.exports = function () {
  return {
    visitor: {
      ImportDeclaration(path) {
        const { node } = path;
        const {
          source: { value: libName },
        } = node;

        if (!node) return;
        if (libName === './style.scss') {
          path.replaceWith(
            type.importDeclaration([], type.stringLiteral('./style.css')),
          );
        }
      },
    },
  };
};
