---
title: SlidePane 右侧面板
group: 组件
toc: content
demo:
    cols: 2
---

# SlidePane 右侧面板

## 何时使用

从页面右侧弹出面板，展示相应内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到原任务。
常用于： 查看详情， 预览较多内容的场景下。

## 示例

<code src="./demos/basic.tsx" title="基础使用"></code>
<code src="./demos/basic_mask.tsx" title="基础 mask 使用"></code>
<code src="./demos/customTitle.tsx" title="自定义 Title"></code>
<code src="./demos/tabs.tsx" title="展示 tabs"></code>

## API

| 参数      | 说明                   | 类型            | 默认值 |
| --------- | ---------------------- | --------------- | ------ |
| visible   | SlidePanel 是否可见    | `boolean`       | -      |
| className | 右侧面板外层容器的类名 | `string`        | -      |
| style     | 右侧面板外层容器的样式 | `CSSProperties` | -      |
| bodyStyle | 右侧面板内部容器的样式 | `CSSProperties` | -      |
| onClose   | 关闭回调               | `function`      | -      |
