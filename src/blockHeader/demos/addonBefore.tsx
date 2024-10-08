import React from 'react';
import { PauseCircleOutlined, PieChartOutlined } from '@ant-design/icons';
import { BlockHeader } from 'dt-react-component';

export default () => {
    return (
        <>
            <BlockHeader title="分类标题" />
            <br />
            <BlockHeader title="分类标题" addonBefore={''} />
            <br />
            <BlockHeader
                title="分类标题"
                addonBefore={<PieChartOutlined style={{ fontSize: '14px' }} />}
            />
            <br />
            <BlockHeader
                title="分类标题"
                addonBefore={<PauseCircleOutlined style={{ fontSize: '14px' }} />}
            />
        </>
    );
};
