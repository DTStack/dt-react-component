import React from 'react';
import { PieChartOutlined } from '@ant-design/icons';
import { BlockHeader } from 'dt-react-component';
import { Divider } from 'antd';

export default () => {
    return (
        <>
            <BlockHeader
                title="分类标题"
                beforeTitle={<PieChartOutlined style={{ fontSize: '14px' }} />}
            />
            <Divider />
            <BlockHeader title="分类标题" beforeTitle="" />
        </>
    );
};
