import React from 'react';
import { Divider } from 'antd';
import { EllipsisText } from 'dt-react-component';

export default () => {
    return (
        <>
            <div>
                <EllipsisText
                    value={
                        '我是很长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长的文本'
                    }
                    maxWidth={200}
                />
            </div>
            <Divider />
            <div>
                <EllipsisText
                    value={
                        '我是很长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长的文本'
                    }
                    maxWidth={'30%'}
                />
            </div>
        </>
    );
};
