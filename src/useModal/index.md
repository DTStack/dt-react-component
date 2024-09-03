---
title: useModal 保存当前数据并打开弹框
group: Hooks
toc: content
---

# useModal

## 何时使用

保存当前数据并打开弹框

## 示例

<code src="./demos/basic.tsx" title="基础使用"></code>

## API

### Returns

| 参数    | 说明     | 类型                   | 默认值      |
| ------- | -------- | ---------------------- | ----------- |
| visible | 是否可见 | `boolean`              | `false`     |
| record  | 选中数据 | `T \| undefined`       | `undefined` |
| open    | 打开     | `(record?: T) => void` | -           |
| close   | 关闭     | `() => void`           | -           |
