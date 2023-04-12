---
title: BlockHeader 标题
group: 组件
toc: content
demo:
    cols: 2
---

# BlockHeader 标题

## 何时使用

适合使用在需要简单描述的场景，或适用于将大量数据按照模块划分的场景。

## 示例

<code src="./demos/basic.tsx">基础使用</code>
<code src="./demos/customIcon.tsx">自定义 icon</code>
<code src="./demos/description.tsx">自定义说明文字</code>
<code src="./demos/tooltip.tsx">Tooltip</code>
<code src="./demos/expand.tsx" description="若存在 `children` 则支持展开">展开/收起内容</code>
<code src="./demos/small.tsx">小标题</code>
<code src="./demos/background.tsx" transform="true">无背景</code>

## API

| 参数              | 说明                                      | 类型                        | 默认值  |
| ----------------- | ----------------------------------------- | --------------------------- | ------- |
| title             | 标题                                      | `string`                    | -       |
| beforeTitle       | 标题前的图标，默认是一个色块              | `React.ReactNode`           | -       |
| afterTitle        | 标题后的提示图标或文案                    | `string \| React.ReactNode` | -       |
| tooltip           | 默认展示问号提示(优先级低于 `afterTitle`) | `string \| React.ReactNode` | -       |
| isSmall           | 大标题、小标题                            | `boolean`                   | `false` |
| titleRowClassName | 标题一行的样式类名                        | `string`                    | -       |
| titleClassName    | 标题的样式类名                            | `string`                    | -       |
| showBackground    | 是否显示背景                              | `boolean`                   | `true`  |
| defaultExpand     | 是否默认展开内容                          | `boolean`                   | `true`  |
| hasBottom         | 是否有默认下边距 16px                     | `boolean`                   | `false` |
| spaceBottom       | 自定义下边距，优先级高于 hasBottom        | `number`                    | `0`     |
| children          | 展开/收起的内容                           | `React.ReactNode`           | -       |
| onChange          | 展开/收起时的回调                         | `(expand: boolean) => void` | -       |
