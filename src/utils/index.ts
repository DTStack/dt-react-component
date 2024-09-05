import React from 'react';
import { TooltipProps } from 'antd';

export type LabelTooltipType = TooltipProps | TooltipProps['title'];

export function toTooltipProps(tooltip: LabelTooltipType): TooltipProps | null {
    if (tooltip !== null && typeof tooltip === 'object' && !React.isValidElement(tooltip)) {
        return tooltip as TooltipProps;
    }
    return {
        title: tooltip,
    };
}
