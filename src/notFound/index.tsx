import React from 'react';
import classNames from 'classnames';

import Empty from '../empty';
import './style.scss';

interface INotFoundProps {
    className?: string;
    style?: React.CSSProperties;
}

const NotFound: React.FC<INotFoundProps> = function ({ className, style }) {
    return (
        <div className={classNames('dtc-not-found', className)} style={style}>
            <Empty
                type="notFound"
                description="抱歉，您访问的页面不存在"
                className="dtc-not-found__empty"
                imageStyle={{ height: 250 }}
            />
        </div>
    );
};

export default NotFound;
