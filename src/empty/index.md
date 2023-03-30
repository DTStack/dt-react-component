---
title: Empty 空状态
group: 组件
toc: content
demo:
    cols: 2
---

# Empty 空状态

## 何时使用

-   当目前没有数据时，用于显式的用户提示。
-   初始化场景时的引导创建流程。
-   内置 6 种空状态类型。

## 示例

```jsx
/**
 * title: "使用内置状态"
 */
import React, { useState } from 'react';
import { Empty } from 'dt-react-component';
import { Radio, Space } from 'antd';

const options = [
    { label: 'default', value: 'default' },
    { label: 'project', value: 'project' },
    { label: 'chart', value: 'chart' },
    { label: 'search', value: 'search' },
    { label: 'permission', value: 'permission' },
    { label: 'overview', value: 'overview' },
];

const emptyMap = {
    default: { type: 'default' },
    project: { type: 'project', description: '空项目' },
    chart: { type: 'chart', description: '图表空数据' },
    search: { type: 'search', description: '搜索无数据' },
    permission: { type: 'permission', description: '无权限' },
    overview: { type: 'overview', description: '概览无数据' },
};

export default () => {
    const [emptyValue, setEmptyValue] = useState('default');
    return (
        <>
            <Space direction="vertical" style={{ width: '100%' }} size={16}>
                <Radio.Group
                    defaultValue="default"
                    optionType="button"
                    options={options}
                    onChange={(e) => setEmptyValue(e.target.value)}
                />
                <Empty
                    type={emptyMap[emptyValue].type}
                    description={emptyMap[emptyValue].description}
                />
            </Space>
        </>
    );
};
```

```jsx
/**
 * title: "使用自定义图片"
 */
import React from 'react';
import { Empty } from 'dt-react-component';
import { Divider } from 'antd';

export default () => {
    return (
        <Empty image="https://user-images.githubusercontent.com/38368040/195246598-5adf8985-3f78-48b1-8116-bc4d78982df8.jpeg" />
    );
};
```

```jsx
/**
 * title: "更多配置"
 */
import React from 'react';
import { Empty } from 'dt-react-component';
import { Divider } from 'antd';

export default () => {
    return (
        <>
            <Empty description="使用 height 定义图片大小" height={60} />
            <Empty
                height={60}
                imageStyle={{ height: 120 }}
                description="使用继承自antd的属性imageStyle"
            />
        </>
    );
};
```

## API

| 参数  | 说明                                       | 类型                                                                        | 默认值    |
| ----- | ------------------------------------------ | --------------------------------------------------------------------------- | --------- |
| type  | 默认展示图片的类型                         | `default` \| `project` \| `chart` \| `search` \| `permission` \| `overview` | `default` |
| image | 自定义图片(设置该参数时，默认的图片不生效) | `React.ReactNode`                                                           | -         |

:::info
其余属性[继承 antd4.x 的 Empty](https://ant.design/components/empty-cn/#API)
:::
