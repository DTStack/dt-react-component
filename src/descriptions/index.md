---
title: Descriptions 描述列表
group: 组件
toc: content
demo:
    cols: 1
---

# Descriptions 描述列表

## 何时使用

展示多个只读字段的组合。(支持设置 table-layout 为 fixed)

## 示例

<code src='./demos/basic.tsx' title="设置 tableLayout"></code>

### API

| 参数        | 说明 | 类型                | 默认值 |
| ----------- | ---- | ------------------- | ------ |
| tableLayout | -    | `'auto' \| 'fixed'` | 'auto' |

## FAQ

### 为什么要把 table-layout 设置为 fixed？

参考 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/table-layout#fixed) 中关于 `table-layout` 的相关描述可以看出，当我们的需求是用 `Descriptions` 组件用固定比例展示字段信息的时候，相比 `auto` 的属性，更好地是 `fixed` 属性
