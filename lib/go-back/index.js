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
import { Icon } from 'antd/lib';
import { browserHistory, hashHistory } from 'react-router';
var GoBack = /** @class */ (function (_super) {
    __extends(GoBack, _super);
    function GoBack() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.go = function () {
            var _a = _this.props, url = _a.url, history = _a.history, autoClose = _a.autoClose;
            if (url) {
                if (history) {
                    browserHistory.push(url);
                }
                else {
                    hashHistory.push(url);
                }
            }
            else {
                if (window.history.length == 1) {
                    if (autoClose) {
                        window.close();
                    }
                }
                else {
                    hashHistory.go(-1);
                }
            }
        };
        return _this;
    }
    GoBack.prototype.getButtonView = function () {
        var style = this.props.style;
        var iconStyle = {
            cursor: 'pointer',
            fontFamily: 'anticon',
            fontSize: '18px',
            color: 'rgb(148, 168, 198)',
            letterSpacing: '5px',
            position: 'relative',
            top: '2px'
        };
        if (style) {
            iconStyle = Object.assign(iconStyle, style);
        }
        return (React.createElement(Icon, { style: iconStyle, type: 'left-circle-o', onClick: this.go }));
    };
    GoBack.prototype.render = function () {
        return this.getButtonView();
    };
    return GoBack;
}(React.Component));
export default GoBack;
