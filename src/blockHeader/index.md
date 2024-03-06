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

<code src="./demos/basic.tsx" description="通过设置 `showBackground={false}` 去除标题背景，默认为 `true`">基础使用</code>
<code src="./demos/size.tsx" description="标题有中、小两种尺寸，默认为中尺寸，通过设置 `size='small'` 把标题设置为小尺寸">标题尺寸</code>
<code src="./demos/extraInfo.tsx" description="通过设置 `afterTitle` 和 `tooltip` 可以增加两种不同形式的提示信息，同时存在时仅 `afterTitle` 生效">带提示信息的标题</code>
<code src="./demos/customIcon.tsx" description="通过设置 `beforeTitle` 可以自定义标题icon，不设置时默认是一个色块">自定义 icon</code>
<code src="./demos/expand.tsx" description="若存在 `children` 则支持展开">展开/收起内容</code>

## API

### BlockHeader

| 参数              | 说明                                      | 类型                        | 默认值  |
| ----------------- | ----------------------------------------- | --------------------------- | ------- |
| title             | 标题                                      | `string`                    | -       |
| beforeTitle       | 标题前的图标，默认是一个色块              | `React.ReactNode`           | -       |
| afterTitle        | 标题后的提示图标或文案                    | `React.ReactNode`           | -       |
| tooltip           | 默认展示问号提示(优先级低于 `afterTitle`) | `React.ReactNode`           | -       |
| isSmall           | 大标题、小标题，默认为大标题              | `boolean`                   | `false` |
| titleRowClassName | 标题一行的样式类名                        | `string`                    | -       |
| titleClassName    | 标题的样式类名                            | `string`                    | -       |
| showBackground    | 是否显示背景                              | `boolean`                   | `true`  |
| defaultExpand     | 是否默认展开内容                          | `boolean`                   | `true`  |
| expand            | 当前展开状态                              | `boolean`                   |         |
| hasBottom         | 是否有默认下边距 16px                     | `boolean`                   | `false` |
| spaceBottom       | 自定义下边距，优先级高于 hasBottom        | `number`                    | `0`     |
| children          | 展开/收起的内容                           | `React.ReactNode`           | -       |
| onExpand          | 展开/收起时的回调                         | `(expand: boolean) => void` | -       |
