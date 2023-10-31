import React, { useState } from 'react';
import { TreeProps } from 'antd';
import { Catalogue } from 'dt-react-component';
import { ISuperTreeDataItem } from 'dt-react-component/catalogue/components/dtTree';

import { initTreeData } from '../data';

export const WithCheckboxTree = () => {
    const [dataSource] = useState(initTreeData);
    const [selectedItems, setSelectedItems] = useState<ISuperTreeDataItem[]>([]);
    const [checkedItems, setCheckedItems] = useState<ISuperTreeDataItem[]>([]);
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
    const handleCheck: TreeProps['onCheck'] = (checkedKeys, info) => {
        console.log(info, '--info');
        console.log(checkedKeys, '--checkedKeys');
        const checkedItems: ISuperTreeDataItem[] = [];
        const loopTree = (tree: ISuperTreeDataItem[]) => {
            tree.forEach((item) => {
                if (checkedKeys?.includes?.(item.key)) {
                    checkedItems.push(item);
                }
                if (item?.children?.length) {
                    loopTree(item?.children);
                }
            });
        };
        loopTree(dataSource);
        setCheckedItems(checkedItems);
    };
    console.log(selectedItems, '--selectedItems');
    console.log(checkedItems, '--checkedItems');
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
                onSelect={handleSelect}
                onCheck={handleCheck}
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
                <p>
                    {checkedItems?.length
                        ? `勾选了 ${checkedItems?.map((item) => item?.title)?.join('、')}`
                        : null}
                </p>
            </p>
        </div>
    );
};
