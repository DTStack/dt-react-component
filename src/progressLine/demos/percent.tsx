import React, { useState } from 'react';
import { InputNumber } from 'antd';
import { ProgressLine } from 'dt-react-component';

export default () => {
    const [num, setNum] = useState(60);

    return (
        <>
            <InputNumber
                value={num}
                min={0}
                max={100}
                onChange={(value: any) => setNum(value)}
                style={{ marginBottom: 16 }}
            />
            <ProgressLine title="衍生标签：35" color="#3BCEFF" percent={`${num}%`} />
        </>
    );
};
