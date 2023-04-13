import React from 'react';
import { EllipsisText } from 'dt-react-component';

export default () => {
    return (
        <div
            style={{
                width: '100%',
            }}
        >
            <EllipsisText
                value={
                    '我是很长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长的文本'
                }
                maxWidth={200}
            />
            <EllipsisText
                value={
                    '我是很长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长的文本'
                }
                maxWidth={'calc(100% - 200px)'}
            />
        </div>
    );
};
