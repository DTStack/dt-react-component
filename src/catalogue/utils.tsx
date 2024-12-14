import React from 'react';

import { ICatalogue } from './components/catalogue';
import { FolderIcon, FolderOpenedIcon } from './components/icon';
import { ITreeNode } from './useTreeData';

export const getIcon: ITreeNode['icon'] = ({ selected, expanded }) => {
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
export const loopTree = (data: ICatalogue['treeData']): ICatalogue['treeData'] => {
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
