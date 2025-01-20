import React, { ReactNode, useCallback } from 'react';
import { Tooltip } from 'antd';
import { AbstractTooltipProps, RenderFunction } from 'antd/lib/tooltip';
import classNames from 'classnames';

import Resize from '../resize';
import useTextStyle from './useTextStyle';
import './style.scss';

export const DEFAULT_MAX_WIDTH = 120;

export interface IEllipsisTextProps extends AbstractTooltipProps {
    /**
     * 文本内容
     */
    value: ReactNode | RenderFunction;
    /**
     * 提示内容
     * @default value
     */
    title?: string | ReactNode | RenderFunction;
    /**
     * 类名
     */
    className?: string;
    /**
     * 可视区宽度
     */
    maxWidth?: string | number;
    /**
     * 监听父元素大小的改变
     */
    watchParentSizeChange?: boolean;
    /**
     * antd Tooltip
     */
    [propName: string]: any;
}

const EllipsisText = (props: IEllipsisTextProps) => {
    const {
        value,
        title = value,
        className,
        maxWidth,
        watchParentSizeChange = false,
        ...otherProps
    } = props;
    const [ref, isOverflow, style, onResize] = useTextStyle(value, maxWidth);

    const observerEle =
        watchParentSizeChange && ref.current?.parentElement ? ref.current?.parentElement : null;

    const renderText = useCallback(() => {
        return (
            <span ref={ref} className={classNames('dtc-ellipsis-text', className)} style={style}>
                {typeof value === 'function' ? value() : value}
            </span>
        );
    }, [style, value]);

    return (
        <Resize onResize={onResize} observerEle={observerEle}>
            {isOverflow ? (
                <Tooltip title={title} mouseEnterDelay={0} mouseLeaveDelay={0} {...otherProps}>
                    {renderText()}
                </Tooltip>
            ) : (
                renderText()
            )}
        </Resize>
    );
};

export default EllipsisText;
