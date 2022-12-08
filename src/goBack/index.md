---
title: GoBack 返回
group: 组件
toc: content
demo:
    cols: 2
---

# GoBack 返回

## 何时使用

返回匹配的路由， 默认返回浏览器上一级路由

## 示例

<code src="./demos/basic.tsx" title="基础使用"></code>
<code src="./demos/button.tsx" title="Button"></code>

## API

| 参数      | 说明                                                | 类型      | 默认值  |
| --------- | --------------------------------------------------- | --------- | ------- |
| url       | 返回的路由， 如不传参数，则默认返回浏览器上一级 url | `string`  | -       |
| autoClose | 是否关闭浏览器窗口                                  | `boolean` | `false` |
