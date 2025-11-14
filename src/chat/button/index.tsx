import React, { useEffect } from 'react';
import { renderToString } from 'react-dom/server';
import { Button as AntdButton, ButtonProps } from 'antd';
import classNames from 'classnames';

import './index.scss';

interface IButtonProps extends Omit<ButtonProps, 'type'> {
    type: 'default' | 'primary' | 'secondary';
}

const GLOBAL_GRADIENT_CLASSNAME = 'dtc__aigc__button__global-gradient';
const SECONDARY_LINEAR_GRADIENT_ID = 'secondary_linear_gradient';
const SECONDARY_LINEAR_GRADIENT_HOVER_ID = 'secondary_linear_gradient_hover';

export default function Button({ type = 'default', className, children, ...rest }: IButtonProps) {
    useEffect(() => {
        if (!document.querySelector(`.${GLOBAL_GRADIENT_CLASSNAME}`)) {
            const div = document.createElement('div');
            div.style.setProperty('width', '0');
            div.style.setProperty('height', '0');
            div.className = GLOBAL_GRADIENT_CLASSNAME;
            div.innerHTML = renderToString(
                <svg width={0} height={0}>
                    <defs>
                        <linearGradient
                            id={SECONDARY_LINEAR_GRADIENT_ID}
                            x1={0}
                            y1={0.2}
                            x2={0.9}
                            y2={0.5}
                        >
                            <stop stopColor="#00BAC6" />
                            <stop offset="0.5" stopColor="#0067FF" />
                            <stop offset="1" stopColor="#450FDE" />
                        </linearGradient>
                        <linearGradient
                            id={SECONDARY_LINEAR_GRADIENT_HOVER_ID}
                            x1={0.5}
                            y1={0}
                            x2={1}
                            y2={0.2}
                        >
                            <stop stopColor="#00BAC6" />
                            <stop offset="0.5" stopColor="#0067FF" />
                            <stop offset="1" stopColor="#450FDE" />
                        </linearGradient>
                    </defs>
                </svg>
            );
            document.body.appendChild(div);
        }
    }, []);

    return (
        <AntdButton
            className={classNames('dtc__aigc__button', className, `dtc__aigc__button--${type}`)}
            ghost
            {...rest}
        >
            <span className="dtc__aigc__button__text">{children}</span>
        </AntdButton>
    );
}
