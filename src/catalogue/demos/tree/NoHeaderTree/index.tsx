import React, { useState } from 'react';
import type { TreeProps } from 'antd/es';
import { Catalogue } from 'dt-react-component';
import { IDtTreeDataItem } from 'dt-react-component/catalogue/components/dtTree';

import { initTreeData } from '../data';

export const NoHeaderTree = () => {
    const [dataSource] = useState(initTreeData);
    const [selectedItems, setSelectedItems] = useState<IDtTreeDataItem[]>([]);
    const handleSelect: TreeProps['onSelect'] = (selectedKeys) => {
        // const selectedKey =
        const selectedItems: IDtTreeDataItem[] = [];
        const loopTree = (tree: IDtTreeDataItem[]) => {
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
        <div style={{ display: 'flex' }}>
            <Catalogue.Tree
                treeData={dataSource}
                showHeader={false}
                height={500}
                wrapperStyle={{ paddingTop: 12 }}
                onSelect={handleSelect}
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
