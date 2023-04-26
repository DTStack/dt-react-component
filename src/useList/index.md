---
title: useList
group: Hooks
toc: content
---

# useList

## 何时使用

请求表格数据

## 示例

<code src="./demos/basic.tsx" title="基础使用"></code>
<code src="./demos/sort.tsx" title="筛选和过滤"></code>
<code src="./demos/options.tsx" title="相关配置" description="设置 immediate 值防止初始化的时候进行请求"></code>

## API

### Props

| 参数          | 说明         | 类型                                             | 默认值 |
| ------------- | ------------ | ------------------------------------------------ | ------ |
| fetcher       | 获取数据请求 | `(params) => Promise<{ data:T, total: number }>` | -      |
| initialParams | 初始化数据   | `Record<string, any>`                            | -      |
| options       | 配置项       | `Options`                                        | -      |

### Returns

| 参数    | 说明                     | 类型                                           | 默认值  |
| ------- | ------------------------ | ---------------------------------------------- | ------- |
| loading | 加载中状态               | `boolean`                                      | `false` |
| params  | 请求参数和表格总数       | `Record<string, any> & { total: number}`       | -       |
| error   | 错误信息                 | `Error`                                        | -       |
| data    | 表格数据                 | `T[]`                                          | -       |
| mutate  | 修改 Params 的值         | `(nextParams, options: MutateOptions) => void` | -       |
| clear   | 清空状态，包括数据和参数 | `() => void`                                   | -       |

## Options

| 参数      | 说明                     | 类型      | 默认值 |
| --------- | ------------------------ | --------- | ------ |
| immediate | 初始化的时候是否获取数据 | `boolean` | `true` |

### MutateOptions

| 参数       | 说明                   | 类型      | 默认值 |
| ---------- | ---------------------- | --------- | ------ |
| revalidate | 修改后是否重新请求数据 | `boolean` | `true` |
