import React, { useState } from 'react';
import { Button, Space } from 'antd';
import { Modal } from 'dt-react-component';
import { IModalProps } from 'dt-react-component/modal';

export default function Size() {
    const [visible, setVisible] = useState(false);
    const [size, setSize] = useState<IModalProps['size']>('default');

    return (
        <>
            <Space>
                <Button
                    type="primary"
                    onClick={() => {
                        setVisible(true);
                        setSize('small');
                    }}
                >
                    小尺寸
                </Button>
                <Button
                    type="primary"
                    onClick={() => {
                        setVisible(true);
                        setSize('default');
                    }}
                >
                    默认尺寸
                </Button>
                <Button
                    type="primary"
                    onClick={() => {
                        setVisible(true);
                        setSize('middle');
                    }}
                >
                    中等尺寸
                </Button>
                <Button
                    type="primary"
                    onClick={() => {
                        setVisible(true);
                        setSize('large');
                    }}
                >
                    大尺寸
                </Button>
            </Space>
            <Modal
                title={`${size} 尺寸的 Modal`}
                visible={visible}
                onCancel={() => setVisible(false)}
                onOk={() => setVisible(false)}
                size={size}
            >
                <ul>
                    {Array.from({ length: 300 }).map((_, i) => (
                        <li key={i} style={{ height: 30 }}>
                            {i}
                        </li>
                    ))}
                </ul>
            </Modal>
        </>
    );
}
