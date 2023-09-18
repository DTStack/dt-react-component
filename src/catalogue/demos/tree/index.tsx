import { DeleteOutlined, FormOutlined, PlusSquareOutlined } from '@ant-design/icons';
import type { TreeProps } from 'antd';
import { Space } from 'antd';
import { Catalogue } from 'dt-react-component';
import React, { useState } from 'react';
import { initTreeData, sleep } from './data';

export const DefaultTree = () => {
    return (
        <Catalogue.Tree
            treeData={initTreeData}
            showHeader
            treeTit="自定义目录"
            draggable={{ icon: false, nodeDraggable: () => true }}
            height={500}
            wrapperStyle={{ width: 300 }}
            onSearch={(v, e) => {
                console.log(v, e, '--onSearch');
            }}
        />
    );
};

export const SmallTree = () => {
    const [dataSource] = useState(initTreeData);
    const handleLoadData: TreeProps['loadData'] = (node) => {
        console.log(node, '--node');
        // node.children = [{  }];
        return sleep(1500, []);
    };
    return (
        <Catalogue.Tree
            treeData={dataSource}
            showHeader
            size="small"
            treeTit="自定义目录"
            draggable={{ icon: false, nodeDraggable: () => true }}
            height={500}
            loadData={handleLoadData}
            // wrapperStyle={{ width: 500 }}
            onSearch={(v, e) => {
                console.log(v, e, '--onSearch');
            }}
        />
    );
};

export const NoHeaderTree = () => {
    return (
        <Catalogue.Tree
            treeData={initTreeData}
            showHeader={false}
            height={500}
            wrapperStyle={{ paddingTop: 12 }}
        />
    );
};

export const WithBtnSlotTree = () => {
    return (
        <Catalogue.Tree
            treeData={initTreeData}
            showHeader
            height={500}
            btnSlot={
                <Space style={{ marginRight: 10 }}>
                    <PlusSquareOutlined />
                    <FormOutlined />
                    <DeleteOutlined />
                </Space>
            }
        />
    );
};

export const WithTabsTree = () => {
    return (
        <Catalogue.Tree
            treeData={initTreeData}
            showHeader
            height={500}
            tabsProps={{
                items: [
                    {
                        label: '项目1项目1项目1',
                        key: 'project_1',
                    },
                    {
                        label: '项目2',
                        key: 'project_2',
                    },
                    {
                        label: '禁用禁用禁用禁用',
                        key: 'project_3',
                        disabled: true,
                    },
                ],
                onTabClick: (activeKey, e) => {
                    console.log(activeKey, e, 'onTabClick');
                },
            }}
            btnSlot={
                <Space style={{ marginRight: 10 }}>
                    <PlusSquareOutlined />
                    <FormOutlined />
                    <DeleteOutlined />
                </Space>
            }
        />
    );
};

export const WithCheckboxTree = () => {
    return (
        <Catalogue
            treeData={initTreeData}
            showHeader
            treeTit="自定义目录"
            draggable={{ icon: false, nodeDraggable: () => true }}
            height={500}
            // wrapperStyle={{ width: 500 }}
            onSearch={(v, e) => {
                console.log(v, e, '--onSearch');
            }}
            checkable
        />
    );
};
