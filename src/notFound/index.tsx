import React from 'react';
import classNames from 'classnames';

import Empty from '../empty';
import useLocale from '../locale/useLocale';
import './style.scss';

interface INotFoundProps {
    className?: string;
    style?: React.CSSProperties;
}

const NotFound: React.FC<INotFoundProps> = function ({ className, style }) {
    const locale = useLocale('NotFound');
    return (
        <div className={classNames('dtc-not-found', className)} style={style}>
            <Empty
                type="notFound"
                description={locale.description}
                className="dtc-not-found__empty"
                imageStyle={{ height: 250 }}
            />
        </div>
    );
};

export default NotFound;
