---
title: useTyping 打字机输入
group: Hooks
toc: content
---

# useTyping

## 何时使用

需要打字机输入

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
