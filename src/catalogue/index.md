---
title: Catalogue 目录
group: 组件
toc: content
demo:
    cols: 2
---

# Catalogue 目录

## 何时使用

目录树

## 示例

```jsx
import React from 'react';
import { Divider, Row, Col } from 'antd';

import {
    DefaultTree,
    NoHeaderTree,
    WithBtnSlotTree,
    WithTabsTree,
    SmallTree,
    WithCheckboxTree,
} from './demos/tree';
import { NormalTreeSelect } from './demos/treeSelect';

export default () => {
    return (
        <div style={{ background: '#eee', padding: 20 }}>
            <h1>DefaultTree</h1>
            <div style={{ display: 'flex' }}>
                <DefaultTree />
                <p
                    style={{
                        marginLeft: 12,
                        marginBottom: 0,
                        padding: 10,
                        flex: 1,
                        background: '#fff',
                    }}
                >
                    Content
                </p>
            </div>
            <Divider />

            <h1>SmallTree</h1>
            <div style={{ display: 'flex' }}>
                <SmallTree />
                <p
                    style={{
                        marginLeft: 12,
                        marginBottom: 0,
                        padding: 10,
                        flex: 1,
                        background: '#fff',
                    }}
                >
                    Content
                </p>
            </div>
            <Divider />

            <h1>NoHeaderTree - 无 Header 的 CatalogueTree 组件</h1>
            <div style={{ display: 'flex' }}>
                <NoHeaderTree />
                <p
                    style={{
                        marginLeft: 12,
                        marginBottom: 0,
                        padding: 10,
                        flex: 1,
                        background: '#fff',
                    }}
                >
                    Content
                </p>
            </div>
            <Divider />

            <h1>WithBtnSlotTree</h1>
            <div style={{ display: 'flex' }}>
                <WithBtnSlotTree />
                <p
                    style={{
                        marginLeft: 12,
                        marginBottom: 0,
                        padding: 10,
                        flex: 1,
                        background: '#fff',
                    }}
                >
                    Content
                </p>
            </div>
            <Divider />

            <h1>WithTabsTree</h1>
            <div style={{ display: 'flex' }}>
                <WithTabsTree />
                <p
                    style={{
                        marginLeft: 12,
                        marginBottom: 0,
                        padding: 10,
                        flex: 1,
                        background: '#fff',
                    }}
                >
                    Content
                </p>
            </div>
            <Divider />

            <h1>WithCheckboxTree</h1>
            <div style={{ display: 'flex' }}>
                <WithCheckboxTree />
                <p
                    style={{
                        marginLeft: 12,
                        marginBottom: 0,
                        padding: 10,
                        flex: 1,
                        background: '#fff',
                    }}
                >
                    Content
                </p>
            </div>
            <Divider />

            <h1>NormalTreeSelect</h1>
            <div style={{ display: 'flex' }}>
                <NormalTreeSelect />
                <p
                    style={{
                        marginLeft: 12,
                        marginBottom: 0,
                        padding: 10,
                        flex: 1,
                        background: '#fff',
                    }}
                >
                    Content
                </p>
            </div>
            <Divider />
        </div>
    );
};
```

## API

### Catalog.Tree

| 参数             | 说明                                                                                   | 类型                                  | 默认值   |
| ---------------- | -------------------------------------------------------------------------------------- | ------------------------------------- | -------- |
| loading          | 是否加载中                                                                             | `boolean`                             | `false`  |
| showHeader       | 是否展示头部组件                                                                       | `boolean`                             | `true`   |
| treeTit          | 头部文案                                                                               | `React.ReactNode`                     | -        |
| wrapperClassName | 容器类名                                                                               | `string`                              | -        |
| wrapperStyle     | 容器行内样式                                                                           | `React.CSSProperties`                 | -        |
| size             | 尺寸大小，small 每一个 item 高度是 24px，middle 每一个 item 高度是 36px，默认为 middle | `small \| middle`                     | `middle` |
| onSearch         | 点击搜索按钮回调                                                                       | `(value: string, e) => void`          | -        |
| tabsProps        | tabs 配置                                                                              | `TabsProps & { items: ITabsItem[]; }` | -        |
| treeData         | `数据源，与 TreeProps['treeData'] 类型相似，只是增加了 ContextMenu 配置`               | `ISuperTreeDataItem[]`                | -        |

其余属性均继承自 `Tree` 组件，参考 <a href="https://4x.ant.design/components/tree-cn/#API" target="_blank">Tree API</a>

### Catalog.TreeSelect

即 `TreeSelect` 组件，参考 <a href="https://4x.ant.design/components/tree-select-cn/#API" target="_blank">TreeSelect API</a>

<br>
<br>
<br>

:::info
其余属性参考 Ant Design 的 Tree、TreeSelect 组件
:::
