---
title: ErrorBoundary 错误边界
group: 组件
toc: content
demo:
    cols: 2
---

# ErrorBoundary 错误边界

## 何时使用

错误边界可以捕获子组件的渲染、生命周期函数以及构造函数内的错误，记录错误日志并在错误发生时， 展示 LoadError 页面，以避免因为局部组件错误而导致的整个组件树崩溃。

## 示例

<code src="./demos/basic.tsx" iframe="true"></code>

## API

| 参数     | 说明   | 类型              | 默认值 |
| -------- | ------ | ----------------- | ------ |
| children | 子组件 | `React.ReactNode` | -      |
