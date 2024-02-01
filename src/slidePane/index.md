---
title: SlidePane 右侧面板
group: 组件
toc: content
demo:
    cols: 2
---

# SlidePane 右侧面板

## 何时使用

从页面右侧弹出面板，展示相应内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到原任务。
常用于： 查看详情， 预览较多内容的场景下。

## 示例

<code src="./demos/basic.tsx" title="基础使用"></code>
<code src="./demos/basic_mask.tsx" title="基础 mask 使用"></code>
<code src="./demos/basicSize.tsx" title="尺寸"></code>
<code src="./demos/basic_top.tsx" title="抽屉距顶部高度"></code>
<code src="./demos/customTitle.tsx" title="自定义 Title"></code>
<code src="./demos/tabs.tsx" title="展示 tabs"></code>
<code src="./demos/footer.tsx" title="展示 footer"></code>
<code src="./demos/basicBanner.tsx" title="支持 banner"></code>
<code src="./demos/basicBannerProps.tsx" title="支持传 banner 的 Props 属性"></code>

## API

### AlertProps

[AlertProps](https://4x-ant-design.antgroup.com/components/alert-cn/#API)

| 参数          | 说明                           | 类型                                                  | 默认值    |
| ------------- | ------------------------------ | ----------------------------------------------------- | --------- |
| activeKeys    | 右侧面板的内容的 Tabs 的选中项 | `string`                                              | -         |
| banner        | 提示                           | `React.ReactNode \| AlertProps`                       | -         |
| bodyClassName | 内容容器的类名                 | `string`                                              | -         |
| bodyStyle     | 内容容器的样式                 | `CSSProperties`                                       | -         |
| children      | 右侧面板展示内容               | `(key: string) => React.ReactNode \| React.ReactNode` | -         |
| footer        | 右侧面板的底部内容             | `React.ReactNode`                                     | -         |
| size          | 尺寸                           | `'small' \| 'default' \| 'large'`                     | `default` |
| tabs          | 右侧面板的内容的 Tabs          | `{ key: string; title: React.ReactNode }[]`           | -         |
| title         | 右侧面板的 title               | `React.ReactNode`                                     | -         |

:::info
其余属性继承 [antd4.x 的 Drawer](https://4x.ant.design/components/drawer-cn/#API)
:::
