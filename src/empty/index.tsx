import React, { ReactNode } from 'react';
import { Empty as AntdEmpty, EmptyProps as AntdEmptyProps } from 'antd';
import classNames from 'classnames';

import { LoupeIcon, SearchIcon } from './icon';
import './style.scss';

export const IMG_MAP = {
    default: 'empty_default.png',
    project: 'empty_project.png',
    search: 'empty_search.png',
    chart: 'empty_chart.png',
    overview: 'empty_overview.png',
    permission: 'empty_permission.png',
    notFound: 'empty_notFound.png',
};

export interface EmptyProps extends AntdEmptyProps {
    type?: 'default' | 'search' | 'chart' | 'project' | 'overview' | 'permission' | 'notFound';
    size?: 'default' | 'large';
    showEmpty?: boolean;
    extra?: ReactNode;
    active?: boolean;
}

const Empty = (props: EmptyProps) => {
    const {
        type = 'default',
        size = 'default',
        showEmpty = true,
        active = false,
        children,
        image,
        extra,
        className,
        style,
        ...restProps
    } = props;
    const img = () => {
        if (type === 'search' && active) {
            return (
                <>
                    <SearchIcon className="dtc-empty__search" />
                    <LoupeIcon className="dtc-empty__loupe" />
                </>
            );
        } else if (IMG_MAP[type]) {
            return <img src={require(`./emptyImg/${IMG_MAP[type]}`)} />;
        }

        return null;
    };

    let newImage: ReactNode = img() || null;
    if (image) newImage = image as ReactNode;

    return showEmpty ? (
        <AntdEmpty
            className={classNames(
                'dtc-empty',
                size === 'large' && 'dtc-empty__large',
                active && 'dtc-empty__active',
                className
            )}
            style={style}
            image={newImage}
            {...restProps}
        >
            {extra}
        </AntdEmpty>
    ) : (
        <>{children}</>
    );
};

export default Empty;
