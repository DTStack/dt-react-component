import React, { useState } from 'react';
import { Button } from 'antd';
import { Drawer } from 'dt-react-component';

export default () => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <Button onClick={() => setVisible(true)}>打开</Button>
            <Drawer
                open={visible}
                rootStyle={{
                    minHeight: '600px',
                    height: '100%',
                }}
                onClose={() => setVisible(false)}
                title={
                    <div>
                        <div>增信方式</div>
                        <div>
                            <span>创建时间： xxxx</span>
                            <span>更新时间： xxxx</span>
                        </div>
                    </div>
                }
            >
                <div>hello world</div>
            </Drawer>
        </>
    );
};
