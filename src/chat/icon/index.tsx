import React from 'react';
import classNames from 'classnames';

import './index.scss';

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
    /**
     * 是否支持渐变色
     */
    gradient?: boolean;
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
export function SendIcon({ className, gradient, ...rest }: IconProps) {
    return (
        <span className={classNames('dtc__icon', className)} {...rest}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="none"
                viewBox="0 0 24 24"
            >
                <path
                    fill={!gradient ? 'currentColor' : 'url(#paint0_linear_3878_6538)'}
                    fillRule="evenodd"
                    d="M17.999 3.858 3.35 9.204a1.66 1.66 0 0 0-1.095 1.458 1.66 1.66 0 0 0 .862 1.602l4.454 2.44c.27.143.593.098.808-.118l.737-.72 4.508-4.428a.677.677 0 0 1 .952.018c.26.261.26.693-.009.954l-4.562 4.473-.61.603a.68.68 0 0 0-.118.828l2.64 4.626c.315.513.845.81 1.429.81.063 0 .117 0 .18-.009a1.68 1.68 0 0 0 1.41-1.107L20.153 6a1.69 1.69 0 0 0-.404-1.764 1.64 1.64 0 0 0-1.751-.378"
                    clipRule="evenodd"
                ></path>
                <defs>
                    <linearGradient
                        id="paint0_linear_3878_6538"
                        x1="2.25"
                        x2="23.921"
                        y1="3.75"
                        y2="11.552"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#00BAC6"></stop>
                        <stop offset="0.5" stopColor="#0067FF"></stop>
                        <stop offset="1" stopColor="#450FDE"></stop>
                    </linearGradient>
                </defs>
                <defs>
                    <linearGradient
                        id="paint0_linear_3878_6538_hover"
                        x1="2.25"
                        x2="23.921"
                        y1="3.75"
                        y2="11.552"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#08C4FF"></stop>
                        <stop offset="0.5" stopColor="#4892FF"></stop>
                        <stop offset="1" stopColor="#8A61FF"></stop>
                    </linearGradient>
                </defs>
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

/**
 * @deprecated 后续迁移至 icon 库
 */
export const GradientDotIcon = ({ className, ...rest }: IconProps) => {
    return (
        <span className={classNames('dtc__icon', className)} {...rest}>
            <svg
                width="1em"
                height="1em"
                viewBox="0 0 6 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3Z"
                    fill="url(#paint0_linear_5253_12831)"
                />
                <circle cx="3" cy="3" r="3" fill="url(#paint1_linear_5253_12831)" />
                <defs>
                    <linearGradient
                        id="paint0_linear_5253_12831"
                        x1="0"
                        y1="0"
                        x2="7.2238"
                        y2="2.60057"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#08C4FF" />
                        <stop offset="0.5" stopColor="#4892FF" />
                        <stop offset="1" stopColor="#8A61FF" />
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear_5253_12831"
                        x1="0"
                        y1="0"
                        x2="7.2238"
                        y2="2.60057"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#08C4FF" />
                        <stop offset="0.5" stopColor="#4892FF" />
                        <stop offset="1" stopColor="#8A61FF" />
                    </linearGradient>
                </defs>
            </svg>
        </span>
    );
};

/**
 * @deprecated 后续迁移至 icon 库
 */
export const ShiningIcon = ({ className, ...rest }: IconProps) => {
    return (
        <span className={classNames('dtc__icon', className)} {...rest}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="none"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.80139 4.01428C6.91344 4.08174 7.02979 4.20793 7.0606 4.39456C7.12661 4.79444 7.24827 5.39735 7.45065 5.99485C7.65697 6.60401 7.92845 7.14998 8.26421 7.48575C8.59998 7.82151 9.14595 8.09299 9.75511 8.29931C10.3526 8.50169 10.9555 8.62335 11.3554 8.68936C11.542 8.72017 11.6682 8.83652 11.7357 8.94856C11.7986 9.05301 11.8184 9.16175 11.8184 9.24998C11.8184 9.3382 11.7986 9.44694 11.7357 9.55139C11.6682 9.66344 11.542 9.77979 11.3554 9.8106C10.9555 9.87661 10.3526 9.99827 9.75511 10.2006C9.14595 10.407 8.59998 10.6784 8.26421 11.0142C7.92845 11.35 7.65697 11.896 7.45065 12.5051C7.24827 13.1026 7.12661 13.7055 7.0606 14.1054C7.02979 14.292 6.91344 14.4182 6.80139 14.4857C6.69694 14.5486 6.58821 14.5684 6.49998 14.5684C6.41176 14.5684 6.30302 14.5486 6.19857 14.4857C6.08652 14.4182 5.97017 14.292 5.93936 14.1054C5.87335 13.7055 5.75169 13.1026 5.54931 12.5051C5.34299 11.896 5.07151 11.35 4.73575 11.0142C4.39998 10.6784 3.85401 10.407 3.24485 10.2006C2.64735 9.99827 2.04444 9.87661 1.64456 9.8106C1.45793 9.77979 1.33174 9.66344 1.26428 9.55139C1.2014 9.44694 1.18152 9.33821 1.18152 9.24998C1.18152 9.16176 1.2014 9.05302 1.26428 8.94857C1.33174 8.83652 1.45793 8.72017 1.64456 8.68936C2.04444 8.62335 2.64735 8.50169 3.24485 8.29931C3.85401 8.09299 4.39998 7.82151 4.73575 7.48575C5.07151 7.14998 5.34299 6.60401 5.54931 5.99485C5.75169 5.39735 5.87335 4.79444 5.93936 4.39456C5.97017 4.20793 6.08652 4.08174 6.19856 4.01428C6.30301 3.9514 6.41175 3.93152 6.49998 3.93152C6.5882 3.93152 6.69694 3.9514 6.80139 4.01428ZM6.49998 6.30524C6.49881 6.30871 6.49763 6.31218 6.49646 6.31566C6.2741 6.97215 5.94229 7.69342 5.44285 8.19285C4.94342 8.69229 4.22215 9.0241 3.56566 9.24646C3.56218 9.24763 3.55871 9.24881 3.55524 9.24998C3.55871 9.25115 3.56218 9.25233 3.56566 9.2535C4.22215 9.47586 4.94342 9.80767 5.44285 10.3071C5.94229 10.8065 6.2741 11.5278 6.49646 12.1843C6.49763 12.1878 6.49881 12.1912 6.49998 12.1947C6.50115 12.1912 6.50233 12.1878 6.5035 12.1843C6.72586 11.5278 7.05767 10.8065 7.5571 10.3071C8.05654 9.80767 8.77781 9.47586 9.4343 9.2535C9.43778 9.25233 9.44125 9.25115 9.44472 9.24998C9.44125 9.24881 9.43778 9.24763 9.4343 9.24646C8.77781 9.0241 8.05654 8.69229 7.5571 8.19285C7.05767 7.69342 6.72586 6.97215 6.5035 6.31566C6.50233 6.31218 6.50115 6.30871 6.49998 6.30524Z"
                    fill="currentColor"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.1546 1.04302C12.2605 1.10678 12.3724 1.2274 12.402 1.40662C12.4338 1.59929 12.4919 1.8862 12.5871 2.16729C12.6863 2.46003 12.8069 2.68919 12.9339 2.81616C13.0608 2.94312 13.29 3.06378 13.5828 3.16293C13.8638 3.25814 14.1507 3.31627 14.3434 3.34808C14.5226 3.37766 14.6433 3.4895 14.707 3.59539C14.7662 3.69369 14.7842 3.79462 14.7842 3.87505C14.7842 3.95547 14.7662 4.05641 14.707 4.1547C14.6433 4.2606 14.5226 4.37244 14.3434 4.40202C14.1507 4.43383 13.8638 4.49196 13.5828 4.58717C13.29 4.68632 13.0608 4.80698 12.9339 4.93394C12.8069 5.06091 12.6863 5.29007 12.5871 5.58282C12.4919 5.8639 12.4338 6.15081 12.402 6.34348C12.3724 6.5227 12.2605 6.64332 12.1546 6.70708C12.0564 6.76626 11.9554 6.78428 11.875 6.78428C11.7946 6.78428 11.6936 6.76626 11.5953 6.70708C11.4894 6.64333 11.3776 6.5227 11.348 6.34348C11.3162 6.15081 11.2581 5.8639 11.1629 5.58282C11.0637 5.29007 10.9431 5.06091 10.8161 4.93394C10.6891 4.80698 10.46 4.68633 10.1672 4.58717C9.88614 4.49196 9.59923 4.43383 9.40656 4.40202C9.22734 4.37244 9.10672 4.2606 9.04296 4.15471C8.98378 4.05641 8.96576 3.95548 8.96576 3.87505C8.96576 3.79463 8.98378 3.69369 9.04296 3.5954C9.10672 3.48951 9.22734 3.37766 9.40656 3.34808C9.59923 3.31627 9.88614 3.25814 10.1672 3.16293C10.46 3.06378 10.6891 2.94312 10.8161 2.81616C10.9431 2.68919 11.0637 2.46003 11.1629 2.16729C11.2581 1.8862 11.3162 1.59929 11.348 1.40662C11.3776 1.2274 11.4894 1.10678 11.5953 1.04303C11.6936 0.983846 11.7946 0.965821 11.875 0.96582C11.9554 0.96582 12.0563 0.983844 12.1546 1.04302ZM11.875 3.03802C11.7804 3.21305 11.6648 3.38167 11.5232 3.52327C11.3816 3.66486 11.213 3.78044 11.038 3.87505C11.213 3.96967 11.3816 4.08524 11.5232 4.22684C11.6648 4.36844 11.7804 4.53705 11.875 4.71208C11.9696 4.53705 12.0852 4.36844 12.2268 4.22684C12.3684 4.08524 12.537 3.96967 12.712 3.87505C12.537 3.78044 12.3684 3.66486 12.2268 3.52327C12.0852 3.38167 11.9696 3.21305 11.875 3.03802Z"
                    fill="currentColor"
                />
            </svg>
        </span>
    );
};

/**
 * @deprecated 后续迁移至 icon 库
 */
export const AIAvatar = ({ className, ...rest }: IconProps) => {
    return (
        <span className={classNames('dtc__icon', className)} {...rest}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="none"
                viewBox="0 0 20 20"
            >
                <g id="AiAvatar" clipPath="url(#clip0_3878_7498)">
                    <path
                        id="Vector 13"
                        fill="#F2F7FA"
                        d="M1.664 4.428c-1.896-2.292 1.08-5.1 3.18-2.172.324.58.87 1.584 1.074 2.292-.72.492-1.536.972-2.136 1.392-.358-1.084-1.116-.907-1.71-1.192a1.2 1.2 0 0 1-.408-.32"
                    ></path>
                    <path
                        id="Vector 13 (Stroke)"
                        fill="#64698B"
                        fillRule="evenodd"
                        d="M2.791 4.502a8 8 0 0 1 .228-.285c.282.082.61.074.886-.058a.95.95 0 0 0 .497-.555c.06-.18.07-.375.037-.577.064-.054.136-.104.228-.158.251.463.537 1.024.716 1.496-.26.171-.527.341-.792.51l-.027.016c-.203.129-.405.257-.598.383a1.64 1.64 0 0 0-.78-.646 3 3 0 0 0-.395-.126m1.365-2.376c-.2.124-.382.266-.558.478a.45.45 0 0 0-.082.427c.058.18.04.263.033.284-.004.012-.008.02-.032.032a.33.33 0 0 1-.163.021.4.4 0 0 1-.109-.023.47.47 0 0 0-.404-.108.5.5 0 0 0-.127.045.8.8 0 0 0-.19.144 4 4 0 0 0-.292.33 10 10 0 0 0-.26.338c-.75-.949-.489-1.91.066-2.36.286-.23.66-.34 1.065-.256.317.066.683.256 1.053.648M3.285.597c.682.14 1.35.597 1.924 1.396l.015.021.013.022c.317.569.893 1.62 1.114 2.387l.09.313-.269.183c-.357.244-.736.485-1.094.712l-.032.02c-.37.235-.716.455-1.006.658l-.495.346-.19-.574a1.16 1.16 0 0 0-.237-.438.74.74 0 0 0-.273-.182 3 3 0 0 0-.385-.115l-.03-.007a3 3 0 0 1-.553-.185l.195-.406-.195.406a1.6 1.6 0 0 1-.56-.44c-1.099-1.328-.82-2.89.155-3.68A2.16 2.16 0 0 1 3.285.597"
                        clipRule="evenodd"
                    ></path>
                    <path
                        id="Vector 13_2"
                        fill="#F2F7FA"
                        d="M18.465 4.428c1.896-2.292-1.08-5.1-3.18-2.172-.324.58-.87 1.584-1.075 2.292.72.492 1.536.972 2.136 1.392.358-1.084 1.116-.907 1.711-1.192a1.2 1.2 0 0 0 .408-.32"
                    ></path>
                    <path
                        id="Vector 13 (Stroke)_2"
                        fill="#64698B"
                        fillRule="evenodd"
                        d="M17.338 4.502a8 8 0 0 0-.228-.285c-.282.082-.61.074-.886-.058a.95.95 0 0 1-.497-.555 1.2 1.2 0 0 1-.037-.577 1.7 1.7 0 0 0-.229-.158c-.25.463-.536 1.024-.715 1.496.26.171.527.341.792.51l.026.016q.308.194.599.383.086-.134.189-.244c.184-.198.39-.32.59-.402.135-.055.273-.095.396-.126m-1.366-2.376c.2.124.383.266.559.478a.45.45 0 0 1 .082.427c-.058.18-.04.263-.033.284.004.012.008.02.032.032a.33.33 0 0 0 .163.021.4.4 0 0 0 .109-.023.47.47 0 0 1 .404-.108.5.5 0 0 1 .127.045.8.8 0 0 1 .19.144c.087.085.192.207.292.33.084.105.175.222.26.338.75-.949.488-1.91-.066-2.36-.286-.23-.66-.34-1.065-.256-.317.066-.683.256-1.054.648m.986 1.927.003.002zM16.843.597c-.681.14-1.35.597-1.924 1.396l-.014.021-.013.022c-.317.569-.893 1.62-1.114 2.387l-.09.313.268.183c.357.244.737.485 1.095.712l.031.02c.371.235.716.455 1.006.658l.496.346.19-.574c.073-.222.158-.354.236-.438a.74.74 0 0 1 .274-.182c.11-.046.229-.076.385-.115l.03-.007c.159-.04.358-.092.552-.185l-.194-.406.194.406c.197-.094.389-.231.56-.44 1.1-1.328.82-2.89-.154-3.68a2.16 2.16 0 0 0-1.814-.437"
                        clipRule="evenodd"
                    ></path>
                    <path
                        id="Ellipse 1"
                        fill="#F2F7FA"
                        d="M18.782 11.28c1.332 7.656-3.852 8.124-8.736 8.124s-9.883-.588-8.928-7.5c.804-5.82 4.044-8.268 8.928-8.268s7.82 2.376 8.736 7.644"
                    ></path>
                    <path
                        id="Ellipse 1 (Stroke)"
                        fill="#64698B"
                        fillRule="evenodd"
                        d="M4.35 5.925c-1.417 1.247-2.394 3.201-2.786 6.04-.232 1.678-.096 2.927.277 3.86.37.924.985 1.571 1.777 2.032 1.622.942 3.973 1.097 6.428 1.097 1.218 0 2.43-.03 3.55-.189s2.116-.444 2.913-.935c.786-.485 1.39-1.179 1.73-2.194.344-1.026.425-2.41.1-4.28-.447-2.567-1.375-4.369-2.73-5.532s-3.193-1.738-5.563-1.738c-2.368 0-4.281.592-5.697 1.839m-.596-.675c1.627-1.433 3.776-2.064 6.292-2.064 2.514 0 4.585.612 6.149 1.955 1.562 1.341 2.56 3.361 3.03 6.062.341 1.958.274 3.504-.132 4.719a4.86 4.86 0 0 1-2.111 2.674c-.944.582-2.076.892-3.26 1.06-1.185.169-2.451.198-3.676.198-2.43 0-5.02-.14-6.88-1.22-.948-.55-1.709-1.345-2.16-2.475-.449-1.122-.58-2.538-.334-4.317.412-2.98 1.457-5.16 3.082-6.592"
                        clipRule="evenodd"
                    ></path>
                    <g id="Union" filter="url(#filter0_d_3878_7498)">
                        <path
                            fill="url(#paint0_linear_3878_7498)"
                            fillRule="evenodd"
                            d="M5.534 16.853q.162 0 .318-.014c.148-.013.295-.027.443-.027h7.769a.002.002 0 0 0 .002-.003q0-.001.003-.002.193.022.393.022c1.903 0 3.445-1.526 3.445-3.408s-1.427-3.3-2.82-2.928l-.08.021c-.204.055-.444.119-.704.196-.608.18-1.276.075-1.76-.334a2 2 0 0 0-.258-.18l-.853-.486a2.88 2.88 0 0 0-2.864.006l-.835.48q-.135.08-.253.18a1.77 1.77 0 0 1-1.632.342q-.42-.119-.89-.242c-1.393-.373-2.868 1.087-2.868 2.97 0 1.881 1.542 3.407 3.444 3.407"
                            clipRule="evenodd"
                        ></path>
                    </g>
                    <g id="Union (Stroke)" filter="url(#filter1_d_3878_7498)">
                        <path
                            fill="url(#paint1_linear_3878_7498)"
                            fillRule="evenodd"
                            d="M5.534 16.153q.129 0 .255-.011l.02-.002c.138-.012.31-.028.486-.028h7.69a.7.7 0 0 1 .162 0q.154.017.316.017c1.522 0 2.743-1.22 2.743-2.708 0-.767-.29-1.414-.687-1.82s-.853-.538-1.252-.432l-.08.022c-.204.054-.435.116-.685.19-.804.238-1.724.11-2.41-.47q-.073-.06-.154-.107l-.853-.486a2.18 2.18 0 0 0-2.168.005l-.834.48a1 1 0 0 0-.147.104c-.638.548-1.501.703-2.278.485a70 70 0 0 0-.88-.24c-.393-.105-.861.03-1.276.453-.412.42-.712 1.079-.712 1.84 0 1.489 1.222 2.708 2.744 2.708m8.53.659a.002.002 0 0 0 .002-.003q0-.001.003-.002l.015.002a3.5 3.5 0 0 0 .682.007c1.76-.152 3.14-1.614 3.14-3.395 0-1.882-1.426-3.3-2.82-2.928l-.08.021c-.203.055-.443.119-.703.196-.608.18-1.276.075-1.76-.334a2 2 0 0 0-.258-.18l-.853-.486a2.88 2.88 0 0 0-2.864.006l-.835.48q-.135.08-.253.18a1.77 1.77 0 0 1-1.632.342q-.42-.119-.89-.242c-1.393-.373-2.868 1.087-2.868 2.97 0 1.881 1.542 3.407 3.444 3.407q.162 0 .318-.014l.012-.001c.144-.013.287-.026.431-.026z"
                            clipRule="evenodd"
                        ></path>
                    </g>
                    <path
                        id="Vector 17 (Stroke)"
                        fill="#fff"
                        fillRule="evenodd"
                        d="M3.906 12.127c.377-.328.863-.43 1.196-.427a.2.2 0 1 1-.003.4c-.265-.002-.647.082-.93.329-.272.236-.483.645-.377 1.362a.2.2 0 1 1-.395.059c-.123-.831.12-1.384.51-1.723"
                        clipRule="evenodd"
                    ></path>
                    <g id="Vector 18 (Stroke)" filter="url(#filter2_d_3878_7498)">
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M13.12 12.25a.75.75 0 0 1 .75.75v.936a.75.75 0 0 1-1.5 0V13a.75.75 0 0 1 .75-.75"
                            clipRule="evenodd"
                        ></path>
                    </g>
                    <g id="Vector 19 (Stroke)" filter="url(#filter3_d_3878_7498)">
                        <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M6.88 12.25a.75.75 0 0 1 .75.75v.936a.75.75 0 0 1-1.5 0V13a.75.75 0 0 1 .75-.75"
                            clipRule="evenodd"
                        ></path>
                    </g>
                </g>
                <defs>
                    <filter
                        id="filter0_d_3878_7498"
                        width="18.216"
                        height="9.922"
                        x="0.89"
                        y="8.132"
                        colorInterpolationFilters="sRGB"
                        filterUnits="userSpaceOnUse"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                        <feColorMatrix
                            in="SourceAlpha"
                            result="hardAlpha"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        ></feColorMatrix>
                        <feOffset></feOffset>
                        <feGaussianBlur stdDeviation="0.6"></feGaussianBlur>
                        <feComposite in2="hardAlpha" operator="out"></feComposite>
                        <feColorMatrix values="0 0 0 0 0.233659 0 0 0 0 0.448234 0 0 0 0 1 0 0 0 0.2 0"></feColorMatrix>
                        <feBlend
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_3878_7498"
                        ></feBlend>
                        <feBlend
                            in="SourceGraphic"
                            in2="effect1_dropShadow_3878_7498"
                            result="shape"
                        ></feBlend>
                    </filter>
                    <filter
                        id="filter1_d_3878_7498"
                        width="18.216"
                        height="9.922"
                        x="0.89"
                        y="8.132"
                        colorInterpolationFilters="sRGB"
                        filterUnits="userSpaceOnUse"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                        <feColorMatrix
                            in="SourceAlpha"
                            result="hardAlpha"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        ></feColorMatrix>
                        <feOffset></feOffset>
                        <feGaussianBlur stdDeviation="0.6"></feGaussianBlur>
                        <feComposite in2="hardAlpha" operator="out"></feComposite>
                        <feColorMatrix values="0 0 0 0 0.233659 0 0 0 0 0.448234 0 0 0 0 1 0 0 0 0.2 0"></feColorMatrix>
                        <feBlend
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_3878_7498"
                        ></feBlend>
                        <feBlend
                            in="SourceGraphic"
                            in2="effect1_dropShadow_3878_7498"
                            result="shape"
                        ></feBlend>
                    </filter>
                    <filter
                        id="filter2_d_3878_7498"
                        width="2.94"
                        height="3.876"
                        x="11.65"
                        y="11.53"
                        colorInterpolationFilters="sRGB"
                        filterUnits="userSpaceOnUse"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                        <feColorMatrix
                            in="SourceAlpha"
                            result="hardAlpha"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        ></feColorMatrix>
                        <feOffset></feOffset>
                        <feGaussianBlur stdDeviation="0.36"></feGaussianBlur>
                        <feComposite in2="hardAlpha" operator="out"></feComposite>
                        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0"></feColorMatrix>
                        <feBlend
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_3878_7498"
                        ></feBlend>
                        <feBlend
                            in="SourceGraphic"
                            in2="effect1_dropShadow_3878_7498"
                            result="shape"
                        ></feBlend>
                    </filter>
                    <filter
                        id="filter3_d_3878_7498"
                        width="2.94"
                        height="3.876"
                        x="5.41"
                        y="11.53"
                        colorInterpolationFilters="sRGB"
                        filterUnits="userSpaceOnUse"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                        <feColorMatrix
                            in="SourceAlpha"
                            result="hardAlpha"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        ></feColorMatrix>
                        <feOffset></feOffset>
                        <feGaussianBlur stdDeviation="0.36"></feGaussianBlur>
                        <feComposite in2="hardAlpha" operator="out"></feComposite>
                        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0"></feColorMatrix>
                        <feBlend
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_3878_7498"
                        ></feBlend>
                        <feBlend
                            in="SourceGraphic"
                            in2="effect1_dropShadow_3878_7498"
                            result="shape"
                        ></feBlend>
                    </filter>
                    <linearGradient
                        id="paint0_linear_3878_7498"
                        x1="2.739"
                        x2="15.115"
                        y1="10.208"
                        y2="18.018"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.025" stopColor="#EBFEFF"></stop>
                        <stop offset="0.339" stopColor="#8CCFFF"></stop>
                        <stop offset="0.708" stopColor="#B399FF"></stop>
                        <stop offset="1" stopColor="#BDA6FF"></stop>
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear_3878_7498"
                        x1="2.09"
                        x2="15.765"
                        y1="9.332"
                        y2="19.683"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#00BAC6"></stop>
                        <stop offset="0.5" stopColor="#0067FF"></stop>
                        <stop offset="1" stopColor="#450FDE"></stop>
                    </linearGradient>
                    <clipPath id="clip0_3878_7498">
                        <path fill="#fff" d="M0 0h20v20H0z"></path>
                    </clipPath>
                </defs>
            </svg>
        </span>
    );
};
