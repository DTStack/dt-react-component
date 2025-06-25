import React from 'react';
import { FrownOutlined } from '@ant-design/icons';

import useLocale from '../locale/useLocale';
import './style.scss';

const NotFound: React.FC<any> = function () {
    const locale = useLocale('NotFound');
    return (
        <div className="dtc-not-found">
            <h1>
                <FrownOutlined /> {locale.description}
            </h1>
        </div>
    );
};

export default NotFound;
