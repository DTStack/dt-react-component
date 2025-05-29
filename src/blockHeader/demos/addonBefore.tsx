import React from 'react';
import { PauseOutlined, PieChartFilled } from '@dtinsight/react-icons';
import { BlockHeader } from 'dt-react-component';

export default () => {
    return (
        <>
            <BlockHeader title="分类标题" />
            <BlockHeader title="分类标题" addonBefore={''} />
            <BlockHeader title="分类标题" addonBefore={<PieChartFilled />} />
            <BlockHeader title="分类标题" addonBefore={<PauseOutlined />} />
        </>
    );
};
