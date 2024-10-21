import React, { useState } from 'react';
import { Button, Space } from 'antd';
import { Drawer } from 'dt-react-component';
import { DrawerProps } from 'dt-react-component/drawer';

export default () => {
    const [visible, setVisible] = useState(false);
    const [size, setSize] = useState<DrawerProps<[]>['size']>('default');

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
                    正常尺寸
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
            <Drawer open={visible} size={size} onClose={() => setVisible(false)} title="title">
                <div>hello world</div>
            </Drawer>
        </>
    );
};
