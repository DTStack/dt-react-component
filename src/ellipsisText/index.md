---
title: EllipsisText 长文本省略显示
group: 组件
toc: content
demo:
    cols: 2
---

# EllipsisText 长文本省略显示

## 何时使用

对长文本内容显示做一定限制，根据最近块级父元素自动计算最大宽度，也可以手动传最大宽度，hover 显示完整内容。

-   自动计算宽度仅限于最近块级父元素下都为行内元素
-   如果最近块级元素为行内块级元素，必须设置宽度
-   使用 antd table 当表头 fixed：true 时，请传 maxWidth
-   使用多个 EllipsisText 最好传 maxWidth

## 示例

<code src="./demos/basic.tsx" title="基础使用"></code>
<code src="./demos/maxWidth.tsx" title="进阶使用" description="请更改窗口大小"></code>

## API

| 参数      | 说明                               | 类型               | 默认值 |
| --------- | ---------------------------------- | ------------------ | ------ |
| value     | 显示文本内容                       | `string \| number` | -      |
| className | 为文本内容所在节点添加自定义样式名 | `string`           | -      |
| maxWidth  | 文本内容的最大宽度                 | `string \| number` | -      |
| title     | 提示文字                           | `string \| number` | -      |

:::info
其余参数继承自 [继承 antd3.x 的 Tooltip](https://3x.ant.design/components/tooltip-cn/#header)
:::
