import React, { PureComponent } from "react";
import { Tooltip } from "antd";

export interface Props {
  value: string ;
  title?: string;
  className?: string;
  maxWidth?: string | number;
  [propName: string]: any;
}

const initialState = {
  visible: false,
  isEllipsis: false,
  actMaxWidth: void 0
};

type State = typeof initialState;

export interface NewHTMLElement extends HTMLElement {
  currentStyle?: CSSStyleDeclaration
}

export default class EllipsisText extends PureComponent<Props, State> {
  ellipsisRef: HTMLElement | null = null;
  state = {
    ...initialState
  };

  componentDidMount() {
    const { maxWidth } = this.props;
    this.onResize();
    if (!maxWidth) {
      window.addEventListener("resize", this.onResize);
    }
  }

  componentWillUnmount() {
    const { maxWidth } = this.props;
    if (!maxWidth) {
      window.removeEventListener("resize", this.onResize);
    }
  }

  getRangeWidth = (ele: HTMLElement) => {
    const range = document.createRange();
    range.selectNodeContents(ele);
    const rangeWidth = range.getBoundingClientRect().width;
    return rangeWidth;
  };

  getStyle = (dom: NewHTMLElement, attr: string) => {
    // 兼容IE8
    const stylePadding = window?.getComputedStyle(dom)[attr] || dom.currentStyle[attr]

    return stylePadding.slice(0, -2);
  };

  // 最近块级父元素-除省略文本元素外其余元素的宽
  getMaxWidth = (ele: HTMLElement) => {
    if (!ele) return;
    const { scrollWidth, offsetWidth, parentElement } = ele;
    if (scrollWidth === 0) {
      return this.getMaxWidth(parentElement);
    } else {
      const ellipsisNode = this.ellipsisRef;
      ellipsisNode.style.display = "none";
      const rangeWidth = this.getRangeWidth(ele);
      const ellipsisWidth =
        offsetWidth -
        rangeWidth -
        this.getStyle(ele, "paddingRight") -
        this.getStyle(ele, "paddingLeft");

      return ellipsisWidth < 0 ? 0 : ellipsisWidth;
    }
  };

  onResize = () => {
    const { maxWidth } = this.props;
    const ellipsisNode = this.ellipsisRef;
    const rangeWidth = this.getRangeWidth(ellipsisNode);
    const ellipsisWidth = this.getMaxWidth(ellipsisNode.parentElement);
    ellipsisNode.style.display = "inline-block";

    this.setState({
      actMaxWidth: ellipsisWidth,
      isEllipsis: rangeWidth > (maxWidth || ellipsisWidth)
    });

  };

  handleVisibleChange = (visible: boolean) => {
    const { isEllipsis } = this.state;

    this.setState({
      visible: visible && isEllipsis
    });
  };

  render() {
    const { visible, actMaxWidth, isEllipsis } = this.state;
    const { title, value, className, maxWidth, ...other } = this.props;

    return (
      <Tooltip
        title={title || value}
        visible={visible}
        onVisibleChange={this.handleVisibleChange}
        {...other}
      >
        <span
          ref={(ref) => (this.ellipsisRef = ref)}
          className={className}
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "inline-block",
            verticalAlign: "bottom",
            minWidth: "2em",
            maxWidth: maxWidth || actMaxWidth,
            cursor: isEllipsis? 'pointer':'default'
          }}
        >
          {value}
        </span>
      </Tooltip>
    );
  }
}