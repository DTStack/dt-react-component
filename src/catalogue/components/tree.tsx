import React, { useMemo } from 'react';
import { Tree, TreeProps } from 'antd';

import { ITreeNode } from '../useTreeData';
import { loopTree } from '../utils';
import { DownTriangleIcon } from './icon';

export interface ICatalogueTree
    extends Omit<TreeProps, 'showLine' | 'switcherIcon' | 'showIcon' | 'treeData'> {
    treeData: ITreeNode[];
}

const CatalogueTree = ({ treeData = [], onExpand, ...rest }: ICatalogueTree) => {
    const renderTreeData = useMemo(() => loopTree(treeData), [treeData]);

    const handleExpand: TreeProps['onExpand'] = (expandedKeys, info) => {
        onExpand?.(expandedKeys, info);
    };

    return (
        <Tree
            showLine={{ showLeafIcon: false }}
            switcherIcon={<DownTriangleIcon style={{ fontSize: 16 }} />}
            showIcon
            treeData={renderTreeData}
            onExpand={handleExpand}
            {...rest}
        />
    );
};

export default CatalogueTree;
