import React from 'react';
import { FrownOutlined } from '@ant-design/icons';
import classNames from 'classnames';

import './style.scss';

const NotFound: React.FC<any> = function ({
    className,
    style,
}: {
    className?: string;
    style?: React.CSSProperties;
}) {
    return (
        <div className={classNames('dtc-not-found', className)} style={style}>
            <h1>
                <FrownOutlined /> 亲，是不是走错地方了？
            </h1>
        </div>
    );
};

export default NotFound;
