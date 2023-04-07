import React, { useState } from 'react';
import { PieChartOutlined } from '@ant-design/icons';
import { BlockHeader } from 'dt-react-component';
import { Radio } from 'antd';

export default () => {
    const [beforeTitle, setBeforeTitle] = useState(undefined);
    return (
        <>
            <Radio.Group value={beforeTitle} onChange={(e) => setBeforeTitle(e.target.value)}>
                <Radio.Button value={undefined}>Default</Radio.Button>
                <Radio.Button value={null}>去除icon</Radio.Button>
                <Radio.Button value="custom">自定义icon</Radio.Button>
            </Radio.Group>
            <br />
            <br />
            <BlockHeader
                title="分类标题"
                beforeTitle={
                    beforeTitle === 'custom' ? (
                        <PieChartOutlined style={{ fontSize: '14px' }} />
                    ) : (
                        beforeTitle
                    )
                }
            />
        </>
    );
};
