import React, { useState } from 'react';
import { Button, Space } from 'antd';
import { Modal } from 'dt-react-component';

export default function Loading() {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    return (
        <>
            <Modal
                title="展示loading效果"
                visible={visible}
                loading={loading}
                onCancel={() => setVisible(false)}
                onOk={() => setVisible(false)}
            >
                <ul>
                    {Array.from({ length: 100 }).map((_, i) => (
                        <li key={i} style={{ height: 30 }}>
                            {i}
                        </li>
                    ))}
                </ul>
            </Modal>
            <Space>
                <Button
                    onClick={() => {
                        setVisible(true);
                        setLoading(true);
                    }}
                >
                    loading
                </Button>
                <Button
                    onClick={() => {
                        setVisible(true);
                        setLoading(false);
                    }}
                >
                    no loading
                </Button>
            </Space>
        </>
    );
}
