---
title: StatusTag 状态标签
group: 组件
toc: content
demo:
    cols: 2
---

# StatusTag 状态标签

通过不同颜色的圆形图标区分状态

## 何时使用

StatusTag 组件作用于任务运行状态效果展示

## 示例

<code src="./demos/basic.tsx" description="内置五种不同的 `type` ">基础使用</code>
<code src="./demos/status.tsx" description="用于表示状态的小圆点">状态点</code>
<code src="./demos/border.tsx" description="通过设置 `showBorder={false}` 可以隐藏外边框，默认为存在外边框">外边框</code>
<code src="./demos/colorful.tsx" description="我们添加了多种预设色彩的状态样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值">自定义状态</code>
<code src="./demos/loading.tsx" description="通过设置 `loading` 可以设置加载中的状态标签">加载中</code>

## API

### StatusTag

| 参数       | 说明                                                     | 类型                                                      | 默认值      |
| ---------- | -------------------------------------------------------- | --------------------------------------------------------- | ----------- |
| type       | 设置状态类型                                             | `'warning' \| 'error' \| 'success' \| 'run' \| 'stopped'` | `'success'` |
| showBorder | 是否展示外面的 border                                    | `boolean`                                                 | `true`      |
| color      | 自定义颜色(当 type 所支持的颜色不满足时可用，优先级更高) | `string`                                                  | -           |
| onClick    | 点击事件                                                 | `() => void`                                              | -           |
| loading    | 设置状态标签载入状态                                     | `boolean`                                                 | `false`     |
