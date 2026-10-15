import React, { useState } from 'react';
import { Space, Switch } from 'antd';
import { Select } from 'dt-react-component';

export default () => {
    const [loading, setLoading] = useState(false);
    return (
        <Space direction="vertical">
            <Space>
                加载中 <Switch checked={loading} onChange={setLoading} />
            </Space>
            <Select
                style={{ width: 320 }}
                loading={loading}
                options={[]}
                placeholder="展开查看加载或空状态"
            />
            <Select
                style={{ width: 320 }}
                options={[]}
                notFoundContent="暂无匹配结果"
                placeholder="自定义空状态"
            />
        </Space>
    );
};
