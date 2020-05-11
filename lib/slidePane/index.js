var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import { assign } from 'lodash';
import { Icon } from 'antd';
import * as React from 'react';
import classNames from 'classnames';
var SlidePane = /** @class */ (function (_super) {
    __extends(SlidePane, _super);
    function SlidePane(props) {
        return _super.call(this, props) || this;
    }
    SlidePane.prototype.render = function () {
        var _a = this.props, children = _a.children, visible = _a.visible, style = _a.style, className = _a.className, onClose = _a.onClose;
        var myStyle = {
            top: 0,
            transform: visible ? undefined : 'translate3d(150%, 0, 0)'
        };
        var classes = classNames('slide-pane', className);
        if (!visible) {
            myStyle['pointerEvents'] = 'none';
        }
        if (style)
            myStyle = assign(myStyle, style);
        return (React.createElement("div", { className: classes, style: myStyle },
            React.createElement("div", { className: "slide-pane-conent", style: { display: visible ? 'block' : 'none', height: '100%' } }, children),
            React.createElement("span", __assign({ className: "slide-pane-toggle", onClick: onClose }, { onClick: onClose }),
                React.createElement(Icon, { type: "double-right" }))));
    };
    return SlidePane;
}(React.Component));
export default SlidePane;
