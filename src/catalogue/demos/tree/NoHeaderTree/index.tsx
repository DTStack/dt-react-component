import React, { useState } from 'react';
import { Catalogue } from 'dt-react-component';

import { initTreeData } from '../data';

export const NoHeaderTree = () => {
    const [dataSource] = useState(initTreeData);
    return (
        <div style={{ display: 'flex' }}>
            <Catalogue.Tree
                treeData={dataSource}
                showHeader={false}
                height={500}
                wrapperStyle={{ paddingTop: 12 }}
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
