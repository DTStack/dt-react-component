---
title: useDebounce 防抖函数
group: Hooks
toc: content
---

# useDebounce

## 何时使用

用于接口请求防抖，函数防抖

## 示例

<code src="./demos/basic.tsx" title="基础使用"></code>

## API

`lodash.debounce` 的 `hooks` 形式，更多详见 [debounce](https://www.lodashjs.com/docs/lodash.debounce)

```ts
const debouncedFn = useDebounce(
  func: (...args: any[]) => any,
  wait?: number,
  options?: Options
);
```

### Params

| 参数    | 说明                 | 类型                      | 默认值 |
| ------- | -------------------- | ------------------------- | ------ |
| func    | 需要防抖执行的函数   | `(...args: any[]) => any` | -      |
| wait    | 等待时间，单位为毫秒 | `number`                  | 500    |
| options | 配置项               | `Options`                 | -      |

## Options

| 参数     | 说明                     | 类型      | 默认值  |
| -------- | ------------------------ | --------- | ------- |
| leading  | 是否在延迟开始前调用函数 | `boolean` | `false` |
| trailing | 是否在延迟开始后调用函数 | `boolean` | `true`  |
| maxWait  | 最大等待时间，单位为毫秒 | `number`  | -       |
