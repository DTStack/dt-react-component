---
title: Catalogue 目录
group: 组件
toc: content
demo:
    cols: 2
---

# Catalogue 目录

## 何时使用

目录树

## 示例

### Catalogue.Tree

<code src="./demos/tree/DefaultTree" title="基本使用" description="DefaultTree"></code>

<code src="./demos/tree/SmallTree" title="小尺寸" description="SmallTree"></code>

<code src="./demos/tree/NoHeaderTree" title="无 Header" description="NoHeaderTree"></code>

<code src="./demos/tree/WithBtnSlotTree" title="带按钮组" description="WithBtnSlotTree"></code>

<code src="./demos/tree/WithTabsTree" title="带 Tabs" description="WithTabsTree"></code>

<code src="./demos/tree/WithCheckboxTree" title="带 Checkbox" description="WithCheckboxTree"></code>

### Catalogue.TreeSelect

<code src="./demos/treeSelect/NormalTreeSelect" title="基础使用" description="NormalTreeSelect"></code>

## API

### Catalog.Tree

| 参数             | 说明                                                                                   | 类型                                  | 默认值             |
| ---------------- | -------------------------------------------------------------------------------------- | ------------------------------------- | ------------------ |
| loading          | 是否加载中                                                                             | `boolean`                             | `false`            |
| showHeader       | 是否展示头部组件                                                                       | `boolean`                             | `true`             |
| treeTitle        | 头部文案                                                                               | `React.ReactNode`                     | -                  |
| wrapperClassName | 容器类名                                                                               | `string`                              | -                  |
| wrapperStyle     | 容器行内样式                                                                           | `React.CSSProperties`                 | -                  |
| size             | 尺寸大小，small 每一个 item 高度是 24px，middle 每一个 item 高度是 36px，默认为 middle | `small \| middle`                     | `middle`           |
| onSearch         | 点击搜索按钮回调                                                                       | `(value: string, e) => void`          | -                  |
| tabsProps        | tabs 配置                                                                              | `TabsProps & { items: ITabsItem[]; }` | -                  |
| treeData         | `数据源，与 TreeProps['treeData'] 类型相似，只是增加了 ContextMenu 配置`               | `ITreeDataItem[]`                     | -                  |
| defaultStatus    | `默认展示 tabs 还是 search，仅 items 有值时生效`                                       | `ITabsStatus`                         | `ITabsStatus.tabs` |
| onStatusChange   | `tabs or status 变化时的回调`                                                          | `(status: ITabsStatus, e) => void`    | -                  |

其余属性均继承自 `Tree` 组件，参考 <a href="https://4x.ant.design/components/tree-cn/#API" target="_blank">Tree API</a>

### Catalog.TreeSelect

即 `TreeSelect` 组件，参考 <a href="https://4x.ant.design/components/tree-select-cn/#API" target="_blank">TreeSelect API</a>

<br>
<br>
<br>

:::info
其余属性参考 Ant Design 的 Tree、TreeSelect 组件
:::
