import React, { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import LoadingOutlined from '@ant-design/icons/LoadingOutlined';
import { Spin } from 'antd';
import classNames from 'classnames';

import './style.scss';

const calculateTransparentColor = (color: string) => {
    if (color.startsWith('rgb')) return `${color.slice(0, -1)},0.3)`;
    let hex = color;
    if (hex.length === 4) {
        hex = hex.replace(/^#(.)(.)(.)$/, '#$1$1$2$2$3$3');
    }
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${0.3})`;
};

const PresetColorTypes = ['warning', 'error', 'success', 'run', 'stopped', 'frozen'] as const;
const StatusTagTypes = ['default', 'outline', 'fill'] as const;

export type PresetColorType = (typeof PresetColorTypes)[number] | string;

export type StatusTagType = (typeof StatusTagTypes)[number];

function isPresetStatus(color?: any): color is PresetColorType {
    return PresetColorTypes.includes(color);
}
export interface IStatusTagProps extends HTMLAttributes<HTMLDivElement> {
    type?: StatusTagType;
    className?: string;
    color?: PresetColorType;
    loading?: boolean;
    icon?: ReactNode;
    children?: ReactNode;
    onClick?: () => void;
}

const StatusTag: React.FC<IStatusTagProps> = function StatusTag(props) {
    const {
        className,
        type = 'default',
        icon,
        color = 'success',
        loading = false,
        ...other
    } = props;
    const prefixCls = 'dtc-statusTag';

    const classes = classNames(`${prefixCls}`, className, {
        [`${prefixCls}--border`]: type === 'outline',
        [`${prefixCls}--fill`]: type === 'fill',
        [`${prefixCls}__${color}--fill`]: type === 'fill' && isPresetStatus(color),
    });

    const tagStyle: CSSProperties =
        !isPresetStatus(color) && type === 'fill'
            ? { color, background: `${calculateTransparentColor(color)}` }
            : {};

    const getIconStyleAndClass = () => {
        if (isPresetStatus(color)) {
            return {
                className: icon
                    ? `${prefixCls}__${color}--icon`
                    : `${prefixCls}__icon--default ${prefixCls}__${color}--iconBg`,
                style: icon ? { color: `${color}` } : { background: `${color}` },
            };
        }
        return {
            className: icon ? '' : `${prefixCls}__icon--default`,
            style: icon ? { color: `${color}` } : { background: `${color}` },
        };
    };

    return (
        <div {...other} className={classes} style={tagStyle}>
            {loading ? (
                <Spin spinning indicator={<LoadingOutlined />} size="small" />
            ) : (
                <div className={`${prefixCls}__icon`}>
                    <span {...getIconStyleAndClass()}>{icon ?? <></>}</span>
                </div>
            )}
            <span className={`${prefixCls}__text`}>{props.children}</span>
        </div>
    );
};

export default StatusTag;
