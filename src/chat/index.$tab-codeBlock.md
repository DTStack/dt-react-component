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

| 参数     | 说明             | 类型                     | 默认值 |
| -------- | ---------------- | ------------------------ | ------ |
| language | 语言             | `string`                 | -      |
| copy     | 是否支持复制功能 | `boolean \| ICopyProps`  | -      |
| value    | 内容             | `string`                 | -      |
| value    | 内容             | `string`                 | -      |
| convert  | 反色模式         | `boolean`                | -      |
| options  | 配置项           | `SyntaxHighlighterProps` | -      |
