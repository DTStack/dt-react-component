import React from 'react';
import { Breadcrumb as BreadcrumbRender } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router';
import classNames from 'classnames';

const BreadcrumbItem = BreadcrumbRender.Item;

interface Route {
    path?: string;
    name?: string;
}

interface IProps {
    className?: string;
    routes: Route[];
    style?: React.CSSProperties;
    separator?: React.ReactNode;
}

export default function Breadcrumb(props: IProps) {
    const { routes, style = {}, separator = <RightOutlined />, className = '' } = props;
    const len = routes.length - 1;
    return (
        <div style={style} className={classNames('dtc-breadcrumb', className)}>
            <BreadcrumbRender separator={separator}>
                {routes.map((item: Route, index: number) => (
                    <BreadcrumbItem key={item.path}>
                        {index == len ? (
                            item.name
                        ) : (
                            <Link to={item.path} data-testid={`${item.path}-link`}>
                                {item.name}
                            </Link>
                        )}
                    </BreadcrumbItem>
                ))}
            </BreadcrumbRender>
        </div>
    );
}
