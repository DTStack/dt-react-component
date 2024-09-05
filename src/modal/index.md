---
title: Modal 模态框
group: 组件
toc: content
---

# Modal 模态框

## 何时使用

-   使用模态框时，使用该组件替换 antd 的 Modal
-   支持 size 属性来快速设置宽度；限制 Modal 的高度为 600px，超出内部滚动
-   支持 banner 属性来快速实现 Modal 内部提示

## 示例

<code src="./demos/basic.tsx" title="最大高度限制"></code>
<code src="./demos/size.tsx" title="尺寸"></code>
<code src="./demos/banner.tsx" title="支持 banner"></code>
<code src="./demos/bannerProps.tsx" title="支持传 banner 的 Props 属性"></code>

## API

### AlertProps

[AlertProps](https://4x-ant-design.antgroup.com/components/alert-cn/#API)

| 参数   | 说明 | 类型                                          | 默认值    |
| ------ | ---- | --------------------------------------------- | --------- |
| size   | 尺寸 | `'small' \| 'default' \| 'middle' \| 'large'` | `default` |
| banner | 提示 | `React.ReactNode \| AlertProps`               |           |

:::info
其余参数继承 antd4.x 的 [Modal](https://4x.ant.design/components/modal-cn/#API)
:::
