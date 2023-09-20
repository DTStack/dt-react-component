import React, { useState } from 'react';
import { Divider, Radio, RadioChangeEvent } from 'antd';
import { EllipsisText } from 'dt-react-component';

export default () => {
    const [width, setWidth] = useState(200);

    const onChange = (e: RadioChangeEvent) => {
        setWidth(e.target.value);
    };

    return (
        <>
            <Radio.Group onChange={onChange} value={width}>
                <Radio value={200}>200px</Radio>
                <Radio value={300}>300px</Radio>
                <Radio value={'20%'}>20%</Radio>
                <Radio value={'50%'}>50%</Radio>
                <Radio value={'100%'}>100%</Radio>
                <Radio value={'calc(100% - 100px)'}>calc(100% - 100px)%</Radio>
            </Radio.Group>
            <Divider />
            <EllipsisText
                value={
                    '我是很长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长的文本'
                }
                maxWidth={width}
            />
        </>
    );
};
