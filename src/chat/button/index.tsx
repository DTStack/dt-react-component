import React from 'react';
import { Button as AntdButton, ButtonProps } from 'antd';
import classNames from 'classnames';

import './index.scss';

interface IButtonProps extends Omit<ButtonProps, 'type'> {
    type: 'default' | 'primary' | 'secondary';
}

export default function Button({ type = 'default', className, children, ...rest }: IButtonProps) {
    return (
        <AntdButton
            className={classNames('dtc__aigc__button', className, `dtc__aigc__button--${type}`)}
            ghost
            {...rest}
        >
            <svg width={0} height={0}>
                <defs>
                    <linearGradient
                        id="secondary_linear_gradient"
                        x1="1.18164"
                        y1="3.93164"
                        x2="13.9881"
                        y2="8.54198"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#00BAC6" />
                        <stop offset="0.5" stopColor="#0067FF" />
                        <stop offset="1" stopColor="#450FDE" />
                    </linearGradient>
                    <linearGradient
                        id="secondary_linear_gradient_hover"
                        x1="8.96582"
                        y1="0.96582"
                        x2="15.9711"
                        y2="3.4877"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#00BAC6" />
                        <stop offset="0.5" stopColor="#0067FF" />
                        <stop offset="1" stopColor="#450FDE" />
                    </linearGradient>
                </defs>
            </svg>
            <span className="dtc__aigc__button__text">{children}</span>
        </AntdButton>
    );
}
