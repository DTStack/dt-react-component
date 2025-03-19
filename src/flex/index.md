---
title: Flex 布局
group: 组件
toc: content
---

# Flex 布局

## 何时使用

-   需要 Flex 布局

## 示例

<code src='./demos/basic.tsx' title="基础使用"></code>
<code src='./demos/align.tsx' title="对齐方式"></code>

## API

| 参数     | 说明                    | 类型                                                                                | 默认值   |
| -------- | ----------------------- | ----------------------------------------------------------------------------------- | -------- |
| vertical | flex 主轴的方向是否垂直 | `boolean`                                                                           | `false`  |
| wrap     | 主轴换行                | [flex-wrap](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-wrap)             | `nowrap` |
| justify  | `justify-content`       | [justify-content](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content) | `normal` |
| align    | `align-items`           | [align-items](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items)         | `normal` |
| flex     | `flex`                  | [flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex)                       | `normal` |
| gap      | `gap`                   | [gap](https://developer.mozilla.org/zh-CN/docs/Web/CSS/gap)                         | `0`      |
| children | 展示内容                | `React.ReactNode`                                                                   | -        |
