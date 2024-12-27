import React, { ReactNode } from 'react';
import { Empty as AntdEmpty, EmptyProps as AntdEmptyProps } from 'antd';

import { LoupeIcon, SearchIcon } from '../components/icon';
import './style.scss';

export const IMG_MAP = {
    default: 'empty_default.png',
    project: 'empty_project.png',
    search: 'empty_search.png',
    chart: 'empty_chart.png',
    overview: 'empty_overview.png',
    permission: 'empty_permission.png',
};

export interface EmptyProps extends AntdEmptyProps {
    type?: 'default' | 'search' | 'chart' | 'project' | 'overview' | 'permission';
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
        imageStyle,
        extra,
        ...restProps
    } = props;
    const img = () => {
        if (type === 'search' && active) {
            return (
                <div className="dtc-empty__container">
                    <SearchIcon className="dtc-empty__search" />
                    <LoupeIcon className="dtc-empty__loupe" />
                </div>
            );
        } else if (IMG_MAP[type]) {
            return <img src={require(`./emptyImg/${IMG_MAP[type]}`)} />;
        }

        return null;
    };

    let newImage: ReactNode = img() || null;
    if (image) newImage = image as ReactNode;

    const height = size === 'default' ? 80 : 100;

    return showEmpty ? (
        <div className="dtc-empty">
            <AntdEmpty {...restProps} image={newImage} imageStyle={{ height, ...imageStyle }}>
                {extra}
            </AntdEmpty>
        </div>
    ) : (
        <>{children}</>
    );
};

export default Empty;
