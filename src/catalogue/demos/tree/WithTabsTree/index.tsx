import React, { useState } from 'react';
import { DeleteOutlined, FormOutlined, PlusSquareOutlined } from '@ant-design/icons';
import { Space, TreeProps } from 'antd';
import { Catalogue } from 'dt-react-component';
import { ITabsStatus, ITreeDataItem } from 'dt-react-component/catalogue/components/tree';

import { initTreeData } from '../data';

export const WithTabsTree = () => {
    const [dataSource, setDataSource] = useState(initTreeData);
    const [selectedItems, setSelectedItems] = useState<ITreeDataItem[]>([]);

    const handleSelect: TreeProps['onSelect'] = (selectedKeys) => {
        console.log(selectedKeys, '--selectedKeys');
        const selectedItems: ITreeDataItem[] = [];
        const loopTree = (tree: ITreeDataItem[]) => {
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
        <div style={{ display: 'flex', background: '#eee', padding: 20 }}>
            <Catalogue.Tree
                treeData={dataSource}
                showHeader
                height={500}
                wrapperStyle={{ width: 300 }}
                onSelect={handleSelect}
                defaultStatus={ITabsStatus.tabs}
                tabsProps={{
                    items: [
                        {
                            label: 'All',
                            key: 'all',
                        },
                        {
                            label: '项目1',
                            key: 'project_1',
                        },
                        {
                            label: '项目2',
                            key: 'project_2',
                        },
                        {
                            label: '禁用',
                            key: 'project_3',
                            disabled: true,
                        },
                    ],
                    onTabClick: (activeKey, e) => {
                        console.log(activeKey, e, 'onTabClick');
                        if (activeKey === 'project_1') {
                            setDataSource(initTreeData.slice(0, 2));
                        } else if (activeKey === 'project_2') {
                            setDataSource(initTreeData.slice(3));
                        } else if (activeKey === 'all') {
                            setDataSource(initTreeData);
                        }
                    },
                }}
                onStatusChange={(status) => {
                    if (status === ITabsStatus.search) {
                        setDataSource(initTreeData);
                    }
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

export default WithTabsTree;
