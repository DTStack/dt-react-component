import React, { Children, cloneElement, useCallback, useMemo, useRef } from 'react';
import { Table, TableProps } from 'antd';
import classNames from 'classnames';

import './index.scss';

interface IProps {
    header?: React.ReactElement;
    content?: React.ReactElement;
    footer?: React.ReactElement;
    height?: string;
    children?: React.ReactElement[];
    style?: React.CSSProperties;
    className?: string;
    padding?: number | string;
}

const NAME = 'dtc-content-layout';

const ContentLayout = (props: IProps) => {
    const { height = 'calc(100vh - 96px)', className, style, padding, children } = props;
    const headerRef: any = useRef(null);
    const footerRef: any = useRef(null);

    const contentHeight = useMemo(() => {
        return `calc(${height} - ${headerRef?.current?.clientHeight || 0}px - ${
            footerRef?.current?.clientHeight || 0
        }px)`;
    }, [height, headerRef?.current, footerRef?.current]);

    const render = useCallback(() => {
        let herder = props?.header && (
            <ContentLayout.Header thisRef={headerRef}>{props?.header}</ContentLayout.Header>
        );
        const content = [props?.content];
        let footer = props?.footer && (
            <ContentLayout.Footer thisRef={footerRef}>{props?.footer}</ContentLayout.Footer>
        );
        Children.forEach(children, (child) => {
            if (child?.type === ContentLayout.Header) {
                herder = cloneElement(child, {
                    thisRef: headerRef,
                });
            } else if (child?.type === ContentLayout.Footer) {
                footer = cloneElement(child, {
                    thisRef: footerRef,
                });
            } else if (child) {
                content.push(
                    cloneElement(child as React.ReactElement<any>, {
                        height: contentHeight,
                    })
                );
            }
        });

        return [herder, ...content, footer];
    }, [children, contentHeight]);

    return (
        <div
            className={classNames(NAME, className)}
            style={{
                ...style,
                height,
                padding,
            }}
        >
            {render()}
        </div>
    );
};

interface ContentLayoutChildProps {
    thisRef?: React.Ref<HTMLDivElement>;
    children?: React.ReactElement | React.ReactElement[] | React.ReactNode;
    style?: React.CSSProperties;
}
interface HeaderProps extends ContentLayoutChildProps {}

ContentLayout.Header = ({ thisRef, children, style }: HeaderProps) => {
    return (
        <div className={`${NAME}__header`} ref={thisRef} style={style}>
            {children}
        </div>
    );
};

type ITableProps<T> = {
    height?: string;
    children?: any;
} & TableProps<T> &
    ContentLayoutChildProps;

ContentLayout.Table = ({ height, children, ...otherProps }: ITableProps<any>) => {
    let lineHeight = 44;

    if (otherProps.footer) {
        lineHeight = lineHeight * 2;
    }
    const scroll: TableProps<any>['scroll'] = {
        y: `calc(${height} - ${lineHeight}px)`,
        ...otherProps?.scroll,
    };

    return children ? (
        cloneElement(children, {
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
