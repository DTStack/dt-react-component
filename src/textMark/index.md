---
title: TextMark 文本标记
group: 组件
toc: content
demo:
    cols: 2
---

# TextMark 文本标记

## 何时使用

文本标记

## 示例

```jsx
import React, { useState } from 'react';
import { Input } from 'antd';
import { TextMark } from 'dt-react-component';
import './demos/index.scss';

export default () => {
    const [value, setValue] = useState('');
    return (
        <>
            <Input
                placeholder="测试以下文本数据"
                style={{ width: '200px' }}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />
            <br />
            <TextMark
                className="story-text-mark"
                title="testTitle"
                text="testText"
                markText={value}
            />
        </>
    );
};
```

## API

| 参数     | 说明           | 类型     | 默认值 |
| -------- | -------------- | -------- | ------ |
| text     | 文本数据       | `string` | -      |
| markText | 需要标记的文本 | `string` | -      |
