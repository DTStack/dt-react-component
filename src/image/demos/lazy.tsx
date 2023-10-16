import React from 'react';

import Image from '..';

export default function Component() {
    return (
        <div style={{ height: 200, overflow: 'scroll' }}>
            <div style={{ height: 300 }}>占位</div>
            <Image
                height={200}
                width={200}
                lazy
                src="https://dtstack.github.io/dt-react-component/static/empty_permission.35e2808b.png"
            />
        </div>
    );
}
