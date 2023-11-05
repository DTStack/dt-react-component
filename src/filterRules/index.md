---
title: FilterRules 且或组件
group: 组件
toc: content
demo:
    cols: 2
---

# FilterRules 且或组件

用于一些需要且或关系数据填入/展示

## 何时使用

适合使用在且或关系数据填入/展示

## 示例

<code src="./demos/basic.tsx" >受控方式使用</code>

## API

### FilterRules

| 参数          | 说明                       | 类型                                            | 默认值  |
| ------------- | -------------------------- | ----------------------------------------------- | ------- |
| value         | 数据                       | `IFilterValue<T>`                               | -       |
| isEdit        | 编辑/查看状态              | `boolean`                                       | `true`  |
| maxLevel      | 条件节点层级               | `number`                                        | 5       |
| component     | 条件节点后展示的组件       | `JSX.Element`                                   | -       |
| initRowValues | 新增的数据默认值           | `T`                                             | `false` |
| notEmpty      | 删除时是否保留最后一行数据 | `boolean`                                       | `true`  |
| onChange      | 数据改变的回调函数         | `(value: IFilterValue<T> \| undefined) => void` | -       |

### IFilterValue

| 参数       | 说明                       | 类型                | 默认值 |
| ---------- | -------------------------- | ------------------- | ------ |
| key        | 唯一标识                   | `string`            | -      |
| level      | 节点层级                   | `boolean`           | -      |
| type       | 条件节点类型               | `number`            | -      |
| lineHeight | 节点的线条高度             | `number`            | -      |
| height     | 节点的高度                 | `number`            | -      |
| bottom     | 线条距离节点底部高度       | `number`            | -      |
| formValues | 数据改变的回调函数         | `T`                 | -      |
| children   | 子节点(存在条件节点时存在) | `IFilterValue<T>[]` | -      |
