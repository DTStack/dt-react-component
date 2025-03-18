---
title: Markdown
group: 组件
toc: content
---

# Markdown

## 何时使用

Markdown 组件用以渲染 markdown 内容

:::warning
Markdown 组件自带 memo 用于性能优化，只有 `typing`、`children`、`className` 属性修改才会引起重渲染。
:::

## 示例

<code src="./demos/markdown.tsx" title="基本使用" description="markdown 组件默认内置组件"></code>

## API

| 参数      | 说明                | 类型         | 默认值 |
| --------- | ------------------- | ------------ | ------ |
| typing    | 是否输入中          | `boolean`    | -      |
| className | 类名                | `string`     | -      |
| children  | 文案                | `string`     | -      |
| onMount   | didMount 的回调函数 | `() => void` | -      |

其余属性参考 `react-markdown@~8.0.6`
