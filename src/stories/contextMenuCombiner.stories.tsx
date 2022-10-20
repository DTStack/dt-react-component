import React from 'react';
import { Tree } from 'antd';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { PropsTable } from './components/propsTable';
import ContextMenuCombiner from '../components/contextMenuCombiner';
import ExampleContainer from './components/exampleCode';

const { TreeNode } = Tree;
const stories = storiesOf('ContextMenuCombiner 右键菜单', module);
stories.addDecorator(withKnobs);

const propDefinitions = [
    {
        property: 'ctxMenuWrapperClsName',
        propType: 'string',
        required: true,
        description: '节点类名，找寻父节点',
        defaultValue: '',
    },
    {
        property: 'operations',
        propType: 'array',
        required: true,
        description: '菜单项配置',
        defaultValue: '',
    },
];

const operations = (text) => [
    {
        txt: '新增',
        cb: () => {
            alert(`新增节点${text}`);
        },
    },
    {
        txt: '编辑',
        cb: () => {
            alert(`编辑节点${text}`);
        },
    },
];

const renderTitle = (text) => (
    <ContextMenuCombiner
        operations={operations(text)}
        ctxMenuWrapperClsName="tree-wrapper"
        id={text}
    >
        <span>{text}</span>
    </ContextMenuCombiner>
);

const otherDependencies = `import { ContextMenuCombiner } from 'dt-react-component';
import { Tree } from 'antd';`;
const code = `<div style={{ position: 'relative' }}>
                <Tree defaultExpandAll className='tree-wrapper'>
                    <Tree.TreeNode key='0-0' style={{ position: 'relative' }} title={this.renderTitle('0-0')}>
                        <Tree.TreeNode key="0-0-0" style={{ position: 'relative' }} title={this.renderTitle('0-0-0')}/>
                        <Tree.TreeNode key="0-0-1" style={{ position: 'relative' }} title={this.renderTitle('0-0-1')}/>
                    </Tree.TreeNode>
                </Tree>
            </div>`;

const functionCode = `
    operations = (text) => [
        {
            txt: '新增',
            cb: () => { alert(\`新增节点\${text}\`) }
        },
        {
            txt: '编辑',
            cb: () => { alert(\`编辑节点\${text}\`) }
        }
    ];

    renderTitle = text => (
        <ContextMenuCombiner operations={this.operations(text)} ctxMenuWrapperClsName='tree-wrapper' id={text}>
            <span>{text}</span>
        </ContextMenuCombiner>
    )
`;

stories.add(
    'ContextMenuCombiner',
    () => (
        <div className="story_wrapper">
            <h2>何时使用</h2>
            <p>任务栏右键菜单操作</p>
            <h2>注意</h2>
            <p>此组件右击事件生效范围为离此组件最近的定位元素</p>
            <p>因此在使用此组件时，需要将它的父级定位属性设置为 position: relative</p>
            <p>这是为了实现在目录树类似场景下整行右击都可以呼出菜单的效果</p>
            <h2>示例</h2>
            <p>在树目录中右键菜单试试吧</p>
            <ExampleContainer
                otherDependencies={otherDependencies}
                code={code}
                hasCodeSandBox={true}
                functionCode={functionCode}
            >
                <div style={{ position: 'relative' }}>
                    <Tree defaultExpandAll className="tree-wrapper">
                        <TreeNode
                            key="0-0"
                            style={{ position: 'relative' }}
                            title={renderTitle('0-0')}
                        >
                            <TreeNode
                                key="0-0-0"
                                style={{ position: 'relative' }}
                                title={renderTitle('0-0-0')}
                            />
                            <TreeNode
                                key="0-0-1"
                                style={{ position: 'relative' }}
                                title={renderTitle('0-0-1')}
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
            propTablesExclude: [Tree, TreeNode],
            text: `
        代码示例：
        ~~~js
        operations = (text) => [
            {
                txt: '新增',
                cb: () => { alert(\`新增节点\${text}\`) }
            },
            {
                txt: '编辑',
                cb: () => { alert(\`编辑节点\${text}\`) }
            }
        ];
    
        renderTitle = text => (
            <ContextMenuCombiner operations={this.operations(text)} ctxMenuWrapperClsName='tree-wrapper' id={text}>
                <span>{text}</span>
            </ContextMenuCombiner>
        )

        render () {
            return (
                <div style={{ position: 'relative' }}>
                    <Tree defaultExpandAll className='tree-wrapper'>
                        <Tree.TreeNode key='0-0' style={{ position: 'relative' }} title={this.renderTitle('0-0')}>
                            <Tree.TreeNode key="0-0-0" style={{ position: 'relative' }} title={this.renderTitle('0-0-0')}/>
                            <Tree.TreeNode key="0-0-1" style={{ position: 'relative' }} title={this.renderTitle('0-0-1')}/>
                        </Tree.TreeNode>
                    </Tree>
                </div>
            )
        }
        ~~~
      `,
        },
    }
);
