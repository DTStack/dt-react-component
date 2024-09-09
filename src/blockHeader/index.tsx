import React, { ReactNode, useState } from 'react';
import { QuestionCircleOutlined, UpOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import classNames from 'classnames';

import { LabelTooltipType, toTooltipProps } from '../utils';
import './style.scss';

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
    /** 后缀自定义内容块 */
    addonAfter?: ReactNode;
    /**
     * 小标题 font-size: 12px; line-height: 32px
     * 中标题 font-size: 14px; line-height: 40px
     * 大标题 font-size: 16px; line-height: 40px
     * 默认 中标题
     */
    size?: SizeType;
    /** 自定义 Bottom 值 */
    spaceBottom?: number;
    /** 标题一行的样式类名 */
    className?: string;
    /** 标题的样式类名 */
    style?: React.CSSProperties;
    // 展示内容(children)的样式类名
    contentClassName?: string;
    // 展示内容(children)的样式
    contentStyle?: React.CSSProperties;
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

const prefixCls = 'dtc-block-header';
const preTitleRowCls = `${prefixCls}__title`;

const BlockHeader: React.FC<IBlockHeaderProps> = function (props) {
    const {
        title,
        description = '',
        tooltip,
        size = 'middle',
        spaceBottom = 16,
        className = '',
        contentClassName = '',
        style = {},
        contentStyle = {},
        background = true,
        defaultExpand,
        addonAfter,
        expand,
        children = '',
        addonBefore = <div className="addon-before--default" />,
        onExpand,
    } = props;

    const [internalExpand, setInternalExpand] = useState(defaultExpand);

    const currentExpand = isControlled(props) ? expand : internalExpand;

    const showCollapse = typeof expand === 'boolean' || typeof defaultExpand === 'boolean';

    const tooltipProps = toTooltipProps(tooltip);

    let bottomStyle;
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
                    [`${preTitleRowCls}--pointer`]: showCollapse && children,
                })}
                onClick={() => showCollapse && handleExpand(!currentExpand)}
            >
                <div className="title__box">
                    {addonBefore ? (
                        <div className={`title__addon-before title__addon-before--${size}`}>
                            {addonBefore}
                        </div>
                    ) : null}
                    <div className="title__text">{title}</div>
                    {tooltipProps?.title ? (
                        <div className={`title__tooltip`}>
                            <Tooltip {...tooltipProps}>
                                <QuestionCircleOutlined />
                            </Tooltip>
                        </div>
                    ) : null}
                    {description ? <div className={`title__description`}>{description}</div> : null}
                </div>
                {addonAfter && <div className={`title__addon-after`}>{addonAfter}</div>}
                {children && showCollapse && (
                    <div className={`title__collapse`}>
                        <div className="collapse__text">{currentExpand ? '收起' : '展开'}</div>
                        <UpOutlined
                            className={classNames('collapse__icon', {
                                'collapse__icon--up': currentExpand,
                                'collapse__icon--down': !currentExpand,
                            })}
                        />
                    </div>
                )}
            </div>
            {children && (
                <div
                    className={classNames(`${prefixCls}__content`, contentClassName, {
                        [`${prefixCls}__content--active`]: currentExpand || !showCollapse,
                    })}
                    style={contentStyle}
                >
                    {children}
                </div>
            )}
        </div>
    );
};

export default BlockHeader;
