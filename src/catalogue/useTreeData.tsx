import { useState } from 'react';
import { DataNode } from 'antd/lib/tree';

import { CatalogueProps } from './components/catalogue';

export type ITreeNode<U = {}> = Omit<DataNode, 'children' | 'title'> & {
    title?: React.ReactNode;
    children?: ITreeNode<U>[];
} & U;

export const useTreeData = <U extends Record<string, any> = {}>(): {
    data: ITreeNode<U>[];
    expandedKeys: CatalogueProps['expandedKeys'];
    onChange: (node: ITreeNode<U>[]) => void;
    onExpand: React.Dispatch<React.SetStateAction<CatalogueProps['expandedKeys']>>;
} => {
    const [data, setData] = useState<ITreeNode<U>[]>([]);
    const [expandedKeys, setExpandedKeys] = useState<CatalogueProps['expandedKeys']>([]);

    const onChange = (data: ITreeNode<U>[]) => {
        setData(data);
    };

    return {
        data,
        expandedKeys,
        onChange,
        onExpand: setExpandedKeys,
    };
};
