import React, { ReactNode } from 'react';
import { Empty as AntdEmpty, EmptyProps as AntdEmptyProps } from 'antd';
import { DeleteIcon, ReloadIcon } from 'dt-react-component/components/icon';

import './style.scss';

export const IMG_MAP = {
    default: 'empty_default.png',
    project: 'empty_project.png',
    chart: 'empty_chart.png',
    overview: 'empty_overview.png',
    permission: 'empty_permission.png',
};

export interface EmptyProps extends AntdEmptyProps {
    type?: 'default' | 'search' | 'chart' | 'project' | 'overview' | 'permission';
    size?: 'default' | 'large';
    showEmpty?: boolean;
    extra?: ReactNode;
}

const Empty = (props: EmptyProps) => {
    const {
        type = 'default',
        size = 'default',
        showEmpty = true,
        children,
        image,
        imageStyle,
        extra,
        ...restProps
    } = props;
    const img = () => {
        if (type === 'search') {
            return (
                <div className="dtc-empty-search-container">
                    <DeleteIcon className="dtc-empty-search" />
                    <ReloadIcon className="dtc-empty-loupe" />
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
