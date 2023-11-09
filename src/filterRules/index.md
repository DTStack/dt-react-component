---
title: FilterRules 且或组件
group: 组件
toc: content
demo:
    cols: 1
---

# FilterRules 且或组件

用于一些需要且或关系数据填入/展示

## 何时使用

适合使用在且或关系数据填入/展示

## 示例

<code src="./demos/basic.tsx" >受控方式使用</code>
<code src="./demos/basicUnController.tsx" >非受控方式使用</code>
<code src="./demos/basicCheck.tsx" >查看数据</code>

## API

### FilterRules

| 参数       | 说明                       | 类型                                             | 默认值                                 |
| ---------- | -------------------------- | ------------------------------------------------ | -------------------------------------- |
| value      | 数据                       | `IFilterValue<T>`                                | -                                      |
| disabled   | 编辑/查看状态              | `boolean`                                        | `false`                                |
| maxLevel   | 条件节点层级               | `number`                                         | 5                                      |
| component  | 条件节点后展示的组件       | `(props: IComponentProps<T>) => React.ReactNode` | -                                      |
| initValues | 新增的数据默认值           | `T`                                              | -                                      |
| notEmpty   | 删除时是否保留最后一行数据 | `{data:boolean;message?:string}`                 | `{data:true;message:"必须有一条数据"}` |
| onChange   | 数据改变的回调函数         | `(value: IFilterValue<T> \| undefined) => void`  | -                                      |

### IFilterValue

| 参数      | 说明                       | 类型                | 默认值 |
| --------- | -------------------------- | ------------------- | ------ |
| key       | 唯一标识                   | `string`            | -      |
| level     | 节点层级                   | `boolean`           | -      |
| type      | 条件节点类型               | `1｜2`              | -      |
| rowValues | 节点数据                   | `T`                 | -      |
| children  | 子节点(存在条件节点时存在) | `IFilterValue<T>[]` | -      |

### IComponentProps

| 参数      | 说明                       | 类型                               | 默认值 |
| --------- | -------------------------- | ---------------------------------- | ------ |
| key       | 唯一标识                   | `string`                           | -      |
| disabled  | 编辑/查看状态              | `boolean`                          | -      |
| name      | 字段名                     | `InternalNamePath`                 | -      |
| rowValues | 节点数据                   | `T`                                | -      |
| onChange  | 子节点(存在条件节点时存在) | `(key: string, values: T) => void` | -      |
