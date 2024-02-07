import React, { useState } from 'react';
import { Button, Space } from 'antd';
import { SlidePane } from 'dt-react-component';
import { SlidePaneProps } from 'dt-react-component/slidePane';

export default () => {
    const [visible, setVisible] = useState(false);
    const [size, setSize] = useState<SlidePaneProps<[]>['size']>('default');

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
            <SlidePane open={visible} size={size} onClose={() => setVisible(false)} title="title">
                <div>hello world</div>
            </SlidePane>
        </>
    );
};
