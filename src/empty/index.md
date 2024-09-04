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
-   用于三元表达式来判断展示 `<Empty />` 还是 `<OtherComponent />`。

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

const getEmpty = (type) => {
    switch (type) {
        case 'default':
            return <Empty type="default" />;
        case 'project':
            return <Empty type="project" description="空项目" />;
        case 'chart':
            return <Empty type="chart" description="图表空数据" />;
        case 'search':
            return <Empty type="search" description="搜索无数据" />;
        case 'permission':
            return <Empty type="permission" description="无权限" />;
        case 'overview':
            return <Empty type="overview" description="description" />;
        default:
            return null;
    }
};

export default () => {
    const [emptyType, setEmptyType] = useState('default');
    return (
        <>
            <Space direction="vertical" style={{ width: '100%' }} size={16}>
                <Radio.Group
                    defaultValue="default"
                    optionType="button"
                    options={options}
                    onChange={(e) => setEmptyType(e.target.value)}
                />
                {getEmpty(emptyType)}
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
 * title: "控制图片大小"
 */
import React from 'react';
import { Empty } from 'dt-react-component';
import { Divider } from 'antd';

export default () => {
    return (
        <>
            <Empty description="使用 size: default, 默认大小为 80" />
            <Empty size="large" description="使用 size: large, 默认大小为 100" />
            <Empty
                imageStyle={{ height: 160 }}
                description="使用 imageStyle, 设置其他高度以及属性"
            />
        </>
    );
};
```

```jsx
/**
 * title: "判断展示内容"
 */
import React, { useState } from 'react';
import { Space, Switch } from 'antd';
import { Empty } from 'dt-react-component';

export default () => {
    const [empty, setEmpty] = useState(false);

    return (
        <Space direction="vertical" style={{ width: '100%' }} size={16}>
            <Switch
                onChange={(checked) => setEmpty(checked)}
                checkedChildren="展示占位符"
                unCheckedChildren="展示内容"
            />
            <Empty showEmpty={empty}>More Data</Empty>
        </Space>
    );
};
```

```jsx
/**
 * title: "展示 antd Empty 组件的 children"
 */
import React, { useState } from 'react';
import { Button, Space, Switch } from 'antd';
import { Empty } from 'dt-react-component';

export default () => {
    const [empty, setEmpty] = useState(false);

    return (
        <Space direction="vertical" style={{ width: '100%' }} size={16}>
            <Switch
                onChange={(checked) => setEmpty(checked)}
                checkedChildren="展示占位符"
                unCheckedChildren="展示内容"
            />
            <Empty showEmpty={empty} extra={<Button>添加</Button>}>
                More Data
            </Empty>
        </Space>
    );
};
```

## API

| 参数      | 说明                        | 类型                                                                        | 默认值    |
| --------- | --------------------------- | --------------------------------------------------------------------------- | --------- |
| type      | 默认展示图片的类型          | `default` \| `project` \| `chart` \| `search` \| `permission` \| `overview` | `default` |
| size      | 图片大小                    | `default` \| `large`                                                        | `default` |
| showEmpty | 是否展示 Empty 组件         | `boolean`                                                                   | `true`    |
| children  | 展示内容                    | `React.ReactNode`                                                           | -         |
| extra     | 替换 antd Empty 的 children | ` React.ReactNode`                                                          | -         |

:::info
其余属性[继承 antd4.x 的 Empty](https://ant.design/components/empty-cn/#API)
:::
