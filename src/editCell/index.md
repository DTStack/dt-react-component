---
title: EditCell 可编辑长文本省略框
group: 组件
toc: content
demo:
    cols: 2
---

# EditCell 可编辑长文本省略框

## 何时使用

对长文本内容显示做一定限制，超出指定宽度显示省略号，hover 显示完整内容，并且可以对显示的内容作出修改

## 示例

```jsx
import React from 'react';
import { EditCell } from 'dt-react-component';

export default () => {
    return (
        <EditCell
            value="我是很长长长长长长长长长长长长长长长长长长长长长长长长长长的文本"
            keyField="123"
            isView={false}
            onHandleEdit={(keyField, value) => console.log(keyField, value)}
        />
    );
};
```

## API

| 参数         | 说明                                                                                               | 类型                                               | 默认值 |
| ------------ | -------------------------------------------------------------------------------------------------- | -------------------------------------------------- | ------ |
| value        | 默认显示的文本内容                                                                                 | `string`                                           | -      |
| keyField     | 其他需要携带的信息                                                                                 | `string`                                           | -      |
| isView       | 是否展示修改按钮                                                                                   | `boolean`                                          | -      |
| onHandleEdit | 点击确定的按钮触发的回调函数，接受两个参数 keyField：其他需要携带的信息，editValue：输入框的文本值 | `(keyField: string, editValue: EditType) => void;` | -      |
