import React, { useState } from 'react';
import { Space } from 'antd';
import { BlockHeader } from 'dt-react-component';

export default () => {
    const [expand, setExpand] = useState(false);
    return (
        <Space direction="vertical" style={{ width: '100%' }}>
            <BlockHeader
                title="非受控标题"
                defaultExpand={false}
                hasBottom
                onExpand={(expand) => console.log(expand)}
            >
                Hello World!
            </BlockHeader>

            <BlockHeader title="受控标题" expand={expand} onExpand={(expand) => setExpand(expand)}>
                Hello World!
            </BlockHeader>
        </Space>
    );
};
