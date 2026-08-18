import React from 'react';
import { Popover as AntdPopover, PopoverProps as AntdPopoverProps } from 'antd';
import classNames from 'classnames';

import './index.scss';

export type PopoverProps = AntdPopoverProps;

const Popover = ({ overlayClassName, ...rest }: PopoverProps) => {
    return <AntdPopover overlayClassName={classNames('dtc-popover', overlayClassName)} {...rest} />;
};

export default Popover;
