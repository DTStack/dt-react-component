import React, { useState } from 'react';
import { Button, Slider } from 'antd';
import { SlidePane } from 'dt-react-component';

export default () => {
    const [visible, setVisible] = useState(false);
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
            <Button style={{ margin: '10px' }} onClick={() => setVisible((v) => !v)}>
                click me
            </Button>
            <SlidePane
                visible={visible}
                rootStyle={{
                    minHeight: '600px',
                    height: '100%',
                }}
                width={`${width}%`}
                onClose={() => setVisible(false)}
                title="title"
                mask
            >
                <div>hello world</div>
            </SlidePane>
        </>
    );
};
