---
title: mxGraph
group: 组件
toc: content
---

# mxGraph

:::warning{title=deprecated}
该组件已废弃
:::

:::info
mxTooltip、mxPopupMenu、mxPopupMenuItem 等样式请自行实现，可参考：[mxGraph.scss](https://github.com/DTStack/dt-react-component/blob/master/src/stories/style/mxGraph.scss)
:::

## 示例

<code src="./demos/basic.tsx" title="基础使用" description="mxGraph 的基础使用，展示图数据，开启了 tooltips" iframe="true"></code>

<code src="./demos/context.tsx" title="右键菜单事件" description="mxGraph 支持不同组件的右键菜单事件触发, 并且支持针对不同的状态渲染不同的 vertex" iframe="true"></code>

<code src="./demos/event.tsx" title="事件" description="支持 onClick 事件，onDoubleClick 事件，键盘注册事件，以及 scroll 事件的监听" iframe="true"></code>

:::warning
部分事件存在相同交集，需要自行区分判断
:::

<code src="./demos/drag.tsx" title="拖拽" description="支持通过拖拽生成新节点" iframe="true"></code>

<code src="./demos/relationship.tsx" title="血缘关系" iframe="true"></code>

<code src="./demos/expand.tsx" title="血缘关系详细展示" iframe="true"></code>

## API

| 参数               | 说明                                                  | 类型                                                                                               | 默认值                       |
| ------------------ | ----------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ---------------------------- |
| enableDrag         | 是否开启拖拽，开启后每一个图形的四周会有拖拽点        | `boolean`                                                                                          | `false`                      |
| loading            | 加载中状态                                            | `boolean`                                                                                          | `false`                      |
| graphData          | 当前图数据                                            | `T[] \| null`                                                                                      | -                            |
| vertexKey          | vertex 的 key 值                                      | `string`                                                                                           | `'taskId'`                   |
| vertexSize         | Vertex 尺寸                                           | `{ width?: number; height?: number }`                                                              | `{ width: 210, height: 50 }` |
| config             | 配置项目                                              | `IConfig`                                                                                          | -                            |
| direction          | re-layout 的方向，`MxHierarchicalLayout` 的第二个参数 | `string`                                                                                           | `'north'`                    |
| style              | 样式                                                  | `CSSProperties`                                                                                    | -                            |
| children           | 底部状态栏                                            | `(current: T \| null) => JSX.Element`                                                              | -                            |
| onRenderActions    | 渲染自定义 actions                                    | `(graph: mxGraph, instances: mxGraphExportObject) => JSX.Element`                                  | -                            |
| onGetSize          | 针对不同的数据渲染不同 size 的 vertex                 | `(data: T) => { width: number; height: number } \| undefined`                                      | -                            |
| onRenderWidgets    | 渲染 widgets 的组件                                   | `() => JSX.Element`                                                                                | -                            |
| onDropWidgets      | 组件拖拽 drop 的回调函数                              | `(node: HTMLElement, graph: mxGraph, target: mxCell, x: number, y: number) => void`                | -                            |
| onGetPreview       | 获取拖拽中的预览节点                                  | `(node: HTMLElement) => HTMLElement`                                                               | -                            |
| onRenderCell       | 渲染 cell 的内容                                      | `(cell: mxCell, graph: mxGraph) => string`                                                         | -                            |
| onRenderTooltips   | 渲染 cell 的 tooltips                                 | `(cell: mxCell, graph: mxGraph) => string`                                                         | -                            |
| onDrawVertex       | 获取 vertex 的 style，通常用于设置特殊状态的 vertex   | `(data: T) => string`                                                                              | -                            |
| onDrawEdge         | 获取 edge 的 style，常用于设置特殊样式的 edge         | `(source: mxCell, target: mxCell) => string`                                                       | -                            |
| onClick            | Vertex 的点击回调函数                                 | ` (cell: mxCell, graph: mxGraph, event: React.MouseEvent<HTMLElement, MouseEvent>) => void`        | -                            |
| onContextMenu      | 右键菜单的回调函数                                    | `(data: T, cell: mxCell, graph: mxGraph) => IContextMenuConfig[] \| Promise<IContextMenuConfig[]>` | -                            |
| onDoubleClick      | Vertex 的双击回调事件                                 | ` (cell: mxCell, graph: mxGraph, event: React.MouseEvent<HTMLElement, MouseEvent>) => void`        | -                            |
| onKeyDown          | KeyDown 事件                                          | `() => IKeyDownConfig[]`                                                                           | -                            |
| onCellsChanged     | 当节点改变的回调事件                                  | `(cell: mxCell) => void`                                                                           | -                            |
| onContainerChanged | 布局改变回调事件，包括滚动，改变 scale 等             | `(geometry: IGeometryPosition) => void`                                                            | -                            |

### IMxGraphData

`T` 范型需要满足以下类型

| 参数       | 说明     | 类型    | 默认值 |
| ---------- | -------- | ------- | ------ |
| childNode  | 下游节点 | `any[]` | -      |
| parentNode | 上游节点 | `any[]` | -      |

### IConfig

| 参数               | 说明                            | 类型                                                                               | 默认值  |
| ------------------ | ------------------------------- | ---------------------------------------------------------------------------------- | ------- |
| tooltips           | 是否开启 tooltips               | `boolean`                                                                          | `false` |
| connectable        | 是否可连接                      | `boolean`                                                                          | `false` |
| highlight          | 选中是否高亮相关 vertex 及 edge | `boolean`                                                                          | `false` |
| toolbarStyle       | 设置 toolbar 的样式             | `CSSProperties`                                                                    | -       |
| vertexMovable      | vertex 是否可移动，默认可移动   | `boolean`                                                                          | `false` |
| defaultVertexStyle | 修改默认的 vertex 样式          | `Record<string, any> \| ((instances: mxGraphExportObject) => Record<string, any>)` | -       |
| defaultEdgeStyle   | 修改默认的 edge 样式            | `Record<string, any> \| ((instances: mxGraphExportObject) => Record<string, any>)` | -       |
| getPortOffset      | -                               | `(edgeState: mxCellState, source: boolean) => HTMLElement`                         | -       |

### IKeyDownConfig

| 参数    | 说明                                                                               | 类型                                                                       | 默认值 |
| ------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ------ |
| id      | -                                                                                  | `string`                                                                   | -      |
| method  | -                                                                                  | `'bindKey' \| 'bindShiftKey' \| 'bindControlKey' \| 'bindControlShiftKey'` | -      |
| keyCode | [参考](https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes) | `number`                                                                   | -      |
| func    | -                                                                                  | `() => void`                                                               | -      |
