---
title: Fullscreen 全屏
group: 组件
toc: content
demo:
    cols: 2
---

# Fullscreen 全屏

## 何时使用

全屏切换操作

## 代码演示

<code src="./demos/basic.tsx" title="基本使用"></code>
<code src="./demos/theme.tsx" title="主题切换"></code>
<code src="./demos/local.tsx" title="局部全屏" iframe="124"></code>
<code src="./demos/custom.tsx" title="自定义全屏图标" ></code>

## API

| 参数         | 说明                       | 类型              | 默认值  |
| ------------ | -------------------------- | ----------------- | ------- |
| target       | 全局操作作用于指定目标对象 | `string`          | -       |
| themeDark    | 是否使用暗黑主题模式       | `boolean`         | `false` |
| iconStyle    | 图标元素样式               | `CSSProperties`   | -       |
| fullIcon     | 自定义全屏图标             | `React.ReactNode` | -       |
| exitFullIcon | 自定义退出全屏图标         | `React.ReactNode` | -       |
