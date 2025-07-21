import React, { CSSProperties } from 'react';
import { AiAvatarColored } from '@dtinsight/react-icons';
import classNames from 'classnames';

import Flex from '../../flex';
import './index.scss';

export interface IWelcomeProps {
    title: React.ReactNode;
    description?: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
    style?: CSSProperties;
}

export default function Welcome({
    icon = <AiAvatarColored style={{ fontSize: 24 }} />,
    title,
    description,
    className,
    style,
}: IWelcomeProps) {
    return (
        <div className={classNames('dtc__welcome', className)} style={style}>
            <div className="dtc__welcome__content">
                <Flex gap={8} align="center">
                    {icon}
                    <span className="dtc__welcome__title">{title}</span>
                </Flex>
                <div className="dtc__welcome__description">{description}</div>
            </div>
        </div>
    );
}
