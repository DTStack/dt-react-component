import React, { useState } from 'react';
import { Button } from 'antd';
import { SlidePane } from 'dt-react-component';
import { SlidePaneType } from 'dt-react-component/slidePane';

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
            <SlidePane open={firstVisible} onClose={() => setFirstVisible(false)} title="一级弹窗">
                <div>一级弹窗</div>
                <Button onClick={() => setSecondVisible(true)}>打开二级弹窗</Button>
                <SlidePane
                    open={secondVisible}
                    onClose={() => setSecondVisible(false)}
                    title="二级弹窗"
                    type={SlidePaneType.Form}
                >
                    <div>一级弹窗</div>
                </SlidePane>
            </SlidePane>
        </>
    );
};
