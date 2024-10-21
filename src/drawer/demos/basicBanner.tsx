import React, { useState } from 'react';
import { Button } from 'antd';
import { Drawer } from 'dt-react-component';

export default () => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <Button style={{ margin: '10px' }} onClick={() => setVisible((v) => !v)}>
                click me
            </Button>
            <Drawer
                open={visible}
                banner="这是 Drawer 的 banner"
                onClose={() => setVisible(false)}
                title="title"
            >
                <div>hello world</div>
            </Drawer>
        </>
    );
};
