---
title: SpreadSheet 多功能表
group: 组件
toc: content
demo:
    cols: 1
---

# SpreadSheet 多功能表

## 何时使用

表格内容右键可复制，表格大小可拖动

## 示例

<code src="./demos/basic.tsx" title="基础使用"></code>
<code src="./demos/changeData.tsx" title="改变数据"></code>

## API

### SpreadSheet

| 参数                   | 说明                                                   | 类型                                                         | 默认值         |
| ---------------------- | ------------------------------------------------------ | ------------------------------------------------------------ | -------------- |
| data                   | 表格数据                                               | `Array(二维数组)`                                            | -              |
| columns                | 列名                                                   | `Array`                                                      | -              |
| className              | 外层组件的 class 名                                    | `string`                                                     | -              |
| options.copyTypes      | 右键菜单中展示的选项 复制值/复制列名/复制列名和值 按钮 | `Array<'copyData' \| 'copyHeaders' \| 'copyHeadersAndData'>` | "['copyData']" |
| options.trimWhitespace | 是否去除内容里的空格                                   | `boolean`                                                    | true           |
