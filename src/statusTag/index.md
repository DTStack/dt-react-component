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

<code src="./demos/basic.tsx" description="内置6种不同的`color`，三种类型`default | outline | fill`，同时我们添加了多种预设色彩的状态样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值">基础使用</code>
<code src="./demos/status.tsx" description="用于表示状态的小圆点">状态点</code>
<code src="./demos/loading.tsx" description="通过设置 `loading` 可以设置加载中的状态标签">加载中</code>
<code src="./demos/icon.tsx" description="可以通过`icon`自定义图标">加载中</code>

## API

### StatusTag

| 参数       | 说明                                                                | 类型                                                                           | 默认值    |
| ---------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------ | --------- |
| color      | 状态色，内置了六种颜色，不满足时可自定义(仅支持 RGB 和十六进制颜色) | `blue \| yellow \| green \| gray \| red \| purple \| cyan \| pink` \| `string` | `green`   |
| icon       | 自定义图标                                                          | `React.ReactNode`                                                              | -         |
| loading    | 状态标签载入状态                                                    | `boolean`                                                                      | `false`   |
| type       | 状态类型                                                            | `default \| outline \| fill`                                                   | `default` |
| background | 背景颜色，仅在 type 为 fill 的情况下生效                            | `string`                                                                       | `--`      |
