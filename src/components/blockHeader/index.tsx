import React, { useState } from 'react';
import { UpOutlined } from '@ant-design/icons';

export interface BlockHeaderProps {
    // 标题
    title: string;
    // 标题前的图标，默认是一个色块
    beforeTitle?: React.ReactNode;
    // 标题后的提示图标或文案
    afterTitle?: string | React.ReactNode;
    /**
     * true 小标题 font-size: 12px; line-height: 32px
     * false 大标题 font-size: 14px; line-height: 40px
     * 默认 false
     */
    isSmall?: boolean;
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
        isSmall = false,
        titleRowClassName = '',
        titleClassName = '',
        showBackground = true,
        defaultExpand = true,
        children = '',
        onChange,
    } = props;
    const { beforeTitle = <div className={`default ${isSmall ? 'small' : ''}`}></div> } = props;
    const [expand, setExpand] = useState(defaultExpand);

    const handleExpand = (expand) => {
        if (!children) return;
        setExpand(expand);
        onChange?.(expand);
    };
    return (
        <div className={`${prefixCls}`}>
            <div
                className={`${prefixCls}-title-row ${isSmall ? 'small' : 'default'} ${
                    showBackground ? 'background' : ''
                } ${children ? 'pointer' : ''} ${titleRowClassName}`}
                onClick={() => handleExpand(!expand)}
            >
                <div className={`${prefixCls}-title-box`}>
                    <div className={`${prefixCls}-before-title`}>{beforeTitle}</div>
                    <div className={`${prefixCls}-title ${titleClassName}`}>{title}</div>

                    <div className={`${prefixCls}-after-title`}>{afterTitle}</div>
                </div>

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
