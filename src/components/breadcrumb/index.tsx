import React from 'react'
import { Breadcrumb as  BreadcrumbRender } from 'antd';
import { Link } from 'react-router';

const BreadcrumbItem = BreadcrumbRender.Item
interface Route {
    path?: string;
    name?: string;
}

interface IProps {
    routes: Route[];
    style?: React.CSSProperties;
}

export default function Breadcrumb (props: IProps) {
    const { routes, style = {} } = props;
    const len = routes.length - 1;
    return (
        <div style={style} data-testid="test-breadcrumb">
            <BreadcrumbRender>
                {routes.map((item: Route, index: number) => (
                    <BreadcrumbItem key={item.path}>
                        {index == len ? (
                            item.name
                        ) : (
                            <Link to={item.path} data-testid={`${item.path}-link`}>{item.name}</Link>
                        )}
                    </BreadcrumbItem>
                ))}
            </BreadcrumbRender>
        </div>
    );
};
