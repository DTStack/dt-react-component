import React, { ReactNode } from 'react';
import { Typography } from 'antd';
import { RenderFunction } from 'antd/lib/tooltip';

import { LabelTooltipType, toTooltipProps } from '../utils';
import MeasureEllipsis from './measureEllipsis';
import { DEFAULT_MAX_WIDTH } from './utils';
import './style.scss';

export { DEFAULT_MAX_WIDTH };

export interface IEllipsisTextProps {
    /**
     * 文本内容
     */
    value: ReactNode | RenderFunction;
    /**
     * 提示内容
     * @default value
     */
    tooltip?: LabelTooltipType;
    /**
     * 类名
     */
    className?: string;
    /**
     * 可视区宽度
     */
    maxWidth?: string | number;
    /**
     * 是否启用动态测量计算宽度。
     * true：通过测量计算判断文本是否溢出（支持 maxWidth/Tooltip 透传），并自动监听容器尺寸变化重测；
     * false（默认）：使用 antd Typography.Text 的 ellipsis 做轻量省略。
     */
    dynamic?: boolean;
}

const EllipsisText = (props: IEllipsisTextProps) => {
    const { dynamic = false, ...ellipsisTextProps } = props;

    if (dynamic) {
        // dynamic 仅用于上层分流，交给测量组件前剔除，避免透传到 Tooltip
        return <MeasureEllipsis {...ellipsisTextProps} />;
    }

    const { value, tooltip, className, maxWidth } = ellipsisTextProps;

    // maxWidth 仅 dynamic 分支生效，未开启时开发态提示
    if (maxWidth && process.env.NODE_ENV !== 'production') {
        console.warn(
            '[EllipsisText] `maxWidth` only takes effect when `dynamic` is enabled; since `dynamic` was not provided, this prop will be ignored.'
        );
    }

    const content = typeof value === 'function' ? value() : value;
    const tooltipProps = toTooltipProps(tooltip || content);

    return (
        <Typography.Text className={className} ellipsis={{ tooltip: tooltipProps }}>
            {content}
        </Typography.Text>
    );
};

export default EllipsisText;
