import React from 'react';
import { PieChartOutlined, PauseCircleOutlined } from '@ant-design/icons';
import { BlockHeader } from 'dt-react-component';

export default () => {
    return (
        <>
            <BlockHeader title="分类标题" />
            <br />
            <BlockHeader
                title="分类标题"
                beforeTitle={<PieChartOutlined style={{ fontSize: '14px' }} />}
            />
            <br />
            <BlockHeader
                title="分类标题"
                beforeTitle={<PauseCircleOutlined style={{ fontSize: '14px' }} />}
            />
        </>
    );
};
