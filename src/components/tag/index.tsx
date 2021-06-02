import React from 'react';
import "./style.scss"
import classnames from "classnames"
import { Icon } from "antd"

interface IProps {
  onClose?: Function;
  effect?: String; // light / plain
  size?: String; // medium / small / mini
  hit?: Boolean;
  closable?: Boolean;
  children?: React.ReactNode;
}

export default function Tag(props: IProps) {
  const {
    effect = "light",
    children,
    closable = false,
    hit = false,
    size,
    onClose = () => { }
  } = props
  return (
    <span className={classnames(
      "dtc-tag",
      `dtc-tag--${effect}`,
      { [`dtc-tag--${size}`]: size ? true : false },
      { [`dtc-tag--hit`]: hit ? true : false })
    }>
      { children || ""}
      {closable ? <Icon type="close" className="dtc-tag-icon dtc-tag-close" onClick={() => { onClose() }} /> : null}
    </span >
  );
}