import React, { ReactNode, CSSProperties, HTMLAttributes } from 'react';
import { Spin } from 'antd';
import classNames from 'classnames';
import './style.scss';

export type StatusTagType = 'warning' | 'error' | 'success' | 'run' | 'stopped';

export interface IStatusTagProps extends HTMLAttributes<HTMLDivElement> {
    type?: StatusTagType;
    className?: string;
    showBorder?: boolean;
    color?: string;
    loading?: boolean;
    children?: ReactNode;
    onClick?: () => void;
}

const StatusTag: React.FC<IStatusTagProps> = function StatusTag(props) {
    const {
        className,
        type = 'success',
        showBorder = true,
        color,
        loading = false,
        ...other
    } = props;
    const prefixCls = 'dtc-statusTag';

    const classes = classNames(`${prefixCls}`, className, {
        [`${prefixCls}__border`]: showBorder,
    });
    const statusClass = classNames(`${prefixCls}__default`, {
        [`${prefixCls}__${type}`]: type,
    });
    const style: CSSProperties = color ? { background: `${color}` } : {};

    return (
        <div {...other} className={classes}>
            <Spin spinning={loading} size="small">
                <div className={statusClass} style={style} />
                <span className={`${prefixCls}__text`}>{props.children}</span>
            </Spin>
        </div>
    );
};

export default StatusTag;
