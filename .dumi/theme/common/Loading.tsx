import React from 'react';
import { Skeleton } from 'antd';

export default function Loading() {
    return <Skeleton title={false} active paragraph={{ rows: 3 }} />;
}
