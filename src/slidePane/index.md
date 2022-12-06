---
title: SlidePane 右侧面板
group: 组件
toc: content
demo:
    cols: 2
---

# SlidePane 右侧面板

## 何时使用

从页面右侧弹出面板，展示相应内容

## 示例

```jsx
import React, { useState } from 'react';
import { SlidePane } from 'dt-react-component';
import { Button } from 'antd';

export default () => {
    const [visible, setVisible] = useState(false);
    const [width, setWidth] = useState(80);

    return (
        <>
            width: {width}%
            <input
                type="range"
                value={width}
                min={10}
                max={100}
                onChange={(e) => setWidth(e.target.value)}
            />
            <br />
            <Button style={{ marginBottom: '10px' }} onClick={() => setVisible((v) => !v)}>
                click me
            </Button>
            <SlidePane
                visible={visible}
                style={{
                    right: '-20px',
                    width: `${width}%`,
                    minHeight: '600px',
                    height: '100%',
                }}
                onClose={() => setVisible(false)}
            >
                <div>hello world</div>
            </SlidePane>
        </>
    );
};
```

## API

| 参数    | 说明                | 类型       | 默认值 |
| ------- | ------------------- | ---------- | ------ |
| visible | SlidePanel 是否可见 | `boolean`  | -      |
| onClose | 关闭回调            | `function` | -      |
