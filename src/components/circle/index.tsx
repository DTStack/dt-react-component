import React from "react";
import classNames from "classnames";

export type CircleType =
    | "warning"
    | "error"
    | "success"
    | "run"
    | "stopped"

export interface CircleProps {
    type?: CircleType;
    className?: string;
    showBorder?: boolean;
    color?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}

const Circle: React.FC<CircleProps> = function Circle(props) {
    const { className, type="finished", showBorder = true, color, ...other } = props;
    const prefixCls = "dtc-circle";

    const classes = classNames(`${prefixCls}`, className, {
        [`${prefixCls}-border`]: showBorder,
    });
    const circleClass = classNames(`${prefixCls}-default`, {
        [`${prefixCls}-${type}`]: type,
    });
    const style = color && { background: `${color}` };

    return (
        <div {...other} className={classes}>
            <div className={circleClass} style={style} />
            <span className={`${prefixCls}-text`}>{props.children || ""}</span>
        </div>
    );
};

export default Circle;
