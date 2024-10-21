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
                banner={{
                    message: 'Drawer 可以支持 banner 属性',
                    type: 'error',
                    showIcon: true,
                }}
                onClose={() => setVisible(false)}
                title="title"
            >
                <div>hello world</div>
            </Drawer>
        </>
    );
};
