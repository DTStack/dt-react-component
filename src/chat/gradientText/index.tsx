import React from 'react';
import classNames from 'classnames';

import './index.scss';

interface IGradientTextProps {
    className?: string;
    gradient?: boolean;
}
/**
 * @deprecated 从 rc 中同步过来，切勿直接修改该组件
 */
export default function GradientText({
    className,
    gradient,
    children,
}: React.PropsWithChildren<IGradientTextProps>) {
    return <span className={classNames(gradient && 'gradient-text', className)}>{children}</span>;
}
