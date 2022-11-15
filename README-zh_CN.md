# dt-react-component

[![NPM version][npm-image]][npm-url] [![NPM downloads][download-img]][download-url]

[npm-image]: https://img.shields.io/npm/v/dt-react-component.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/dt-react-component

[download-img]: https://img.shields.io/npm/dm/dt-react-component.svg?style=flat
[download-url]: https://www.npmjs.com/package/dt-react-component

[English](./README.md) | 简体中文

## 文档
- [v2.x](https://liuxy0551.github.io/dt-react-component/)
- [v3.x-beta](https://dtstack.github.io/dt-react-component/)

基于 [ant-design](https://github.com/ant-design/ant-design) 的 React UI 组件库。 主要用于中，后台产品。我们的目标是**满足更具体的业务场景组件**。 当然，我们也有基于原生 javascript 实现的业务组件，例如**ContextMenu**，**KeyEventListener**等。

## 何时使用
+ 当发现其他组件库提供的基本组件不符合当前的业务场景，并且需要基于这些基本组件实现功能时，可以考虑使用 dt-react-component 解决问题。
+ 当业务复杂时，将沉淀越来越多的业务组件。 为了更好地管理组件并减少代码的冗余，可以使用 dt-react-component。 当然，我们欢迎 PR。 我们也将及时审查和合并常见的业务场景组件。


## 如何贡献

[贡献指南](./CONTRIBUTING.md)


## 安装

```js
// use npm
npm install dt-react-component

// use yarn
yarn add dt-react-component
```

## 使用

```js
import { StatusTag, GoBack } from 'dt-react-component'
const App = () => (
  <>
    <StatusTag type='success'>已完成</StatusTag>
    <GoBack url='/api/manage' />
  </>
);
```
并手动导入样式：

```js
import 'dt-react-component/lib/style/index.css'

// or
import 'dt-react-component/lib/style/index.scss'

```

### 按需加载

下面两种方式都可以只加载用到的组件。
+ 我们强烈建议您使用 [babel-plugin-treasure](https://github.com/DTStack/babel-plugin-treasure) 完全适配 dt-react-component 的插件。

```js
// .babelrc or babel-loader option
"plugins": [
    [
      "treasure",
      {
        "libraryName": "dt-react-component",
        "libraryDirectory": "lib",
        "style": "css" // `style: true` Will load the scss file
      }
    ]
  ]

```

然后只需从 dt-react-component 引入模块即可，无需单独引入样式。等同于下面手动引入的方式。

```js
// babel-plugin-treasure will help you load JS and CSS
import { ContextMenu } from 'dt-react-component';
```
更多请见 [babel-plugin-treasure](https://github.com/DTStack/babel-plugin-treasure).

+ 手动引入

```js
import MarkdownRender from 'dt-react-component/lib/markdownRender'; // Load JS
import 'dt-react-component/lib/markdownRender/style/css'; // Load CSS
// import 'dt-react-component/lib/markdownRender/style'; // Load SCSS
```

### TypeScript
dt-react-component 完全基于 TypeScript 编写，具有完整的类型定义，因此您将拥有更好的体验。

### 预览地址
您可以在此地址查看最新的组件和文档。

[https://dtstack.github.io/dt-react-component/](https://dtstack.github.io/dt-react-component/)


## 开发

本地克隆:

```js
$ git clone git@github.com:DTStack/dt-react-component.git
$ cd dt-react-component
$ npm install
$ npm run storybook
```
打开浏览器并访问 [http://127.0.0.1:9001](http://127.0.0.1:9001)，我们基于 storybook 管理组件。 更多信息请访问 [Storybook](https://storybook.js.org/).

## 发布

``` bash
yarn compile
yarn release -r 2.2.1
npm publish --registry https://registry.npmjs.org/
yarn deploy-storybook
```

## 路线图
+ 支持和改进更多组件
+ 国际化语言支持
+ 支持主题定制

## 贡献

我们欢迎所有贡献。 您可以将任何想法提交为 [pull requests](https://github.com/DTStack/dt-react-component/pulls) 或者 [issues](https://github.com/DTStack/dt-react-component/issues).

最后，感谢我们所有 [contributors](https://github.com/DTStack/dt-react-component/graphs/contributors)

## 许可证

ISC
