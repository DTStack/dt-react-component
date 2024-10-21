import React, { useState } from 'react';
import { Button, Space } from 'antd';
import { Drawer } from 'dt-react-component';

export default () => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <Button onClick={() => setVisible(true)}>打开</Button>
            <Drawer
                open={visible}
                onClose={() => setVisible(false)}
                title="Title"
                footer={
                    <Space>
                        <Button>重置</Button>
                        <Button type="primary">立即执行</Button>
                    </Space>
                }
            >
                <div style={{ height: '110vh' }}>超长可滚动</div>
            </Drawer>
        </>
    );
};
