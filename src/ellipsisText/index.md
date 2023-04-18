---
title: EllipsisText 长文本省略显示
group: 组件
toc: content
demo:
    cols: 2
---

# EllipsisText 长文本省略显示

## 何时使用

用于长文本省略，根据最近块级父元素自动计算文本最大宽度，也可以手动传最大宽度，hover 显示完整内容。

## 注意

-   宽度的计算过程是一个比较耗时的动作，同一页面内该组件使用次数保持在 100 个以内，如果存在性能问题，考虑先支持虚拟滚动等技术后，在使用该组件。

## 示例

<code src="./demos/basic.tsx" title="基础使用" description="请更改窗口大小"></code>
<code src="./demos/maxWidth.tsx" title="宽度限制" ></code>
<code src="./demos/inlineElement.tsx" title="在行内元素中使用" description="行内元素无法获得宽度，在计算时会不断向上查找，直到找到一个能够正确获取宽度的父元素，并以找到父元素宽度当作文本的可视宽度" ></code>
<code src="./demos/flex.tsx" title="在 flex 中使用" description="请更改窗口大小"></code>
<code src="./demos/multiple.tsx" title="同一容器多个 EllipsisText 组件" description="都必须传入 maxWidth"></code>
<code src="./demos/valueType.tsx" title="支持 ReactNode" description="只支持返回的 dom 为行内元素"></code>

## API

| 参数      | 说明                               | 类型                             | 默认值 |
| --------- | ---------------------------------- | -------------------------------- | ------ |
| value     | 显示文本内容                       | `ReactNode   \| () => ReactNode` | -      |
| title     | 提示文字                           | `ReactNode   \| () => ReactNode` | value  |
| className | 为文本内容所在节点添加自定义样式名 | `string`                         | -      |
| maxWidth  | 文本内容的最大宽度                 | `string \| number`               | -      |

:::info
其余参数继承自 [继承 antd4.x 的 Tooltip](https://4x.ant.design/components/tooltip-cn/#API)
:::
