---
title: Breadcrumb 面包屑
group: 组件
toc: content
demo:
    cols: 2
---

# Breadcrumb 面包屑

## 何时使用

routes 需要满足两级以上的层级结构并需要向上导航的路由时

## 示例

<code src="./demos/basic.tsx" iframe="true"></code>

## API

| 参数      | 说明                | 类型              | 默认值            |
| --------- | ------------------- | ----------------- | ----------------- |
| routes    | router 的路由栈信息 | `array`           | `routes[]`        |
| separator | 分隔符自定义        | `React.ReactNode` | `React.ReactNode` |
| style     | 面包屑组件样式      | `object`          | -                 |
