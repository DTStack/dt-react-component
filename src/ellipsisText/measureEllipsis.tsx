import React, { useCallback } from 'react';
import { Tooltip } from 'antd';
import classNames from 'classnames';

import Resize from '../resize';
import { toTooltipProps } from '../utils';
import type { IEllipsisTextProps } from './index';
import useEllipsisTextStyle from './useEllipsisTextStyle';
import { getValidContainerElement } from './utils';

type IMeasureEllipsisProps = Omit<IEllipsisTextProps, 'dynamic'>;
/**
 * @description 内部组件：dynamic 开启时通过动态测量判断文本是否溢出。
 */
const MeasureEllipsis = (props: IMeasureEllipsisProps) => {
    const { value, tooltip, className, maxWidth } = props;
    const [textRef, isOverflow, style, onResize] = useEllipsisTextStyle(value, maxWidth);

    // 监听容器尺寸变化以重新测量
    const observerEle = textRef.current?.parentElement
        ? getValidContainerElement(textRef.current?.parentElement)
        : null;

    const renderText = useCallback(() => {
        return (
            <span
                ref={textRef}
                className={classNames('dtc-ellipsis-text', className)}
                style={style}
            >
                {typeof value === 'function' ? value() : value}
            </span>
        );
    }, [style, value, className]);

    const content = typeof value === 'function' ? value() : value;
    const tooltipProps = toTooltipProps(tooltip || content);

    return (
        <Resize onResize={onResize} observerEle={observerEle}>
            {isOverflow ? (
                <Tooltip mouseEnterDelay={0} mouseLeaveDelay={0} {...tooltipProps}>
                    {renderText()}
                </Tooltip>
            ) : (
                renderText()
            )}
        </Resize>
    );
};

export default MeasureEllipsis;
