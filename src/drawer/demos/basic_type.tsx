import React, { useState } from 'react';
import { Button, Space, Switch } from 'antd';
import { Drawer } from 'dt-react-component';
import { DrawerType } from 'dt-react-component/drawer';

export default () => {
    const [visible, setVisible] = useState(false);
    const [mask, setMask] = useState(false);
    const [maskClosable, setMaskClosable] = useState(false);
    const [type, setType] = useState(DrawerType.Normal);

    return (
        <>
            <Space>
                <Button
                    type="primary"
                    onClick={() => {
                        setVisible(true);
                        setType(DrawerType.Form);
                    }}
                >
                    Form 类型
                </Button>
                <Button
                    type="primary"
                    onClick={() => {
                        setVisible(true);
                        setType(DrawerType.Normal);
                    }}
                >
                    正常类型
                </Button>
            </Space>
            <Space>
                mask:
                <Switch onChange={(checked) => setMask(checked)} />
                maskClosable:
                <Switch onChange={(checked) => setMaskClosable(checked)} />
            </Space>
            <Drawer
                open={visible}
                onClose={() => setVisible(false)}
                title="title"
                mask={mask}
                maskClosable={maskClosable}
                type={type}
            >
                <div>hello world</div>
            </Drawer>
        </>
    );
};
