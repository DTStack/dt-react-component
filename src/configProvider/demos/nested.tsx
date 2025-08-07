import React, { useState } from 'react';
import { Divider, Radio, Space } from 'antd';
import { ConfigProvider, Copy, enUS, useLocale, zhCN } from 'dt-react-component';

// 自定义组件，使用useLocale获取当前语言环境
const LocaleDisplay = () => {
    const copyLocale = useLocale('Copy');
    return (
        <div>
            <p>当前Copy组件的文案：</p>
            <ul>
                <li>copy: {copyLocale.copy}</li>
                <li>copied: {copyLocale.copied}</li>
            </ul>
        </div>
    );
};

export default function Nested() {
    const [outerLocale, setOuterLocale] = useState(zhCN);
    const [innerLocale, setInnerLocale] = useState(enUS);

    return (
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <div>
                <h3>外层ConfigProvider</h3>
                <Radio.Group
                    value={outerLocale.locale}
                    onChange={(e) => setOuterLocale(e.target.value === 'zh-CN' ? zhCN : enUS)}
                >
                    <Radio.Button value="zh-CN">中文</Radio.Button>
                    <Radio.Button value="en-US">English</Radio.Button>
                </Radio.Group>
            </div>

            <ConfigProvider locale={outerLocale}>
                <Space
                    direction="vertical"
                    style={{ width: '100%', border: '1px solid #eee', padding: '16px' }}
                >
                    <div>
                        <h4>外层ConfigProvider的组件</h4>
                        <Copy text="这是要复制的文本" />
                        <LocaleDisplay />
                    </div>

                    <Divider>嵌套的ConfigProvider</Divider>

                    <div>
                        <h4>内层ConfigProvider</h4>
                        <Radio.Group
                            value={innerLocale.locale}
                            onChange={(e) =>
                                setInnerLocale(e.target.value === 'zh-CN' ? zhCN : enUS)
                            }
                        >
                            <Radio.Button value="zh-CN">中文</Radio.Button>
                            <Radio.Button value="en-US">English</Radio.Button>
                        </Radio.Group>

                        <ConfigProvider locale={innerLocale}>
                            <div
                                style={{
                                    marginTop: '16px',
                                    border: '1px dashed #ccc',
                                    padding: '16px',
                                }}
                            >
                                <h4>内层ConfigProvider的组件</h4>
                                <Copy text="这是要复制的文本" />
                                <LocaleDisplay />
                            </div>
                        </ConfigProvider>
                    </div>
                </Space>
            </ConfigProvider>

            <div>
                <h3>无ConfigProvider的组件</h3>
                <p>当组件不在ConfigProvider内时，将使用默认的中文语言包</p>
                <Copy text="这是要复制的文本" />
                <LocaleDisplay />
            </div>
        </Space>
    );
}
