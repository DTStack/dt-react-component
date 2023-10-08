import React, { cloneElement } from 'react';
import { Table, TableProps } from 'antd';

import { NAME } from '.';

interface ContentLayoutChildProps {
    thisRef?: React.Ref<HTMLDivElement>;
    children?: React.ReactNode;
}

type ITableProps<T> = {
    height?: string;
} & TableProps<T> &
    ContentLayoutChildProps;

export const TableLayout = ({ height, children, ...otherProps }: ITableProps<any>) => {
    let lineHeight = 44;

    if (otherProps.footer) {
        lineHeight = lineHeight * 2;
    }
    const scroll: TableProps<any>['scroll'] = otherProps?.scroll ? { ...otherProps.scroll } : {};
    scroll.y = `calc(${height} - ${lineHeight}px)`;

    return children ? (
        cloneElement(children as React.ReactElement, {
            scroll,
        })
    ) : (
        <Table {...otherProps} scroll={scroll} />
    );
};

interface HeaderProps extends ContentLayoutChildProps {}

export const Header = ({ thisRef, children }: HeaderProps) => {
    return (
        <div className={`${NAME}__header`} ref={thisRef}>
            {children}
        </div>
    );
};
