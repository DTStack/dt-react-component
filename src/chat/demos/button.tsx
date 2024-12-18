import React from 'react';
import { Button, Col, Row, Space } from 'antd';
import { Chat } from 'dt-react-component';

export default function () {
    const [disabled, setDisabled] = React.useState(false);
    return (
        <Row gutter={[16, 16]}>
            <Col span={24}>
                <Button type="primary" onClick={() => setDisabled((p) => !p)}>
                    切换 disabled
                </Button>
            </Col>
            <Col span={24}>
                <Space>
                    <Chat.Button
                        type="primary"
                        disabled={disabled}
                        icon={<Chat.Icon.SendIcon style={{ fontSize: 16 }} />}
                    />
                    <Chat.Button
                        type="primary"
                        disabled={disabled}
                        icon={<Chat.Icon.SendIcon style={{ fontSize: 16 }} />}
                    >
                        <Space size={4}>发送</Space>
                    </Chat.Button>
                    <Chat.Button
                        type="default"
                        disabled={disabled}
                        icon={<Chat.Icon.SendIcon style={{ fontSize: 16 }} />}
                    >
                        <Space size={4}>发送</Space>
                    </Chat.Button>
                    <Chat.Button
                        type="secondary"
                        disabled={disabled}
                        icon={<Chat.Icon.SendIcon style={{ fontSize: 16 }} />}
                    >
                        <Space size={4}>发送</Space>
                    </Chat.Button>
                </Space>
            </Col>
            <Col span={24}>
                <Space>
                    <Chat.Button
                        size="small"
                        type="primary"
                        disabled={disabled}
                        icon={<Chat.Icon.SendIcon style={{ fontSize: 16 }} />}
                    />
                    <Chat.Button
                        size="small"
                        type="primary"
                        disabled={disabled}
                        icon={<Chat.Icon.SendIcon style={{ fontSize: 16 }} />}
                    >
                        <Space size={4}>发送</Space>
                    </Chat.Button>
                    <Chat.Button
                        size="small"
                        type="default"
                        disabled={disabled}
                        icon={<Chat.Icon.SendIcon style={{ fontSize: 16 }} />}
                    >
                        <Space size={4}>发送</Space>
                    </Chat.Button>
                    <Chat.Button
                        size="small"
                        type="secondary"
                        disabled={disabled}
                        icon={<Chat.Icon.SendIcon style={{ fontSize: 16 }} />}
                    >
                        <Space size={4}>发送</Space>
                    </Chat.Button>
                </Space>
            </Col>
        </Row>
    );
}
