---
title: ContextMenu 右键菜单
group: 组件
toc: content
demo:
    cols: 2
---

# ContextMenu 右键菜单

## 何时使用

任务栏右键菜单操作

```jsx
import React from 'react';
import { Tree } from 'antd';
import { ContextMenu } from 'dt-react-component';

export default () => {
    return (
        <div style={{ position: 'relative' }}>
            <Tree defaultExpandAll>
                <Tree.TreeNode
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
                    <Tree.TreeNode
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
                    <Tree.TreeNode
                        key="0-0-1"
                        title={<ContextMenu data={[]}>file2</ContextMenu>}
                        className="anchor-experiment-file"
                    />
                </Tree.TreeNode>
            </Tree>
        </div>
    );
};
```

## API

| 参数             | 说明                | 类型           | 默认值 |
| ---------------- | ------------------- | -------------- | ------ |
| data             | 菜单项配置          | `IMenuProps[]` | -      |
| wrapperClassName | 外层组件的 class 名 | `string`       | -      |

:::info
其余属性参考 ant-design 的 Dropdown 组件
:::
