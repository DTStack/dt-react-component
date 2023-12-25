import React, { useState } from 'react';
import { Button, Slider } from 'antd';
import { SlidePane } from 'dt-react-component';

export default () => {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [width, setWidth] = useState(80);

    return (
        <>
            <Slider
                defaultValue={width}
                min={10}
                max={100}
                onChange={(value: number) => setWidth(value)}
            />
            <span>width:{width}%</span>
            <Button
                style={{ margin: '10px' }}
                onClick={() => {
                    setVisible((v) => !v);
                    setLoading(true);
                    setTimeout(() => {
                        setLoading(false);
                    }, 3000);
                }}
            >
                click me
            </Button>
            <SlidePane
                visible={visible}
                loading={loading}
                width={`${width}%`}
                onClose={() => setVisible(false)}
                title="title"
            >
                <div>hello world</div>
            </SlidePane>
        </>
    );
};
