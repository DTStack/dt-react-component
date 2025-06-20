---
title: Float 悬浮组件
group: 组件
toc: content
demo:
    cols: 1
---

# Float 悬浮组件

悬浮在页面上且支持拖拽至任意位置的组件

## 何时使用

实现全局渲染，悬浮在页面上任意位置功能

## 示例

<code src="./demos/basic.tsx" iframe="true">基础使用</code>
<code src="./demos/backTop.tsx" iframe="true">返回顶部</code>

## API

| 参数      | 说明                     | 类型                        | 默认值  |
| --------- | ------------------------ | --------------------------- | ------- |
| className | 类名                     | `string`                    | -       |
| style     | 样式                     | `CSSProperties`             | -       |
| draggable | 拖拽配置                 | `boolean \| DraggableProps` | `false` |
| position  | 位置                     | `{x: number, y: number}`    | 左上角  |
| onChange  | 拖拽结束后触发的回调函数 | `Function`                  | -       |

其中 `DraggableProps` 类型具体参考 [draggable-api](https://github.com/react-grid-layout/react-draggable?tab=readme-ov-file#draggable-api)。
