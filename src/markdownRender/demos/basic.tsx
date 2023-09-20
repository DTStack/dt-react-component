import React, { useEffect, useState } from 'react';
import { MarkdownRender } from 'dt-react-component';

export default () => {
    const [value, setValue] = useState('');

    useEffect(() => {
        fetch('https://cdn.jsdelivr.net/npm/dt-react-component@3.0.8/CHANGELOG.md', {
            method: 'get',
        })
            .then((res) => res.text())
            .then(setValue);
    }, []);

    return (
        <div style={{ maxHeight: 200, overflow: 'auto', marginBottom: 16 }}>
            <MarkdownRender value={value} />
        </div>
    );
};
