---
title: Conversations
group: 组件
toc: content
demo:
    cols: 2
---

# Conversations

## 何时使用

Conversations 组件用于展示会话列表

## 示例

<code src="./demos/conversations.tsx" title="基本使用"></code>

## API

| 参数             | 说明              | 类型                                                                                | 默认值     |
| ---------------- | ----------------- | ----------------------------------------------------------------------------------- | ---------- | --- |
| conversations    | 会话列表          | `ConversationInfo[]`                                                                | -          |
| activeKey        | 激活的会话 ID     | `ConversationInfo['id']`                                                            | -          |
| defaultActiveKey | 默认激活的会话 ID | `ConversationInfo['id']`                                                            | -          |
| dropdown         | 下拉菜单          | [IConversationsItemProps](?tab=conversations#iconversationsitemprops)`['dropdown']` | -          |
| groupable        | 是否启用分组      | `boolean`                                                                           | Groupable` | -   |
| className        | 自定义类名        | `string`                                                                            | -          |
| style            | 自定义样式        | `React.CSSProperties`                                                               | -          |
| loading          | 是否加载中        | `boolean`                                                                           | -          |
| header           | 会话列表头部      | `React.ReactNode`                                                                   | boolean`   | -   |
| collapsed        | 是否折叠          | `boolean`                                                                           | -          |
| onItemClick      | 点击会话事件      | `(info: ConversationInfo) => void`                                                  | -          |
| renderItem       | 自定义渲染会话项  | `(props: IConversationsItemProps) => React.ReactNode`                               | -          |

## IConversationsItemProps

| 参数      | 说明     | 类型                                            | 默认值                                                                                          |
| --------- | -------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------- | --- |
| info      | 对话数据 | `ConversationInfo[]`                            | -                                                                                               |
| active    | 是否激活 | `boolean`                                       | -                                                                                               |
| dropdown  | 下拉菜单 | `DropdownProps & { triggerDom?: React.ReactNode | ((conversation: ConversationInfo, info: { originNode: React.ReactNode }) => React.ReactNode) }` | -   |
| prefixCls | 前缀     | `string`                                        | -                                                                                               |
| onClick   | 点击事件 | `(conversation: ConversationInfo) => void`      | -                                                                                               |
