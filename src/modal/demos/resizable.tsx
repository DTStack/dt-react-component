import React, { useState } from 'react';
import { Button } from 'antd';
import { Modal, Resize, useModal } from 'dt-react-component';
import type { RectState } from 'dt-react-component/modal';

export default function Basic() {
    const modal = useModal<void>();
    const [rect, setRect] = useState<RectState>({ width: 520, height: 520 });
    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    return (
        <Resize onResize={() => setSize({ width: window.innerWidth, height: window.innerHeight })}>
            <Modal
                title="Resizable Modal"
                open={modal.visible}
                resizable={{
                    maxConstraints: [size.width - 40, size.height - 150],
                }}
                rect={rect}
                onRectChange={setRect}
                onCancel={() => modal.close()}
                onOk={() => modal.close()}
            >
                <ul>
                    {Array.from({ length: 300 }).map((_, i) => (
                        <li key={i} style={{ height: 30 }}>
                            {i}
                        </li>
                    ))}
                </ul>
            </Modal>
            <Button type="primary" onClick={() => modal.open()}>
                Resizable Modal
            </Button>
        </Resize>
    );
}
