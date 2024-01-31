import React, { ReactNode } from 'react';
import { Empty as AntdEmpty, EmptyProps as AntdEmptyProps } from 'antd';

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
}

const Empty = (props: EmptyProps) => {
    const { type = 'default', size = 'default', image, imageStyle, ...restProps } = props;

    let newImage: ReactNode = IMG_MAP[type] ? (
        <img src={require('./emptyImg/' + IMG_MAP[type])}></img>
    ) : null;
    if (image) newImage = image as ReactNode;

    const height = size === 'default' ? 80 : 100;

    return (
        <div className="dtc-empty">
            <AntdEmpty {...restProps} image={newImage} imageStyle={{ height, ...imageStyle }} />
        </div>
    );
};

export default Empty;
