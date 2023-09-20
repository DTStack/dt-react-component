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

## 代码演示

<code src="./demos/basic.tsx" title="监听任意按键"></code>
<code src="./demos/customKey.tsx" title="监听指定按键"></code>

## API

### KeyEventListener

| 参数      | 说明         | 类型              | 默认值 |
| --------- | ------------ | ----------------- | ------ |
| onKeyDown | 键盘按下执行 | `function`        | -      |
| onKeyUp   | 键盘抬起执行 | `function`        | -      |
| children  | 子组件       | `React.ReactNode` | -      |

### KeyEventListener.KeyCombiner

| 参数      | 说明                                                                                       | 类型              | 默认值 |
| --------- | ------------------------------------------------------------------------------------------ | ----------------- | ------ |
| keyMap    | 监听的一组 key map，eg: { 70: true, 91: true, 16: true } 则表示监听 command+shift+f 组合键 | `object`          | -      |
| onTrigger | 触发事件                                                                                   | `function`        | -      |
| children  | 子组件                                                                                     | `React.ReactNode` | -      |
