import React, { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import LoadingOutlined from '@ant-design/icons/LoadingOutlined';
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
            {loading ? (
                <Spin spinning indicator={<LoadingOutlined />} size="small" />
            ) : (
                <div className={statusClass} style={style} />
            )}
            <span className={`${prefixCls}__text`}>{props.children}</span>
        </div>
    );
};

export default StatusTag;
