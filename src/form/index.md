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

<code src="./demos/check.tsx" title="配置可选择项" description="勾选禁用当前行的相关输入框" compact="true"></code>

<code src="./demos/rules.tsx" title="联动规则校验" description="只有性别为男性时，才需要填写地址" compact="true"></code>

<code src="./demos/footer.tsx" title="支持设置 footer" description="下拉框联动禁用" compact="true"></code>

## FAQ

### 如何设置 title 上的必选标识？

通过显式声明 `required` 或自动探测 `rules` 中是否存在 `required` 为 `true` 的项

## API

### Form.Table

| 参数           | 说明                                   | 类型 | 默认值 |
| -------------- | -------------------------------------- | ---- | ------ |
| name           | 继承自 `Form.Item`                     | -    | -      |
| rules          | 继承自 `Form.Item`                     | -    | -      |
| initialValue   | 继承自 `Form.Item`                     | -    | -      |
| columns        | 表格列<a href="#columntype">配置项</a> | -    | -      |
| tableClassName | 继承自 `Table` 的 `className`          | -    | -      |

其余属性均即成自 `Table` 组件，参考 <a href="https://4x.ant.design/components/table-cn/#Table" target="_blank">Table API</a>

### ColumnType

继承全部 `Form.Item` 以及 `ColumnType` 类型, 以下类型有所不同

| 参数         | 说明                                                                      | 类型                                                                                                                             | 默认值 |
| ------------ | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------ |
| dependencies | 支持回调函数形式获取当前字段名，详见<a href="#form-demo-related">Demo</a> | -                                                                                                                                | -      |
| rules        | 支持回调函数形式获取当前字段名，详见<a href="#form-demo-rules">Demo</a>   | -                                                                                                                                | -      |
| titleTooltip | 表格`title`上的`tooltip`                                                  | `ReactNode` \| <a href="https://4x.ant.design/components/tooltip-cn/#API" target="_blank">TooltipProps & { icon: ReactNode }</a> | -      |
| render       | 生成复杂数据的渲染函数，详见<a href="#form-demo-related">Demo</a>         | `(record, namePath, form) => React.ReactNode`                                                                                    | -      |
