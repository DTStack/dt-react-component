---
title: ChromeDownload 下载页
group: 组件
toc: content
---

# ChromeDownload 下载页

## 何时使用

引导用户使用 Chrome 浏览器

## 示例

```jsx
import React from 'react';
import { ChromeDownload } from 'dt-react-component';

export default () => {
    return (
        <ChromeDownload
            downloadChrome={(os: 'macChrome' | 'windowsChrome') => {
                window.open(chromeAddRes[os], '_blank');
            }}
        />
    );
};
```

```jsx
/**
 * title: "通过downloadChrome改变下载地址"
 */
import React from 'react';
import { ChromeDownload } from 'dt-react-component';

export default () => {
    return (
        <ChromeDownload
            downloadChrome={(os: 'macChrome' | 'windowsChrome') => {
                window.open(downloadChrome[os], '_blank');
            }}
        />
    );
};
```

## API

| 参数           | 说明            | 类型                                                                     | 默认值 |
| -------------- | --------------- | ------------------------------------------------------------------------ | ------ |
| downloadChrome | chrome 下载地址 | `(chromeOfOsType?: 'macChrome' \| 'windowsChrome' \| 'others') => void;` | -      |
| className      | -               | `string`                                                                 | -      |
| style          | -               | `React.CSSProperties`                                                    | -      |
