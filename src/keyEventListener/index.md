---
title: KeyEventListener 键盘监听
group: 组件
toc: content
demo:
    cols: 2
---

# KeyEventListener 键盘监听

## 何时使用

监听键盘事件

## 示例

```jsx
import React from 'react';
import { KeyEventListener } from 'dt-react-component';

const { KeyCombiner } = KeyEventListener;

export default () => {
    return (
        <KeyCombiner
            onTrigger={(evt) => {
                evt.preventDefault();
                console.log('command+shift+f action');
            }}
            keyMap={{
                70: true,
                91: true,
                16: true,
            }}
        >
            <div>尝试按下 command+shift+f 看看控制台是否监听了键盘事件</div>
        </KeyCombiner>
    );
};
```

```jsx
import React from 'react';
import { KeyEventListener } from 'dt-react-component';

export default () => {
    return (
        <KeyEventListener
            onKeyDown={(evt) => {
                console.log('onkeyDown');
            }}
        >
            {<div>尝试按下任意键盘，看看控制台打印结果</div>}
        </KeyEventListener>
    );
};
```

## API

| 参数      | 说明                                                                                       | 类型       | 默认值 |
| --------- | ------------------------------------------------------------------------------------------ | ---------- | ------ |
| keyMap    | 监听的一组 key map，eg: { 70: true, 91: true, 16: true } 则表示监听 command+shift+f 组合键 | `object`   | -      |
| onTrigger | 触发事件                                                                                   | `function` | -      |
