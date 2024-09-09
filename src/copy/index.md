---
title: Copy 复制文本
group: 组件
toc: content
demo:
    cols: 1
---

# Copy 复制文本

## 何时使用

复制文本到粘贴版

## 示例

<code src='./demos/basic.tsx' title="点击按钮，进行复制" description='不同方式给 Tooltip 赋值'></code>
<code src='./demos/custom.tsx' title="自定义按钮" description='tooltip 设置假值不展示，默认展示复制'></code>

### API

| 参数      | 说明             | 类型                                    | 默认值                              |
| --------- | ---------------- | --------------------------------------- | ----------------------------------- |
| text      | 需要复制的文本   | `string`                                | -                                   |
| tooltip   | 配置提示信息     | `TooltipProps['title'] \| TooltipProps` | `复制`                              |
| button    | 自定义按钮       | `React.ReactNode`                       | `<CopyOutlined />`                  |
| style     | 样式             | `React.CSSProperties`                   | --                                  |
| className | 样式             | `string`                                | --                                  |
| onCopy    | 复制后的回调函数 | `(text: string) => void`                | `() => message.success('复制成功')` |
