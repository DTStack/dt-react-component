import React from 'react';
import { Button as AntdButton, ButtonProps as AntdButtonProps } from 'antd';
import classNames from 'classnames';

import './index.scss';

export interface ButtonProps extends AntdButtonProps {}

export default function Button({
    className,
    icon,
    children,
    size = 'middle',
    ...rest
}: ButtonProps) {
    return (
        <AntdButton className={classNames('dtc-button', className)} {...rest}>
            {icon && <span className={`dtc-button__icon dtc-button__icon--${size}`}>{icon}</span>}
            {children && (
                <span className={`dtc-button__text dtc-button__text--${size}`}>{children}</span>
            )}
        </AntdButton>
    );
}
