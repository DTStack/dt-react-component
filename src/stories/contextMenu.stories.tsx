import * as React from 'react';
import { Tree } from 'antd';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { PropsTable } from './components/propsTable';
import { ContextMenu, ContextMenuItem } from '../components/context-menu'
const { TreeNode } = Tree;
const stories = storiesOf('ContextMenu 右键菜单', module);
stories.addDecorator(withKnobs)

const propDefinitions = [{
    property: 'targetClassName',
    propType: 'string',
    required: false,
    description: '节点类名，找寻父节点',
    defaultValue: ''
}, {
    property: 'operations',
    propType: 'Array',
    required: false,
    description: '传入的右键菜单内容，',
    defaultValue: ''
}, {
    property: 'id',
    propType: 'string || number',
    required: false,
    description: '循环用于拼装每个li的key',
    defaultValue: ''
}]
const contextMenus = [
    {
        targetClassName: 'anchor-experiment-root',
        menuItems: [{
            text: '新建实验',
            onClick: (activeNode: any) => {
                console.log('新建实验')
            }
        }, {
            text: '新建文件夹',
            onClick: (activeNode: any) => {
                console.log('新建文件夹')
            }
        }]
    },
    {
        targetClassName: 'anchor-experiment-file',
        menuItems: [{
            text: '编辑',
            onClick: (activeNode: any) => {
                this.setState({
                    editOrCloneData: activeNode,
                    editType: 'edit',
                    editOrCloneModalVisible: true
                })
            }
        }, {
            text: '移动',
            onClick: (activeNode: any) => {
                this.setState({
                    moveData: {
                        nodePid: activeNode.parentId,
                        name: activeNode.name,
                        id: activeNode.id,
                        isFile: true
                    },
                    moveModalVisible: true
                });
            }
        }]
    }
];
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
stories.add('contextMenu', () => (
    <div className='story_wrapper'>
        <h2>何时使用</h2>
        <p>任务栏右键菜单操作</p>
        <h2>示例</h2>
        <p>在树文件中右键菜单试试吧</p>
        <div style={{ position: 'relative' }}>
            <Tree defaultExpandAll>
                <TreeNode key='0-0' title='folder' className='anchor-experiment-root'>
                    <TreeNode key="0-0-0" title='file1' className='anchor-experiment-file' />
                    <TreeNode key="0-0-1" title='file2' className='anchor-experiment-file' />
                </TreeNode>
            </Tree>
            {loopContextMenu()}
        </div>
    </div>
), {
    info: {
        inline: true,
        TableComponent: () => PropsTable({ propDefinitions }),
        propTablesExclude: [ContextMenuItem, Tree],
        text: `
        代码示例：
        ~~~js
        ~~~
      `
    }
})
