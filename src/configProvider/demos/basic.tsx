import React, { useState } from 'react';
import { Radio, Space } from 'antd';
import { BlockHeader, ConfigProvider, Copy, enUS, Input, zhCN } from 'dt-react-component';

export default function Basic() {
    const [locale, setLocale] = useState(zhCN);

    return (
        <Space direction="vertical" size="large">
            <Radio.Group
                value={locale.locale}
                onChange={(e) => setLocale(e.target.value === 'zh-CN' ? zhCN : enUS)}
            >
                <Radio.Button value="zh-CN">中文</Radio.Button>
                <Radio.Button value="en-US">English</Radio.Button>
            </Radio.Group>

            <ConfigProvider locale={locale}>
                <Space direction="vertical" size="middle">
                    <div>
                        <h3>Copy 组件</h3>
                        <Copy text="这是要复制的文本" />
                    </div>
                    <div>
                        <h3>BlockHeader 组件</h3>
                        <BlockHeader title="标题" defaultExpand>
                            <p>内容区域</p>
                        </BlockHeader>
                    </div>
                    <div>
                        <h3>Input.Match 组件</h3>
                        <Input.Match />
                    </div>
                </Space>
            </ConfigProvider>
        </Space>
    );
}
