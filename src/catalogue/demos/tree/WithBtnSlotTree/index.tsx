import React, { useState } from 'react';
import { DeleteOutlined, FormOutlined, PlusSquareOutlined } from '@ant-design/icons';
import { Space, TreeProps } from 'antd';
import { Catalogue } from 'dt-react-component';
import { ITreeDataItem } from 'dt-react-component/catalogue/components/tree';

import { initTreeData } from '../data';

export const WithBtnSlotTree = () => {
    const [dataSource] = useState(initTreeData);
    const [selectedItems, setSelectedItems] = useState<ITreeDataItem[]>([]);
    const handleSelect: TreeProps['onSelect'] = (selectedKeys) => {
        // const selectedKey =
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
        console.log(selectedKeys, '--selectedKeys');
    };
    console.log(selectedItems, '--selectedItems');
    return (
        <div style={{ display: 'flex', background: '#eee', padding: 20 }}>
            <Catalogue.Tree
                treeData={dataSource}
                showHeader
                height={500}
                onSelect={handleSelect}
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
                {selectedItems?.length
                    ? `选中了 ${selectedItems?.map?.((item) => item?.title)?.join?.('、')}`
                    : 'Content'}
            </p>
        </div>
    );
};

export default WithBtnSlotTree;
