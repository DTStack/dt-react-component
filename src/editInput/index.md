---
title: EditInput 输入框
group: 组件
toc: content
demo:
    cols: 2
---

# EditInput 输入框

## 何时使用

当需要对 input 框的输入长度做校验时使用，超出长度的时候会有 message 提示，而不是在输入框下提示

## 示例

```jsx
import React from 'react';
import { EditInput } from 'dt-react-component';

export default () => {
    return <EditInput max={20} value="dt-react-component" />;
};
```

## API

| 参数     | 说明                     | 类型               | 默认值 |
| -------- | ------------------------ | ------------------ | ------ |
| value    | input 框初始值           | `string \| number` | -      |
| onChange | 输入框聚焦 blur 时的回调 | `Function`         | -      |
| max      | 输入字符串的最大长度     | `number`           | -      |
