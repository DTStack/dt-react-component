import React from 'react';
import classNames from 'classnames';

import './index.scss';

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {}

export function SendColored({ className, ...rest }: IconProps) {
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
                    fill={'url(#paint0_linear_3878_6538)'}
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
