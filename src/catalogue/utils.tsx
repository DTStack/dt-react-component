import React from 'react';
import { FolderFilled, FolderOpenedFilled } from '@dtinsight/react-icons';

import { CatalogueProps } from './components/catalogue';
import { ITreeNode } from './useTreeData';

export const getIcon: ITreeNode['icon'] = ({ selected, expanded }) => {
    const styles: React.CSSProperties = {
        fontSize: 16,
        color: '#1D78FF',
    };

    if (expanded || selected) return <FolderOpenedFilled style={styles} />;
    return <FolderFilled style={styles} />;
};

/**
 * @description 轮询 Tree 数据，赋值搜索标识和leafIcon
 */
export const loopTree = <T extends Record<string, any>>(
    data: CatalogueProps<T>['treeData']
): CatalogueProps<T>['treeData'] => {
    return data?.map((item) => {
        if (item.children) {
            return {
                icon: getIcon,
                ...item,
                children: loopTree(item.children),
            };
        }
        return {
            icon: getIcon,
            ...item,
            children: undefined,
        };
    });
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

/**
 * 在指定节点的子节点列表中添加一组子节点，可以选择添加在开头或结尾
 * @param treeData 要操作的树节点数组
 * @param key 要添加子节点的目标节点 key
 * @param children 要添加的子节点数组
 * @param beforeKey 是否将子节点添加到现有子节点之前，true 表示添加到开头，false 表示添加到结尾
 * @returns 更新后的树节点数组
 */
export const addChildrenIntoNode = <U extends { edit?: boolean }>(
    treeData: ITreeNode<U>[],
    key: ITreeNode<U>['key'],
    children: ITreeNode<U>[],
    beforeKey = true
): ITreeNode<U>[] =>
    treeData.map((node) => {
        const updatedChildren = beforeKey
            ? [...children, ...(node.children || [])]
            : [...(node.children || []), ...children];
        if (node.key === key) {
            return {
                ...node,
                children: node.children ? updatedChildren : children,
            };
        }
        if (node.children) {
            return {
                ...node,
                children: addChildrenIntoNode(node.children, key, children, beforeKey),
            };
        }
        return node;
    });

/**
 * @description 在树节点数组中查找指定 key 的节点索引
 * @param 要搜索的树节点数组
 * @param 要查找的节点 key
 * @returns 找到的节点索引，如果未找到则返回 -1
 */
export const findChildIndex = <U extends { edit?: boolean }>(
    data: ITreeNode<U>[],
    key: ITreeNode<U>['key']
): number => {
    const findIndex = data.findIndex((item) => item.key === key);
    return findIndex;
};

/**
 * 在树节点数组中，根据指定的 key 找到目标节点，并将新节点插入到目标节点之前或之后。
 * @param {ITreeNode<U>[]} treeData - 要操作的树节点数组。
 * @param {ITreeNode<U>['key']} currentKey - 目标节点的 key。
 * @param {ITreeNode<U>} node - 要插入的新节点。
 * @param {boolean} [beforeKey=true] - 是否将新节点插入到目标节点之前。true 表示之前，false 表示之后。
 * @returns {ITreeNode<U>[]} 更新后的树节点数组。
 */
export const insertNodeAtKey = <U extends { edit?: boolean }>(
    treeData: ITreeNode<U>[],
    currentKey: ITreeNode<U>['key'],
    node: ITreeNode<U>,
    beforeKey = true
): ITreeNode<U>[] => {
    const newTreeData: ITreeNode<U>[] = [];
    for (const item of treeData) {
        if (item.key === currentKey) {
            if (beforeKey) {
                newTreeData.push(node);
                newTreeData.push(item);
            } else {
                newTreeData.push(item);
                newTreeData.push(node);
            }
        } else {
            newTreeData.push({
                ...item,
                children: item.children
                    ? insertNodeAtKey(item.children, currentKey, node, beforeKey)
                    : item.children,
            });
        }
    }
    return newTreeData;
};
