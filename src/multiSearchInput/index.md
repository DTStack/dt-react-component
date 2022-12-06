---
title: MultiSearchInput 多功能 Input
group: 组件
toc: content
demo:
    cols: 2
---

# MultiSearchInput 多功能 Input

## 何时使用

多功能 input （区分大小写匹配、精确匹配、头部匹配、尾部匹配）

## 示例

<code src="./demos/basic.tsx"></code>
<code src="./demos/basic.tsx"></code>

## API

| 参数          | 说明           | 类型                                        | 默认值                   |
| ------------- | -------------- | ------------------------------------------- | ------------------------ |
| searchType    | 筛选方式       | `'fuzzy' \| 'precise' \| 'front' \| 'tail'` | `'fuzzy'`                |
| filterOptions | 过滤筛选项数组 | `Array`                                     | `[precise, front, tail]` |
| onTypeChange  | 触发筛选函数   | `function`                                  | -                        |
