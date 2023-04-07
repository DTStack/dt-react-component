import React, { useState } from 'react';
import { Radio } from 'antd';
import { BlockHeader } from 'dt-react-component';

export default () => {
    const [size, setSize] = useState<boolean>(false);
    return (
        <>
            <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
                <Radio.Button value={false}>Default</Radio.Button>
                <Radio.Button value>Small</Radio.Button>
            </Radio.Group>
            <br />
            <br />
            <BlockHeader title="分类标题" isSmall={size} />
        </>
    );
};
