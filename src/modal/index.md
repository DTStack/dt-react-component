---
title: Modal 模态框
group: 组件
toc: content
---

# Modal 模态框

## 何时使用

-   使用模态框时，使用该组件替换 antd 的 Modal
-   支持 size 属性来快速设置宽度；限制 Modal 的高度为 600px，超出内部滚动
-   支持 banner 属性来快速实现 Modal 内部提示
-   支持 draggable 和 resizable 属性来实现拖拽和调整大小

## 示例

<code src="./demos/basic.tsx" title="最大高度限制"></code>
<code src="./demos/size.tsx" title="尺寸"></code>
<code src="./demos/banner.tsx" title="支持 banner"></code>
<code src="./demos/bannerProps.tsx" title="支持传 banner 的 Props 属性"></code>
<code src="./demos/draggable.tsx" title="draggable"></code>
<code src="./demos/resizable.tsx" title="resizable"></code>
<code src="./demos/window.tsx" title="窗口模式即支持 draggable 同时也支持 resizable"></code>

## API

| 参数             | 说明                                      | 类型                                                         | 默认值    |
| ---------------- | ----------------------------------------- | ------------------------------------------------------------ | --------- |
| size             | 尺寸                                      | `'small' \| 'default' \| 'middle' \| 'large'`                | `default` |
| banner           | 提示                                      | `React.ReactNode \| AlertProps`                              |           |
| draggable        | 是否可拖拽                                | `IFloatProps['draggable']`                                   | `false`   |
| resizable        | 是否可调整大小                            | `MergeOption<Partial<ResizableProps>>`                       | `false`   |
| rect             | 初始宽高（仅开启 resizable 的情况下生效） | `{ width: number; height: number }`                          |           |
| position         | 初始位置（仅开启 draggable 的情况下生效） | `{ x: number; y: number}`                                    |           |
| onPositionChange | 位置变化时的回调                          | `(data: { x: number; y: number}) => void`                    |           |
| onRectChange     | 尺寸变化时的回调                          | `(data: { width: number; height: number }) => void`          |           |
| ...rest          | 其他继承自 antd Modal 的属性              | [ModalProps](https://4x.ant.design/components/modal-cn/#API) |           |
