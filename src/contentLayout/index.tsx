import React, { Children, cloneElement, useCallback, useMemo, useRef } from 'react';

import { Header, TableLayout } from './components';
import './index.scss';

interface IProps {
    height?: string;
    children?: React.ReactElement | React.ReactElement[];
    style?: React.CSSProperties;
}

export const NAME = 'content-layout';

const ContentLayout = (props: IProps) => {
    const { height = 'calc(100vh - 96px)', style, children } = props;
    const headerRef: any = useRef(null);

    const contentHeight = useMemo(() => {
        return `calc(${height} - ${headerRef?.current?.clientHeight || 0}px)`;
    }, [height, headerRef?.current]);

    const render = useCallback(() => {
        let herder;
        const content: React.ReactElement<any, string | React.JSXElementConstructor<any>>[] = [];
        let footer;
        Children.forEach(children, (child) => {
            if (child?.type === Header) {
                herder = cloneElement(child, {
                    thisRef: headerRef,
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

type OriginalInterface = typeof ContentLayout;
interface LayoutInterface extends OriginalInterface {
    Header: typeof Header;
    Table: typeof TableLayout;
}

const LayoutWrapper = ContentLayout;
(LayoutWrapper as LayoutInterface).Header = Header;
(LayoutWrapper as LayoutInterface).Table = TableLayout;

export default LayoutWrapper as LayoutInterface;
