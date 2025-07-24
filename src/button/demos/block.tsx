import React from 'react';
import { UploadOutlined } from '@dtinsight/react-icons';
import { Space } from 'antd';
import { Button } from 'dt-react-component';

export default function BlockDemo() {
    return (
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <div>
                <h3>块级按钮</h3>
                <Space direction="vertical" style={{ width: '100%' }}>
                    <Button type="primary" block>
                        Primary Block Button
                    </Button>
                    <Button block>Default Block Button</Button>
                    <Button type="dashed" block>
                        Dashed Block Button
                    </Button>
                    <Button type="link" block>
                        Link Block Button
                    </Button>
                </Space>
            </div>

            <div style={{ background: 'rgb(190, 200, 200)', padding: '16px' }}>
                <h3>幽灵按钮</h3>
                <Space>
                    <Button type="primary" ghost>
                        Primary Ghost
                    </Button>
                    <Button ghost>Default Ghost</Button>
                    <Button type="dashed" ghost>
                        Dashed Ghost
                    </Button>
                    <Button type="primary" ghost icon={<UploadOutlined />}>
                        Ghost with Icon
                    </Button>
                </Space>
            </div>
        </Space>
    );
}
