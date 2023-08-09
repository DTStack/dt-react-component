---
title: 从 v3 到 v4
group: 研发
order: 6
---

本文档将帮助你把 dt-react-component 从 `3.x` 版本升级到 `4.x` 版本。

## 一、升级准备

1、请先升级到 3.x 的最新版本，保证产品本地没有报错。
2、产品建议使用 `antd@4.22.5`、`react@16.13.1`。

-   如果你仍在使用 React 15，请参考 [React 16 升级文档](https://reactjs.org/blog/2017/09/26/react-v16.0.html#breaking-changes)。
-   其余 React 16 废弃生命周期 API 请参考 [迁移导引](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path)。

## 二、4.x 不兼容的变化

### 2.1、移除的组件

-   移除 `Breadcrumb`，迁移至 `dt-common/src/components/breadcrumb`。
-   移除 `GoBack`，迁移至 `dt-common/src/components/goBack`。
-   移除 `ChromeDownload`，迁移至 `dt-common/src/components/chromeDownload`。
-   移除 `LoadError`，整合进 `ErrorBoundary` 中。
-   移除 `EasySelect`。
-   移除 `EditCell`。
-   移除 `EditInput`。
-   移除 `InterruptController`。
-   移除 `ScrollText`。
-   移除 `SearchModal`。
-   移除 `TableCell`。
-   移除 `TextMark`。
-   移除 `ToolModal`。

### 2.2、组件重构更名

#### MulSelectDropdown [#296](https://github.com/DTStack/dt-react-component/pull/296)

-   重命名为 `Dropdown.Select`，产品中所有用到 `antd4 Dropdown` 的地方也可以从 RC 里面导出。
-   移除 `okText` 和 `cancelText` 属性，目前从组件设计角度来看不需要这两个字段。
-   移除 `renderNode`，功能迁移至 `children`。
-   重命名 `popupContainer` 为 `getPopupContainer`。
-   重命名 `onOk` 为 `onSubmit`。
-   优化 UI 界面。

```diff
- import { MulSelectDropdown }  from 'dt-react-component';
+ import { Dropdown } from 'dt-react-component;
const { Select } = Dropdown;

export function () => {
	return (
-     <MulSelectDropdown />
+ 	  <Select />
    )
}
```

#### ModalWithForm [#305](https://github.com/DTStack/dt-react-component/pull/305)

-   重命名为 `Modal.Form`，产品中所有用到 `antd4 Modal` 的地方也可以从 RC 里面导出。
-   支持 `Modal` 导出，集成 `antd4 Modal` 所有组件和 hooks，新增 Form 组件。
-   移除 `hideModalHandler`，使用 `onCancel`。
-   在 `afterClose` 中重置 form 表单。
-   `modelClass` 重命名 `modalClassName`。
-   废弃 `record` 参数。

#### Cookies [#294](https://github.com/DTStack/dt-react-component/pull/294)

-   使用方式变更，由组件形式改为自定义 hooks 形式，名字变更为 `useCookieListener`。
-   新增 `timeout` 参数，自定义轮训时间, 默认为 `200毫秒`。
-   新增 `immediately` 参数，用于判断新增 `Cookie` 是否也会触发 `handler`，默认为 `false`。这里与 `3.x` 保持一致，即新增时不会触发`handler`。
-   细节改动：`prevCookies` 默认值为 `document.cookie`，`3.x` 为空字符串，导致第一次组件挂载时就会触发相关的 `handler`。

```js
useCookieListener(
    handler: (params: {prevCookies: string, nextCookies: string, changedFields?: Fields[]}) => void,
    watchFields: string[],
    options?: ICookieOptions
)
```

#### CopyIcon [#329](https://github.com/DTStack/dt-react-component/pull/329)

-   重命名为 `Copy`，基于 `useClippy` 进行二次封装。
-   `customRender` 属性重命名为 `button`。
-   新增 `hideTooltip` 属性用于控制是否隐藏 `Tooltip`。
-   新增 `onCopy` 回调函数。

#### MultiSearchInput [#316](https://github.com/DTStack/dt-react-component/pull/316)

-   重命名为 `Input.Match`。
-   原 `onChange` 回调方法参数由 `e.target.value` 改为了 `e`，升级之后需要注意
-   原 `filterOptions` 属性默认值由 `['precise', 'front', 'tail']` 改为了 `['caseSensitive', 'precise', 'front', 'tail']`，若使用了默认值值升级后模糊搜索会多一个 区分大小写匹配的选项，解决方式：手动传递 `filterOptions` 为 `['precise', 'front', 'tail']`。

### 2.3、属性调整

#### MarkdownRender [#307](https://github.com/DTStack/dt-react-component/pull/307)

-   重命名 `text` 为 `value`。
-   增加 `dark` 属性，暗黑模式。
-   修复 sql 语法高亮的问题。

#### BlockHeader [#298](https://github.com/DTStack/dt-react-component/pull/298)

-   移除 `isSmall`，增加 `size` 属性，共有两个尺寸 `small` 和 `middle`，默认为 `middle`。

#### Fullscreen [#304](https://github.com/DTStack/dt-react-component/pull/304)

-   移除 `customIcon` 属性，禁止组件传输非定义的其他的 `props`；

#### ProgressLine [#321](https://github.com/DTStack/dt-react-component/pull/321)

-   移除 `num` 属性，值通过 `title` 属性一起传入组件即可。
-   移除 `needTitle` 属性，根据 `title` 属性值直接判断是否展示。
-   `percent` 属性改为字符串，传值需要带上 `%`。
-   新增 `tooltipProps` 属性，类型为 `antd4 Tooltip` 的 `TooltipProps`。

#### GlobalLoading [#322](https://github.com/DTStack/dt-react-component/pull/322)

-   移除 `prefix` 属性。

## 三、4.x 中兼容的变化

### 3.1、属性调整

#### Empty [#295](https://github.com/DTStack/dt-react-component/pull/295)

-   显式暴露出 `imageStyle` 属性。
-   内置图片采用 `png` 格式，且对图片文件大小进行压缩。

#### EllipsisText [#277](https://github.com/DTStack/dt-react-component/pull/277)

-   自动识别内容超过。
-   在超出情况下，继承父级的鼠标浮动样式，否则为 `pointer`。
-   `maxWitdh` 支持数字、px、% 和 calc(100% - 200px)。
-   支持内容为行内元素，包括返回为行内元素的 react 组件。

#### StatusTag [#310](https://github.com/DTStack/dt-react-component/pull/310)

-   剔除冗余代码不影响之前使用。

#### ErrorBoundary [#308](https://github.com/DTStack/dt-react-component/pull/308)

-   新增参数 `errorPage`, 用于自定义错误展示页面。
-   新增参数 `onError`, 当捕获错误时触发。
-   内部整合了 `3.x` 的 `LoadError` 组件。

#### Resize [#324](https://github.com/DTStack/dt-react-component/pull/324)

-   新增 `observerEle` 属性，支持自定义监听元素。

#### SpreadSheet [#325](https://github.com/DTStack/dt-react-component/pull/325)

-   新增 `className` 属性，可自定义外层组件的 class 名。

#### KeyEventListener [#326](https://github.com/DTStack/dt-react-component/pull/326)

-   React hook 重构

#### SlidePane [#330](https://github.com/DTStack/dt-react-component/pull/330)

-   使用 rc-drawer 重写组件，改写为函数组件。
-   props 变动：不可任意传入 props，保留原有支持的 props。
-   新增 `bodyStyle` 可以复写面板内部的样式，一般多为 `padding` 之类的设定。

#### SwitchWindow [#327](https://github.com/DTStack/dt-react-component/pull/327)

-   改写成 hooks
-   不支持 `props` 传入 `children` 的形式
-   使用方式变更

```js
useWindowSwitchListener(() => {
    handleSwitch();
});
```

### 3.2、新增组件

#### Form.Table [#293](https://github.com/DTStack/dt-react-component/pull/293)

-   支持 `Form` 导出，集成 `antd4 Form` 所有组件和 hooks，新增 Table 组件

#### CollapsibleActionItems [#300](https://github.com/DTStack/dt-react-component/pull/300)

-   对过多的操作项进行自动折叠，多用于表格操作列中。
-   支持通过 `maxCount` 指定最大展示数量，默认为 3 个。
-   支持通过 `divider` 与 `collapseIcon` 自定义分割符与折叠图标。
-   支持通过 `dropdownProps` 与 `buttonProps` 进行参数透传。

## 五、遇到问题

`4.x` 做了比较多的改进和重构，我们尽可能收集了已知的所有不兼容变化和相关影响，但是有可能还是有一些场景我们没有考虑到。如果你在升级过程中遇到了问题，请到 [dt-react-component Issues](https://github.com/DTStack/dt-react-component/issues) 进行反馈，我们会尽快响应和相应改进。
