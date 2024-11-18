import { useState } from 'react';
import { DataNode, TreeProps } from 'antd/lib/tree';
import { cloneDeep } from 'lodash';

export interface ITreeNode extends Omit<DataNode, 'children'> {
    type?: InputStatus;
    editable?: boolean;
    deletable?: boolean;
    addable?: boolean;
    children?: ITreeNode[];
}

export enum InputStatus {
    Add = 'add',
    Edit = 'edit',
    Append = 'append',
}

export const useTreeData = (): {
    data: ITreeNode[];
    loading: boolean;
    expandedKeys: TreeProps['expandedKeys'];
    initData: (treeData: ITreeNode[]) => void;
    onChange: (node?: ITreeNode, type?: InputStatus) => void;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setExpandedKeys: React.Dispatch<React.SetStateAction<TreeProps['expandedKeys']>>;
} => {
    const [data, setData] = useState<ITreeNode[]>([]);
    const [loading, setLoading] = useState(false);
    const [expandedKeys, setExpandedKeys] = useState<TreeProps['expandedKeys']>([]);

    const initData = (treeData: ITreeNode[]) => {
        setData(treeData);
    };

    const processData = (data: ITreeNode[]): ITreeNode[] => {
        function traverse(item: ITreeNode): ITreeNode | null {
            if (item.type === InputStatus.Edit) {
                item.type = undefined;
            }
            if (item.type === InputStatus.Add || item.type === InputStatus.Append) {
                return null;
            }
            if (Array.isArray(item.children)) {
                item.children = item.children.map(traverse).filter(Boolean) as ITreeNode[];
            }
            return item;
        }
        return data.map(traverse).filter(Boolean) as ITreeNode[];
    };

    const onChange = (node?: ITreeNode, type?: InputStatus) => {
        const newData = cloneDeep(data);
        // 做 onBlur 清除数据
        if (!node && !type) {
            return setData(processData(newData));
        }
        if (!node && type === InputStatus.Add)
            return setData([{ key: '', type: InputStatus.Add }, ...data]);
        if (node && type === InputStatus.Append) {
            const newExpandedKeys = expandedKeys ? [...expandedKeys] : [];
            loopTree(newData, node.key, (item: ITreeNode) => {
                const { children } = item;
                item['children'] = [
                    ...(children || []),
                    { key: node.key + 'new', type: InputStatus.Append },
                ];
            });
            setData(newData);
            if (!expandedKeys?.includes(node.key)) {
                newExpandedKeys.push(node.key);
            }
            return setExpandedKeys(newExpandedKeys);
        }
        if (node && type === InputStatus.Edit) {
            loopTree(newData, node.key, (item: ITreeNode) => {
                item.type = InputStatus.Edit;
            });
            setData(newData);
        }
    };

    const loopTree = (data: ITreeNode[], key: ITreeNode['key'], callback: Function) => {
        data.forEach((item, index, arr) => {
            if (item.key === key) {
                return callback(item, index, arr);
            }
            if (item.children) {
                return loopTree(item.children, key, callback);
            }
        });
    };

    return {
        data,
        loading,
        expandedKeys,
        onChange,
        initData,
        setLoading,
        setExpandedKeys,
    };
};
