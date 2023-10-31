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

### Catalogue.Tree

```jsx
import React from 'react';
import { Divider, Row, Col } from 'antd';

import { DefaultTree } from './demos/tree/DefaultTree';

export default () => {
    return (
        <div style={{ background: '#eee', padding: 20 }}>
            <h1>DefaultTree</h1>
            <DefaultTree />
        </div>
    );
};
```

```jsx
import React from 'react';
import { Divider, Row, Col } from 'antd';

import { SmallTree } from './demos/tree/SmallTree';

export default () => {
    return (
        <div style={{ background: '#eee', padding: 20 }}>
            <h1>SmallTree</h1>
            <SmallTree />
        </div>
    );
};
```

```jsx
import React from 'react';
import { Divider, Row, Col } from 'antd';

import { NoHeaderTree } from './demos/tree/NoHeaderTree';

export default () => {
    return (
        <div style={{ background: '#eee', padding: 20 }}>
            <h1>NoHeaderTree - 无 Header 的 CatalogueTree 组件</h1>
            <NoHeaderTree />
        </div>
    );
};
```

```jsx
import React from 'react';
import { Divider, Row, Col } from 'antd';

import { WithBtnSlotTree } from './demos/tree/WithBtnSlotTree';

export default () => {
    return (
        <div style={{ background: '#eee', padding: 20 }}>
            <h1>WithBtnSlotTree</h1>
            <WithBtnSlotTree />
        </div>
    );
};
```

```jsx
import React from 'react';
import { Divider, Row, Col } from 'antd';

import { WithTabsTree } from './demos/tree/WithTabsTree';

export default () => {
    return (
        <div style={{ background: '#eee', padding: 20 }}>
            <h1>WithTabsTree</h1>
            <WithTabsTree />
        </div>
    );
};
```

```jsx
import React from 'react';
import { Divider, Row, Col } from 'antd';

import { WithCheckboxTree } from './demos/tree/WithCheckboxTree';

export default () => {
    return (
        <div style={{ background: '#eee', padding: 20 }}>
            <h1>WithCheckboxTree</h1>
            <WithCheckboxTree />
        </div>
    );
};
```

### Catalogue.TreeSelect

```jsx
import React from 'react';
import { Divider, Row, Col } from 'antd';

import { NormalTreeSelect } from './demos/treeSelect/NormalTreeSelect';

export default () => {
    return (
        <div style={{ background: '#eee', padding: 20 }}>
            <h1>NormalTreeSelect</h1>
            <NormalTreeSelect />
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
