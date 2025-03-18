import React from 'react';
import classNames from 'classnames';

import { GradientDotIcon } from '../icon';
import './index.scss';

export interface ChatTagProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}

const Tag: React.FC<ChatTagProps> = function Tag(props) {
    const { className, children, ...rest } = props;
    return (
        <div className={classNames('dtc__tag', className)} {...rest}>
            <GradientDotIcon className="dtc__tag__icon" />
            {children}
        </div>
    );
};

export default Tag;
