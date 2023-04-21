---
title: GlobalLoading 应用加载中
group: 组件
toc: content
demo:
    cols: 2
---

# GlobalLoading 应用加载中

## 何时使用

应用等待加载时使用，可自定义样式。(PS：宽度和高度均为 100%，所以其大小基于其父级)

## 示例

<code src="./demos/basic.tsx" title="基础使用" description="传递参数 loadingTitle，同时自定义样式" compact="true"></code>
<code src="./demos/default.tsx" title="默认值" description="参数全部不传，使用默认值" compact="true"></code>

## API

| 参数             | 说明                   | 类型     | 默认值               |
| ---------------- | ---------------------- | -------- | -------------------- |
| loadingTitle     | 应用名称               | `string` | 应用加载中，请等候～ |
| mainBackground   | 整体背景色             | `string` | `#F2F7FA`            |
| titleColor       | 文案字体颜色           | `string` | `#3D446E`            |
| circleBackground | 等待动画 circle 背景色 | `string` | `#1D78FF`            |
| className        | 设置组件 className     | `string` | -                    |
