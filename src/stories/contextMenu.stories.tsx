import React from 'react';
import { Tree } from 'antd';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { PropsTable } from './components/propsTable';
import ContextMenu from '../components/contextMenu';
import ExampleContainer from './components/exampleCode';

const { TreeNode } = Tree;
const { ContextMenuItem } = ContextMenu;
const stories = storiesOf('ContextMenu 右键菜单', module);
stories.addDecorator(withKnobs);

const propDefinitions = [
    {
        property: 'targetClassName',
        propType: 'string',
        required: false,
        description: '节点类名，找寻父节点',
        defaultValue: '',
    },
    {
        property: 'onClick',
        propType: 'function',
        required: false,
        description: '触发事件函数',
        defaultValue: '',
    },
];

const otherDependencies = `import { ContextMenu } from 'dt-react-component';
import { Tree } from 'antd';`;
const code = `<div style={{ position: 'relative' }}>
                <Tree defaultExpandAll>
                    <Tree.TreeNode key='0-0' title='folder' className='anchor-experiment-root'>
                        <Tree.TreeNode key="0-0-0" title='file1' className='anchor-experiment-file' />
                        <Tree.TreeNode key="0-0-1" title='file2' className='anchor-experiment-file' />
                    </Tree.TreeNode>
                </Tree>
                {this.loopContextMenu()}
            </div>`;
const functionCode = `
        contextMenus = [
            {
                targetClassName: 'anchor-experiment-root',
                menuItems: [{
                    text: '新建实验',
                    onClick: (activeNode) => {
                        console.log('新建实验')
                    }
                }, {
                    text: '新建文件夹',
                    onClick: (activeNode) => {
                        console.log('新建文件夹')
                    }
                }]
            }, {
                targetClassName: 'anchor-experiment-file',
                menuItems: [{
                    text: '编辑',
                    onClick: (activeNode) => {
                        console.log('编辑')
                    }
                }, {
                    text: '移动',
                    onClick: (activeNode) => {
                        console.log('移动')
                    }
                }]
            }
        ];

       renderContextMenu = (contextMenu) => {
            if (!contextMenu.menuItems || !contextMenu.menuItems.length) {
                return null;
            }
            return <ContextMenu key={contextMenu.targetClassName} targetClassName={contextMenu.targetClassName}>
                {contextMenu.menuItems.map((menu) => {
                    return (<ContextMenu.ContextMenuItem key={menu.text} onClick={() => {
                        menu.onClick();
                    }}>{menu.text}</ContextMenu.ContextMenuItem>)
                })}
            </ContextMenu>
        }

       loopContextMenu = () => {
            return this.contextMenus && this.contextMenus.map((contextMenu, index) => {
                return this.renderContextMenu(contextMenu);
            })
        }
`;
const contextMenus = [
    {
        targetClassName: 'anchor-experiment-root',
        menuItems: [
            {
                text: '新建实验',
                onClick: (_activeNode: any) => {
                    console.log('新建实验');
                },
            },
            {
                text: '新建文件夹',
                onClick: (_activeNode: any) => {
                    console.log('新建文件夹');
                },
            },
        ],
    },
    {
        targetClassName: 'anchor-experiment-file',
        menuItems: [
            {
                text: '编辑',
                onClick: (_activeNode: any) => {
                    console.log('编辑');
                },
            },
            {
                text: '移动',
                onClick: (_activeNode: any) => {
                    console.log('移动');
                },
            },
        ],
    },
];
function renderContextMenu(contextMenu: any) {
    if (!contextMenu.menuItems || !contextMenu.menuItems.length) {
        return null;
    }
    return (
        <ContextMenu
            key={contextMenu.targetClassName}
            targetClassName={contextMenu.targetClassName}
        >
            {contextMenu.menuItems.map((menu: any) => {
                return (
                    <ContextMenuItem
                        key={menu.text}
                        onClick={() => {
                            menu.onClick();
                        }}
                    >
                        {menu.text}
                    </ContextMenuItem>
                );
            })}
        </ContextMenu>
    );
}
function loopContextMenu() {
    return (
        contextMenus &&
        contextMenus.map((contextMenu: any, _index: any) => {
            return renderContextMenu(contextMenu);
        })
    );
}
stories.add(
    'contextMenu',
    () => (
        <div className="story_wrapper">
            <h2>何时使用</h2>
            <p>任务栏右键菜单操作</p>
            <h2>示例</h2>
            <p>在树目录中右键菜单试试吧</p>
            <ExampleContainer
                otherDependencies={otherDependencies}
                code={code}
                hasCodeSandBox
                functionCode={functionCode}
            >
                <div style={{ position: 'relative' }}>
                    <Tree defaultExpandAll>
                        <TreeNode key="0-0" title="folder" className="anchor-experiment-root">
                            <TreeNode
                                key="0-0-0"
                                title="file1"
                                className="anchor-experiment-file"
                            />
                            <TreeNode
                                key="0-0-1"
                                title="file2"
                                className="anchor-experiment-file"
                            />
                        </TreeNode>
                    </Tree>
                    {loopContextMenu()}
                </div>
            </ExampleContainer>
        </div>
    ),
    {
        info: {
            inline: true,
            TableComponent: () => PropsTable({ propDefinitions }),
            propTablesExclude: [ContextMenuItem, Tree, TreeNode],
            text: `
        代码示例：
        ~~~js
        function renderContextMenu (contextMenu: any) {
            if (!contextMenu.menuItems || !contextMenu.menuItems.length) {
                return null;
            }
            return <ContextMenu key={contextMenu.targetClassName} targetClassName={contextMenu.targetClassName}>
                {contextMenu.menuItems.map((menu: any) => {
                    return (<ContextMenuItem key={menu.text} onClick={() => {
                        menu.onClick();
                    }}>{menu.text}</ContextMenuItem>)
                })}
            </ContextMenu>
        }
        function loopContextMenu () {
            return contextMenus && contextMenus.map((contextMenu: any, index: any) => {
                return renderContextMenu(contextMenu);
            })
        }
        loopContextMenu()
        ~~~
      `,
        },
    }
);
