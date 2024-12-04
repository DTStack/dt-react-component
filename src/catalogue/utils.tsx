import React from 'react';
import { DataNode, TreeProps } from 'antd/lib/tree';

import { FolderIcon, FolderOpenedIcon } from './components/icon';

export const getIcon: DataNode['icon'] = ({ selected, expanded }) => {
    const styles: React.CSSProperties = {
        fontSize: 16,
        color: '#1D78FF',
    };

    if (expanded || selected) return <FolderOpenedIcon style={styles} />;
    return <FolderIcon style={styles} />;
};

/**
 * @description 轮询 Tree 数据，赋值搜索标识和leafIcon
 */
export const loopTree = (data: TreeProps['treeData']): TreeProps['treeData'] => {
    return data?.map((item) => {
        if (item.children) {
            return {
                ...item,
                icon: getIcon,
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
