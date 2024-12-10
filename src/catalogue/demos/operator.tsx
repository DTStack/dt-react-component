import React, { useEffect } from 'react';
import { Menu } from 'antd';
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
                showSearch
                treeData={treeData.data}
                expandedKeys={treeData.expandedKeys}
                onExpand={treeData.setExpandedKeys}
                onChange={treeData.onChange}
                onSave={handleSave}
            />
        </div>
    );
};
