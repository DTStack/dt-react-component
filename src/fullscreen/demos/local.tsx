import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import { Fullscreen } from 'dt-react-component';

export default () => {
    const [targetKey, setTargetKey] = useState('');

    useEffect(() => {
        setTargetKey('localContainer');
    }, []);

    return (
        <Card id={targetKey} style={{ background: '#fafafa' }}>
            <Fullscreen target={targetKey} />
            <div style={{ margin: '10px 0', textAlign: 'center' }}>Fullscreen in this</div>
        </Card>
    );
};
