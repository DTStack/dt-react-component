import React from 'react';
import { Tree } from 'antd';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import ExampleContainer from './components/exampleCode';
import ContextMenu from '../components/contextMenu';
import { PropsTable } from './components/propsTable';

const { TreeNode } = Tree;
const stories = storiesOf('ContextMenu 右键菜单', module);
stories.addDecorator(withKnobs);

const propDefinitions = [
    {
        property: 'wrapperClassName',
        propType: 'string',
        required: false,
        description: '节点类名，找寻父节点',
        defaultValue: '',
    },
    {
        property: 'data',
        propType: 'array',
        required: true,
        description: '菜单项配置',
        defaultValue: '[]',
    },
];

const otherDependencies = `import { ContextMenu } from 'dt-react-component';
import { Tree } from 'antd';`;
const code = `<div style={{ position: 'relative' }}>
<Tree defaultExpandAll>
    <TreeNode
        key="0-0"
        title={
            <ContextMenu
                data={[
                    {
                        key: 'create',
                        text: '新建任务',
                        cb: () => {},
                    },
                    {
                        key: 'createFolder',
                        text: '新建文件夹',
                        cb: () => {},
                    },
                    {
                        key: 'edit',
                        text: '编辑',
                        cb: () => {},
                    },
                    {
                        key: 'remove',
                        text: '删除',
                        cb: () => {},
                    },
                ]}
            >
                folder
            </ContextMenu>
        }
        className="anchor-experiment-root"
    >
        <TreeNode
            key="0-0-0"
            title={
                <ContextMenu
                    data={[
                        {
                            key: 'edit',
                            text: '编辑',
                            cb: () => {},
                        },
                        {
                            key: 'clone',
                            text: '克隆',
                            cb: () => {},
                        },
                        {
                            key: 'remove',
                            text: '删除',
                            cb: () => {},
                        },
                    ]}
                >
                    file1
                </ContextMenu>
            }
            className="anchor-experiment-file"
        />
        <TreeNode
            key="0-0-1"
            title={
                <ContextMenu
                    data={[
                        {
                            key: 'edit',
                            text: '编辑',
                            cb: () => {},
                        },
                        {
                            key: 'clone',
                            text: '克隆',
                            cb: () => {},
                        },
                        {
                            key: 'remove',
                            text: '删除',
                            cb: () => {},
                        },
                    ]}
                >
                    file2
                </ContextMenu>
            }
            className="anchor-experiment-file"
        />
    </TreeNode>
</Tree>
</div>`;

stories.add(
    'contextMenu',
    () => (
        <div className="story_wrapper">
            <h2>何时使用</h2>
            <p>任务栏右键菜单操作</p>
            <h2>示例</h2>
            <p>在树目录中右键菜单试试吧</p>
            <ExampleContainer otherDependencies={otherDependencies} code={code} hasCodeSandBox>
                <div style={{ position: 'relative' }}>
                    <Tree defaultExpandAll>
                        <TreeNode
                            key="0-0"
                            title={
                                <ContextMenu
                                    data={[
                                        {
                                            key: 'create',
                                            text: '新建任务',
                                            cb: () => {},
                                        },
                                        {
                                            key: 'createFolder',
                                            text: '新建文件夹',
                                            cb: () => {},
                                        },
                                        {
                                            key: 'edit',
                                            text: '编辑',
                                            cb: () => {},
                                        },
                                        {
                                            key: 'remove',
                                            text: '删除',
                                            confirm: true,
                                            confirmProps: {
                                                title: '确定删除这个资源吗',
                                                okText: '确定',
                                                cancelText: '取消',
                                                onConfirm: () => {
                                                    console.log('删除');
                                                },
                                            },
                                        },
                                    ]}
                                >
                                    folder
                                </ContextMenu>
                            }
                            className="anchor-experiment-root"
                        >
                            <TreeNode
                                key="0-0-0"
                                title={
                                    <ContextMenu
                                        data={[
                                            {
                                                key: 'edit',
                                                text: '编辑',
                                                cb: () => {},
                                            },
                                            {
                                                key: 'clone',
                                                text: '克隆',
                                                cb: () => {},
                                            },
                                            {
                                                key: 'remove',
                                                text: '删除',
                                                cb: () => {},
                                            },
                                        ]}
                                    >
                                        file1
                                    </ContextMenu>
                                }
                                className="anchor-experiment-file"
                            />
                            <TreeNode
                                key="0-0-1"
                                title={<ContextMenu data={[]}>file2</ContextMenu>}
                                className="anchor-experiment-file"
                            />
                        </TreeNode>
                    </Tree>
                </div>
            </ExampleContainer>
        </div>
    ),
    {
        info: {
            inline: true,
            TableComponent: () => PropsTable({ propDefinitions }),
            propTablesExclude: [Tree, TreeNode, ExampleContainer],
        },
    }
);
