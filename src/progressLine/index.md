---
title: ProgressLine 进度条
group: 组件
toc: content
demo:
    cols: 2
---

# ProgressLine 进度条

## 何时使用

ProgressLine 组件作用于进度条状态 + 文案的效果展示

## 示例

<code src="./demos/title.tsx" description="进度条顶部左侧内容，支持 Tooltip">控制标题</code>
<code src="./demos/percent.tsx" description="进度条顶部右侧百分比，要求带 %">控制百分比</code>
<code src="./demos/color.tsx" description="进度条的颜色">控制颜色</code>
<code src="./demos/width.tsx" description="进度条的宽度">控制宽度</code>

## API

| 参数         | 说明                           | 类型                                                                                               | 默认值      |
| ------------ | ------------------------------ | -------------------------------------------------------------------------------------------------- | ----------- |
| className    | 设置组件 className             | `string`                                                                                           | -           |
| title        | 设置进度条顶部左侧内容         | `string \| React.ReactNode`                                                                        | `''`        |
| percent      | 设置进度条顶部百分比，要求带 % | `string`                                                                                           | `'0%'`      |
| color        | 设置进度条颜色                 | `string`                                                                                           | `'#3BCEFF'` |
| width        | 设置组件长度                   | `string \| number`                                                                                 | `'280px'`   |
| tooltipProps | title 支持 Tooltip             | [antd4 TooltipProps](https://4x.ant.design/components/tooltip-cn/#%E5%85%B1%E5%90%8C%E7%9A%84-API) | -           |
