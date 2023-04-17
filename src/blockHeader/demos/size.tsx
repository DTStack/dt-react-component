import React, { useState } from 'react';
import { Radio } from 'antd';
import { BlockHeader } from 'dt-react-component';
import { SizeType } from 'dt-react-component/esm/blockHeader';

export default () => {
    const [size, setSize] = useState<SizeType>('middle');
    return (
        <>
            <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
                <Radio.Button value="middle">Default</Radio.Button>
                <Radio.Button value="small">Small</Radio.Button>
            </Radio.Group>
            <br />
            <br />
            <BlockHeader title="分类标题" size={size} />
        </>
    );
};
