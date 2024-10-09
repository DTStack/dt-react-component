import React from 'react';
import { Table, TableProps } from 'antd';
import classNames from 'classnames';

import { NAME } from '.';

interface ContentLayoutChildProps {
    ref?: React.Ref<HTMLDivElement>;
    children?: React.ReactNode;
}

type ITableProps<T> = {
    height?: string;
    style?: React.CSSProperties;
    className?: string;
} & TableProps<T> &
    Omit<ContentLayoutChildProps, 'ref'>;

export const TableLayout = ({ height, size, className, ...otherProps }: ITableProps<any>) => {
    let lineHeight = size === 'small' ? 36 : 44;

    if (otherProps.footer) {
        let footerHeight = 44;
        if (className?.includes('dt-pagination-small')) footerHeight = 36;
        lineHeight = lineHeight + footerHeight;
    }

    const scroll: TableProps<any>['scroll'] = {
        y: `calc(${height} - ${lineHeight}px)`,
        ...otherProps.scroll,
    };

    return <Table {...otherProps} size={size} className={className} scroll={scroll} />;
};

interface HeaderProps extends ContentLayoutChildProps {
    style?: React.CSSProperties;
    className?: string;
}

export const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
    ({ className, style, children }, ref) => {
        return (
            <div className={classNames(`${NAME}__header`, className)} style={style} ref={ref}>
                {children}
            </div>
        );
    }
);
