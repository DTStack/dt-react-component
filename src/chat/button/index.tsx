import React from 'react';
import { Button as AntdButton, ButtonProps } from 'antd';
import classNames from 'classnames';

import './index.scss';

interface IButtonProps extends Omit<ButtonProps, 'type'> {
    type: 'primary' | 'secondary';
}

const LINE_GRADIENT_ID = 'LINE_GRADIENT_ID';

export default function Button({ type, className, children, ...rest }: IButtonProps) {
    return (
        <AntdButton
            className={classNames('dtc__aigc__button', className, `dtc__aigc__button--${type}`)}
            ghost
            {...rest}
        >
            {/* FIXME: 如何解决多个组件渲染多个的问题 */}
            <svg width="0" height="0">
                <defs>
                    <linearGradient id={LINE_GRADIENT_ID} gradientTransform="rotate(90)">
                        <stop offset="0%" stopColor="#00bac6" />
                        <stop offset="50%" stopColor="#0067ff" />
                        <stop offset="100%" stopColor="#450fde" />
                    </linearGradient>
                </defs>
            </svg>
            {children}
        </AntdButton>
    );
}
