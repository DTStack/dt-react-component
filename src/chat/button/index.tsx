import React, { useEffect } from 'react';
import { renderToString } from 'react-dom/server';
import { Button as AntdButton, ButtonProps } from 'antd';
import classNames from 'classnames';

import './index.scss';

interface IButtonProps extends Omit<ButtonProps, 'type'> {
    type: 'primary' | 'secondary';
}

const LINE_GRADIENT_ID = 'LINE_GRADIENT_ID';
const HOVER_LINE_GRADIENT_ID = 'HOVER_LINE_GRADIENT_ID';
const CONTAINER_ID = 'CONTAINER_ID';

export default function Button({ type, className, children, ...rest }: IButtonProps) {
    useEffect(() => {
        if (!document.querySelector(`#${CONTAINER_ID}`)) {
            const dom = document.createElement('span');
            dom.id = CONTAINER_ID;
            dom.innerHTML = renderToString(
                <svg width="0" height="0">
                    <defs>
                        <linearGradient id={LINE_GRADIENT_ID} gradientTransform="rotate(90)">
                            <stop offset="0%" stopColor="#00bac6" />
                            <stop offset="50%" stopColor="#0067ff" />
                            <stop offset="100%" stopColor="#450fde" />
                        </linearGradient>
                        <linearGradient id={HOVER_LINE_GRADIENT_ID} gradientTransform="rotate(90)">
                            <stop offset="0%" stopColor="#08c4ff" />
                            <stop offset="50%" stopColor="#4892ff" />
                            <stop offset="100%" stopColor="#8a61ff" />
                        </linearGradient>
                    </defs>
                </svg>
            );
            document.body.append(dom);
        }
    }, []);

    return (
        <AntdButton
            className={classNames('dtc__aigc__button', className, `dtc__aigc__button--${type}`)}
            ghost
            {...rest}
        >
            {children}
            {type === 'secondary' && !rest.disabled && (
                <span className="dtc__aigc__mask--secondary" />
            )}
        </AntdButton>
    );
}
