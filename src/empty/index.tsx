import React from 'react';
import { Empty as AntdEmpty, EmptyProps } from 'antd';
import './style.scss';

export const IMG_MAP = {
    default: 'empty_default.png',
    project: 'empty_project.png',
    search: 'empty_search.png',
    chart: 'empty_chart.png',
    overview: 'empty_overview.png',
    permission: 'empty_permission.png',
};

interface IProps {
    type?: 'default' | 'search' | 'chart' | 'project' | 'overview' | 'permission';
    height?: number;
}

const Empty = (props: EmptyProps & IProps) => {
    const { type = 'default', height = 80, image, imageStyle, ...restProps } = props;
    let newImage: React.ReactNode = IMG_MAP[type] ? (
        <img src={require('./emptyImg/' + IMG_MAP[type])}></img>
    ) : null;
    if (image) newImage = image as React.ReactNode;
    const newImageStyle = imageStyle ? { height, ...imageStyle } : { height };
    return (
        <div className="dtc-empty">
            <AntdEmpty {...restProps} image={newImage} imageStyle={newImageStyle} />
        </div>
    );
};

export default Empty;
