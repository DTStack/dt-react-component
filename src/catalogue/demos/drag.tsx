import React, { useEffect } from 'react';
import { DeleteOutlined, EditOutlined, PlusSquareOutlined } from '@dtinsight/react-icons';
import { Menu } from 'antd';
import { Catalogue } from 'dt-react-component';
import { CatalogueProps } from 'dt-react-component/catalogue/components/catalogue';
import { ITreeNode, useTreeData } from 'dt-react-component/catalogue/useTreeData';
import { cloneDeep } from 'lodash-es';
import shortid from 'shortid';

import {
    appendNodeByKey,
    findNodeByKey,
    findParentNodeByKey,
    removeEditNode,
    removeNodeByKey,
    updateTreeNodeEdit,
} from '../utils';

interface IData {
    edit?: boolean;
    addable?: boolean;
    deletable?: boolean;
    editable?: boolean;
}

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
    const treeData = useTreeData<IData>();

    const handleEdit = (key: ITreeNode<IData>['key']) => {
        const data = updateTreeNodeEdit<IData>(treeData.data, key);
        treeData.onChange(data);
    };

    const handleAdd = (key: ITreeNode<IData>['key']) => {
        const newExpandedKeys = treeData.expandedKeys ? [...treeData.expandedKeys] : [];
        const data = appendNodeByKey<IData>(treeData.data, key);
        if (!newExpandedKeys?.includes(key)) {
            newExpandedKeys.push(key);
        }
        treeData.onExpand(newExpandedKeys);
        treeData.onChange(data);
    };

    const handleSave = async (data: ITreeNode, value: string) => {
        const newData = cloneDeep(treeData.data);
        if (!data.key) {
            newData.push({
                title: value,
                key: shortid(),
            });
            newData.shift();
            treeData.onChange(newData);
            return;
        }
        if ((data.key as string).startsWith('new')) {
            let node = findParentNodeByKey(newData, data.key);
            if (!node) return;
            if (node.children) {
                const newChildren = node.children
                    .filter((item) => !item.edit)
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
            treeData.onChange(newData);
            return;
        }
        const node = findNodeByKey(newData, data.key);
        if (node) {
            node.title = value;
            node.edit = false;
        }
        treeData.onChange(newData);
    };

    const handleCancelSave = () => {
        const newData = removeEditNode(treeData.data);
        treeData.onChange(newData);
    };

    const handleDelete = (data: ITreeNode) => {
        let newData = cloneDeep(treeData.data);
        newData = removeNodeByKey(newData, data.key);
        treeData.onChange(newData);
    };

    const handleDrop: CatalogueProps['onDrop'] = (info) => {
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
        treeData.onChange(data);
    };

    useEffect(() => {
        treeData.onChange(DEFAULT_DATA);
    }, []);

    return (
        <div style={{ height: 300, width: 320 }}>
            <Catalogue
                tooltip="嘿嘿，这是tooltip"
                addonAfter={
                    <PlusSquareOutlined
                        style={{ cursor: 'pointer' }}
                        onClick={() =>
                            treeData.onChange([
                                ...treeData.data,
                                { edit: true, title: '', key: '' },
                            ])
                        }
                    />
                }
                title="标签目录"
                showSearch
                draggable
                overlay={(item) => {
                    const { addable = true, editable = true, deletable = true } = item;
                    return (
                        <Menu
                            onClick={({ domEvent }) => {
                                domEvent.stopPropagation();
                            }}
                        >
                            <Menu.Item
                                key="add"
                                disabled={!addable}
                                onClick={() => addable && handleAdd(item.key)}
                            >
                                <PlusSquareOutlined />
                                <span>新建目录</span>
                            </Menu.Item>
                            <Menu.Item
                                key="edit"
                                className="title__menu--item"
                                disabled={!editable}
                                onClick={() => editable && handleEdit(item.key)}
                            >
                                <EditOutlined />
                                <span>编辑</span>
                            </Menu.Item>
                            <Menu.Item
                                key="delete"
                                className="title__menu--item"
                                disabled={!deletable}
                                onClick={() => deletable && handleDelete(item)}
                            >
                                <DeleteOutlined />
                                <span>删除</span>
                            </Menu.Item>
                        </Menu>
                    );
                }}
                treeData={treeData.data}
                expandedKeys={treeData.expandedKeys}
                onExpand={treeData.onExpand}
                onDragEnter={({ expandedKeys }) => treeData.onExpand(expandedKeys)}
                onSave={handleSave}
                onCancelSave={handleCancelSave}
                onDrop={handleDrop}
            />
        </div>
    );
};
