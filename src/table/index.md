---
title: Table 表格
group: 组件
toc: content
demo:
    cols: 1
---

# Table 表格

## 何时使用

继承并完全兼容`antd`的`Table`，可以直接替换，并扩充了其他功能

## 示例

<code src="./demos/basic.tsx" description="为标题头添加tooltip">基础使用</code>

## API

### Table

完全继承自`antd`的`Table`组件，参考[Table](https://4x.ant.design/components/table-cn/#API)

### ColumnType

除继承自`Table`组件的 ColumnType 外，还额外扩充以下属性
| 参数 | 说明 | 类型 | 默认值 |
| ----------- | ---------------------------------------- | ----------------- | ------ |
| tooltip | 配置表格 title 提示信息 | `React.ReactNode` \| <a href="https://4x.ant.design/components/tooltip-cn/#API" target="_blank">TooltipProps & { icon: React.ReactNode }</a> | - |
