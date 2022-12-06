---
title: MulSelectDropdown 可多选的下拉菜单
group: 组件
toc: content
demo:
    cols: 2
---

# MulSelectDropdown 可多选的下拉菜单

## 何时使用

当页面上的操作命令过多时，用此组件可以收纳操作元素。点击触点，会出现一个多选下拉菜单。可在列表中进行选择，并执行相应的命令。

## 示例

```jsx
import React from 'react';
import { MulSelectDropdown } from 'dt-react-component';

export default () => {
    return (
        <MulSelectDropdown
            options={[
                { label: '选项一', value: 1 },
                { label: '选项二', value: 2, disabled: true },
            ]}
            onOk={(value) => {
                console.log(value);
            }}
            renderNode={(openFun) => <a onClick={openFun}>打开下拉</a>}
            value={[2]}
        />
    );
};
```

## API

| 参数           | 说明                                                                                 | 类型                                                 | 默认值                |
| -------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------- | --------------------- |
| value          | 当前选中的值                                                                         | `Array`                                              | -                     |
| onOk           | 确认 callback , 该函数包含一个参数，参数为当前选中的参数                             | `function(selectValues)`                             | -                     |
| renderNode     | 渲染触发显示下拉菜单的节点，函数包含一个参数（触发显示下拉菜单的函数），返回一个节点 | `(openFun) => ReactNode`                             | 打开                  |
| options        | 设置下拉菜单的选项                                                                   | `Array<>{ label: string, value: string \| number } ` | -                     |
| onChange       | 选中或改变选项时，调用此函数                                                         | `function(selectValues)`                             | -                     |
| popupContainer | 下拉菜单渲染的父节点，默认渲染到 body 上                                             | `() => Node`                                         | `	() => document.body` |
