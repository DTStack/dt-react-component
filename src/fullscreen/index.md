---
title: Fullscreen 全屏
group: 组件
toc: content
demo:
    cols: 2
---

# Fullscreen 全屏

## 何时使用

全屏操作

## 示例

```jsx
import React from 'react';
import { Fullscreen } from 'dt-react-component';
import { Divider } from 'antd';

export default () => {
    const iconStyle = {
        width: 12,
        height: 12,
        marginRight: 5,
    };

    return (
        <>
            <p>白色主题</p>
            <Fullscreen iconStyle={iconStyle} />
            <Divider />
            <p>暗黑主题</p>
            <Fullscreen iconStyle={iconStyle} themeDark />
        </>
    );
};
```

## API

| 参数         | 说明                 | 类型              | 默认值  |
| ------------ | -------------------- | ----------------- | ------- |
| themeDark    | 是否使用暗黑主题模式 | `boolean`         | `false` |
| iconStyle    | 图标元素样式         | `CSSProperties`   | -       |
| customIcon   | 是否自定义图标       | `boolean`         | `false` |
| fullIcon     | 自定义全屏图标       | `React.ReactNode` | -       |
| exitFullIcon | 自定义退出全屏图标   | `React.ReactNode` | -       |
