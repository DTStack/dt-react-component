import React from 'react';
import { AlertProps, TooltipProps } from 'antd';

export type LabelTooltipType = TooltipProps | TooltipProps['title'];

export function toTooltipProps(tooltip: LabelTooltipType): TooltipProps | null {
    if (tooltip !== null && typeof tooltip === 'object' && !React.isValidElement(tooltip)) {
        return tooltip as TooltipProps;
    }
    return {
        title: tooltip,
    };
}

type BannerPropType = AlertProps['message'] | Omit<AlertProps, 'banner'>;

export function isAlertObjectProps(banner: BannerPropType): banner is Omit<AlertProps, 'banner'> {
    return (
        typeof banner === 'object' &&
        banner !== null &&
        !React.isValidElement(banner) &&
        'message' in banner
    );
}
