import * as React from 'react';
import { Button, Tree } from 'antd';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { withKnobs } from '@storybook/addon-knobs';
import { PropsTable } from './components/propsTable';
import CtxMenu from '../components/ctx-menu';

const { TreeNode } = Tree;
const stories = storiesOf('CtxMenu', module);
stories.addDecorator(withKnobs)

const propDefinitions = [{
    property: 'children',
    propType: 'ReactNode',
    required: false,
    description: '子节点',
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
const ctxMenuWrapperClsName: string = 'ctx-menu-wrapper';
stories.add('CtxMenu', () => (
    <div className='story_wrapper'>
        <section>右键菜单</section>
        <p>右键菜单</p>
        <div style={{ position: 'relative' }}>
            <Tree className={ctxMenuWrapperClsName} defaultExpandAll>
                <TreeNode key='0-0' title={
                    <CtxMenu
                        id={0}
                        key={0}
                        ctxMenuWrapperClsName={ctxMenuWrapperClsName}
                        operations={
                            [{
                                txt: '新建文件夹',
                                cb: action('move')
                            }, {
                                txt: '删除',
                                cb: action('del')
                            }]
                        }>
                        <span>右击我试试看~</span>
                    </CtxMenu>
                }>
                    <TreeNode key="0-0-0" title={
                        <CtxMenu
                            id={"0-0-0"}
                            key={"0-0-0"}
                            ctxMenuWrapperClsName={ctxMenuWrapperClsName}
                            operations={
                                [{
                                    txt: '移动',
                                    cb: action('move')
                                }, {
                                    txt: '删除',
                                    cb: action('del')
                                }]
                            }>
                            <span>test</span>
                        </CtxMenu>
                    } />
                    <TreeNode key="0-0-1" title={
                        <CtxMenu
                            id={"0-0-1"}
                            key={"0-0-1"}
                            ctxMenuWrapperClsName={ctxMenuWrapperClsName}
                            operations={
                                [{
                                    txt: '新建任务',
                                    cb: action('new')
                                }, {
                                    txt: '删除',
                                    cb: action('del')
                                }]
                            }>
                            <span>test_qy</span>
                        </CtxMenu>
                    } />
                </TreeNode>
            </Tree>
        </div>
    </div>
), {
    info: {
        inline: true,
        TableComponent: () => PropsTable({ propDefinitions }),
        propTablesExclude: [Button, Tree],
        text: `
        #### 使用示例
        ~~~js
        <CtxMenu
            operations={
                [{
                txt: '移动',
                cb: () => {
                    action('move')
                }
            }, {
                txt: '删除',
                cb: () => {
                    action('del')
                }
            }]
        }>
            <Button>右击我试试看</Button>
        </CtxMenu>
        ~~~
      `
    }
})
