---
title: Catalogue 目录树
group: 组件
toc: content
demo:
    cols: 2
---

# Catalogue 目录树

用于展示目录树

## 何时使用

适合使用在需要展示目录树的地方

## 示例

<code src="./demos/basic.tsx">带有 Title 纯展示的目录树</code>
<code src="./demos/simple.tsx">无 Title 纯展示操作项的目录树</code>
<code src="./demos/operator.tsx">可操作的目录树</code>
<code src="./demos/drag.tsx">可拖拽的目录树</code>
<code src="./demos/config.tsx">配置操作项的目录树</code>
<code src="./demos/tabs.tsx">配置操作项的目录树</code>
<code src="./demos/async.tsx">异步加载数据</code>

## API

### Catalogue

| 参数        | 说明                           | 类型                                                          | 默认值         |
| ----------- | ------------------------------ | ------------------------------------------------------------- | -------------- |
| loading     | 目录树是否加载中               | `boolean`                                                     | `false`        |
| overlay     | 目录树的操作配置               | `(item: ITreeNode) => DropdownProps['overlay']`               | -              |
| treeData    | 目录树是否加载中               | `ITreeNode[]`                                                 | `[]`           |
| showSearch  | 是否展示搜索框                 | `boolean`                                                     | `false`        |
| edit        | 目录是否可以操作               | `boolean`                                                     | `true`         |
| placeholder | 搜索框的默认展示内容           | `string`                                                      | `搜索目录名称` |
| onSearch    | 点击搜索图标、清除图标时的回调 | `(value: string) => void`                                     | -              |
| onSave      | 新增/编辑时的回调              | `(data: ITreeNode, value: string) => Promise<string \| void>` | -              |
| onChange    | 触发新增/编辑的回调            | `(node?: ITreeNode, inputMode?: InputMode) => void`           | -              |

:::info
其余参数继承 antd4.x 的 `Omit<TreeProps, 'showLine' | 'switcherIcon' | 'showIcon' | 'treeData'>`<br/>
继承 dt-react-component 的 `Pick<IBlockHeaderProps, 'tooltip' | 'addonAfter' | 'addonBefore' | 'title'>`<br/>
[TreeProps](https://ant.design/components/tree-cn#tree-props)，[IBlockHeaderProps](https://dtstack.github.io/dt-react-component/components/block-header#blockheader)
:::

### ITreeNode

| 参数      | 说明           | 类型                    | 默认值 |
| --------- | -------------- | ----------------------- | ------ |
| inputMode | 节点输入框类型 | `add \| edit \| append` | -      |
| editable  | 是否可编辑     | `boolean`               | `true` |
| deletable | 是否可删除     | `boolean`               | `true` |
| addable   | 是否可增加     | `boolean`               | `true` |
| children  | 子节点         | `ITreeNode[]`           | -      |
