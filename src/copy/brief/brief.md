# Copy

## 干什么

点击复制区域，将 `text` 写入剪贴板；默认带 Tooltip；复制成功后走 `onCopy`（未传时弹出成功提示）。

## Props 语义

| Prop        | 说明                                                                      |
| ----------- | ------------------------------------------------------------------------- |
| `button`    | 自定义触发节点；默认 `CopyOutlined` 图标                                  |
| `className` | 透传到复制区域 `.dtc-copy`                                                |
| `disabled`  | `true` 时点击不复制、不调用 `onCopy`，并加上 `dtc-copy--disabled`         |
| `style`     | 透传到复制区域                                                            |
| `text`      | 要复制的字符串（必填）                                                    |
| `tooltip`   | Tooltip 配置：字符串或 `TooltipProps`；`false` / 其它假值时不展示浮层内容 |
| `onCopy`    | 复制成功回调，参数为 `text`；默认 `message.success(locale.copied)`        |

## 场景

### default-render

-   渲染可点击的 `.dtc-copy`
-   未传 `button` 时使用默认图标

### click-copy

-   `disabled` 为假时，点击调用 `CopyUtils.copy(text, …)`
-   复制成功后调用 `onCopy(text)`（含默认实现）

### disabled

-   `disabled=true` 时点击不调用 `CopyUtils.copy`、不调用 `onCopy`
-   区域带 `dtc-copy--disabled`

### custom-button

-   传入 `button` 时渲染该节点
-   点击自定义节点同样走复制逻辑

### tooltip-string

-   `tooltip` 为字符串时，Tooltip 展示该文案

### tooltip-object

-   `tooltip` 为对象时，按对象配置 Tooltip（如 `title`）

### tooltip-falsy

-   `tooltip` 为假值时不展示 Tooltip 浮层
