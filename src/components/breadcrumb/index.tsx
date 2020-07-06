import * as React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router';
import './style.scss';

const BreadcrumbItem = Breadcrumb.Item
interface Route {
    path?: string;
    name?: string;
}

interface IProps {
    routes: Route[];
    style?: React.CSSProperties;
}

export default (props: IProps) => {
    const { routes, style = {} } = props;
    const len = routes.length - 1;
    return (
        <div className="newBreadcrumb" style={style} data-testid="test-breadcrumb">
            <Breadcrumb>
                {routes.map((item: any, index: number) => (
                    <BreadcrumbItem key={item.path}>
                        {index == len ? (
                            item.name
                        ) : (
                            <Link to={item.path} data-testid={`${item.path}-link`}>{item.name}</Link>
                        )}
                    </BreadcrumbItem>
                ))}
            </Breadcrumb>
        </div>
    );
};
