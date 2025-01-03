import React from 'react';

import { FrownOutlined } from '@ant-design/icons';
import useLocale from '../locale/useLocale';

const NotFound = () => {
    const locale = useLocale('NotFound');
    return (
        <div style={{ lineHeight: '200px', textAlign: 'center' }}>
            <h1>
                <FrownOutlined /> {locale.description}
            </h1>
        </div>
    );
};

export default NotFound;
