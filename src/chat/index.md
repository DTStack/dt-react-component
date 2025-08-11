---
title: Chat 智能问答
group: 组件
toc: content
---

# 智能问答

## 组件概述

Chat 规范由多个组件复合使用实现落地场景，其中：

-   `useChat` 是旨在解决 Chat 的数据问题的 hook
-   `Chat` 组件是作为 Chat 组件的集合及 Provider
-   `Loading` 组件是回答框在等待生成时的加载组件
-   `Button` 组件是符合 AI 规范的按钮组件
-   `CodeBlock` 组件是符合 AI 规范的代码块组件
-   `Input` 组件是符合 AI 规范的输入框组件
-   `Markdown` 组件是符合 AI 规范的渲染 markdown 的组件
-   `Pagination` 组件是符合 AI 规范的分页器
-   `Message` 组件是符合 AI 规范的回答框
-   `Prompt` 组件是符合 AI 规范的提问框
-   `Content` 组件是符合 AI 规范的正文内容
-   `Group` 组件是符合 AI 规范的对话列表组件

## 何时使用

涉及到 AI 相关功能时。

## 示例

<code src="./demos/basic.tsx" title="基本使用"></code>
<code src="./demos/global-state/index.tsx" title="Chat 数据持久化" description="（不推荐）将相关数据持久化入上层组件"></code>
<code src="./demos/global-state/group.tsx" title="对话列表"></code>

## API
