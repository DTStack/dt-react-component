---
title: Form 表单
group: 组件
toc: content
demo:
    cols: 2
---

# Form 表单

## 何时使用

用于创建一个实体或收集信息

## 示例

所用使用方式同 `Ant Design` 的 Form 组件，新增 `Form.Table` 组件

### Form.Table

<code src="./demos/basic.tsx" title="基础使用" compact="true"></code>

<code src="./demos/related.tsx" title="联动更新" description="如果性别是男性展示体重，否则不展示" compact="true"></code>

<code src="./demos/check.tsx" title="配置可选择项" description="取消勾选禁用当前行的相关输入框" compact="true"></code>

## API

### Form.Table

| 参数           | 说明                                               | 类型           | 默认值 |
| -------------- | -------------------------------------------------- | -------------- | ------ |
| loading        | 页面是否加载中                                     | `boolean`      | -      |
| columns        | 表格列的配置描述，<a href="#columntype">配置项</a> | `ColumnType[]` | -      |
| tableClassName | Table 的 className                                 | `string`       | -      |
| rowSelection   | 表格行是否可选择                                   | `RowSelection` | -      |

<details><summary>以下属性继承自 Form 组件</summary>

| 参数         | 说明                         | 类型       | 默认值 |
| ------------ | ---------------------------- | ---------- | ------ |
| name         | 字段名，支持数组             | `	NamePath` | -      |
| rules        | 校验规则，设置字段的校验逻辑 | `Rule[]`   | -      |
| initialValue | 设置 Table 组件的默认值      | `any[]`    | -      |

详见：<a href="https://4x.ant.design/components/form-cn/#Form.Item" target="_blank">配置项</a>

</details>

<details><summary>以下属性继承自 Table 组件</summary>

| 参数     | 说明                                       | 类型      | 默认值  |
| -------- | ------------------------------------------ | --------- | ------- |
| scroll   | 表格是否可滚动，也可以指定滚动区域的宽、高 | `object`  | -       |
| bordered | 是否展示外边框和列边框                     | `boolean` | `false` |

详见：<a href="https://4x.ant.design/components/table-cn/#Table" target="_blank">配置项</a>

</details>

### ColumnType

| 参数         | 说明                                                                                                         | 类型           | 默认值 |
| ------------ | ------------------------------------------------------------------------------------------------------------ | -------------- | ------ |
| rules        | 校验规则，设置字段的校验逻辑                                                                                 | `Rule[]`       | -      |
| dataIndex    | 列数据在数据项中对应的路径                                                                                   | `string`       | -      |
| required     | 是否必选，仅影响样式                                                                                         | `boolean`      | -      |
| dependencies | 表格行是否可选择                                                                                             | `RowSelection` | -      |
| render       | 生成复杂数据的渲染函数，参数分别为当前索引值，当前路径值，当前 Form 实例（仅当存在 dependencies 时才会支持） | `Function`     | -      |

除此之外，还继承以下来自 `Form.Item` 以及 `Table.Column` 的类型

| 参数            | 说明                  | 类型 | 默认值 |
| --------------- | --------------------- | ---- | ------ |
| validateTrigger | 继承自 `Form.Item`    | -    | -      |
| key             | 继承自 `Table.Column` | -    | -      |
| title           | 继承自 `Table.Column` | -    | -      |
| width           | 继承自 `Table.Column` | -    | -      |
| fixed           | 继承自 `Table.Column` | -    | -      |
| filters         | 继承自 `Table.Column` | -    | -      |
| onFilter        | 继承自 `Table.Column` | -    | -      |
