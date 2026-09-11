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

<code src="./demos/basic.tsx" title="基础使用" description="为标题头添加 tooltip"></code>

<code src="./demos/declarative.tsx" title="声明式列" description="兼容 antd 的 Table.Column JSX 写法"></code>

<code src="./demos/dynamicTitle.tsx" title="动态表头" description="函数式 title 可根据排序状态动态更新，并与 tooltip 一起使用"></code>

<code src="./demos/group.tsx" title="分组表头" description="分组列及其子列均可配置 tooltip"></code>

## API

### Table

完全继承自`antd`的`Table`组件，参考[Table](https://4x.ant.design/components/table-cn/#API)

### ColumnType

除继承自`Table`组件的 ColumnType 外，还额外扩充以下属性
| 参数 | 说明 | 类型 | 默认值 |
| ----------- | ---------------------------------------- | ----------------- | ------ |
| tooltip | 配置表格 title 提示信息 | `React.ReactNode` \| <a href="https://4x.ant.design/components/tooltip-cn/#API" target="_blank">TooltipProps & { icon: React.ReactNode }</a> | - |
