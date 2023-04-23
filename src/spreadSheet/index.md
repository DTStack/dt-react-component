---
title: SpreadSheet 多功能表
group: 组件
toc: content
demo:
    cols: 2
---

# SpreadSheet 多功能表

## 何时使用

表格内容右键可复制，表格大小可拖动

## 示例

<code src="./demos/basic.tsx">基础使用</code>

## API

### SpreadSheet

| 参数                       | 说明                                   | 类型              | 默认值 |
| -------------------------- | -------------------------------------- | ----------------- | ------ |
| data                       | 表格数据                               | `Array(二维数组)` | -      |
| columns                    | 列名                                   | `Array`           | -      |
| className                  | 外层组件的 class 名                    | `string`          | -      |
| options.showCopyWithHeader | 右键菜单中是否展示“复制值以及列名”按钮 | `boolean`         | -      |
