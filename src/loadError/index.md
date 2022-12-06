---
title: LoadError 组件

group: 组件
toc: content
demo:
    cols: 2
---

# LoadError 组件

## 何时使用

当发生错误时，错误会被 componentDidCatch 捕获，避免页面崩溃降低用户体验，在这时可以渲染这个组件

## 示例

```jsx
import React from 'react';
import { LoadError } from 'dt-react-component';

export default () => {
    return <LoadError />;
};
```
