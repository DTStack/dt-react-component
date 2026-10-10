---
title: Select 选择器
group: 组件
toc: content
demo:
    cols: 2
---

# Select 选择器

基于 antd Select，增加多选区域限高和自动滚动，并统一加载、空状态展示。搜索时支持中文输入法：合成输入期间不调用 `onSearch`，合成结束后发送完整内容，并抑制紧随其后的同值搜索回调。

## 示例

<code src="./demos/maxRows.tsx" description="`maxRows` 大于 0 时启用限高，选中选项后在下一帧平滑滚动到底部。适用于 `multiple` 和 `tags` 模式；该参数控制选择器区域，不控制下拉列表高度。">多选区域限高</code>
<code src="./demos/search.tsx" description="输入拼音过程中不会调用 `onSearch`。选字完成后才更新搜索内容，适合在 `onSearch` 中触发远程查询；组件本身不提供防抖或请求管理。">中文搜索</code>
<code src="./demos/empty.tsx" description="无匹配选项时，`loading` 为 `true` 展示小尺寸 Spin，否则展示组件库 Empty。可以通过 `notFoundContent` 自定义内容。">加载与空状态</code>

## API

### Select

其余属性沿用 antd Select。

| 参数    | 说明                                                                               | 类型     | 默认值 |
| ------- | ---------------------------------------------------------------------------------- | -------- | ------ |
| maxRows | 选择器最大展示行数。大于 0 时启用限高和选中后自动滚动；未设置或小于等于 0 时不启用 | `number` | -      |
