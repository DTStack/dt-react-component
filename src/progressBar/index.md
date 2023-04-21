---
title: ProgressBar 网络请求进度条
group: 组件
toc: content
demo:
    cols: 2
---

# ProgressBar 网络请求进度条

## 何时使用

网络请求过程提示进度条

## 示例

```jsx
/**
 * iframe: "true"
 */
import React from 'react';
import { ProgressBar } from 'dt-react-component';
import { Button } from 'antd';

export default () => {
    return (
        <>
            <Button
                style={{ margin: '40px 10px 0 20px' }}
                type="primary"
                onClick={() => {
                    ProgressBar.show();
                }}
            >
                发起请求
            </Button>
            <Button
                onClick={() => {
                    ProgressBar.hide();
                }}
            >
                请求结束
            </Button>
        </>
    );
};
```

## API

| 参数 | 说明       | 类型       | 默认值 |
| ---- | ---------- | ---------- | ------ |
| show | 显示进度条 | `Function` | -      |
| hide | 隐藏进度条 | `Function` | -      |
