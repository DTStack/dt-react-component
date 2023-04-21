import React, { useState } from 'react';
import { ProgressLine } from 'dt-react-component';

export default () => {
    const [color, setColor] = useState('#e66465');

    return (
        <>
            <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                style={{ marginBottom: 16 }}
            />
            <ProgressLine title="原子标签：25" color={color} percent="60%" />
        </>
    );
};
