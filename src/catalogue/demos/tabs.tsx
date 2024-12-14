import React, { useEffect, useState } from 'react';
import { Catalogue, EllipsisText } from 'dt-react-component';

import { useTreeData } from '../useTreeData';

enum TreeType {
    Api = 'api',
    Index = 'index',
}

const DEFAULT_DATA = (key: TreeType) => [
    {
        title: `0-0-${key}`,
        key: '0-0',
        children: [
            {
                title: (
                    <EllipsisText
                        value="长长长长长长长长长长长长长长长长长长长长长长长长Title"
                        maxWidth="100%"
                    />
                ),
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
        title: `0-1-${key}`,
        key: '0-1',
        children: [
            { title: '0-1-0-0', key: '0-1-0-0' },
            { title: '0-1-0-1', key: '0-1-0-1' },
            { title: '0-1-0-2', key: '0-1-0-2' },
        ],
    },
    {
        title: `0-2-${key}`,
        key: '0-2',
    },
];

export default () => {
    const treeData = useTreeData();
    const [activeKey, setActiveKey] = useState(TreeType.Index);

    useEffect(() => {
        treeData.initData(DEFAULT_DATA(activeKey));
    }, [activeKey]);

    return (
        <div style={{ height: 300, width: 320 }}>
            <Catalogue
                tooltip="嘿嘿，这是tooltip"
                title="标签目录"
                showSearch
                treeData={treeData.data}
                edit={false}
                activeTabKey={activeKey}
                tabList={
                    [
                        { key: TreeType.Api, title: 'API' },
                        { key: TreeType.Index, title: '指标' },
                    ] as const
                }
                onTabChange={(key) => setActiveKey(key)}
                expandedKeys={treeData.expandedKeys}
                onExpand={treeData.setExpandedKeys}
            />
        </div>
    );
};
