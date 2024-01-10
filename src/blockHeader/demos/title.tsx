import React from 'react';
import { BlockHeader, EllipsisText } from 'dt-react-component';

import './style.scss';

export default () => {
    return (
        <div style={{ width: 300 }}>
            <BlockHeader
                titleClassName="demo-title"
                title={
                    <EllipsisText
                        maxWidth={200}
                        value="标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长"
                    />
                }
            />
        </div>
    );
};
