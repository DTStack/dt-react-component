---
title: Resize 事件监听
group: 组件
toc: content
demo:
    cols: 2
---

# Resize 事件监听

用于监听 window 或者是其他元素的尺寸变化

## 何时使用

元素大小自适应调整，常用于图表

## 示例

<code src="./demos/basic.tsx" description="请调整窗口大小以查看效果">基础使用</code>
<code src="./demos/observerEle.tsx" description="请调整元素大小以查看效果，通过设置`observerEle`自定义监听元素">监听自定义元素</code>

## API

### Resize

| 参数        | 说明                                     | 类型              | 默认值 |
| ----------- | ---------------------------------------- | ----------------- | ------ |
| children    | 子元素                                   | `React.ReactNode` | -      |
| observerEle | 监听的元素,传入元素不存在默认监听 window | `HTMLElement`     | -      |
| onResize    | 重置元素大小的函数                       | `() => void`      | -      |
