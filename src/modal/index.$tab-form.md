---
title: Modal.Form
---

# Modal.Form 带 Form 表单的模态框

## 何时使用

当需要在模态框中收集用户的表单信息，可以在这个组件中传入自己想要的表单元素

## 示例

<code src="./demos/form/basics.tsx" title="基础使用"></code>
<code src="./demos/form/advance.tsx" title="接收函数组件"></code>
<code src="./demos/form/classComponent.tsx" title="接收类组件"></code>

## API

| 参数           | 说明                                                                                           | 类型        | 默认值     |
| -------------- | ---------------------------------------------------------------------------------------------- | ----------- | ---------- |
| onSubmit       | 点击确定按钮后，表单的值验证无误后的回调，接受两个参数 value:表单的值，record:其他想要提交的值 | `Function`  | -          |
| cancelText     | 模态框取消按钮的文本                                                                           | `string`    | 取消       |
| okText         | 模态框确定按钮的文本                                                                           | `string`    | 确定       |
| okType         | 确认按钮类型                                                                                   | `string`    | `primary`  |
| visible        | 模态框显示隐藏的状态                                                                           | `boolean`   | -          |
| title          | 标题                                                                                           | `ReactNode` | -          |
| modalClassName | 模态框样式类名                                                                                 | `string`    | -          |
| children       | 传入模态框的表单元素                                                                           | `ReactNode` | -          |
| layout         | 表单布局                                                                                       | `string`    | `vertical` |
| maskClosable   | 点击蒙层是否允许关闭                                                                           | `boolean`   | `false`    |

:::info
其余参数继承 antd4.x 的 [Form](https://ant.design/components/form-cn/#API) 和 [Modal](https://4x.ant.design/components/modal-cn/#API)
:::
