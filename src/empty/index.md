---
title: Empty 空状态
group: 组件
toc: content
demo:
    cols: 2
---

# Empty 空状态

## 何时使用

当目前没有数据时，用于显式的用户提示。初始化场景时的引导创建流程

## 示例

```jsx
/**
 * title="使用默认空状态"
 */
import React from 'react';
import { Empty } from 'dt-react-component';

export default () => {
    return <Empty />;
};
```

```jsx
/**
 * title="使用别的空状态"
 */
import React from 'react';
import { Empty } from 'dt-react-component';
import { Divider } from 'antd';

export default () => {
    return (
        <>
            <Empty type="project" description="空项目" />
            <Divider />
            <Empty type="chart" description="图表空数据" />
            <Divider />
            <Empty type="search" description="搜索无数据" />
            <Divider />
            <Empty type="permission" description="无权限" />
            <Divider />
            <Empty type="overview" description="概览无数据" />
        </>
    );
};
```

```jsx
/**
 * title="使用自定义图片"
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
 * title="更多配置"
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
                description="imageStyle 和 height 共同设置"
            />
        </>
    );
};
```

## API

| 参数   | 说明                                       | 类型              | 默认值    |
| ------ | ------------------------------------------ | ----------------- | --------- |
| type   | 默认展示图片的类型                         | `string`          | `default` |
| image  | 自定义图片(设置该参数时，默认的图片不生效) | `React.ReactNode` | -         |
| height | 图片大小(会被 imageStyle 中的 height 覆盖) | `number`          | `80`      |

:::info
其余属性[继承 antd4.x 的 Empty](https://ant.design/components/empty-cn/#API)
:::
