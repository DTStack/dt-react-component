---
title: StatusTag 状态标签
group: 组件
toc: content
demo:
    cols: 2
---

# StatusTag 状态标签

## 何时使用

StatusTag 组件作用于任务运行状态效果展示

## 示例

```jsx
/**
 * title: "基础使用"
 */
import React from 'react';
import { StatusTag } from 'dt-react-component';

export default () => {
    return (
        <>
            <StatusTag type="run">运行中</StatusTag>
            <StatusTag type="success">成功</StatusTag>
            <StatusTag type="stopped">取消</StatusTag>
            <StatusTag type="error">运行失败</StatusTag>
            <StatusTag type="warning">提交中</StatusTag>
        </>
    );
};
```

```jsx
/**
 * title: "取消外边框"
 */
import React from 'react';
import { StatusTag } from 'dt-react-component';

export default () => {
    return (
        <>
            <StatusTag type="run" showBorder={false}>
                运行中
            </StatusTag>
            <StatusTag type="error" showBorder={false}>
                运行失败
            </StatusTag>
            <StatusTag type="success" showBorder={false}>
                成功
            </StatusTag>
            <StatusTag type="stopped" showBorder={false}>
                取消
            </StatusTag>
            <StatusTag type="warning" showBorder={false}>
                等待提交
            </StatusTag>
        </>
    );
};
```

```jsx
/**
 * title: "自定义颜色"
 */
import React from 'react';
import { StatusTag } from 'dt-react-component';

export default () => {
    return (
        <>
            <StatusTag type="run" color="#bc84a8">
                运行中
            </StatusTag>
            <StatusTag type="run" color="#2177b8" showBorder={false}>
                运行中
            </StatusTag>
        </>
    );
};
```

```jsx
/**
 * title: "圆点"
 */
import React from 'react';
import { StatusTag } from 'dt-react-component';

export default () => {
    return (
        <>
            <StatusTag type="run" showBorder={false} />
            <StatusTag color="#2177b8" showBorder={false} />
        </>
    );
};
```

## API

| 参数       | 说明                                                     | 类型                                                      | 默认值      |
| ---------- | -------------------------------------------------------- | --------------------------------------------------------- | ----------- |
| type       | 设置状态类型                                             | `'warning' \| 'error' \| 'success' \| 'run' \| 'stopped'` | `'success'` |
| showBorder | 是否展示外面的 border                                    | `boolean`                                                 | `true`      |
| color      | 自定义颜色(当 type 所支持的颜色不满足时可用，优先级更高) | `string`                                                  | -           |
| onClick    | 点击事件                                                 | `() => void`                                              | -           |
