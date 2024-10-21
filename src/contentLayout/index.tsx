import React, { Children, cloneElement, useCallback, useMemo, useRef } from 'react';
import classNames from 'classnames';

import { Header, TableLayout } from './components';
import './index.scss';

interface IProps {
    height?: string;
    children?: React.ReactElement | React.ReactElement[];
    style?: React.CSSProperties;
    className?: string;
}

export const NAME = 'content-layout';

const ContentLayout = (props: IProps) => {
    const { height = 'calc(100vh - 96px)', style, className, children } = props;
    const headerRef: any = useRef(null);

    const contentHeight = useMemo(() => {
        return `calc(${height} - ${headerRef?.current?.clientHeight || 0}px)`;
    }, [height, headerRef?.current]);

    const render = useCallback(() => {
        let header;
        const content: React.ReactElement<any, string | React.JSXElementConstructor<any>>[] = [];

        Children.forEach(children, (child) => {
            if (child?.type === Header) {
                header = cloneElement(child, {
                    key: 'header',
                    ref: headerRef,
                });
            }
            if (child?.type === TableLayout) {
                content.push(
                    cloneElement(child, {
                        key: 'table',
                        height: contentHeight,
                    })
                );
            }
        });

        return [header, ...content];
    }, [children, contentHeight]);

    return (
        <div
            className={classNames(NAME, className)}
            style={height ? { ...style, height } : { ...style }}
        >
            {render()}
        </div>
    );
};

type OriginalInterface = typeof ContentLayout;
interface LayoutInterface extends OriginalInterface {
    Header: typeof Header;
    Table: typeof TableLayout;
}

const LayoutWrapper = ContentLayout;
(LayoutWrapper as LayoutInterface).Header = Header;
(LayoutWrapper as LayoutInterface).Table = TableLayout;

export default LayoutWrapper as LayoutInterface;
