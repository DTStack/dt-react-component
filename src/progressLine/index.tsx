import React, { ReactNode } from 'react';
import { Tooltip } from 'antd';
import { TooltipProps } from 'antd/lib/tooltip';
import './style.scss';

interface IProgressLineProps {
    // 顶部左侧的内容
    title?: ReactNode;
    // 顶部右侧的百分比，需要带上 %
    percent?: string;
    // 进度条的颜色
    color?: string;
    className?: string;
    // 进度条 100% 时的宽度
    width?: number | string;
    // 顶部左侧内容默认通过 tooltip hover 展示
    tooltipProps?: TooltipProps;
}

const ProgressLine = (props: IProgressLineProps) => {
    const {
        title = '',
        percent = '0%',
        color = '#3BCEFF',
        className = '',
        width = '280px',
        tooltipProps,
    } = props;
    const prefixCls = 'dtc-progress-line';

    return (
        <div className={`${prefixCls} ${className}`}>
            <div className={`${prefixCls}-title`} style={{ width }}>
                {/* 顶部左侧的内容 */}
                <Tooltip title={title} {...tooltipProps}>
                    <div className={`${prefixCls}-content`}>{title}</div>
                </Tooltip>

                {/* 顶部右侧的百分比 */}
                <div className={`${prefixCls}-content`}>{percent}</div>
            </div>

            {/* 进度条 */}
            <div className={`${prefixCls}-wrap`} style={{ width }} data-testid="progress-line-wrap">
                <div
                    className={`${prefixCls}-line`}
                    style={{ width: percent, backgroundColor: color }}
                    data-testid="progress-line"
                ></div>
            </div>
        </div>
    );
};

export default ProgressLine;
