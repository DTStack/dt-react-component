---
title: ProgressLine 进度条
group: 组件
toc: content
demo:
    cols: 2
---

# ProgressLine 进度条

## 何时使用

ProgressLine 组件作用于进度条状态效果展示

## 示例

```jsx
import React from 'react';
import { ProgressLine } from 'dt-react-component';

export default () => {
    const wrapperStyle: any = { display: 'flex', alignItems: 'center', marginBottom: '14px' };
    const labelStyle: any = { margin: '0 16px', width: '18%', textAlign: 'right' };
    const defaultStyle = 'rgb(159,148,244)';

    return (
        <div>
            <div style={wrapperStyle}>
                <div style={labelStyle}>禁用头部描述:</div>
                <ProgressLine
                    needTitle={false}
                    color="#3BCEFF"
                    title="衍生标签"
                    num={20}
                    percent="20%"
                />
                &nbsp;
            </div>
            <div style={wrapperStyle}>
                <div style={labelStyle}>默认使用:</div>
                <ProgressLine
                    color="#3BCEFF"
                    title="衍生标签"
                    num={20}
                    percent="20%"
                    width="280px"
                />
                &nbsp;
            </div>
            <div style={wrapperStyle}>
                <div style={labelStyle}>修改 title:</div>
                <ProgressLine
                    color="#3BCEFF"
                    title="原子标签"
                    num={20}
                    percent="20%"
                    width="280px"
                />
                &nbsp;
            </div>
            <div style={wrapperStyle}>
                <div style={labelStyle}>修改 color:</div>
                <ProgressLine
                    color={defaultStyle}
                    title="原子标签"
                    num={20}
                    percent="20%"
                    width="280px"
                />
                &nbsp;
            </div>
            <div style={wrapperStyle}>
                <div style={labelStyle}>修改 num:</div>
                <ProgressLine
                    color="#3BCEFF"
                    title="原子标签"
                    num={45}
                    percent="45%"
                    width="280px"
                />
                &nbsp;
            </div>
            <div style={wrapperStyle}>
                <div style={labelStyle}>修改 width:</div>
                <ProgressLine
                    color="#3BCEFF"
                    title="原子标签"
                    num={20}
                    percent="20%"
                    width="350px"
                />
                &nbsp;
            </div>
            <div style={wrapperStyle}>
                <div style={labelStyle}>修改 percent:</div>
                <ProgressLine
                    color="#3BCEFF"
                    title="原子标签"
                    num={75}
                    percent="75%"
                    width="280px"
                />
                &nbsp;
            </div>
        </div>
    );
};
```

```jsx
/**
 * title: "控制进度条描述"
 */
import React, { useState } from 'react';
import { ProgressLine } from 'dt-react-component';
import { Button } from 'antd';

export default () => {
    const [needTitle, setNeedTitle] = useState(false);

    return (
        <>
            <Button
                type="primary"
                onClick={() => setNeedTitle((i) => !i)}
                style={{ marginBottom: 16 }}
            >
                设置是否需要 title
            </Button>
            <ProgressLine
                needTitle={needTitle}
                color="#3BCEFF"
                title="衍生标签"
                num={20}
                percent="20%"
            />
        </>
    );
};
```

```jsx
/**
 * title: "控制描述属性"
 */
import React, { useState } from 'react';
import { ProgressLine } from 'dt-react-component';
import { Input } from 'antd';

export default () => {
    const [title, setTitle] = useState('衍生标签');

    return (
        <>
            <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ marginBottom: 16 }}
            ></Input>
            <ProgressLine color="#3BCEFF" title={title} num={35} percent="60%" />
        </>
    );
};
```

```jsx
/**
 * title: "控制进度"
 */
import React, { useState } from 'react';
import { ProgressLine } from 'dt-react-component';
import { InputNumber } from 'antd';

export default () => {
    const [num, setNum] = useState(60);

    return (
        <>
            <InputNumber
                value={num}
                onChange={(value) => setNum(value)}
                style={{ marginBottom: 16 }}
            ></InputNumber>
            <ProgressLine color="#3BCEFF" title="衍生标签" num={num} percent="60%" />
        </>
    );
};
```

```jsx
/**
 * title: "控制百分比"
 */
import React, { useState } from 'react';
import { ProgressLine } from 'dt-react-component';
import { InputNumber } from 'antd';

export default () => {
    const [num, setNum] = useState(60);

    return (
        <>
            <InputNumber
                value={num}
                onChange={(value) => setNum(value)}
                style={{ marginBottom: 16 }}
            ></InputNumber>
            <ProgressLine color="#3BCEFF" title="衍生标签" num={num} percent={`${num}%`} />
        </>
    );
};
```

```jsx
/**
 * title: "控制颜色"
 */
import React, { useState } from 'react';
import { ProgressLine } from 'dt-react-component';

export default () => {
    const [color, setColor] = useState('#e66465');

    return (
        <>
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
            <ProgressLine color={color} title="原子标签" num={35} percent="60%" />
        </>
    );
};
```

```jsx
/**
 * title: "控制宽度"
 */
import React, { useState } from 'react';
import { ProgressLine } from 'dt-react-component';

export default () => {
    const [width, setWidth] = useState('100');

    console.log('width:', width);
    return (
        <>
            <input
                type="range"
                value={width}
                min="0"
                max="1000"
                onChange={(e) => setWidth(e.target.value)}
            />
            <ProgressLine
                color="#3BCEFF"
                title="原子标签"
                num={35}
                percent="60%"
                width={`${width}px`}
            />
        </>
    );
};
```

## API

| 参数      | 说明                                               | 类型               | 默认值      |
| --------- | -------------------------------------------------- | ------------------ | ----------- |
| className | 设置组件 className                                 | `string`           | -           |
| needTitle | 设置进度条头部描述是否展示，可选值为 true 或 false | `boolean`          | `true`      |
| title     | 设置进度条头部描述名                               | `string \| number` | -           |
| num       | 设置进度条头部描述属性值                           | `string \| number` | -           |
| percent   | 设置进度条头部描述属性值百分比                     | `string \| number` | -           |
| color     | 设置进度条颜色                                     | `string`           | `'#3BCEFF'` |
| width     | 设置组件长度                                       | `string \| number` | `'280px'`   |
