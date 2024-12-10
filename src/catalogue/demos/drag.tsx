import React, { useEffect } from 'react';
import { Menu } from 'antd';
import { TreeProps } from 'antd/lib/tree';
import { Catalogue } from 'dt-react-component';
import { cloneDeep } from 'lodash';
import shortid from 'shortid';

import { DeleteIcon, EditIcon, PlusCircleIcon, PlusSquareIcon } from '../components/icon';
import { InputStatus, ITreeNode, useTreeData } from '../useTreeData';

const DEFAULT_DATA = [
    {
        title: '0-0',
        key: '0-0',
        children: [
            {
                title: '0-0-0',
                key: '0-0-0',
                children: [
                    { title: '0-0-0-0', key: '0-0-0-0' },
                    { title: '0-0-0-1', key: '0-0-0-1' },
                    { title: '0-0-0-2', key: '0-0-0-2' },
                ],
            },
            {
                title: '0-0-1',
                key: '0-0-1',
                children: [
                    { title: '0-0-1-0', key: '0-0-1-0' },
                    { title: '0-0-1-1', key: '0-0-1-1' },
                    { title: '0-0-1-2', key: '0-0-1-2' },
                ],
            },
            {
                title: '0-0-2',
                key: '0-0-2',
            },
        ],
    },
    {
        title: '0-1',
        key: '0-1',
        children: [
            { title: '0-1-0-0', key: '0-1-0-0' },
            { title: '0-1-0-1', key: '0-1-0-1' },
            { title: '0-1-0-2', key: '0-1-0-2' },
        ],
    },
    {
        title: '0-2',
        key: '0-2',
    },
];

export default () => {
    const treeData = useTreeData();

    const findNodeByKey = (data: ITreeNode[], targetKey: ITreeNode['key']): ITreeNode | null => {
        for (const node of data) {
            if (node.key === targetKey) {
                return node;
            }
            if (node.children) {
                const result = findNodeByKey(node.children, targetKey);
                if (result) return result;
            }
        }
        return null;
    };

    const handleSave = async (data: ITreeNode, value: string) => {
        const newData = cloneDeep(treeData.data);
        if (data.type === InputStatus.Add) {
            newData.push({
                title: value,
                key: shortid(),
            });
            newData.shift();
            treeData.initData(newData);
            return;
        }
        if (data.type === InputStatus.Append) {
            let node = findNodeByKey(newData, data.key);
            if (!node) return;
            if (node.children) {
                const newChildren = node.children
                    .filter((item) => !item.type)
                    .concat({ title: value, key: shortid() });
                node.children = newChildren;
            } else {
                node = {
                    ...node,
                    children: [
                        {
                            title: value,
                            key: shortid(),
                        },
                    ],
                };
            }
            treeData.initData(newData);
            return;
        }
        const node = findNodeByKey(newData, data.key);
        if (node) {
            node.title = value;
            node.type = undefined;
        }
        treeData.initData(newData);
    };

    const removeNodeByKey = (data: ITreeNode[], targetKey: ITreeNode['key']): ITreeNode[] => {
        return data
            .filter((node) => node.key !== targetKey)
            .map((node) => {
                if (node.children) {
                    return {
                        ...node,
                        children: removeNodeByKey(node.children, targetKey),
                    };
                }
                return node;
            });
    };

    const handleDelete = (data: ITreeNode) => {
        let newData = cloneDeep(treeData.data);
        newData = removeNodeByKey(newData, data.key);
        treeData.initData(newData);
    };

    const handleDrop: TreeProps['onDrop'] = (info) => {
        const dropKey = info.node.key;
        const dragKey = info.dragNode.key;
        const dropPos = info.node.pos.split('-');
        const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]); // the drop position relative to the drop node, inside 0, top -1, bottom 1

        const loop = (
            data: ITreeNode[],
            key: React.Key,
            callback: (node: ITreeNode, i: number, data: ITreeNode[]) => void
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
        const data = [...treeData.data];

        // Find dragObject
        let dragObj: ITreeNode;
        loop(data, dragKey, (item, index, arr) => {
            arr.splice(index, 1);
            dragObj = item;
        });
        if (!info.dropToGap) {
            // Drop on the content
            loop(data, dropKey, (item) => {
                item.children = item.children || [];
                // where to insert. New item was inserted to the start of the array in this example, but can be anywhere
                item.children.unshift(dragObj);
            });
        } else {
            let ar: ITreeNode[] = [];
            let i: number;
            loop(data, dropKey, (_item, index, arr) => {
                ar = arr;
                i = index;
            });
            if (dropPosition === -1) {
                // Drop on the top of the drop node
                ar.splice(i!, 0, dragObj!);
            } else {
                // Drop on the bottom of the drop node
                ar.splice(i! + 1, 0, dragObj!);
            }
        }
        treeData.initData(data);
    };

    useEffect(() => {
        treeData.initData(DEFAULT_DATA);
    }, []);

    return (
        <div style={{ height: 300, width: 320 }}>
            <Catalogue
                tooltip="嘿嘿，这是tooltip"
                addonAfter={
                    <PlusSquareIcon
                        style={{ cursor: 'pointer' }}
                        onClick={() => treeData.onChange(undefined, InputStatus.Add)}
                    />
                }
                title="标签目录"
                showSearch
                draggable
                overlay={(item) => (
                    <Menu
                        onClick={({ domEvent }) => {
                            domEvent.stopPropagation();
                        }}
                    >
                        <Menu.Item
                            key="add"
                            disabled={!item.addable}
                            onClick={() =>
                                item.addable && treeData.onChange(item, InputStatus.Append)
                            }
                        >
                            <PlusCircleIcon />
                            <span>新建目录</span>
                        </Menu.Item>
                        <Menu.Item
                            key="edit"
                            className="title__menu--item"
                            disabled={!item.editable}
                            onClick={() =>
                                item.editable && treeData.onChange(item, InputStatus.Edit)
                            }
                        >
                            <EditIcon />
                            <span>编辑</span>
                        </Menu.Item>
                        <Menu.Item
                            key="delete"
                            className="title__menu--item"
                            disabled={!item.deletable}
                            onClick={() => item.deletable && handleDelete(item)}
                        >
                            <DeleteIcon />
                            <span>删除</span>
                        </Menu.Item>
                    </Menu>
                )}
                treeData={treeData.data}
                expandedKeys={treeData.expandedKeys}
                onExpand={treeData.setExpandedKeys}
                onDragEnter={({ expandedKeys }) => treeData.setExpandedKeys(expandedKeys)}
                onChange={treeData.onChange}
                onSave={handleSave}
                onDrop={handleDrop}
            />
        </div>
    );
};
