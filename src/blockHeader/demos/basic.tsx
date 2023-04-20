import React, { useState } from 'react';
import { BlockHeader } from 'dt-react-component';
import { Switch } from 'antd';

export default () => {
    const [showBackground, setShowBackground] = useState(true);
    return (
        <>
            背景：
            <Switch defaultChecked onChange={setShowBackground} />
            <br />
            <br />
            <BlockHeader title="分类标题" showBackground={showBackground} />
        </>
    );
};
