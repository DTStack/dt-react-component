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

export type LabelTooltipType = TooltipProps | React.ReactNode;

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
    titleRowClassName?: string;
    /** 标题的样式类名 */
    titleClassName?: string;
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
        titleRowClassName = '',
        titleClassName = '',
        background = true,
        defaultExpand = true,
        addonAfter,
        expand,
        children = '',
        addonBefore = <div className={`${prefixCls}-addon-before--${size}`} />,
        onExpand,
    } = props;

    const [internalExpand, setInternalExpand] = useState(defaultExpand);

    const currentExpand = isControlled(props) ? expand : internalExpand;

    const preTitleRowCls = `${prefixCls}-title-row`;

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
        <div className={`${prefixCls}`} style={bottomStyle}>
            <div
                className={classNames(
                    preTitleRowCls,
                    `${preTitleRowCls}--${size}`,
                    titleRowClassName,
                    {
                        [`${preTitleRowCls}-background`]: background,
                        [`${preTitleRowCls}-pointer`]: children,
                    }
                )}
                onClick={() => handleExpand(!currentExpand)}
            >
                <div className={`${prefixCls}-title-box`}>
                    {addonBefore ? (
                        <div className={`${prefixCls}-addon-before`}>{addonBefore}</div>
                    ) : null}
                    <div className={`${prefixCls}-title ${titleClassName}`}>{title}</div>
                    {questionTooltip ? (
                        <div className={`${prefixCls}-tooltip`}>{questionTooltip}</div>
                    ) : null}
                    {description ? (
                        <div className={`${prefixCls}-description`}>{description}</div>
                    ) : null}
                </div>
                {addonAfter && <div className={`${prefixCls}-addonAfter-box`}>{addonAfter}</div>}
                {children && (
                    <div className={`${prefixCls}-collapse-box`}>
                        <div className="text">{currentExpand ? '收起' : '展开'}</div>
                        <UpOutlined className={`icon ${currentExpand ? 'up' : 'down'}`} />
                    </div>
                )}
            </div>
            {children && (
                <div className={`${prefixCls}-content ${currentExpand ? 'active' : ''}`}>{children}</div>
            )}
        </div>
    );
};

export default BlockHeader;
