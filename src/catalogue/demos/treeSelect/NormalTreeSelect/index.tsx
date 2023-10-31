import React from 'react';
import { Catalogue } from 'dt-react-component';

import { initTreeSelectData } from '../data';

export const NormalTreeSelect = () => {
    return (
        <div style={{ display: 'flex' }}>
            <Catalogue.TreeSelect treeData={initTreeSelectData} style={{ width: 200 }} showSearch />
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
