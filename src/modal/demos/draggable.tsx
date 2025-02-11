import React, { useState } from 'react';
import { Button, Space, Tooltip } from 'antd';
import { Modal, TinyTag } from 'dt-react-component';

export default function Basic() {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState({ x: 120, y: 120 });

    return (
        <>
            <Modal
                title={
                    <Space>
                        Draggable Modal
                        <Tooltip title="通过阻止 mousedown 事件冒泡，可以让 title 中的元素不触发拖拽">
                            <TinyTag
                                onMouseDown={(e) => e.stopPropagation()}
                                value="Cancel"
                                style={{ color: '#1D78FF' }}
                            />
                        </Tooltip>
                    </Space>
                }
                draggable={{
                    bounds: 'body',
                }}
                position={position}
                onPositionChange={(_, { x, y }) => setPosition({ x, y })}
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
                Draggable Modal
            </Button>
        </>
    );
}
