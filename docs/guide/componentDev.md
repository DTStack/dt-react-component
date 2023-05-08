---
title: 组件开发
group: 研发
---

## 组件开发

### 几点规范

-   命名规范：组件的名称应该使用大驼峰命名法，且尽量使用有意义的名字，并且应该与文件名相同。
-   文件组织规范：组件应该被放置在 src 目录中，每个组件应该有自己的文件夹，并使用 index.js 文件作为入口。
-   类型规范：所有的变量和函数都应该有明确的类型声明，特别是对于需要传递给子组件的 props 和组件状态 state 的类型。
-   测试规范：编写测试代码是开发组件的必要步骤。使用 Jest 和 @testing-library/react 进行组件测试，确保组件的质量和可靠性。
-   CSS 命名规范：在采用 [BEM](https://dtstack.yuque.com/rd-center/sm6war/clgpb7) 规范的基础上，使用 dt-react-component 标识性前缀 `dtc-`。
-   组件化开发思维：React 的核心概念就是组件化开发思想，因此在开发过程中要遵循这个原则。将代码拆分成小的可重用组件，并尽可能减少代码的重复性。
-   文档规范：遵循简洁、易用的原则，开发对应的文档示例，确保每个示例不会耦合太多的 API。

**如有其他问题后续可以补充**

### 目录结构

```plain
dt-react-component
├─.dumirc.ts                    --> dumi 的配置文件
├─.editorconfig                 --> 编辑器配置文件，可以约定项目中使用的代码风格、缩进等等规则
├─.eslintrc.js
├─.fatherrc.ts                  --> father-build 的配置文件
├─.prettierignore
├─.prettierrc.js
├─.stylelintignore
├─.stylelintrc
├─CHANGELOG.md
├─LICENSE
├─README-zh_CN.md
├─README.md
├─jest.config.js                --> jest配置文件
├─package.json
├─pnpm-lock.yaml
├─tsconfig.json                 --> TypeScript 的配置文件
├─tests                         --> jest配置相关的文件
|   ├─fileTransformer.js
|   ├─setupTests.js
|   └styleMock.js
├─src                           --> 组件源码
|  ├─index.ts                   --> 组件主入口
|  ├─utils
|  |   ├─antdProps.ts           --> antd的一些props
|  |   ├─copy.tsx               --> Copy工具类
|  |   ├─index.ts               --> 公共方法主入口
|  |   ├─interface.ts           --> 公共的类型定义
|  |   └__tests__
|  ├─useList                    --> 单个组件目录
|  |    ├─index.md              --> 组件说明文档
|  |    ├─index.ts              --> 单个组件的源码
|  |    ├─demos                 --> 不同场景的示例
|  |    └__tests__              --> 单元测试
├─docs                          --> 文档目录
|  ├─index.md
|  ├─guide
|  |   ├─CONTRIBUTING.md        --> 贡献指南
|  |   ├─componentDev.md        --> 组件开发
|  |   ├─index.md               --> 快速上手
|  |   └updateLog.md            --> 更新日志
└.dumi                          --> dumi的配置文件

```

### 开发流程

在你 clone 了 dt-react-component 的代码并且使用 pnpm install 安装完依赖后，你还可以运行下面几个常用的命令：

-   `pnpm dev` 使用 Dumi 工具启动项目的开发模式
-   `pnpm build` 使用 Father 打包项目
-   `pnpm docs:build` 使用 Dumi 构建生成文档网站
-   `pnpm lint` 检查代码风格
-   `pnpm prepublishOnly` 在发布前运行 father doctor 检查项目配置，并运行 npm run build 进行打包
-   `pnpm deploy` 先执行 npm run docs:build 构建文档网站，再使用 gh-pages 将构建后的文档部署到 GitHub Pages 上

### 组件可用性、稳定性测试

在 publish 仓库之前，进行几个增加组件正确性的测试

-   `pnpm link`
-   `pnpm test`

### Tag 以及 CHANGELOG

-   `pnpm release`
