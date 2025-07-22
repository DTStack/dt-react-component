---
title: Button 按钮
group: 组件
toc: content
demo:
    cols: 2
---

# Button 按钮

## 何时使用

按钮用于开始一个即时操作。

## 代码演示

<code src="./demos/basic.tsx" title="基本使用" description="按钮的基本使用，包括不同类型的按钮、带图标的按钮、纯图标按钮、不同尺寸的按钮以及禁用状态的按钮。"></code>

<code src="./demos/loading.tsx" title="加载状态" description="展示按钮的加载状态和危险按钮。"></code>

<code src="./demos/block.tsx" title="块级按钮" description="展示块级按钮和幽灵按钮。"></code>

## API

### Button

Button 组件支持 antd Button 组件的所有属性，详见 [Ant Design Button API](https://ant.design/components/button-cn/#API)。

## 注意事项

-   使用自定义图标时，请确保图标组件符合规范，建议使用项目内的图标组件。
-   图标大小会根据按钮的 `size` 属性自动调整，也可以通过设置图标组件的 `style` 属性来手动调整大小。
-   当只设置 `icon` 而不设置 `children` 时，按钮将只显示图标。
-   本组件是对 antd Button 的封装，支持 antd Button 的所有属性和事件。
