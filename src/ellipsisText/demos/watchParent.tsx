import React, { useState } from 'react';
import { EllipsisText } from 'dt-react-component';
import { Radio, RadioChangeEvent, Divider } from 'antd';

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
