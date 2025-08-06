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

/**
 *
 */

export const insertChildIntoNode = <U extends { edit?: boolean }>(
    treeData: ITreeNode<U>[],
    key: ITreeNode<U>['key'],
    children: ITreeNode<U>[]
): ITreeNode<U>[] => {
    return treeData.map((node) => {
        if (node.key === key) {
            return {
                ...node,
                children,
            };
        }
        if (node.children) {
            return {
                ...node,
                children: insertChildIntoNode(node.children, key, children),
            };
        }
        return node;
    });
};
