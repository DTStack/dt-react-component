---
title: Group
group: 组件
toc: content
demo:
    cols: 2
---

# Group

## 何时使用

Group 组件用于展示对话列表

## 示例

<code src="./demos/group.tsx" title="基本使用"></code>

## API

| 参数                    | 说明                     | 类型                                                              | 默认值 |
| ----------------------- | ------------------------ | ----------------------------------------------------------------- | ------ |
| children                |                          | `React.ReactNode`                                                 | -      |
| loading                 |                          | `boolean`                                                         | -      |
| fullscreen              |                          | `boolean`                                                         | -      |
| expand                  |                          | `boolean`                                                         | -      |
| openFloat               | 是否开启浮动对话列表     | `boolean`                                                         | -      |
| className               |                          | `string`                                                          | -      |
| data                    | 对话数据                 | `ConversationProperties[]`                                        | -      |
| maskClose               | 是否开启点击其他地方关闭 | `boolean`                                                         | -      |
| conversationButton      | 添加对话按钮             | `React.ReactNode`                                                 | -      |
| conversationButtonProps | 添加对话按钮属性         | `React.HTMLAttributes<HTMLDivElement> & IConversationButtonProps` | -      |
| listProps               | 列表属性                 | [IChatGroupListProps](?tab=group#list)                            | -      |
| onExpandChange          |                          | `(expand: boolean) => void`                                       | -      |

## IChatGroupListProps

| 参数          | 说明     | 类型                                                                    | 默认值 |
| ------------- | -------- | ----------------------------------------------------------------------- | ------ |
| conversations | 对话数据 | `ConversationProperties[]`                                              | -      |
| className     |          | `string`                                                                | -      |
| selectId      |          | `string`                                                                | -      |
| renderItem    |          | `React.ReactNode`                                                       | -      |
| onItemClick   |          | `(conversation: ConversationProperties) => void`                        | -      |
| onRename      |          | `(conversation: ConversationProperties, value: string) => Promise<any>` | -      |
| onDelete      |          | `(conversation: ConversationProperties) => void`                        | -      |
