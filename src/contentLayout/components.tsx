import React from 'react';
import { Table, TableProps } from 'antd';

import { NAME } from '.';

interface ContentLayoutChildProps {
    ref?: React.Ref<HTMLDivElement>;
    children?: React.ReactNode;
}

type ITableProps<T> = {
    height?: string;
} & TableProps<T> &
    Omit<ContentLayoutChildProps, 'ref'>;

export const TableLayout = ({ height, ...otherProps }: ITableProps<any>) => {
    let lineHeight = 44;

    if (otherProps.footer) {
        lineHeight = lineHeight * 2;
    }
    const scroll: TableProps<any>['scroll'] = otherProps?.scroll ? { ...otherProps.scroll } : {};
    scroll.y = `calc(${height} - ${lineHeight}px)`;

    return <Table {...otherProps} scroll={scroll} />;
};

interface HeaderProps extends ContentLayoutChildProps {}

export const Header = ({ ref, children }: HeaderProps) => {
    return (
        <div className={`${NAME}__header`} ref={ref}>
            {children}
        </div>
    );
};
