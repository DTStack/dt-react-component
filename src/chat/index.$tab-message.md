---
title: Message
group: 组件
toc: content
---

# Message

## 何时使用

Message 组件用以渲染回答框

## 示例

<code src="./demos/message.tsx" title="基本使用"></code>
<code src="./demos/message-lazyRendered.tsx" title="懒加载"></code>

## API

| 参数           | 说明                   | 类型                                | 默认值  |
| -------------- | ---------------------- | ----------------------------------- | ------- |
| data           | 数据                   | `Message[]`                         | -       |
| regenerate     | 是否支持重新生成       | `boolean`                           | `false` |
| copy           | 是否支持复制功能       | `boolean \| CopyOptions`            | `true`  |
| onRegenerate   | 点击重新生成的回调函数 | `(data: Message) => void`           | -       |
| onStop         | 点击停止问答的回调函数 | `(data: Message) => void`           | -       |
| onLazyRendered | 懒加载的回调函数       | `(cb: () => Promise<void>) => void` | -       |
