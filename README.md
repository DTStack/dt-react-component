<h1 align="center">dt-react-component</h1>

<div align="center">

React UI component library based on [Ant Design](https://github.com/ant-design/ant-design)

[![NPM version][npm-image]][npm-url] [![NPM downloads][download-img]][download-url]

[npm-image]: https://img.shields.io/npm/v/dt-react-component.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/dt-react-component
[download-img]: https://img.shields.io/npm/dm/dt-react-component.svg?style=flat
[download-url]: https://www.npmjs.com/package/dt-react-component

</div>

English | [简体中文](./README-zh_CN.md)

## Docs

You can view [**online document**](https://dtstack.github.io/dt-react-component/)

or view legacy documents following:

-   [v3.x](https://dtstack.github.io/dt-react-component/)
-   [v2.x](https://liuxy0551.github.io/dt-react-component/)

React UI component library based on [Ant Design](https://github.com/ant-design/ant-design). Mainly used for middle and back-end products. Our goal is to **meet more specific and more specific business scenario components**. Of course, we also have excellent business components based on native javascript, such as **ContextMenu**, **KeyEventListener** and so on.

## When to use

-   When you find that the basic components provided by other component libraries do not meet the current business scenario, and you need to implement functions based on the basic components, you can use dt-react-component to solve the problem.
-   When the business is complex, more and more business components are deposited. In order to better manage the components and reduce the redundancy of the code, you can use dt-react-component. Of course, we welcome PR. We will review and merge common business scenario components in a timely manner.

## Install

```shell
# use npm
npm install dt-react-component

# use yarn
yarn add dt-react-component

# use pnpm
pnpm install dt-react-component
```

## Usage

```jsx
import React from 'react';
import { BlockHeader } from 'dt-react-component';
const App = () => <BlockHeader title="分类标题" showBackground />;
```

### Load on demand

We supports tree shaking of ES modules, so using `import { BlockHeader } from 'dt-react-component';` would drop js code you didn't use.

### TypeScript

dt-react-component is written in TypeScript with complete definitions, So you will have a better smart reminder experience.

## How to contribute

[CONTRIBUTING](./CONTRIBUTING.md)

## Development

clone locally:

```bash
$ git clone git@github.com:DTStack/dt-react-component.git
$ cd dt-react-component
$ pnpm install
$ pnpm run dev
```

Open your browser and visit [http://127.0.0.1:8000](http://127.0.0.1:8000)，We manage components based on dumi. see more at [dumi](https://d.umijs.org/).

## Publish

```bash
pnpm build
# pnpm@6
pnpm release -- -r 3.0.1
npm publish --registry https://registry.npmjs.org/
```

### Publish website

```bash
pnpm deploy
```

## Contributing

We welcome all contributions. You can submit any ideas as [pull requests](https://github.com/DTStack/dt-react-component/pulls) or as [issues](https://github.com/DTStack/dt-react-component/issues).

Finally, thank all our code [contributors](https://github.com/DTStack/dt-react-component/graphs/contributors)

## License

ISC
