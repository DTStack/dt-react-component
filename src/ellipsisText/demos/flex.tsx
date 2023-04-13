import React from 'react';
import { Divider } from 'antd';
import { EllipsisText } from 'dt-react-component';

export default () => {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                }}
            >
                <EllipsisText
                    value={
                        '我是很长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长的文本'
                    }
                />
                我是来捣乱的
            </div>
            <Divider />
            <div
                style={{
                    display: 'flex',
                }}
            >
                我是来捣乱的
                <EllipsisText
                    value={
                        '我是很长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长的文本'
                    }
                />
            </div>
        </>
    );
};
