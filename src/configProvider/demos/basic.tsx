import React, { useState } from 'react';
import { Radio, Space } from 'antd';
import {
    BlockHeader,
    Button,
    ConfigProvider,
    Copy,
    enUS,
    Input,
    Modal,
    zhCN,
} from 'dt-react-component';

export default function Basic() {
    const [locale, setLocale] = useState(zhCN);

    const info = () => {
        Modal.info({
            title: 'This is a notification message',
            content: (
                <div>
                    <p>some messages...some messages...</p>
                    <p>some messages...some messages...</p>
                </div>
            ),
            onOk() {},
        });
    };

    const handleDelete = () => {
        Modal.delete({
            title: 'This is a delete message',
            content: 'some messages...some messages...',
        });
    };

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
                    <div>
                        <h3>Modal.method 组件</h3>
                        <Button onClick={info} style={{ marginRight: 12 }}>
                            Info
                        </Button>
                        <Button onClick={handleDelete}>Delete</Button>
                    </div>
                </Space>
            </ConfigProvider>
        </Space>
    );
}
