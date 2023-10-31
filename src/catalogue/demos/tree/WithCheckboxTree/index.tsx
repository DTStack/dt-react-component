import React, { useState } from 'react';
import { Catalogue } from 'dt-react-component';

import { initTreeData } from '../data';

export const WithCheckboxTree = () => {
    const [dataSource] = useState(initTreeData);
    return (
        <div style={{ display: 'flex' }}>
            <Catalogue
                treeData={dataSource}
                showHeader
                treeTit="自定义目录"
                draggable={{ icon: false, nodeDraggable: () => true }}
                height={500}
                // wrapperStyle={{ width: 500 }}
                onSearch={(v, e) => {
                    console.log(v, e, '--onSearch');
                }}
                checkable
            />
            <p
                style={{
                    marginLeft: 12,
                    marginBottom: 0,
                    padding: 10,
                    flex: 1,
                    background: '#fff',
                }}
            >
                Content
            </p>
        </div>
    );
};
