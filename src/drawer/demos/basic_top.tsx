import React, { useState } from 'react';
import { Alert, Button } from 'antd';
import { Drawer } from 'dt-react-component';

export default () => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <Alert message="产品中抽屉的距离顶部高度 64px，可通过 rootStyle 设置" />
            <Button
                style={{ margin: '10px' }}
                onClick={() => {
                    setVisible((v) => !v);
                }}
            >
                click me
            </Button>
            <Drawer
                open={visible}
                onClose={() => setVisible(false)}
                title="title"
                rootStyle={{ top: 64 }}
            >
                <div>hello world</div>
            </Drawer>
        </>
    );
};
