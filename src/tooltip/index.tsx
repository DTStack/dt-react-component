import React from 'react';
import { Tooltip as AntdTooltip, TooltipProps as AntdTooltipProps } from 'antd';
import classNames from 'classnames';

import './index.scss';

export type TooltipProps = AntdTooltipProps;

const Tooltip = ({ overlayClassName, ...rest }: TooltipProps) => {
    return <AntdTooltip overlayClassName={classNames('dtc-tooltip', overlayClassName)} {...rest} />;
};

export default Tooltip;
