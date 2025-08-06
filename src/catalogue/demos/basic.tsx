import React, { useEffect } from 'react';
import { Catalogue } from 'dt-react-component';
import { useTreeData } from 'dt-react-component/catalogue/useTreeData';

const DEFAULT_DATA = [
    {
        title: '0-0',
        key: '0-0',
        children: [
            {
                title: '长长长长长长长长长长长长长长长长长长长长长长长长Title',
                key: '0-0-0',
                children: [
                    { title: '0-0-0-0', key: '0-0-0-0' },
                    { title: '0-0-0-1', key: '0-0-0-1' },
                    { title: '0-0-0-2', key: '0-0-0-2' },
                ],
            },
            {
                title: '0-0-1',
                key: '0-0-1',
                children: [
                    { title: '0-0-1-0', key: '0-0-1-0' },
                    { title: '0-0-1-1', key: '0-0-1-1' },
                    { title: '0-0-1-2', key: '0-0-1-2' },
                ],
            },
            {
                title: '0-0-2',
                key: '0-0-2',
            },
        ],
    },
    {
        title: '0-1',
        key: '0-1',
        children: [
            { title: '0-1-0-0', key: '0-1-0-0' },
            { title: '0-1-0-1', key: '0-1-0-1' },
            { title: '0-1-0-2', key: '0-1-0-2' },
        ],
    },
    {
        title: '0-2',
        key: '0-2',
    },
];

export default () => {
    const treeData = useTreeData();

    useEffect(() => {
        treeData.onChange(DEFAULT_DATA);
    }, []);

    return (
        <div style={{ height: 300, width: 320 }}>
            <Catalogue
                tooltip="嘿嘿，这是tooltip"
                title="标签目录"
                showSearch
                treeData={treeData.data}
                edit={false}
                expandedKeys={treeData.expandedKeys}
                onExpand={treeData.onExpand}
            />
        </div>
    );
};
