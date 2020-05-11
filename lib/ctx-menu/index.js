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
import * as React from 'react';
import './style.scss';
var CtxMenu = /** @class */ (function (_super) {
    __extends(CtxMenu, _super);
    function CtxMenu(props) {
        var _this = _super.call(this, props) || this;
        _this.hideAll = function () {
            var allEles = document.querySelectorAll('.ctx-menu');
            for (var i = 0; i < allEles.length; i++) {
                allEles[i].style.display = 'none';
            }
        };
        _this.viewHeight = document.body.offsetHeight || 0;
        _this.showMenu = _this.showMenu.bind(_this);
        _this.hideMenu = _this.hideMenu.bind(_this);
        return _this;
    }
    CtxMenu.prototype.componentDidMount = function () {
        this.box.addEventListener('contextmenu', this.showMenu, false);
        document.addEventListener('click', this.hideMenu, false);
    };
    // eslint-disable-next-line
    CtxMenu.prototype.componentWillUnmount = function () {
        this.box.removeEventListener('contextmenu', this.showMenu, false);
        document.removeEventListener('click', this.hideMenu, false);
    };
    CtxMenu.prototype.hideMenu = function (e) {
        if (!this.menu)
            return;
        var style = this.menu.style;
        style.display = 'none';
    };
    CtxMenu.prototype.findParent = function (child, selector) {
        try {
            if (!selector || !child)
                return;
            selector = selector.toLowerCase();
            var node = child;
            while (node) {
                if (node.nodeType === 1) {
                    var className = node.getAttribute('class');
                    if (className && className.includes(selector))
                        return node;
                }
                node = node.parentNode;
            }
        }
        catch (e) {
            throw new Error(e);
        }
        return null;
    };
    CtxMenu.prototype.showMenu = function (e) {
        e.preventDefault();
        var ctxMenuWrapperClsName = this.props.ctxMenuWrapperClsName;
        var menu = this.menu;
        if (!menu)
            return;
        var parent = this.findParent(e.target, ctxMenuWrapperClsName);
        if (parent) {
            this.hideAll();
            var style = menu.style;
            style.display = 'block';
            var pointerY = e.clientY;
            var pointerX = e.clientX;
            var distanceToBottom = this.viewHeight - pointerY;
            var menuHeight = menu.offsetHeight;
            var menuTop = distanceToBottom > menuHeight ? pointerY : pointerY - menuHeight;
            style.cssText = "\n                top: " + menuTop + "px;\n                left: " + pointerX + "px;\n                display: block;\n                z-index: 1006;\n            ";
        }
    };
    CtxMenu.prototype.render = function () {
        var _this = this;
        var _a = this.props, children = _a.children, operations = _a.operations, id = _a.id;
        return React.createElement("span", { ref: function (el) { return _this.box = el; } },
            children,
            React.createElement("div", { className: "ctx-menu " + (operations.length === 0 ? 'f-dn' : ''), ref: function (el) { return _this.menu = el; }, style: { display: 'none' } },
                React.createElement("ul", { className: "ctx-menu-list" }, operations.map(function (o, i) {
                    return React.createElement("li", { onClick: function (e) {
                            e.stopPropagation();
                            _this.hideAll();
                            o.cb.call();
                        }, className: "ctx-list-li", key: id + "-" + i },
                        React.createElement("a", { href: "javascript:void(0)", className: "ctx-list-a" }, o.txt));
                }))),
            React.createElement("div", { className: "mask", ref: function (el) { return _this.mask = el; }, style: { position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 1005
                } }));
    };
    return CtxMenu;
}(React.Component));
export default CtxMenu;
