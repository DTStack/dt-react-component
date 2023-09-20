import React, { useState } from 'react';
import { Input } from 'antd';
import { ProgressLine } from 'dt-react-component';

export default () => {
    const [title, setTitle] = useState('衍生标签：35');

    return (
        <>
            <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ marginBottom: 16, width: 300 }}
            />
            <ProgressLine title={title} color="#3BCEFF" percent="60%" />
        </>
    );
};
