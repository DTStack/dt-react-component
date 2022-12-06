---
title: MarkdownRender markdown 渲染
group: 组件
toc: content
demo:
    cols: 2
---

# MarkdownRender markdown 渲染

## 何时使用

路由未匹配上的展示页

## 示例

```jsx
import React from 'react';
import { MarkdownRender } from 'dt-react-component';

export default () => {
    const md = `# Test
+ 我是测试数据
+ 我是测试数据
### hello markdownRender`;
    return <MarkdownRender text={md} dark={false} />;
};
```

## API

| 参数 | 说明              | 类型      | 默认值 |
| ---- | ----------------- | --------- | ------ |
| text | markdown 文本数据 | `string`  | -      |
| dark | 主题设置          | `boolean` | -      |
