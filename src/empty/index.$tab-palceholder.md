---
title: Empty.Placeholder 占位符
---

# Empty 空状态

## 何时使用

-   用于三元表达式来判断展示 `<Empty />` 还是 `<OtherComponent />`

## 示例

```jsx
/**
 * title: "判断展示内容"
 */
import React, { useState } from 'react';
import { Space, Switch } from 'antd';
import { Empty } from 'dt-react-component';

export default () => {
    const [show, setShow] = useState(false);

    return (
        <Space direction="vertical" style={{ width: '100%' }} size={16}>
            <Switch
                onChange={(checked) => setShow(checked)}
                checkedChildren="展示占位符"
                unCheckedChildren="展示内容"
            />
            <Empty.Placeholder show={show}>More Data</Empty.Placeholder>
        </Space>
    );
};
```

## API

| 参数     | 说明         | 类型              | 默认值 |
| -------- | ------------ | ----------------- | ------ |
| show     | 是否展示内容 | `boolean`         | `true` |
| children | 展示内容     | `React.ReactNode` | -      |

:::info
其余属性[继承 dt-react-component 的 Empty](https://dtstack.github.io/dt-react-component/components/empty#api)
:::
