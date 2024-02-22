import React, { useState } from 'react';
import { Button } from 'antd';
import { Modal } from 'dt-react-component';

export default function Basic() {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <Modal
                title="最大高度限制"
                visible={visible}
                onCancel={() => setVisible(false)}
                onOk={() => setVisible(false)}
            >
                <ul>
                    {Array.from({ length: 300 }).map((_, i) => (
                        <li key={i} style={{ height: 30 }}>
                            {i}
                        </li>
                    ))}
                </ul>
            </Modal>
            <Button type="primary" onClick={() => setVisible(true)}>
                最大高度限制
            </Button>
        </>
    );
}
