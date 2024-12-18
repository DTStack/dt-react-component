---
title: CodeBlock
group: 组件
toc: content
---

# CodeBlock

## 何时使用

CodeBlock 组件用以展示代码块

## 示例

<code src="./demos/codeBlock.tsx" title="基本使用"></code>
<code src="./demos/codeBlock-convert.tsx" title="反色" description="在浅色背景下使用反色模式"></code>

## API

| 参数      | 说明             | 类型                                         | 默认值 |
| --------- | ---------------- | -------------------------------------------- | ------ |
| copy      | 是否支持复制功能 | `boolean \| ICopyProps`                      | `true` |
| className | 类名             | `string`                                     | -      |
| style     | 样式             | `CSSProperties`                              | -      |
| convert   | 反色模式         | `boolean`                                    | -      |
| toolbars  | 渲染工具位       | `React.ReactNode \| (() => React.ReactNode)` | -      |
| options   | 配置项           | `SyntaxHighlighterProps`                     | -      |
| children  | 文案             | `React.ReactNode & React.ReactNode[]`        | -      |
