import React, { useState } from 'react';
import { QuestionCircleOutlined, UpOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import classNames from 'classnames';
import './style.scss';

export declare type SizeType = 'small' | 'middle' | undefined;

export interface BlockHeaderProps {
    // 标题
    title: string;
    // 标题前的图标，默认是一个色块
    beforeTitle?: React.ReactNode;
    // 标题后的提示图标或文案
    afterTitle?: React.ReactNode;
    // 默认展示为问号的tooltip
    tooltip?: React.ReactNode;
    // 后缀自定义内容块
    addonAfter?: React.ReactNode;
    /**
     * 小标题 font-size: 12px; line-height: 32px
     * 中标题 font-size: 14px; line-height: 40px
     * 默认 中标题
     */
    size?: SizeType;
    hasBottom?: boolean;
    spaceBottom?: number;
    // 标题一行的样式类名
    titleRowClassName?: string;
    // 标题的样式类名
    titleClassName?: string;
    // 是否显示背景, 默认 true
    showBackground?: boolean;
    // 是否默认展开内容, 默认 true
    defaultExpand?: boolean;
    // 展开/收起时的回调
    onChange?: (expand: boolean) => void;
    children?: React.ReactNode;
}
const BlockHeader: React.FC<BlockHeaderProps> = function (props) {
    const prefixCls = 'dtc-block-header';
    const {
        title,
        afterTitle = '',
        tooltip = '',
        size = 'middle',
        hasBottom = false,
        spaceBottom = 0,
        titleRowClassName = '',
        titleClassName = '',
        showBackground = true,
        defaultExpand = true,
        addonAfter,
        children = '',
        beforeTitle = <div className={`${prefixCls}__beforeTitle-${size}`}></div>,
        onChange,
    } = props;

    const [expand, setExpand] = useState(defaultExpand);

    const preTitleRowCls = `${prefixCls}-title-row`;

    const questionTooltip = tooltip && (
        <Tooltip title={tooltip}>
            <QuestionCircleOutlined />
        </Tooltip>
    );

    const newAfterTitle = afterTitle || questionTooltip;
    let bottomStyle;
    if (hasBottom) bottomStyle = { marginBottom: 16 };
    if (spaceBottom) bottomStyle = { marginBottom: spaceBottom };

    const handleExpand = (expand: boolean) => {
        if (!children) return;
        setExpand(expand);
        onChange?.(expand);
    };

    return (
        <div className={`${prefixCls}`} style={bottomStyle}>
            <div
                className={classNames(
                    preTitleRowCls,
                    `${preTitleRowCls}-${size}`,
                    titleRowClassName,
                    {
                        [`${preTitleRowCls}-background`]: showBackground,
                        [`${preTitleRowCls}-pointer`]: children,
                    }
                )}
                onClick={() => handleExpand(!expand)}
            >
                <div className={`${prefixCls}-title-box`}>
                    {beforeTitle ? (
                        <div className={`${prefixCls}-before-title`}>{beforeTitle}</div>
                    ) : null}
                    <div className={`${prefixCls}-title ${titleClassName}`}>{title}</div>
                    {newAfterTitle ? (
                        <div className={`${prefixCls}-after-title`}>{newAfterTitle}</div>
                    ) : null}
                </div>
                {addonAfter && <div className={`${prefixCls}-addonAfter-box`}>{addonAfter}</div>}
                {children && (
                    <div className={`${prefixCls}-collapse-box`}>
                        <div className="text">{expand ? '收起' : '展开'}</div>
                        <UpOutlined className={`icon ${expand ? 'up' : 'down'}`} />
                    </div>
                )}
            </div>

            <div className={`${prefixCls}-content ${expand ? '' : 'hide'}`}>{children}</div>
        </div>
    );
};

export default BlockHeader;
