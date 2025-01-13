import React, { useState } from 'react';
import { Space, Switch } from 'antd';
import { Descriptions, EllipsisText } from 'dt-react-component';

export default function Basic() {
    const [fixed, setFixed] = useState(true);
    return (
        <Space size={8} direction="vertical">
            <Switch
                checkedChildren="fixed"
                unCheckedChildren="auto"
                checked={fixed}
                onChange={setFixed}
            />
            <Descriptions bordered column={2} tableLayout={fixed ? 'fixed' : 'auto'}>
                <Descriptions.Item label="名称">
                    <EllipsisText value="我是 dt-react-component 组件库" maxWidth={120} />
                </Descriptions.Item>
                <Descriptions.Item label="描述">
                    <div
                        style={{
                            width: 0,
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            minWidth: '100%',
                        }}
                    >
                        很长很长的描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述，长度甚至超过了一行
                    </div>
                </Descriptions.Item>
            </Descriptions>
        </Space>
    );
}
