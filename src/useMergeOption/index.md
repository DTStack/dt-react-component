---
title: useMergeOption 合并配置项
group: Hooks
toc: content
---

# useMergeOption

## 何时使用

需要合并配置项

## 示例

<code src="./demos/basic.tsx" title="基础使用"></code>

## API

### Returns

| 参数     | 说明           | 类型                            | 默认值 |
| -------- | -------------- | ------------------------------- | ------ |
| disabled | 是否禁用       | `boolean`                       | -      |
| options  | 合并后的配置项 | `T extends Record<string, any>` | -      |
