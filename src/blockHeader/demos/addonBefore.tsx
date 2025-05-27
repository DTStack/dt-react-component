import React from 'react';
import { PauseCircleOutlined, PieChartOutlined } from '@ant-design/icons';
import { BlockHeader } from 'dt-react-component';

export default () => {
    return (
        <>
            <BlockHeader title="分类标题" />
            <BlockHeader title="分类标题" addonBefore={''} />
            <BlockHeader title="分类标题" addonBefore={<PieChartOutlined />} />
            <BlockHeader title="分类标题" addonBefore={<PauseCircleOutlined />} />
        </>
    );
};
