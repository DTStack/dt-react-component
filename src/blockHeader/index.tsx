import React, { ReactNode, useState } from 'react';
import { QuestionCircleOutlined, UpOutlined } from '@ant-design/icons';
import { Tooltip, TooltipProps } from 'antd';
import classNames from 'classnames';

import './style.scss';

function toTooltipProps(tooltip: LabelTooltipType): TooltipProps | null {
    if (!tooltip) {
        return null;
    }
    if (typeof tooltip === 'object' && !React.isValidElement(tooltip)) {
        return tooltip as TooltipProps;
    }
    return {
        title: tooltip,
    };
}

export type LabelTooltipType = TooltipProps | TooltipProps['title'];

export declare type SizeType = 'small' | 'middle' | 'large';

function isControlled(props: IBlockHeaderProps) {
    return props.expand !== undefined;
}

export interface IBlockHeaderProps {
    /** 标题 */
    title: string;
    /** 标题前的图标，默认是一个色块 */
    addonBefore?: ReactNode;
    /** 标题后的提示说明文字 */
    description?: ReactNode;
    /** 默认展示为问号的tooltip */
    tooltip?: LabelTooltipType;
    // 后缀自定义内容块
    addonAfter?: ReactNode;
    /**
     * 小标题 font-size: 12px; line-height: 32px
     * 中标题 font-size: 14px; line-height: 40px
     * 大标题 font-size: 16px; line-height: 40px
     * 默认 中标题
     */
    size?: SizeType;
    /** 是否展示 Bottom，默认 false，Bottom 值 16px */
    hasBottom?: boolean;
    /** 自定义 Bottom 值 */
    spaceBottom?: number;
    /** 标题一行的样式类名 */
    className?: string;
    /** 标题的样式类名 */
    style?: React.CSSProperties;
    /** 是否显示背景, 默认 true */
    background?: boolean;
    /** 当前展开状态 */
    expand?: boolean;
    /** 是否默认展开内容, 默认 true */
    defaultExpand?: boolean;
    /** 展开/收起的内容 */
    children?: ReactNode;
    /** 展开/收起时的回调 */
    onExpand?: (expand: boolean) => void;
}
const BlockHeader: React.FC<IBlockHeaderProps> = function (props) {
    const prefixCls = 'dtc-block-header';
    const {
        title,
        description = '',
        tooltip = '',
        size = 'middle',
        hasBottom = false,
        spaceBottom = 0,
        className = '',
        style = {},
        background = true,
        defaultExpand = true,
        addonAfter,
        expand,
        children = '',
        addonBefore = <div className={`title__addon-before--${size}`} />,
        onExpand,
    } = props;

    const [internalExpand, setInternalExpand] = useState(defaultExpand);

    const currentExpand = isControlled(props) ? expand : internalExpand;

    const preTitleRowCls = `${prefixCls}__title`;

    const tooltipProps = toTooltipProps(tooltip);

    const questionTooltip = tooltipProps && (
        <Tooltip {...tooltipProps}>
            <QuestionCircleOutlined />
        </Tooltip>
    );

    let bottomStyle;
    if (hasBottom) bottomStyle = { marginBottom: 16 };
    if (spaceBottom) bottomStyle = { marginBottom: spaceBottom };

    const handleExpand = (expand: boolean) => {
        if (!children) return;
        !isControlled(props) && setInternalExpand(expand);
        onExpand?.(expand);
    };

    return (
        <div className={classNames(`${prefixCls}`, className)} style={{ ...bottomStyle, ...style }}>
            <div
                className={classNames(preTitleRowCls, `${preTitleRowCls}--${size}`, {
                    [`${preTitleRowCls}--background`]: background,
                    [`${preTitleRowCls}--pointer`]: children,
                })}
                onClick={() => handleExpand(!expand)}
            >
                <div className="title__box">
                    {addonBefore ? <div className="title__addon-before">{addonBefore}</div> : null}
                    <div className="title__text">{title}</div>
                    {questionTooltip ? (
                        <div className={`title__tooltip`}>{questionTooltip}</div>
                    ) : null}
                    {description ? <div className={`title__description`}>{description}</div> : null}
                </div>
                {addonAfter && <div className={`title__addon-after`}>{addonAfter}</div>}
                {children && (
                    <div className={`title__collapse`}>
                        <div className="text">{expand ? '收起' : '展开'}</div>
                        <UpOutlined className={`icon ${expand ? 'up' : 'down'}`} />
                    </div>
                )}
            </div>
            {children && (
                <div className={`${prefixCls}__content ${currentExpand ? 'active' : ''}`}>
                    {children}
                </div>
            )}
        </div>
    );
};

export default BlockHeader;
