---
title: Drawer 抽屉
group: 组件
toc: content
demo:
    cols: 2
---

# Drawer 抽屉

## 何时使用

从页面右侧弹出抽屉，展示相应内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到原任务。
常用于： 查看详情， 预览较多内容的场景下。

## 示例

<code src="./demos/basic.tsx" title="基础使用"></code>
<code src="./demos/basic_type.tsx" title="两种类型的 SlidePane" description="表单类型默认展示`mask`且不可点击关闭，且不可配置；正常类型默认不展示`mask`，`mask | maskClosable`可以配置"></code>
<code src="./demos/basicSize.tsx" title="尺寸"></code>
<code src="./demos/basic_top.tsx" title="抽屉距顶部高度"></code>
<code src="./demos/customTitle.tsx" title="自定义 Title"></code>
<code src="./demos/tabs.tsx" title="展示 tabs"></code>
<code src="./demos/tabsControl.tsx" title="展示 tabs 且 tabs 受控"></code>
<code src="./demos/footer.tsx" title="展示 footer"></code>
<code src="./demos/basicBanner.tsx" title="支持 banner"></code>
<code src="./demos/basicBannerProps.tsx" title="支持传 banner 的 Props 属性"></code>
<code src="./demos/basic_two.tsx" title="二级弹窗"></code>

## API

### AlertProps

[AlertProps](https://4x-ant-design.antgroup.com/components/alert-cn/#API)

| 参数          | 说明                               | 类型                                                  | 默认值                 |
| ------------- | ---------------------------------- | ----------------------------------------------------- | ---------------------- |
| activeKey     | 右侧面板的内容的 Tabs 的选中项     | `string`                                              | -                      |
| banner        | 提示                               | `React.ReactNode \| AlertProps`                       | -                      |
| bodyClassName | 内容容器的类名                     | `string`                                              | -                      |
| bodyStyle     | 内容容器的样式                     | `CSSProperties`                                       | -                      |
| children      | 右侧面板展示内容                   | `(key: string) => React.ReactNode \| React.ReactNode` | -                      |
| defaultKey    | 右侧面板的内容的 Tabs 的默认选中项 | `string`                                              | -                      |
| footer        | 右侧面板的底部内容                 | `React.ReactNode`                                     | -                      |
| size          | 尺寸                               | `small \| default \| large`                           | `default`              |
| tabs          | 右侧面板的内容的 Tabs              | `{ key: string; title: React.ReactNode }[]`           | -                      |
| title         | 右侧面板的 title                   | `React.ReactNode`                                     | -                      |
| type          | 右侧面板的类型                     | `SlidePaneType.Form \| SlidePaneType.Normal`          | `SlidePaneType.Normal` |
| onChange      | 右侧面板的 Tabs 切换回调           | `(key: string) => void`                               | -                      |

:::info
其余属性继承 [antd4.x 的 Drawer](https://4x.ant.design/components/drawer-cn/#API)
:::
