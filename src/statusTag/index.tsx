import React, { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import LoadingOutlined from '@ant-design/icons/LoadingOutlined';
import { Spin } from 'antd';
import classNames from 'classnames';

import './style.scss';

const calculateTransparentColor = (color: string) => {
    if (color.startsWith('rgb')) return `${color.slice(0, -1)},0.15)`;
    let hex = color;
    if (hex.length === 4) {
        hex = hex.replace(/^#(.)(.)(.)$/, '#$1$1$2$2$3$3');
    }
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${0.15})`;
};

const PresetColorTypes = [
    'blue',
    'yellow',
    'green',
    'gray',
    'red',
    'purple',
    'cyan',
    'pink',
] as const;
const StatusTagTypes = ['default', 'outline', 'fill'] as const;

export type PresetColorType = (typeof PresetColorTypes)[number] | (string & {});

export type StatusTagType = (typeof StatusTagTypes)[number];

function isPresetStatus(color?: any): color is PresetColorType {
    return PresetColorTypes.includes(color);
}
export interface IStatusTagProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * @description 状态类型
     */
    type?: StatusTagType;
    /**
     * @description  状态颜色色
     */
    color?: PresetColorType;
    /**
     * @description  状态是否加载中
     */
    loading?: boolean;
    /**
     * @description  设置图标
     */
    icon?: ReactNode;
    /**
     *  @description 背景颜色，仅仅在 fill 的情况下生效
     *  @description 使用自定义颜色的时候，可以自定义背景颜色，如果不设置默认取字体颜色的0.15透明度
     */
    background?: string;
    className?: string;
    children?: ReactNode;
}

const StatusTag: React.FC<IStatusTagProps> = function StatusTag(props) {
    const {
        className,
        type = 'default',
        icon,
        color = 'green',
        loading = false,
        background,
        ...other
    } = props;
    const prefixCls = 'dtc-statusTag';

    const showDefaultIcon = icon === undefined;

    const classes = classNames(`${prefixCls}`, className, {
        [`${prefixCls}--border`]: type === 'outline',
        [`${prefixCls}--fill`]: type === 'fill',
        [`${prefixCls}__${color}--fill`]: type === 'fill' && isPresetStatus(color),
    });

    const tagStyle: CSSProperties =
        !isPresetStatus(color) && type === 'fill'
            ? { color, background: background || `${calculateTransparentColor(color)}` }
            : {};

    const getIconStyleAndClass = () => {
        if (isPresetStatus(color)) {
            return {
                className: icon
                    ? `${prefixCls}__${color}--icon`
                    : `${prefixCls}__icon--default ${prefixCls}__${color}--iconBg`,
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
                <Spin
                    spinning
                    indicator={<LoadingOutlined className={`${prefixCls}__icon`} />}
                    size="small"
                />
            ) : (
                (icon || showDefaultIcon) && (
                    <div className={`${prefixCls}__icon`}>
                        <span {...getIconStyleAndClass()}>{icon ?? <></>}</span>
                    </div>
                )
            )}
            <span className={`${prefixCls}__text`}>{props.children}</span>
        </div>
    );
};

export default StatusTag;
