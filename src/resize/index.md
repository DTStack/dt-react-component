---
title: Resize Resize 事件监听
group: 组件
toc: content
demo:
    cols: 2
---

# Resize Resize 事件监听

## 何时使用

元素大小自适应调整，常用于图表

## 示例

```jsx
/**
 * title: "基础使用"
 * description: "请调整窗口大小以查看效果"
 */
import React, { useState } from 'react';
import { Resize } from 'dt-react-component';

export default () => {
    const [clientWidth, setWidth] = useState(0);

    return (
        <>
            <Resize
                onResize={() => {
                    const box = document.getElementById('box');
                    setWidth(box.clientWidth);
                }}
            >
                <div
                    id="box"
                    style={{
                        height: '240px',
                        width: '100%',
                        padding: '10px',
                        border: '1px solid rgba(0,0,0,.1)',
                    }}
                >
                    <pre>width: {clientWidth}</pre>
                </div>
            </Resize>
        </>
    );
};
```

## API

| 参数     | 说明               | 类型              | 默认值 |
| -------- | ------------------ | ----------------- | ------ |
| onResize | 重置元素大小的函数 | `Function`        | -      |
| children | 子元素             | `React.ReactNode` | -      |
