import React, { useMemo } from 'react';
import { Spin, Tree, TreeProps } from 'antd';
import { Empty } from 'dt-react-component';

import { ITreeNode } from '../useTreeData';
import { loopTree } from '../utils';
import { DownTriangleIcon } from './icon';

export interface ICatalogueTree
    extends Omit<TreeProps, 'showLine' | 'switcherIcon' | 'showIcon' | 'treeData'> {
    loading?: boolean;
    treeData: ITreeNode[];
}

const CatalogueTree = ({ treeData = [], loading = false, ...rest }: ICatalogueTree) => {
    const renderTreeData = useMemo(() => loopTree(treeData) || [], [treeData]);

    if (!renderTreeData.length) return <Empty style={{ marginTop: 130 }} />;

    return (
        <div className="dt-catalogue__tree">
            <Spin spinning={loading}>
                <Tree
                    showLine={{ showLeafIcon: false }}
                    switcherIcon={<DownTriangleIcon style={{ fontSize: 16 }} />}
                    showIcon
                    treeData={renderTreeData}
                    {...rest}
                />
            </Spin>
        </div>
    );
};

export default CatalogueTree;
