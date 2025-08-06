import React, { useMemo } from 'react';
import { DownTriangleFilled } from '@dtinsight/react-icons';
import { Spin, Tree, TreeProps } from 'antd';
import { Empty } from 'dt-react-component';

import { ITreeNode } from '../useTreeData';
import { loopTree } from '../utils';

export interface ICatalogueTree<T extends Record<string, any> = {}>
    extends Omit<TreeProps, 'showLine' | 'switcherIcon' | 'showIcon' | 'treeData' | 'titleRender'> {
    loading?: boolean;
    treeData: ITreeNode<T>[];
    titleRender?: TreeProps<ITreeNode<T>>['titleRender'];
}

const CatalogueTree = <T extends Record<string, any> = {}>({
    treeData = [],
    loading = false,
    titleRender,
    ...rest
}: ICatalogueTree<T>) => {
    const renderTreeData = useMemo(() => loopTree<T>(treeData) || [], [treeData]);

    if (!renderTreeData.length) return <Empty style={{ marginTop: 130 }} />;

    return (
        <div className="dt-catalogue__tree">
            <Spin spinning={loading}>
                <Tree<ITreeNode<T>>
                    showLine={{ showLeafIcon: false }}
                    switcherIcon={<DownTriangleFilled style={{ fontSize: 16 }} />}
                    showIcon
                    treeData={renderTreeData}
                    titleRender={titleRender}
                    {...rest}
                />
            </Spin>
        </div>
    );
};

export default CatalogueTree;
