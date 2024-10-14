import React, { useState } from 'react';
import { Button } from 'antd';
import { Drawer } from 'dt-react-component';
import { DrawerType } from 'dt-react-component/drawer';

export default () => {
    const [firstVisible, setFirstVisible] = useState(false);
    const [secondVisible, setSecondVisible] = useState(false);

    return (
        <>
            <Button
                style={{ margin: '10px' }}
                onClick={() => {
                    setFirstVisible(true);
                }}
            >
                click me
            </Button>
            <Drawer open={firstVisible} onClose={() => setFirstVisible(false)} title="一级弹窗">
                <div>一级弹窗</div>
                <Button onClick={() => setSecondVisible(true)}>打开二级弹窗</Button>
                <Drawer
                    open={secondVisible}
                    onClose={() => setSecondVisible(false)}
                    title="二级弹窗"
                    type={DrawerType.Form}
                >
                    <div>一级弹窗</div>
                </Drawer>
            </Drawer>
        </>
    );
};
