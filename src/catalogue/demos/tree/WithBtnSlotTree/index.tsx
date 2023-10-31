import React, { useState } from 'react';
import { DeleteOutlined, FormOutlined, PlusSquareOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import { Catalogue } from 'dt-react-component';

import { initTreeData } from '../data';

export const WithBtnSlotTree = () => {
    const [dataSource] = useState(initTreeData);
    return (
        <div style={{ display: 'flex' }}>
            <Catalogue.Tree
                treeData={dataSource}
                showHeader
                height={500}
                btnSlot={
                    <Space style={{ marginRight: 10 }}>
                        <PlusSquareOutlined />
                        <FormOutlined />
                        <DeleteOutlined />
                    </Space>
                }
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
