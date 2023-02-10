import React from 'react';
import classNames from 'classnames';

export type StatusTagType = 'warning' | 'error' | 'success' | 'run' | 'stopped';

export interface StatusTagProps extends React.HTMLAttributes<HTMLDivElement> {
    type?: StatusTagType;
    className?: string;
    showBorder?: boolean;
    color?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}

const StatusTag: React.FC<StatusTagProps> = function StatusTag(props) {
    const { className, type = 'success', showBorder = true, color, ...other } = props;
    const prefixCls = 'dtc-statusTag';

    const classes = classNames(`${prefixCls}`, className, {
        [`${prefixCls}__border`]: showBorder,
    });
    const statusClass = classNames(`${prefixCls}__default`, {
        [`${prefixCls}__${type}`]: type,
    });
    const style = color && { background: `${color}` };

    return (
        <div {...other} className={classes}>
            <div className={statusClass} style={style} />
            <span className={`${prefixCls}__text`}>{props.children || ''}</span>
        </div>
    );
};

export default StatusTag;
