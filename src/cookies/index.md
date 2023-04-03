---
title: Cookies 监听 Cookie 变更
group: 组件
toc: content
demo:
    cols: 2
---

# Cookies 监听 Cookie 变更

## 何时使用

监听页面 Cookie 信息变更, 如监听到 token 变更时，进行登出或刷新操作

## 示例

```jsx
import React, { useEffect } from 'react';
import { Cookies } from 'dt-react-component';
import { Button, message } from 'antd';

export default () => {
    return (
        <>
            <p>
                <Button onClick={() => (document.cookie = `dt_token=im_new_token_${Date.now()};`)}>
                    修改Cookie值
                </Button>
            </p>
            <p>监听页面 Cookie 信息变更</p>
            <Cookies
                // 当页面cookie如下字段的值发生变更时会触发页面刷新
                watchFields={['dt_token', 'dt_tenant_id', 'dt_user_id', 'project_id']}
                onFieldsChanged={(fields) => {
                    console.log('cokkie fields hasChanged', fields);
                    if (fields.length) {
                        message.info(
                            '监听到以下Cookie值变更：' +
                                fields.map((field) => `${field.key} : ${field.value}`).join(',')
                        );
                    }
                }}
                onChanged={(oldCookie, newCookie) => {
                    console.log(`原Cookie '${oldCookie}' 变更为 '${newCookie}'`);
                }}
            />
        </>
    );
};
```

## API

### CookiesProps

| 参数            | 说明                                                                                   | 类型                                              | 默认值 |
| --------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------- | ------ |
| watchFields     | 监听的一组 cookie                                                                      | `string[]`                                        | -      |
| intervalTime    | 监听间隔                                                                               | `number`                                          | `200`  |
| onFieldsChanged | cookies 变更触发函数，fields 为当前 cookies 变更值                                     | `(fields: Fields[]) => void;`                     | -      |
| onChanged       | cookies 变更触发函数，oldCookie 为变更前的完整 Cookie, newCookie 为变更后的完整 Cookie | `(oldCookie: string, newCookie: string) => void;` | -      |

### Fields

| 参数  | 说明 | 类型     | 默认值 |
| ----- | ---- | -------- | ------ |
| key   | -    | `string` | -      |
| value | -    | `string` | -      |
