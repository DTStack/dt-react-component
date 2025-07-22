import React, { useState } from 'react';
import { UploadOutlined } from '@dtinsight/react-icons';
import { Space } from 'antd';
import { Button } from 'dt-react-component';

export default function LoadingDemo() {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    return (
        <Space direction="vertical" size="large">
            <div>
                <h3>加载状态</h3>
                <Space>
                    <Button type="primary" loading>
                        Loading
                    </Button>
                    <Button loading>Loading</Button>
                    <Button type="dashed" loading>
                        Loading
                    </Button>
                    <Button type="link" loading>
                        Loading
                    </Button>
                </Space>
            </div>

            <div>
                <h3>点击后加载</h3>
                <Space>
                    <Button type="primary" loading={loading} onClick={handleClick}>
                        Click me!
                    </Button>
                    <Button loading={loading} onClick={handleClick}>
                        Click me!
                    </Button>
                    <Button
                        type="primary"
                        icon={<UploadOutlined />}
                        loading={loading}
                        onClick={handleClick}
                    >
                        Click me!
                    </Button>
                </Space>
            </div>

            <div>
                <h3>危险按钮</h3>
                <Space>
                    <Button type="primary" danger>
                        Primary Danger
                    </Button>
                    <Button danger>Default Danger</Button>
                    <Button type="dashed" danger>
                        Dashed Danger
                    </Button>
                    <Button type="link" danger>
                        Link Danger
                    </Button>
                </Space>
            </div>
        </Space>
    );
}
