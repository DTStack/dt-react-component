import React from 'react';
import { Button as AntdButton, ButtonProps as AntdButtonProps, Tooltip } from 'antd';
import classNames from 'classnames';

import { LabelTooltipType, toTooltipProps } from '../utils';
import './index.scss';

export interface ButtonProps extends AntdButtonProps {
    tooltip?: LabelTooltipType;
}

export default function Button({
    className,
    icon,
    children,
    size = 'middle',
    tooltip,
    ...rest
}: ButtonProps) {
    const buttonNode = (
        <AntdButton className={classNames('dtc-button', className)} size={size} {...rest}>
            {icon && <span className={`dtc-button__icon dtc-button__icon--${size}`}>{icon}</span>}
            {children && (
                <span className={`dtc-button__text dtc-button__text--${size}`}>{children}</span>
            )}
        </AntdButton>
    );

    const tooltipProps = toTooltipProps(tooltip);
    const hasTooltip = tooltipProps && (tooltipProps.title || tooltipProps.title === 0);

    return hasTooltip ? <Tooltip {...tooltipProps}>{buttonNode}</Tooltip> : buttonNode;
}
