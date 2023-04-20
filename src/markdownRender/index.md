---
title: MarkdownRender 渲染
group: 组件
toc: content
---

# MarkdownRender 渲染

## 何时使用

用于 Markdown 语法在 HTML 上展示，只负责渲染

## 示例

<code src="./demos/basic.tsx" compact="true" title="展示 Markdown 内容"></code>
<code src="./demos/dark.tsx" compact="true" title="暗黑模式下"></code>
<code src="./demos/sql.tsx" compact="true" title="SQL 语法高亮"></code>

## API

| 参数      | 说明              | 类型      | 默认值 |
| --------- | ----------------- | --------- | ------ |
| value     | markdown 文本数据 | `string`  | -      |
| dark      | 暗黑主题          | `boolean` | -      |
| className | 类名              | `string`  | -      |
