import React, { useCallback, useState } from 'react';
import type { DataNode, TreeProps } from 'antd/es/tree';
import { Catalogue } from 'dt-react-component';

import { initTreeData } from '../data';

export const DefaultTree = () => {
    const [dataSource, setDataSource] = useState(initTreeData);
    const handleDrop: TreeProps['onDrop'] = useCallback(
        (info) => {
            console.log(info);
            const dropKey = info.node.key;
            const dragKey = info.dragNode.key;
            const dropPos = info.node.pos.split('-');
            const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);

            const loop = (
                data: DataNode[],
                key: React.Key,
                callback: (node: DataNode, i: number, data: DataNode[]) => void
            ) => {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].key === key) {
                        return callback(data[i], i, data);
                    }
                    if (data[i].children) {
                        loop(data[i].children!, key, callback);
                    }
                }
            };
            const data = [...dataSource];

            // Find dragObject
            let dragObj: DataNode;
            loop(data, dragKey, (item, index, arr) => {
                arr.splice(index, 1);
                dragObj = item;
            });

            if (!info.dropToGap) {
                // Drop on the content
                loop(data, dropKey, (item) => {
                    item.children = item.children || [];
                    // where to insert 示例添加到头部，可以是随意位置
                    item.children.unshift(dragObj);
                });
            } else if (
                ((info.node as any).props.children || []).length > 0 && // Has children
                (info.node as any).props.expanded && // Is expanded
                dropPosition === 1 // On the bottom gap
            ) {
                loop(data, dropKey, (item) => {
                    item.children = item.children || [];
                    // where to insert 示例添加到头部，可以是随意位置
                    item.children.unshift(dragObj);
                    // in previous version, we use item.children.push(dragObj) to insert the
                    // item to the tail of the children
                });
            } else {
                let ar: DataNode[] = [];
                let i: number;
                loop(data, dropKey, (_item, index, arr) => {
                    ar = arr;
                    i = index;
                });
                if (dropPosition === -1) {
                    ar.splice(i!, 0, dragObj!);
                } else {
                    ar.splice(i! + 1, 0, dragObj!);
                }
            }
            setDataSource(data);
        },
        [dataSource]
    );
    const handleSelect: TreeProps['onSelect'] = useCallback((selectedKeys, e) => {
        // const selectedKey =
        const posArr = e.node.pos.split('-');
        console.log(selectedKeys, '--selectedKeys');
        console.log(e, '--e');
        console.log(posArr, '--posArr');
    }, []);
    return (
        <div style={{ display: 'flex' }}>
            <Catalogue.Tree
                treeData={dataSource}
                showHeader
                treeTit="自定义目录"
                draggable={{ icon: false, nodeDraggable: () => true }}
                height={500}
                wrapperStyle={{ width: 300 }}
                onSearch={(v, e) => {
                    console.log(v, e, '--onSearch');
                }}
                onDrop={handleDrop}
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
                Content
            </p>
        </div>
    );
};
