---
title: ContentLayout 内容布局
group: 组件
toc: content
demo:
    cols: 1
---

# ContentLayout 内容布局

## 何时使用

带有搜索和 Table 列表

## 示例

<code src='./demos/basic.tsx' title="ContentLayout 使用"></code>

### ContentLayout.component

| 名字                 | 说明       | 类型                 |
| -------------------- | ---------- | -------------------- |
| ContentLayout        | 组件       | `React.ReactElement` |
| ContentLayout.Header | 头部组件   | `React.ReactElement` |
| ContentLayout.Table  | Table 组件 | `React.ReactElement` |

### ContentLayout API

| 参数     | 说明                                      | 类型                                           | 默值 |
| -------- | ----------------------------------------- | ---------------------------------------------- | ---- |
| height   | 组件高度(内部的 Table 会根据高度自动计算) | `string`                                       |      |
| style    | 样式                                      | `React.CSSProperties`                          |      |
| children | 子元素                                    | `React.ReactElement   \| React.ReactElement[]` |      |

### ContentLayout.Header API

| 参数     | 说明   | 类型                        | 默值 |
| -------- | ------ | --------------------------- | ---- |
| ref      |        | `React.Ref<HTMLDivElement>` |      |
| style    | 样式   | `React.CSSProperties`       |      |
| children | 子元素 | `React.ReactNode`           |      |

### ContentLayout.Table API

:::info
其余参数继承 antd4.x 的 [Table](https://4x.ant.design/components/table-cn/#API)
:::
