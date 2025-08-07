import React from 'react';
import { BlockHeader, EllipsisText } from 'dt-react-component';

export default () => {
    return (
        <BlockHeader
            title={
                <EllipsisText
                    maxWidth={200}
                    value="标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长标题超长"
                />
            }
        />
    );
};
