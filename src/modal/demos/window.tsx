import React, { useRef, useState } from 'react';
import { Button } from 'antd';
import { Modal, Resize } from 'dt-react-component';
import type { RectState, ResizeHandle } from 'dt-react-component/modal';

export default function Basic() {
    const [visible, setVisible] = useState(false);
    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    const [position, setPosition] = useState({ x: 120, y: 120 });
    const [rect, setRect] = useState<RectState>({ width: 520, height: 520 });

    const resizeDirection = useRef<ResizeHandle>('e');

    // 限制 resize 超出当前屏幕
    const getMaxConstraints = (): [number, number] => {
        switch (resizeDirection.current) {
            case 'e':
                return [size.width - position.x, size.height];
            case 'n':
                return [size.width, position.y + rect.height];
            case 's':
                return [size.width, size.height - position.y];
            case 'w':
                return [position.x + rect.width, size.height];
            case 'ne':
                return [size.width - position.x, position.y + rect.height];
            case 'nw':
                return [position.x + rect.width, position.y + rect.height];
            case 'se':
                return [size.width - position.x, size.height - position.y];
            case 'sw':
                return [position.x + rect.width, size.height - position.y];
            default:
                return [0, 0];
        }
    };

    return (
        <Resize onResize={() => setSize({ width: window.innerWidth, height: window.innerHeight })}>
            <Modal
                title="Window Modal"
                open={visible}
                mask={false}
                resizable={{
                    maxConstraints: getMaxConstraints(),
                    onResize: (_, data) => {
                        resizeDirection.current = data.handle;
                    },
                }}
                rect={rect}
                draggable={{
                    bounds: 'body',
                }}
                position={position}
                onPositionChange={setPosition}
                onRectChange={setRect}
                onCancel={() => setVisible(false)}
                onOk={() => setVisible(false)}
            >
                <>Just Dtstack It</>
            </Modal>
            <Button type="primary" onClick={() => setVisible(true)}>
                Window Modal
            </Button>
        </Resize>
    );
}
