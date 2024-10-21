import React, { useState } from 'react';
import { Button } from 'antd';
import { Drawer } from 'dt-react-component';

export default () => {
    const [visible, setVisible] = useState(false);
    const [activeKey, setActiveKey] = useState<'basicInfo' | 'changelog'>('changelog');

    return (
        <>
            <Button onClick={() => setVisible(true)}>打开</Button>
            <Drawer
                open={visible}
                onClose={() => setVisible(false)}
                title={'Title'}
                tabs={
                    [
                        {
                            key: 'basicInfo',
                            title: '基本信息',
                        },
                        {
                            key: 'changelog',
                            title: '变更记录',
                        },
                    ] as const
                }
                activeKey={activeKey}
                onChange={(key) => setActiveKey(key)}
            >
                {(key) => {
                    switch (key) {
                        case 'basicInfo':
                            return <div>基本信息</div>;
                        case 'changelog':
                            return <div>变更记录</div>;
                        default:
                            break;
                    }
                }}
            </Drawer>
        </>
    );
};
