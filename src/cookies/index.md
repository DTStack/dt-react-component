---
title: useCookieListener 监听 Cookie 变更
group: 组件
toc: content
demo:
    cols: 1
---

# useCookieListener 监听 Cookie 变更

## 何时使用

-   监听某个 Cookie 值变更，变更后进行操作，如 token 变更进行登出
-   在多个 tab 页下 Cookie 值变更，各 tab 页都需要及时同步时使用
-   需要将该 hook 用于顶层组件中，如 Routes

## 示例

<code src='./demos/basic.tsx' title='基本使用' iframe="true" description="当监听的Cookie字段为[]时，则Cookie有变化时就会触发，即监听整个Cookie的变化"></code>
<code src='./demos/advanced.tsx' title='高级配置' iframe="true" description="通过immediately来配置是否Cookie字段新增时会触发变化，如有特殊要求，还可通过intervalTime来配置轮训比较的时间间隔"></code>

## API

```tsx | pure
useCookieListener(
    handler: (params: {prevCookies: string, nextCookies: string, changedFields?: Fields[]}) => void,
    watchFields: string[],
    options?: ICookieOptions
)

```

### Params

| 参数        | 说明                    | 类型                                                                                     | 默认值 |
| ----------- | ----------------------- | ---------------------------------------------------------------------------------------- | ------ |
| handler     | Cookie 变化时的处理函数 | `(params: {prevCookies: string, nextCookies: string, changedFields?: Fields[]}) => void` | -      |
| watchFields | 监听的具体 Cookie 字段  | `stirng[]`                                                                               | -      |
| options     | 配置项                  | `CookieOptions`                                                                          | -      |

### CookieOptions

| 参数        | 说明                                                | 类型      | 默认值  |
| ----------- | --------------------------------------------------- | --------- | ------- |
| immediately | Cookie 字段为新增字段时否会触发 handler，默认不触发 | `boolean` | `false` |
| timeout     | 监听轮训间隔时间，单位：毫秒                        | `number`  | `200`   |

### Fields

| 参数  | 说明      | 类型     | 默认值 |
| ----- | --------- | -------- | ------ |
| key   | Cookie 键 | `string` | -      |
| value | Cookie 值 | `string` | -      |
