---
title: Cookies 监听 Cookie 变更
group: 组件
toc: content
demo:
    cols: 2
---

# Cookies 监听 Cookie 变更

## 何时使用

-   监听某个 Cookie 值变更，变更后进行操作，如 token 变更进行登出
-   在多个 tab 页下 Cookie 值变更，各 tab 页都需要及时同步时使用

## 示例

```jsx
import React, { useEffect } from 'react';
import { Cookies } from 'dt-react-component';
import { Button, message } from 'antd';

export default () => {
    useEffect(() => {
        document.cookie = 'dt_token=im_old_token;';
    }, []);

    return (
        <>
            <p>
                <Button onClick={() => (document.cookie = `dt_token=im_new_token_${Date.now()};`)}>
                    修改Cookie值
                </Button>
            </p>
            <p>监听页面 Cookie 信息变更</p>
            <Cookies
                // 当页面cookie如下字段的值发生变更时触发onFieldsChanged事件
                watchFields={['dt_token', 'dt_tenant_id', 'dt_user_id', 'project_id']}
                onFieldsChanged={(fields) => {
                    console.log('cookie fields hasChanged', fields);
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
| intervalTime    | 监听间隔时间，单位：毫秒                                                               | `number`                                          | `200`  |
| onFieldsChanged | cookies 变更触发函数，fields 为当前 cookies 变更。注意：新增 Cookie 字段时不会触发     | `(fields: Fields[]) => void;`                     | -      |
| onChanged       | cookies 变更触发函数，oldCookie 为变更前的完整 Cookie, newCookie 为变更后的完整 Cookie | `(oldCookie: string, newCookie: string) => void;` | -      |

### Fields

| 参数  | 说明      | 类型     | 默认值 |
| ----- | --------- | -------- | ------ |
| key   | Cookie 键 | `string` | -      |
| value | Cookie 值 | `string` | -      |
