---
title: Cookies 监听 Cookie 变更
group: 组件
toc: content
demo:
    cols: 2
---

# Cookies 监听 Cookie 变更

## 何时使用

监听页面 Cookie 信息变更

## 示例

```jsx
import React from 'react';
import { Cookies } from 'dt-react-component';

export default () => {
    return (
        <>
            <p>监听页面 Cookie 信息变更</p>
            <Cookies
                // 当页面cookie如下字段的值发生变更时会触发页面刷新
                watchFields={['dt_token', 'dt_tenant_id', 'dt_user_id', 'project_id']}
                onFieldsChanged={() => {
                    console.log('hasChanged');
                }}
            />
        </>
    );
};
```

## API

### CookiesProps

| 参数            | 说明                                               | 类型                          | 默认值 |
| --------------- | -------------------------------------------------- | ----------------------------- | ------ |
| watchFields     | 监听的一组 cookie                                  | `string[]`                    | -      |
| onFieldsChanged | cookies 变更触发函数，fields 为当前 cookies 变更值 | `(fields: Fields[]) => void;` | -      |

### Fields

| 参数  | 说明 | 类型     | 默认值 |
| ----- | ---- | -------- | ------ |
| key   | -    | `string` | -      |
| value | -    | `string` | -      |
