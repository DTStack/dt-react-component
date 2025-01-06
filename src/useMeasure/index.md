---
title: useMeasure 获取元素尺寸
group: Hooks
toc: content
---

# useMeasure

## 何时使用

需要获取元素尺寸

## 示例

<code src="./demos/basic.tsx" title="基础使用"></code>

## API

### Params

| 参数     | 说明                 | 类型                    | 默认值 |
| -------- | -------------------- | ----------------------- | ------ |
| onTyping | 打字输入中的回调函数 | `(post:string) => void` | -      |

### Returns

| 参数     | 说明         | 类型                    | 默认值  |
| -------- | ------------ | ----------------------- | ------- |
| isTyping | 是否在打字中 | `boolean`               | `false` |
| start    | 开启打字     | `() => void`            | -       |
| push     | 输入文案     | `(post:string) => void` | -       |
| close    | 关闭打字     | `() => void`            | -       |
| stop     | 立即关闭打字 | `() => void`            | -       |
