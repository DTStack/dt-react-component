import React, { useState } from 'react';
import { DeleteOutlined, FormOutlined, PlusSquareOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import { Catalogue } from 'dt-react-component';

import { initTreeData } from '../data';

export const WithTabsTree = () => {
    const [dataSource] = useState(initTreeData);
    return (
        <div style={{ display: 'flex' }}>
            <Catalogue.Tree
                treeData={dataSource}
                showHeader
                height={500}
                tabsProps={{
                    items: [
                        {
                            label: '项目1项目1项目1',
                            key: 'project_1',
                        },
                        {
                            label: '项目2',
                            key: 'project_2',
                        },
                        {
                            label: '禁用禁用禁用禁用',
                            key: 'project_3',
                            disabled: true,
                        },
                    ],
                    onTabClick: (activeKey, e) => {
                        console.log(activeKey, e, 'onTabClick');
                    },
                }}
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
