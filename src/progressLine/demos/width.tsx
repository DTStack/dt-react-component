import React, { useState } from 'react';
import { ProgressLine } from 'dt-react-component';

export default () => {
    const [width, setWidth] = useState('200');

    return (
        <>
            <input
                type="range"
                value={width}
                min="100"
                max="400"
                onChange={(e) => setWidth(e.target.value)}
                style={{ marginBottom: 16 }}
            />
            <ProgressLine color="#3BCEFF" title="原子标签：25" percent="60%" width={`${width}px`} />
        </>
    );
};
