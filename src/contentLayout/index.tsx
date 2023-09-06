import React, { Children, cloneElement, useCallback, useMemo, useRef } from 'react';
import { Table, TableProps } from 'antd';
import classNames from 'classnames';

import './index.scss';

interface IProps {
    height?: string;
    children?: React.ReactElement | React.ReactElement[];
    style?: React.CSSProperties;
}

const NAME = 'content-layout';

const ContentLayout = (props: IProps) => {
    const { height = 'calc(100vh - 96px)', style, children } = props;
    const headerRef: any = useRef(null);
    const footerRef: any = useRef(null);

    const contentHeight = useMemo(() => {
        return `calc(${height} - ${headerRef?.current?.clientHeight || 0}px - ${
            footerRef?.current?.clientHeight || 0
        }px)`;
    }, [height, headerRef?.current, footerRef?.current]);

    const render = useCallback(() => {
        let herder;
        const content: React.ReactElement<any, string | React.JSXElementConstructor<any>>[] = [];
        let footer;
        Children.forEach(children, (child) => {
            if (child?.type === ContentLayout.Header) {
                herder = cloneElement(child, {
                    thisRef: headerRef,
                });
            } else if (child?.type === ContentLayout.Footer) {
                footer = cloneElement(child, {
                    thisRef: footerRef,
                });
            } else {
                child &&
                    content.push(
                        cloneElement(child, {
                            height: contentHeight,
                        })
                    );
            }
        });

        return [herder, ...content, footer];
    }, [children, contentHeight]);

    return (
        <div className={NAME} style={height ? { ...style, height } : { ...style }}>
            {render()}
        </div>
    );
};

interface ContentLayoutChildProps {
    thisRef?: React.Ref<HTMLDivElement>;
    children?: React.ReactNode;
}
interface HeaderProps extends ContentLayoutChildProps {}

ContentLayout.Header = ({ thisRef, children }: HeaderProps) => {
    return (
        <div className={`${NAME}__header`} ref={thisRef}>
            {children}
        </div>
    );
};

type ITableProps<T> = {
    height?: string;
} & TableProps<T> &
    ContentLayoutChildProps;

ContentLayout.Table = ({ height, children, ...otherProps }: ITableProps<any>) => {
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

interface FooterProps extends ContentLayoutChildProps {}

ContentLayout.Footer = ({ thisRef, children }: FooterProps) => {
    return (
        <div className={`${NAME}__footer`} ref={thisRef}>
            {children}
        </div>
    );
};

interface ContentProps extends ContentLayoutChildProps {
    style?: React.CSSProperties;
    className?: string;
    height?: string | number;
}

ContentLayout.Content = ({ style = {}, className, height, children }: ContentProps) => {
    return (
        <div
            className={classNames(`${NAME}__content`, className)}
            style={height ? { ...style, height } : { ...style }}
        >
            {children}
        </div>
    );
};

export default ContentLayout;
