---
title: Image 图片组件
group: 组件
toc: content
---

# Image

## 何时使用

展示图片

## 示例

<code src="./demos/basic.tsx" title="基础使用"></code>
<code src="./demos/lazy.tsx" title="图片懒加载"></code>

## API

### Props

| 参数      | 说明               | 类型                  | 默认值 |
| --------- | ------------------ | --------------------- | ------ |
| src       | 图片资源           | `string`              | -      |
| lazy      | 是否开启图片懒加载 | `boolean`             | -      |
| className | 图片样式名         | `string`              |
| style     | 图片样式           | `React.CSSProperties` |
| width     | 图片样式           | `number`              |
| height    | 图片样式           | `number`              |
| loader    | 图片样式           | `JSX.Element \| null` |
