import React from 'react';
import { Card } from 'antd';
import { Fullscreen } from 'dt-react-component';

export default () => {
    return (
        <Card id="localContainer" style={{ background: '#fafafa' }}>
            <Fullscreen target="localContainer" />
            <div style={{ margin: '10px 0', textAlign: 'center' }}>Fullscreen in this</div>
        </Card>
    );
};
