import * as React from 'react';
import { FolderFilled, FolderOpenFilled } from '@ant-design/icons';
import type { TreeProps } from 'antd';
import type { DataNode } from 'antd/es/tree';
import { ContextMenu } from 'dt-react-component';

import type { IDtTreeDataItem } from '..';

/**
 * @description 根据 query 计算应该展开的 expendKeys
 */
export const getExpendKeysByQuery = ({
    tree,
    searchStr,
}: {
    /** 树数据 */
    tree: DataNode[];
    /** 搜索字符串 */
    searchStr: string;
}): React.Key[] => {
    const keys: React.Key[] = [];
    if (!searchStr) return [];
    tree?.forEach?.((item) => {
        if (item?.title?.toString()?.includes?.(searchStr)) {
            keys.push(item.key);
        }
        if (item?.children && item?.children?.length) {
            keys.push(...getExpendKeysByQuery({ tree: item?.children, searchStr }));
        }
    });
    return keys;
};

/**
 * @description 文件 展开/收起样式
 */
export const getIcon: DataNode['icon'] = ({ expanded, data }) => {
    if (!data) return null;
    if (!data?.hasOwnProperty('children')) return null;
    const styles: React.CSSProperties = {
        fontSize: 14,
        color: '#1D78FF',
    };
    if (expanded) return <FolderOpenFilled style={styles} />;
    return <FolderFilled style={styles} />;
};

/**
 * @description 轮询 Tree 数据，赋值 搜索标识和leafIcon
 */
export const loopTree = (
    data: IDtTreeDataItem[] | undefined,
    searchValue: string
): TreeProps['treeData'] => {
    return data?.map((item: IDtTreeDataItem) => {
        const strTitle = item?.title as string;
        const index = strTitle?.indexOf?.(searchValue);
        const beforeStr = strTitle?.substring?.(0, index);
        const afterStr = strTitle?.slice?.(index + searchValue?.length);
        const contextMenuData =
            item?.contextMenuConfig?.data?.map?.((e: any) => ({
                ...e,
                cb: () => {
                    item?.contextMenuConfig?.onClick(e, item);
                },
            })) || [];
        const title =
            index > -1 ? (
                <ContextMenu data={contextMenuData}>
                    {beforeStr}
                    <span style={{ color: '#f50' }}>{searchValue}</span>
                    {afterStr}
                </ContextMenu>
            ) : (
                <ContextMenu data={contextMenuData}>{strTitle}</ContextMenu>
            );
        if (item.children) {
            return {
                icon: getIcon,
                ...item,
                title,
                key: item.key,
                children: loopTree(item.children, searchValue),
            };
        }
        return { ...item, title, key: item.key, children: undefined };
    });
};
