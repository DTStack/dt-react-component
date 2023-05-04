<h1 align="center">dt-react-component</h1>

<div align="center">

基于 [Ant Design](https://github.com/ant-design/ant-design) 的 React UI 组件库

[![NPM version][npm-image]][npm-url] [![NPM downloads][download-img]][download-url]

[npm-image]: https://img.shields.io/npm/v/dt-react-component.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/dt-react-component
[download-img]: https://img.shields.io/npm/dm/dt-react-component.svg?style=flat
[download-url]: https://www.npmjs.com/package/dt-react-component

</div>

[English](./README.md) | 简体中文

## 文档

查看[**在线文档**](https://dtstack.github.io/dt-react-component/)

或者查看老版本：

-   [v3.x](https://dtstack.github.io/dt-react-component/)
-   [v2.x](https://liuxy0551.github.io/dt-react-component/)

基于 [Ant Design](https://github.com/ant-design/ant-design) 的 React UI 组件库。 主要用于中，后台产品。我们的目标是**满足更具体的业务场景组件**。 当然，我们也有基于原生 javascript 实现的业务组件，例如**ContextMenu**，**KeyEventListener**等。

## 何时使用

-   当发现其他组件库提供的基本组件不符合当前的业务场景，并且需要基于这些基本组件实现功能时，可以考虑使用 dt-react-component 解决问题。
-   当业务复杂时，将沉淀越来越多的业务组件。 为了更好地管理组件并减少代码的冗余，可以使用 dt-react-component。 当然，我们欢迎 PR。 我们也将及时审查和合并常见的业务场景组件。

## 安装

```shell
# use npm
npm install dt-react-component

# use yarn
yarn add dt-react-component

# use pnpm
pnpm install dt-react-component
```

## 使用

```jsx
import React from 'react';
import { BlockHeader } from 'dt-react-component';
const App = () => <BlockHeader title="分类标题" showBackground />;
```

### 按需加载

我们默认支持基于 ES modules 的 tree shaking，对于 js 部分，直接引入 `import { BlockHeader } from 'dt-react-component';` 就会有按需加载的效果。

### TypeScript

dt-react-component 完全基于 TypeScript 编写，具有完整的类型定义，因此您将拥有更好的体验。

## 如何贡献

[贡献指南](./CONTRIBUTING.md)

## 开发

本地克隆:

```bash
git clone git@github.com:DTStack/dt-react-component.git
cd dt-react-component
npm install
npm run dev
```

打开浏览器并访问 [http://127.0.0.1:8000](http://127.0.0.1:8000)，我们基于 dumi 管理组件。 更多信息请访问 [dumi](https://d.umijs.org/).

## 发布

```bash
yarn build
yarn release -r 3.0.1
npm publish --registry https://registry.npmjs.org/
```

## 贡献

我们欢迎所有贡献。 您可以将任何想法提交为 [pull requests](https://github.com/DTStack/dt-react-component/pulls) 或者 [issues](https://github.com/DTStack/dt-react-component/issues).

最后，感谢我们所有 [contributors](https://github.com/DTStack/dt-react-component/graphs/contributors)

## 许可证

ISC
