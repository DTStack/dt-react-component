---
title: useIntersectionObserver 自动观察元素是否可见
group: Hooks
toc: content
---

# useIntersectionObserver

## 何时使用

处理元素是否进入可是区域

## 示例

<code src="./demos/basic.tsx" title="基础使用"></code>
<code src="./demos/imgLazy.tsx" title="图片懒加载实现"></code>

## API

### Props

| 参数          | 说明                       | 类型                           | 默认值 |
| ------------- | -------------------------- | ------------------------------ | ------ |
| callback      | 处理进入可视区域的回调函数 | `IntersectionObserverCallback` | -      |
| initialParams | 初始化数据                 | `Element`                      | -      |
| options       | 配置项                     | `IntersectionObserverInit`     | -      |
