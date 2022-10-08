import React from 'react'
import { Breadcrumb as BreadcrumbRender } from 'antd'
import { Link } from 'react-router';
import { RightOutlined } from '@ant-design/icons';

const BreadcrumbItem = BreadcrumbRender.Item
interface Route {
    path?: string;
    name?: string;
}

interface IProps {
    routes: Route[];
    separator?: React.ReactNode;
    style?: React.CSSProperties;
}

export default function Breadcrumb (props: IProps) {
    const { routes, style = {}, separator = <RightOutlined /> } = props;
    const len = routes.length - 1;
    return (
        <div style={style} data-testid="test-breadcrumb">
            <BreadcrumbRender separator={separator}>
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
