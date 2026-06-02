import React, { useState } from 'react';
import { BlockHeader } from 'dt-react-component';

export default () => {
    const [expand, setExpand] = useState(false);
    return (
        <>
            <BlockHeader
                title="非受控标题"
                defaultExpand={false}
                onExpand={(expand) => console.log(expand)}
            >
                Hello World!
            </BlockHeader>

            <BlockHeader title="受控标题" expand={expand} onExpand={(expand) => setExpand(expand)}>
                Hello World!
            </BlockHeader>

            <BlockHeader title="不可收起的标题">Hello World!</BlockHeader>
        </>
    );
};
