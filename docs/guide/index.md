---
title: 快速上手
group: 研发
---

# dt-react-component

[![NPM version][npm-image]][npm-url] [![NPM downloads][download-img]][download-url]

[npm-image]: https://img.shields.io/npm/v/dt-react-component.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/dt-react-component
[download-img]: https://img.shields.io/npm/dm/dt-react-component.svg?style=flat
[download-url]: https://www.npmjs.com/package/dt-react-component

## 文档

基于 [Ant Design](https://github.com/ant-design/ant-design) 的 React UI 组件库。 主要用于中，后台产品。我们的目标是**满足更具体的业务场景组件**。 当然，我们也有基于原生 JavaScript 实现的业务组件，例如 **EllipsisText**，**KeyEventListener** 等。

## 何时使用

-   当发现其他组件库提供的基本组件不符合当前的业务场景，并且需要基于这些基本组件实现功能时，可以考虑使用 dt-react-component 解决问题。
-   当业务复杂时，将沉淀越来越多的业务组件。 为了更好地管理组件并减少代码的冗余，可以使用 dt-react-component。 当然，我们欢迎 PR。 我们也将及时审查和合并常见的业务场景组件。

## 安装

```js
// use npm
npm install dt-react-component

// use yarn
yarn add dt-react-component

// use pnpm
pnpm install dt-react-component
```

## 使用

:::info
在开始之前，请确保已经熟悉 [Ant Design 的上手方式](https://4x.ant.design/docs/react/getting-started-cn/)，官方默认以下使用方式是在 Ant Design 的基础上进行使用
:::

<div style="display:flex;gap:8px;">
<div style="flex:1;width: 50%;">

```js
import React from 'react';
import { BlockHeader } from 'dt-react-component';
const App = () => <BlockHeader title="分类标题" showBackground />;
```

</div>
<div style="flex:1;width: 50%;border-radius: 5px;border: 1px solid #ddd;">

```jsx
/**
 * inline: true
 */
import React from 'react';
import { BlockHeader } from 'dt-react-component';
export default () => <BlockHeader title="分类标题" showBackground />;
```

</div>
</div>

### TypeScript

dt-react-component 完全基于 TypeScript 编写，具有完整的类型定义，因此您将拥有更好的体验。

## 按需加载

默认支持基于 ES modules 的 tree shaking，直接引入 `import { BlockHeader } from 'dt-react-component';` 就会有按需加载的效果。
