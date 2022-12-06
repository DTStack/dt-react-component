---
title: ToolModal 工具弹框
group: 组件
toc: content
demo:
    cols: 2
---

# ToolModal 工具弹框

## 何时使用

带有全屏以及可在 modal 上自定义一些 tool

## 示例

```jsx
/**
 * title: "基础使用"
 */
import React, { useState } from 'react';
import { Button } from 'antd';
import { LockOutlined, UnlockOutlined } from '@ant-design/icons';
import { ToolModal } from 'dt-react-component';

export default () => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <Button
                onClick={() => {
                    setVisible((v) => !v);
                }}
            >
                click me
            </Button>
            <ToolModal
                bodyStyle={{
                    padding: '0 0 0 0',
                    position: 'relative',
                }}
                title="ToolModal"
                width={800}
                maskClosable={false}
                fullscreen
                toolbox={[<LockOutlined key="1" />, <UnlockOutlined key="2" />]}
                style={{ height: '560px' }}
                wrapClassName="vertical-center-modal m-log-modal dt_modal-close__icon"
                visible={visible}
                onOk={() => {
                    setVisible(false);
                }}
                onCancel={() => {
                    setVisible(false);
                }}
            >
                <p style={{ textAlign: 'center' }}>hello world</p>
            </ToolModal>
        </>
    );
};
```

## API

| 参数       | 说明                                     | 类型                | 默认值  |
| ---------- | ---------------------------------------- | ------------------- | ------- |
| fullscreen | 是否使用 FullScreenButton 组件内置的图标 | `boolean`           | `false` |
| toolbox    | 用户自定义一些 tool                      | `React.DOM \|\| []` | -       |
| visible    | 控制 modal 显示隐藏                      | `boolean`           | -       |

:::info
其余属性继承 Antd Modal API
:::
