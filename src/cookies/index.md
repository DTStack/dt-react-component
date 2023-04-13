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

<code src='./demos/basic.tsx' title='基本使用'></code>

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
