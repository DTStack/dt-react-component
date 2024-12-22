import { useState } from 'react';
import { DataNode } from 'antd/lib/tree';

import { CatalogueProps } from './components/catalogue';

export type ITreeNode<U = {}> = Omit<DataNode, 'children' | 'title'> & {
    title?: React.ReactNode;
    children?: ITreeNode<U>[];
} & U;

export const useTreeData = <U extends Record<string, any> = {}>(): {
    data: ITreeNode<U>[];
    loading: boolean;
    expandedKeys: CatalogueProps['expandedKeys'];
    onChange: (node: ITreeNode<U>[]) => void;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    onExpand: React.Dispatch<React.SetStateAction<CatalogueProps['expandedKeys']>>;
} => {
    const [data, setData] = useState<ITreeNode<U>[]>([]);
    const [loading, setLoading] = useState(false);
    const [expandedKeys, setExpandedKeys] = useState<CatalogueProps['expandedKeys']>([]);

    const onChange = (data: ITreeNode<U>[]) => {
        setData(data);
    };

    return {
        data,
        loading,
        expandedKeys,
        onChange,
        setLoading,
        onExpand: setExpandedKeys,
    };
};

/**
 * 查找 key 对应的节点
 * @param data 遍历的数组
 * @param key 当前 key 值
 * @returns 找到的对应节点
 */
export const findNodeByKey = <U,>(
    data: ITreeNode<U>[],
    key: ITreeNode<U>['key']
): ITreeNode<U> | null => {
    for (const node of data) {
        if (node.key === key) {
            return node;
        }
        if (node.children) {
            const result = findNodeByKey(node.children, key);
            if (result) return result;
        }
    }
    return null;
};

/**
 * 更新 key 对应节点为编辑状态
 * @param data 遍历的数组
 * @param key 当前 key 值
 * @returns 更新之后 data
 */
export const updateTreeNodeEdit = <U,>(
    data: ITreeNode<U>[],
    key: ITreeNode<U>['key']
): ITreeNode<U>[] => {
    return data.map((node) => {
        if (node.key === key) {
            return { ...node, edit: true };
        }
        if (node.children) {
            return { ...node, children: updateTreeNodeEdit(node.children, key) };
        }
        return node;
    });
};

/**
 * 查找 key 对应的父级节点
 * @param data 遍历的数组
 * @param key 当前 key 值
 * @returns 当前找到父级节点
 */
export const findParentNodeByKey = <U extends { edit?: boolean }>(
    data: ITreeNode<U>[],
    key: ITreeNode<U>['key']
): ITreeNode<U> | null => {
    for (const node of data) {
        if (node.children?.some((child) => child.key === key)) {
            return node;
        }
        // 如果有子节点，递归查找
        if (node.children) {
            const parent = findParentNodeByKey(node.children, key);
            if (parent) return parent;
        }
    }
    return null;
};

/**
 * 在 key 节点中添加子节点
 * @param data 遍历的数组
 * @param key 当前 key 值
 * @returns 插入新数据之后的 data
 */
export const appendNodeByKey = <U extends { edit?: boolean }>(
    data: ITreeNode<U>[],
    key: ITreeNode<U>['key']
): ITreeNode<U>[] => {
    const newNode = { key: 'new_', title: '', edit: true };
    return data.map((node) => {
        if (node.key === key) {
            const updatedChildren = node.children ? [...node.children, newNode] : [newNode];
            return { ...node, children: updatedChildren };
        }
        if (node.children) {
            return { ...node, children: appendNodeByKey(node.children, key) };
        }
        return node;
    });
};

/**
 * 移除 key 节点
 * @param data 遍历的数组
 * @param key 当前 key 值
 * @returns 删除数据之后的 data
 */
export const removeNodeByKey = <U,>(
    data: ITreeNode<U>[],
    key: ITreeNode<U>['key']
): ITreeNode<U>[] => {
    return data
        .filter((node) => node.key !== key)
        .map((node) => {
            if (node.children) {
                return {
                    ...node,
                    children: removeNodeByKey(node.children, key),
                };
            }
            return node;
        });
};

/**
 * 移除 edit 为 true 的节点
 * @param treeData
 * @returns 移除之后的数据
 */
export const removeEditNode = <U extends { edit?: boolean }>(
    treeData: ITreeNode<U>[]
): ITreeNode<U>[] => {
    return treeData
        .filter((node) => !node.edit)
        .map((node) => ({
            ...node,
            children: node.children ? removeEditNode(node.children) : undefined,
        }));
};
