import React, { useState } from 'react';
import { Radio, Space } from 'antd';
import { BlockHeader, ConfigProvider, Copy, enUS, useLocale, zhCN } from 'dt-react-component';

// 自定义组件，使用useLocale获取当前语言环境
const LocaleConsumer = () => {
    const copyLocale = useLocale('Copy');
    const blockHeaderLocale = useLocale('BlockHeader');

    return (
        <div>
            <h4>当前语言环境</h4>
            <div style={{ background: '#f5f5f5', padding: '10px', borderRadius: '4px' }}>
                <p>
                    <strong>Copy组件:</strong>
                </p>
                <ul>
                    <li>copy: {copyLocale.copy}</li>
                    <li>copied: {copyLocale.copied}</li>
                </ul>

                <p>
                    <strong>BlockHeader组件:</strong>
                </p>
                <ul>
                    <li>expand: {blockHeaderLocale.expand}</li>
                    <li>collapse: {blockHeaderLocale.collapse}</li>
                </ul>
            </div>
        </div>
    );
};

export default function Custom() {
    // 创建自定义语言包
    const [customLocale, setCustomLocale] = useState({
        ...zhCN,
        locale: 'custom-zh',
        Copy: {
            copy: '点击复制',
            copied: '已复制到剪贴板',
        },
        BlockHeader: {
            expand: '展开全部',
            collapse: '收起全部',
        },
    });

    const [localeType, setLocaleType] = useState('custom');

    const handleLocaleChange = (type: string) => {
        setLocaleType(type);
        if (type === 'zh-CN') {
            setCustomLocale(zhCN);
        } else if (type === 'en-US') {
            setCustomLocale(enUS);
        } else {
            // 恢复自定义语言包
            setCustomLocale({
                ...zhCN,
                locale: 'custom-zh',
                Copy: {
                    copy: '点击复制',
                    copied: '已复制到剪贴板',
                },
                BlockHeader: {
                    expand: '展开全部',
                    collapse: '收起全部',
                },
            });
        }
    };

    return (
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Radio.Group value={localeType} onChange={(e) => handleLocaleChange(e.target.value)}>
                <Radio.Button value="custom">自定义语言</Radio.Button>
                <Radio.Button value="zh-CN">默认中文</Radio.Button>
                <Radio.Button value="en-US">默认英文</Radio.Button>
            </Radio.Group>

            <ConfigProvider locale={customLocale}>
                <Space direction="vertical" style={{ width: '100%' }}>
                    <div>
                        <h3>使用自定义语言包</h3>
                        <Copy text="这是要复制的文本" />
                    </div>

                    <div>
                        <h3>BlockHeader 示例</h3>
                        <BlockHeader title="标题" defaultExpand>
                            <p>内容区域</p>
                        </BlockHeader>
                    </div>

                    <LocaleConsumer />
                </Space>
            </ConfigProvider>
        </Space>
    );
}
