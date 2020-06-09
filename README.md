# dt-react-component | [CHANGELOG](./CHANGELOG.md)

## 组件库
目的：减少代码重复率，便于新同学对组件使用以及团队内部项目的代码优化
## :zap: 安装
> 使用 npm
```plain
npm i dt-react-component --save
```
## :book: 如何使用
1. Usage
```plain
import { Circle, GoBack } from 'dt-react-component'
const App = () => (
  <>
    <Circle />
    <GoBack url='/api/manage' />
  </>
);
```
样式引入：
```plain
import 'dt-react-component/lib/index.css'
```

2. 按需引入
```plain
import { Circle } from 'dt-react-component/lib/circle'
```
样式暂时还是必须全量引入：
```plain
import 'dt-react-component/lib/index.css'
```
目前这块打包出来的样式暂不支持单文件引入，这块后续有时间使用 webpack 打包单独出组件样式文件

----

## :wrench: 本地开发
1. clone & npm install
```plain
$ git clone git@github.com:zhangtengjin/dt-react-component.git
npm install
```
2. 启动本地服务器
```plain
 npm run storybook
```
3. 静态服务部署构建
```plain
npm run build-storybook
```
4. 组件开发
+ src/components 目录下编写组件
+ src/stories 目录下编写 storybook 文档
+ npm run storybook 本地文档预览

5. 组件发布至 npm
**在按照一些列组件开发规范流程下，测试组件无问题后进行组件发布**
```plain
npm run compile 输出 lib 目录
登陆 npm 执行 npm publish
```
这里使用 netlify 托管 storybook 静态服务
netlify 服务器检测到 push master 操作会自动执行 npm run build-storybook，生成最新的静态资源重新部署，可在 https://dtux.netlify.com/ 查看效果

## :ferris_wheel: 线上预览地址
https://dtux.netlify.com/

## :blue_book: 相关资料
* [Storybook](https://storybook.js.org/)
* [netlify](https://www.netlify.com/)
* [jest](https://jestjs.io/)
* [enzymejs](https://enzymejs.github.io/enzyme/)




