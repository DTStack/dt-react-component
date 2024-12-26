import React, { useEffect } from 'react';
import { DeleteOutlined, EditOutlined, PlusSquareOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Catalogue } from 'dt-react-component';
import { cloneDeep } from 'lodash';
import shortid from 'shortid';

import {
    appendNodeByKey,
    findNodeByKey,
    findParentNodeByKey,
    ITreeNode,
    removeEditNode,
    removeNodeByKey,
    updateTreeNodeEdit,
    useTreeData,
} from '../useTreeData';

const DEFAULT_DATA = [
    {
        title: '0-0',
        key: '0-0',
        addable: true,
        deletable: true,
        editable: true,
        children: [
            {
                title: '0-0-0',
                key: '0-0-0',
                addable: true,
                deletable: true,
                editable: true,
                children: [
                    {
                        title: '0-0-0-0',
                        key: '0-0-0-0',
                        addable: true,
                        deletable: true,
                        editable: true,
                    },
                    {
                        title: '0-0-0-1',
                        key: '0-0-0-1',
                        addable: true,
                        deletable: true,
                        editable: true,
                    },
                    {
                        title: '0-0-0-2',
                        key: '0-0-0-2',
                        addable: true,
                        deletable: true,
                        editable: true,
                    },
                ],
            },
            {
                title: '0-0-1',
                key: '0-0-1',
                children: [
                    {
                        title: '0-0-1-0',
                        key: '0-0-1-0',
                        addable: true,
                        deletable: true,
                        editable: true,
                    },
                    {
                        title: '0-0-1-1',
                        key: '0-0-1-1',
                        addable: true,
                        deletable: true,
                        editable: true,
                    },
                    {
                        title: '0-0-1-2',
                        key: '0-0-1-2',
                        addable: true,
                        deletable: true,
                        editable: true,
                    },
                ],
                addable: true,
                deletable: true,
                editable: true,
            },
            {
                title: '0-0-2',
                key: '0-0-2',
                addable: true,
                deletable: true,
                editable: true,
            },
        ],
    },
    {
        title: '0-1',
        key: '0-1',
        addable: true,
        deletable: true,
        editable: true,
        children: [
            { title: '0-1-0-0', key: '0-1-0-0', addable: true, deletable: true, editable: true },
            { title: '0-1-0-1', key: '0-1-0-1', addable: true, deletable: true, editable: true },
            { title: '0-1-0-2', key: '0-1-0-2', addable: true, deletable: true, editable: true },
        ],
    },
    {
        title: '0-2',
        key: '0-2',
        addable: true,
        deletable: true,
        editable: true,
    },
];

interface IData {
    edit?: boolean;
    addable?: boolean;
    deletable?: boolean;
    editable?: boolean;
}

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

    useEffect(() => {
        treeData.onChange(DEFAULT_DATA);
    }, []);

    return (
        <div style={{ height: 300, width: 320 }}>
            <Catalogue<IData, any>
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
                showSearch
                treeData={treeData.data}
                expandedKeys={treeData.expandedKeys}
                onExpand={treeData.onExpand}
                onSave={handleSave}
                onCancelSave={handleCancelSave}
            />
        </div>
    );
};
