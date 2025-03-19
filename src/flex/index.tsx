import React, { CSSProperties, forwardRef } from 'react';
import classNames from 'classnames';

import './index.scss';

export interface IFlexProps extends React.DOMAttributes<HTMLElement> {
    vertical?: boolean;
    wrap?: React.CSSProperties['flexWrap'];
    justify?: React.CSSProperties['justifyContent'];
    align?: React.CSSProperties['alignItems'];
    flex?: React.CSSProperties['flex'];
    gap?: React.CSSProperties['gap'];
    children: React.ReactNode;
    className?: string;
    style?: CSSProperties;
}

/**
 * 简单版本的 Ant Design 的 Flex 组件
 */
export default forwardRef<HTMLElement, IFlexProps>(function Flex(
    {
        className,
        vertical = false,
        wrap = 'nowrap',
        justify = 'normal',
        align = 'normal',
        flex = 'normal',
        gap = 0,
        style,
        children,
        ...rest
    },
    ref
) {
    return (
        <section
            className={classNames('dtc-flex', className, vertical && 'dtc-flex__vertical')}
            style={{
                flexWrap: wrap,
                justifyContent: justify,
                alignItems: align,
                flex,
                gap,
                ...style,
            }}
            ref={ref}
            {...rest}
        >
            {children}
        </section>
    );
});
