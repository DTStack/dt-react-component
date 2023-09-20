import React from 'react';
import { FrownOutlined } from '@ant-design/icons';

import './style.scss';

const NotFound: React.FC<any> = function () {
    return (
        <div className="dtc-not-found">
            <h1>
                <FrownOutlined /> 亲，是不是走错地方了？
            </h1>
        </div>
    );
};

export default NotFound;
