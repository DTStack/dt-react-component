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

export const TableLayout = ({ height, ...otherProps }: ITableProps<any>) => {
    let lineHeight = 44;

    if (otherProps.footer) {
        lineHeight = lineHeight * 2;
    }

    const scroll: TableProps<any>['scroll'] = otherProps?.scroll
        ? { ...otherProps.scroll }
        : { y: `calc(${height} - ${lineHeight}px)` };

    return <Table {...otherProps} scroll={scroll} />;
};

interface HeaderProps extends ContentLayoutChildProps {
    style?: React.CSSProperties;
    className?: string;
}

export const Header = ({ ref, className, style, children }: HeaderProps) => {
    return (
        <div className={classNames(`${NAME}__header`, className)} style={style} ref={ref}>
            {children}
        </div>
    );
};
