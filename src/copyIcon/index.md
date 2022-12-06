---
title: CopyIcon 复制文本
group: 组件
toc: content
demo:
    cols: 2
---

# CopyIcon 复制文本

## 何时使用

复制文本到粘贴版

## 示例

```jsx
/**
 * title: "点击按钮，复制文本。"
 */
import React from 'react';
import { CopyIcon } from 'dt-react-component';

const text =
    '基于 ant-design 的 React UI 组件库。 主要用于中，后台产品。我们的目标是满足更具体的业务场景组件。 当然，我们也有基于原生 javascript 实现的业务组件，例如ContextMenu，KeyEventListener等.';

export default () => {
    return (
        <>
            <CopyIcon text={text} />
            <p>{text}</p>
        </>
    );
};
```
