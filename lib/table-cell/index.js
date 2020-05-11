var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
export default function TableCell(props) {
    var originStyle = {
        textIndent: '5px',
        backgroundColor: 'transparent',
        backgroundImage: 'none',
        width: '100%',
        border: 'none'
    };
    var style = props.style;
    var newStyle = __assign({}, originStyle, style);
    return React.createElement("textarea", __assign({}, props, { style: newStyle }));
}
