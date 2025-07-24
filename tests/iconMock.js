const React = require('react');

module.exports = new Proxy(
    {},
    {
        get(_target, prop) {
            if (prop === '__esModule') return true;
            return React.forwardRef(function MockIcon(props, ref) {
                return React.createElement('span', {
                    ref,
                    'data-mock-icon': String(prop),
                    ...props,
                });
            });
        },
    }
);
