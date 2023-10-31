import React, { useState } from 'react';
import { DeleteOutlined, FormOutlined, PlusSquareOutlined } from '@ant-design/icons';
import { Space, TreeProps } from 'antd';
import { Catalogue } from 'dt-react-component';
import { ISuperTreeDataItem } from 'dt-react-component/catalogue/components/dtTree';

import { initTreeData } from '../data';

export const WithTabsTree = () => {
    const [dataSource] = useState(initTreeData);
    const [selectedItems, setSelectedItems] = useState<ISuperTreeDataItem[]>([]);

    const handleSelect: TreeProps['onSelect'] = (selectedKeys) => {
        console.log(selectedKeys, '--selectedKeys');
        const selectedItems: ISuperTreeDataItem[] = [];
        const loopTree = (tree: ISuperTreeDataItem[]) => {
            tree.forEach((item) => {
                if (selectedKeys.includes(item.key)) {
                    selectedItems.push(item);
                }
                if (item?.children?.length) {
                    loopTree(item?.children);
                }
            });
        };
        loopTree(dataSource);
        setSelectedItems(selectedItems);
    };
    console.log(selectedItems, '--selectedItems');
    return (
        <div style={{ display: 'flex' }}>
            <Catalogue.Tree
                treeData={dataSource}
                showHeader
                height={500}
                style={{ width: 300 }}
                onSelect={handleSelect}
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
                <p>
                    {selectedItems?.length
                        ? `选中了 ${selectedItems?.map?.((item) => item?.title)?.join?.('、')}`
                        : '未选中'}
                </p>
            </p>
        </div>
    );
};
