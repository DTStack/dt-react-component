---
title: BlockHeader 标题
group: 组件
toc: content
demo:
    cols: 2
---

# BlockHeader 标题

用于创建一个模块标题

## 何时使用

适合使用在需要简单描述的场景，或适用于将大量数据按照模块划分的场景。

## 示例

<code src="./demos/basic.tsx" description="配置大小、tooltip、描述">基础使用</code>
<code src="./demos/addonBefore.tsx" description="通过 `addonBefore` 可以设置标题前的图标，不设置时默认是一个色块，设置为假值(`undefined` 除外)不展示图标">自定义 icon</code>
<code src="./demos/addonAfter.tsx" description="通过 `addonAfter` 可以设置后缀自定义内容块">带提示信息的标题</code>
<code src="./demos/expand.tsx" description="通过配置 expand/defaultExpand 控制展开/收起">支持 `children` 做为内容展示</code>

## API

### BlockHeader

| 参数             | 说明                               | 类型                                    | 默认值   |
| ---------------- | ---------------------------------- | --------------------------------------- | -------- |
| title            | 标题                               | `string`                                | -        |
| addonBefore      | 标题前的图标，默认是一个色块       | `React.ReactNode`                       | -        |
| description      | 标题提示文案                       | `React.ReactNode`                       | -        |
| tooltip          | 默认展示问号提示                   | `TooltipProps \| TooltipProps['title']` | -        |
| addonAfter       | 标题后的内容                       | `React.ReactNode`                       | -        |
| size             | 小标题、中标题，默认为中标题       | `small \| middle \| large`              | `middle` |
| className        | 标题的样式类名                     | `string`                                | -        |
| style            | 标题的样式                         | `React.CSSProperties`                   | -        |
| contentClassName | 展示内容的样式类名                 | `string`                                | -        |
| contentStyle     | 展示内容的样式                     | `React.CSSProperties`                   | -        |
| background       | 是否显示背景                       | `boolean`                               | `true`   |
| defaultExpand    | 是否默认展开内容                   | `boolean`                               | `true`   |
| expand           | 当前展开状态                       | `boolean`                               |          |
| spaceBottom      | 自定义下边距，优先级高于 hasBottom | `number`                                | `16`      |
| children         | 展开/收起的内容                    | `React.ReactNode`                       | -        |
| onExpand         | 展开/收起时的回调                  | `(expand: boolean) => void`             | -        |
