import React from 'react';
import classNames from 'classnames';

import './index.scss';

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {}

/**
 * @deprecated 后续迁移至 icon 库
 */
export function AssistantAvatarIcon({ className, ...rest }: IconProps) {
    return (
        <span className={classNames('dtc__icon', className)} {...rest}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="none"
                viewBox="0 0 16 16"
            >
                <path
                    fill="url(#paint0_linear_1259_37039)"
                    fillRule="evenodd"
                    d="M8.5 3.5a.5.5 0 00-1 0V4H4.75a1 1 0 00-1 1v7a1 1 0 001 1h6.5a1 1 0 001-1V5a1 1 0 00-1-1H8.5v-.5zm2.75 8.5V5h-6.5v7h6.5zM7 8.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM3 7a.5.5 0 00-1 0v3a.5.5 0 001 0V7zm-2 .5a.5.5 0 01.5.5v1a.5.5 0 01-1 0V8a.5.5 0 01.5-.5zm14.5.5a.5.5 0 00-1 0v1a.5.5 0 001 0V8zm-2-1.5a.5.5 0 01.5.5v3a.5.5 0 01-1 0V7a.5.5 0 01.5-.5zM9.75 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                ></path>
                <defs>
                    <linearGradient
                        id="paint0_linear_1259_37039"
                        x1="0.5"
                        x2="16.294"
                        y1="3"
                        y2="11.529"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#00BAC6"></stop>
                        <stop offset="0.5" stopColor="#0067FF"></stop>
                        <stop offset="1" stopColor="#450FDE"></stop>
                    </linearGradient>
                </defs>
            </svg>
        </span>
    );
}

/**
 * @deprecated 后续迁移至 icon 库
 */
export function ReloadIcon({ className, ...rest }: IconProps) {
    return (
        <span className={classNames('dtc__icon', className)} {...rest}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="none"
                viewBox="0 0 16 16"
            >
                <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M13.495 4.209a6.609 6.609 0 00-5.452-2.87 6.621 6.621 0 00-6.617 6.626 6.621 6.621 0 006.617 6.625 6.62 6.62 0 006.208-4.324.5.5 0 10-.938-.347 5.62 5.62 0 01-5.27 3.67 5.621 5.621 0 01-5.617-5.624A5.621 5.621 0 018.043 2.34a5.61 5.61 0 014.731 2.59l-.003.003L11.304 6.4h3.446V2.955L13.495 4.21z"
                    clipRule="evenodd"
                ></path>
            </svg>
        </span>
    );
}

/**
 * @deprecated 后续迁移至 icon 库
 */
export function PauseIcon({ className, ...rest }: IconProps) {
    return (
        <span className={classNames('dtc__icon', className)} {...rest}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="none"
                viewBox="0 0 16 16"
            >
                <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M1.332 7.999a6.666 6.666 0 016.667-6.667 6.666 6.666 0 016.666 6.667A6.666 6.666 0 018 14.665 6.666 6.666 0 011.332 8zm12.333 0A5.666 5.666 0 008 2.332a5.665 5.665 0 00-5.667 5.667 5.666 5.666 0 005.667 5.666A5.666 5.666 0 0013.665 8zM6.972 6.125a.5.5 0 01.5.5v2.747a.5.5 0 01-1 0V6.625a.5.5 0 01.5-.5zm2.553.5a.5.5 0 10-1 0v2.747a.5.5 0 001 0V6.625z"
                    clipRule="evenodd"
                ></path>
            </svg>
        </span>
    );
}

/**
 * @deprecated 后续迁移至 icon 库
 */
export function RobotIcon({ className, ...rest }: IconProps) {
    return (
        <span className={classNames('dtc__icon', className)} {...rest}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="none"
                viewBox="0 0 268 265"
            >
                <path
                    fill="url(#paint0_linear_1290_3143)"
                    fillOpacity="0.03"
                    fillRule="evenodd"
                    d="M210.656 14.094c0-7.266-5.89-13.156-13.156-13.156-7.266 0-13.156 5.89-13.156 13.156V27.25h-72.36c-14.532 0-26.312 11.78-26.312 26.313V237.75c0 14.532 11.78 26.313 26.312 26.313h171.032c14.532 0 26.312-11.781 26.312-26.313V53.562c0-14.531-11.78-26.312-26.312-26.312h-72.36V14.094zm72.36 39.468H111.984V237.75h171.032V53.562zm-111.828 85.516c0 10.899-8.836 19.735-19.735 19.735s-19.734-8.836-19.734-19.735 8.835-19.734 19.734-19.734c10.899 0 19.735 8.835 19.735 19.734zm-105.25-32.89c0-7.267-5.89-13.157-13.157-13.157-7.266 0-13.156 5.89-13.156 13.157v78.937c0 7.266 5.89 13.156 13.156 13.156 7.266 0 13.157-5.89 13.157-13.156v-78.937zm-52.626 13.156c7.266 0 13.157 5.89 13.157 13.156v26.313c0 7.266-5.89 13.156-13.157 13.156-7.265 0-13.156-5.89-13.156-13.156V132.5c0-7.266 5.89-13.156 13.156-13.156zM394.844 132.5c0-7.266-5.89-13.156-13.156-13.156-7.266 0-13.157 5.89-13.157 13.156v26.313c0 7.266 5.891 13.156 13.157 13.156s13.156-5.89 13.156-13.156V132.5zm-52.625-39.469c7.266 0 13.156 5.89 13.156 13.157v78.937c0 7.266-5.89 13.156-13.156 13.156-7.266 0-13.156-5.89-13.156-13.156v-78.937c0-7.267 5.89-13.157 13.156-13.157zm-98.672 65.782c10.899 0 19.734-8.836 19.734-19.735s-8.835-19.734-19.734-19.734c-10.899 0-19.734 8.835-19.734 19.734 0 10.899 8.835 19.735 19.734 19.735z"
                    clipRule="evenodd"
                ></path>
                <defs>
                    <linearGradient
                        id="paint0_linear_1290_3143"
                        x1="0.156"
                        x2="415.745"
                        y1="0.938"
                        y2="225.356"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#00BAC6"></stop>
                        <stop offset="0.5" stopColor="#0067FF"></stop>
                        <stop offset="1" stopColor="#450FDE"></stop>
                    </linearGradient>
                </defs>
            </svg>
        </span>
    );
}

/**
 * @deprecated 后续迁移至 icon 库
 */
export function SendIcon({ className, ...rest }: IconProps) {
    return (
        <span className={classNames('dtc__icon', className)} {...rest}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="none"
                viewBox="0 0 16 16"
            >
                <path
                    fill="currentColor"
                    d="M13.07 1.662a.547.547 0 11.86.676l-6.884 8.765v3.147a.547.547 0 01-.507.545l-.04.002a.547.547 0 01-.546-.547v-3.336c0-.123.041-.241.117-.338l7-8.914z"
                ></path>
                <path
                    fill="currentColor"
                    d="M13.488 1.271a.547.547 0 01.804.548L12.81 13.57a.547.547 0 01-.799.415l-3.81-2.027a.547.547 0 11.513-.965l3.11 1.654 1.25-9.902-9.92 5.425 2.169 1.149c.255.135.36.442.245.702l-.018.037a.547.547 0 01-.739.227L1.744 8.661a.547.547 0 01-.006-.963l11.75-6.427z"
                ></path>
            </svg>
        </span>
    );
}

/**
 * @deprecated 后续迁移至 icon 库
 */
export const CopyIcon = ({ className, ...rest }: IconProps) => {
    return (
        <span className={classNames('dtc__icon', className)} {...rest}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                    <g transform="translate(-340 -367)">
                        <g transform="translate(201 320)">
                            <g transform="translate(139 47)">
                                <path
                                    fill="currentColor"
                                    d="M11 1.5A1.5 1.5 0 0112.5 3v.25h.5a1.5 1.5 0 011.5 1.5v8a1.5 1.5 0 01-1.5 1.5H5a1.5 1.5 0 01-1.5-1.5v-.25H3a1.5 1.5 0 01-1.493-1.356L1.5 11V3A1.5 1.5 0 013 1.5zm1.5 9.5a1.5 1.5 0 01-1.5 1.5H4.5v.25a.5.5 0 00.5.5h8a.5.5 0 00.5-.5v-8a.5.5 0 00-.5-.5h-.5zM11 2.5H3a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h8a.5.5 0 00.5-.5V3a.5.5 0 00-.5-.5zm-4 1a.5.5 0 01.5.5v2.5H10a.5.5 0 110 1H7.5V10a.5.5 0 11-1 0V7.5H4a.5.5 0 010-1h2.5V4a.5.5 0 01.5-.5z"
                                ></path>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </span>
    );
};
