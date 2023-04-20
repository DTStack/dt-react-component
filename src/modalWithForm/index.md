---
title: ModalWithForm 带表单的模态框
group: 组件
toc: content
demo:
    cols: 2
---

# ModalWithForm 带表单的模态框

## 何时使用

当需要在模态框中收集用户的表单信息，可以在这个组件中传入自己想要的表单元素

## 示例

```jsx
import React, { useState } from 'react';
import { ModalWithForm } from 'dt-react-component';
import { Button, Form, Input } from 'antd';

const Modal = ModalWithForm((_props) => {
    return (
        <Form.Item label="username" name={'username'} rules={[{ max: 10 }]}>
            <Input />
        </Form.Item>
    );
});

export default () => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <Button onClick={() => setVisible(true)}>click</Button>
            <Modal
                title="ModalWithForm"
                visible={visible}
                hideModalHandler={() => setVisible((v) => !v)}
                onSubmit={(value) => {
                    console.log(value);
                }}
            />
        </>
    );
};
```

## API

| 参数                | 说明                                                                                           | 类型                         | 默认值    |
| ------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------- | --------- |
| hideModalHandler    | 控制模态框的显示影藏                                                                           | `Function`                   | -         |
| onSubmit            | 点击确定按钮后，表单的值验证无误后的回调，接受两个参数 value:表单的值，record:其他想要提交的值 | `Function`                   | -         |
| cancelText          | 模态框取消按钮的文本                                                                           | `string`                     | 取消      |
| okText              | 模态框确定按钮的文本                                                                           | `string`                     | 确定      |
| okType              | 确认按钮类型                                                                                   | `string`                     | `primary` |
| record              | 其他想要提交的参数                                                                             | `string \| number \| object` | -         |
| visible             | 模态框显示隐藏的状态                                                                           | `boolean`                    | -         |
| title               | 标题                                                                                           | `React.ReactNode`            | -         |
| onCancel            | 点击取消的回调                                                                                 | `Function`                   | -         |
| width               | modal 宽度                                                                                     | `string \| number`           | -         |
| modelClass          | modal 样式类名                                                                                 | `string`                     | -         |
| FormComponent       | 传入模态框的表单元素                                                                           | `FormComponentProps`         | -         |
| footer              | 底部内容，当不需要默认底部按钮时，可以设为 footer={null}                                       | `string \| React.ReactNode`  | -         |
| centered            | 垂直居中展示 Modal                                                                             | `boolean`                    | `false`   |
| cancelButtonProps   | cancel 按钮 props                                                                              | `ButtonProps`                | -         |
| notSubmitCloseModal | 禁止提交后自动关闭 modal                                                                       | `boolean`                    | `false`   |
| confirmLoading      | ok 按钮 props                                                                                  | `boolean`                    | -         |
| okButtonProps       | 确定按钮 loading                                                                               | `boolean`                    | `false`   |
| maskClosable        | 点击蒙层是否隐藏 Modal                                                                         | `boolean`                    | `false`   |

:::info
其余参数[继承 antd4.x 的 Form](https://ant.design/components/form-cn/#API)
:::
