import React from 'react';
import { BlockHeader } from 'dt-react-component';

export default () => {
    return (
        <>
            <BlockHeader title="分类标题" afterTitle="说明文字" />
            <br />
            <BlockHeader title="分类标题" tooltip="hover展示更多" />
        </>
    );
};
