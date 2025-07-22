import React, { useState } from 'react';
import { UploadOutlined } from '@dtinsight/react-icons';
import { Radio, Space } from 'antd';
import { Button } from 'dt-react-component';

import { ButtonProps } from '..';

export default function Basic() {
    const [size, setSize] = useState<ButtonProps['size']>('large');

    return (
        <Space direction="vertical" size="large">
            <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
                <Radio.Button value="large">Large</Radio.Button>
                <Radio.Button value="middle">Default</Radio.Button>
                <Radio.Button value="small">Small</Radio.Button>
            </Radio.Group>

            <div>
                <h3>按钮类型</h3>
                <Space>
                    <Button type="primary" size={size}>
                        Primary Button
                    </Button>
                    <Button size={size}>Default Button</Button>
                    <Button type="dashed" size={size}>
                        Dashed Button
                    </Button>
                    <Button type="link" size={size}>
                        Link Button
                    </Button>
                </Space>
            </div>

            <div>
                <h3>带图标的按钮</h3>
                <Space>
                    <Button type="primary" size={size} icon={<UploadOutlined />}>
                        Search
                    </Button>
                    <Button icon={<UploadOutlined />} size={size}>
                        Search
                    </Button>
                    <Button type="dashed" size={size} icon={<UploadOutlined />}>
                        Search
                    </Button>
                    <Button type="link" size={size} icon={<UploadOutlined />}>
                        Search
                    </Button>
                </Space>
            </div>

            <div>
                <h3>纯图标按钮</h3>
                <Space>
                    <Button type="primary" size={size} icon={<UploadOutlined />} />
                    <Button size={size} icon={<UploadOutlined />} />
                    <Button size={size} type="dashed" icon={<UploadOutlined />} />
                    <Button size={size} type="link" icon={<UploadOutlined />} />
                </Space>
            </div>

            <div>
                <h3>禁用状态</h3>
                <Space>
                    <Button size={size} type="primary" disabled>
                        Primary(Disabled)
                    </Button>
                    <Button size={size} disabled>
                        Default(Disabled)
                    </Button>
                    <Button size={size} type="dashed" disabled>
                        Dashed(Disabled)
                    </Button>
                    <Button size={size} type="link" disabled>
                        Link(Disabled)
                    </Button>
                </Space>
            </div>
        </Space>
    );
}
