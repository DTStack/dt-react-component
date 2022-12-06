---
title: SwitchWindow 窗口切换事件监听
group: 组件
toc: content
demo:
    cols: 2
---

# SwitchWindow 窗口切换事件监听

## 何时使用

窗口切换事件监听

## 示例

```jsx
/**
 * title: "基础使用"
 */
import React, { useState } from 'react';
import { SwitchWindow } from 'dt-react-component';

export default () => {
    const [msg, setMsg] = useState('hello world');

    return (
        <>
            <SwitchWindow
                onSwitch={() => {
                    setMsg('window listener');
                    console.log('window listener');
                }}
            >
                <div
                    id="box"
                    style={{
                        height: '100%',
                        width: '100%',
                    }}
                >
                    {msg}
                </div>
            </SwitchWindow>
        </>
    );
};
```

## API

| 参数     | 说明     | 类型       | 默认值 |
| -------- | -------- | ---------- | ------ |
| onSwitch | 切换函数 | `Function` | -      |
