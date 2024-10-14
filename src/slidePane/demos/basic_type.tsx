import React, { useState } from 'react';
import { Button, Space, Switch } from 'antd';
import { SlidePane } from 'dt-react-component';
import { SlidePaneType } from 'dt-react-component/slidePane';

export default () => {
    const [visible, setVisible] = useState(false);
    const [mask, setMask] = useState(false);
    const [maskClosable, setMaskClosable] = useState(false);
    const [type, setType] = useState(SlidePaneType.Normal);

    return (
        <>
            <Space>
                <Button
                    type="primary"
                    onClick={() => {
                        setVisible(true);
                        setType(SlidePaneType.Form);
                    }}
                >
                    Form 类型
                </Button>
                <Button
                    type="primary"
                    onClick={() => {
                        setVisible(true);
                        setType(SlidePaneType.Normal);
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
            <SlidePane
                open={visible}
                onClose={() => setVisible(false)}
                title="title"
                mask={mask}
                maskClosable={maskClosable}
                type={type}
            >
                <div>hello world</div>
            </SlidePane>
        </>
    );
};
