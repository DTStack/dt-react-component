# dt-react-component

React UI component library based on ant-design. Mainly used for middle and back-end products. Most importantly, its purpose is not to replace excellent component libraries such as ant-design and element-ui. Our goal is to **meet more specific and more specific business scenario components**. Of course, we also have excellent business components based on native javascript, such as **ContextMenu**, **KeyEventListener** and so on.

## When to use
+ When you find that the basic components provided by other component libraries do not meet the current business scenario, and you need to implement functions based on the basic components, you can use dt-react-component to solve the problem.
+ When the business is complex, more and more business components are deposited. In order to better manage the components and reduce the redundancy of the code, you can use dt-react-component. Of course, we welcome PR. We will review and merge common business scenario components in a timely manner.

## Install

```js
// use npm
npm install dt-react-component

// use yarn
yarn add dt-react-component
```

## Usage

```js
import { Circle, GoBack } from 'dt-react-component'
const App = () => (
  <>
    <Circle type='finished'/>
    <GoBack url='/api/manage' />
  </>
);
```
And import style manually:

```js
import 'dt-react-component/lib/style/index.css'

// or
import 'dt-react-component/lib/style/index.scss'

```

### Load on demand

The following two methods can only load the components used.
+ We strongly recommend using the [babel-plugin-treasure](https://github.com/DTStack/babel-plugin-treasure) plugin that perfectly adapts to dt-react-component.

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

Then just import the module from dt-react-component, no need to import style separately. It is equivalent to the manual introduction below.

```js
// babel-plugin-treasure will help you load JS and CSS
import { ContextMenu } from 'dt-react-component';
```
See more [babel-plugin-treasure](https://github.com/DTStack/babel-plugin-treasure).

+ Manual introduction

```js
import MarkdownRender from 'dt-react-component/lib/markdownRender'; // Load JS
import 'dt-react-component/lib/markdownRender/style/css'; // Load CSS
// import 'dt-react-component/lib/markdownRender/style'; // Load SCSS
```

### TypeScript
dt-react-component is written in TypeScript with complete definitions, So you will have a better smart reminder experience.

### Preview address
You can view the latest components and documents at this address

[https://dtstack.github.io/dt-react-component/](https://dtstack.github.io/dt-react-component/)


## Development

clone locally:

```js
$ git clone ssh://git@gitlab.prod.dtstack.cn:10022/dt-insight-front/infrastructure/dt-react-component.git
$ cd dt-react-component
$ npm install
$ npm run storybook
```
Open your browser and visit [http://127.0.0.1:9001](http://127.0.0.1:9001)，We manage components based on stroybook. see more at [Storybook](https://storybook.js.org/).

## Roadmap
+ We will support and improve more components
+ Internationalized language support
+ Support theme customization

## Contributing

We welcome all contributions. You can submit any ideas as [pull requests](http://gitlab.prod.dtstack.cn/dt-insight-front/infrastructure/dt-react-component/merge_requests) or as [issues](http://gitlab.prod.dtstack.cn/dt-insight-front/infrastructure/dt-react-component/issues).

Finally, thank all our code [contributors](https://github.com/DTStack/dt-react-component/graphs/contributors)

## License

ISC
