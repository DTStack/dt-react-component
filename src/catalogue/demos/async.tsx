import React, { useEffect } from 'react';
import { Catalogue } from 'dt-react-component';
import { useTreeData } from 'dt-react-component/catalogue/useTreeData';
import { insertChildrenToNode } from 'dt-react-component/catalogue/utils';

interface DataNode {
    title: string;
    key: string;
    isLeaf?: boolean;
    children?: DataNode[];
}

const initTreeData: DataNode[] = [
    { title: 'Expand to load', key: '0' },
    { title: 'Expand to load', key: '1' },
    { title: 'Tree Node', key: '2', isLeaf: true },
];

const App: React.FC = () => {
    const treeData = useTreeData();

    useEffect(() => {
        treeData.onChange(initTreeData);
    }, []);

    const onLoadData = ({ key, children }: any) =>
        new Promise<void>((resolve) => {
            if (children) {
                resolve();
                return;
            }
            setTimeout(() => {
                const newData = insertChildrenToNode(treeData.data, key, [
                    { title: 'Child Node', key: `${key}-0` },
                    { title: 'Child Node', key: `${key}-1` },
                ]);
                treeData.onChange(newData);
                resolve();
            }, 1000);
        });

    return <Catalogue loadData={onLoadData} treeData={treeData.data} />;
};

export default App;
