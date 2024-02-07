import React, { useState } from 'react';
import { Button } from 'antd';
import { SlidePane } from 'dt-react-component';

export default () => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <Button style={{ margin: '10px' }} onClick={() => setVisible((v) => !v)}>
                click me
            </Button>
            <SlidePane
                open={visible}
                banner="这是 SlidePane 的 banner"
                onClose={() => setVisible(false)}
                title="title"
            >
                <div>hello world</div>
            </SlidePane>
        </>
    );
};
