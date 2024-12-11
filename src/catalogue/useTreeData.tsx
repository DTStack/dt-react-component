import { useState } from 'react';
import { DataNode } from 'antd/lib/tree';
import { cloneDeep } from 'lodash';

import { ICatalogue } from './components/catalogue';

export interface ITreeNode extends Omit<DataNode, 'children' | 'title'> {
    inputMode?: InputMode;
    /** 是否可编辑 */
    editable?: boolean;
    /** 是否可删除 */
    deletable?: boolean;
    /** 是否可增加 */
    addable?: boolean;
    title?: React.ReactNode;
    children?: ITreeNode[];
}

export enum InputMode {
    Add = 'add',
    Edit = 'edit',
    Append = 'append',
}

export const useTreeData = (): {
    data: ITreeNode[];
    loading: boolean;
    expandedKeys: ICatalogue['expandedKeys'];
    initData: (treeData: ITreeNode[]) => void;
    onChange: (node?: ITreeNode, inputMode?: InputMode) => void;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setExpandedKeys: React.Dispatch<React.SetStateAction<ICatalogue['expandedKeys']>>;
} => {
    const [data, setData] = useState<ITreeNode[]>([]);
    const [loading, setLoading] = useState(false);
    const [expandedKeys, setExpandedKeys] = useState<ICatalogue['expandedKeys']>([]);

    const initData = (treeData: ITreeNode[]) => {
        setData(treeData);
    };

    const processData = (data: ITreeNode[]): ITreeNode[] => {
        function traverse(item: ITreeNode): ITreeNode | null {
            if (item.inputMode === InputMode.Edit) {
                item.inputMode = undefined;
            }
            if (item.inputMode === InputMode.Add || item.inputMode === InputMode.Append) {
                return null;
            }
            if (Array.isArray(item.children)) {
                item.children = item.children.map(traverse).filter(Boolean) as ITreeNode[];
            }
            return item;
        }
        return data.map(traverse).filter(Boolean) as ITreeNode[];
    };

    const onChange = (node?: ITreeNode, inputMode?: InputMode) => {
        const newData = cloneDeep(data);
        // 做 onBlur 清除数据
        if (!node && !inputMode) {
            return setData(processData(newData));
        }
        if (!node && inputMode === InputMode.Add)
            return setData([{ key: '', inputMode: InputMode.Add }, ...data]);
        if (node && inputMode === InputMode.Append) {
            const newExpandedKeys = expandedKeys ? [...expandedKeys] : [];
            loopTree(newData, node.key, (item: ITreeNode) => {
                const { children } = item;
                item['children'] = [
                    ...(children || []),
                    { key: node.key + 'new', inputMode: InputMode.Append },
                ];
            });
            setData(newData);
            if (!expandedKeys?.includes(node.key)) {
                newExpandedKeys.push(node.key);
            }
            return setExpandedKeys(newExpandedKeys);
        }
        if (node && inputMode === InputMode.Edit) {
            loopTree(newData, node.key, (item: ITreeNode) => {
                item.inputMode = InputMode.Edit;
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
