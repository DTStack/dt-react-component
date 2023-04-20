---
title: Dropdown 下拉菜单
group: 组件
toc: content
demo:
    cols: 2
---

# Dropdown 下拉菜单

## 何时使用

支持全选按钮的下拉菜单

## 示例

<code src="./demos/basic.tsx" title="基础使用"></code>
<code src="./demos/virtual.tsx" title="长列表" description="基于 rc-virtual-list 实现虚拟滚动，并支持滚动阴影"></code>
<code src="./demos/submit.tsx" title="提交" description="关闭弹窗触触发 onSubmit"></code>

## API

| 参数              | 说明                               | 类型                                        | 默认值 |
| ----------------- | ---------------------------------- | ------------------------------------------- | ------ |
| value             | 当前选中的值                       | `(string \| number)[]`                      | -      |
| className         | -                                  | `string`                                    | -      |
| options           | Checkbox 指定可选项                | `(string \| number  \| Option)[]`           | `[]`   |
| getPopupContainer | 同 Dropdown 的 `getPopupContainer` | `(triggerNode: HTMLElement) => HTMLElement` | -      |
| onChange          | 变化时的回调函数                   | `(checkedValue) => void`                    | -      |
| onSubmit          | 提交时的回调函数                   | `(checkedValue) => void`                    | -      |
