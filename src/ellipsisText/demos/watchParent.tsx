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
                <Radio value={500}>500px</Radio>
            </Radio.Group>
            <Divider />
            <div
                style={{
                    width,
                }}
            >
                <EllipsisText
                    value={'长长长长长长长长长长长长长长长长长长长长长长长长长长长长'}
                    watchParentSizeChange
                />
            </div>
        </>
    );
};
