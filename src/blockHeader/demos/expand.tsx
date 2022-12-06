import React from 'react';
import { BlockHeader } from 'dt-react-component';

export default () => {
    return (
        <BlockHeader
            title="分类标题"
            defaultExpand={false}
            onChange={(expand) => console.log(expand)}
        >
            Hello World!
        </BlockHeader>
    );
};
