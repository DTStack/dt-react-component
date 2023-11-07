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

<Tree>
  <ul>
    <li>.dumi<small>dumi的配置文件</small></li>
    <li>.dumirc.ts<small>dumi 的配置文件</small></li>
    <li>.editorconfig<small>编辑器配置文件，可以约定项目中使用的代码风格、缩进等等规则</small></li>
    <li>.eslintrc.js</li>
    <li>.fatherrc.ts<small>father-build 的配置文件</small></li>
    <li>.prettierignore</li>
    <li>.prettierrc.js</li>
    <li>.stylelintignore</li>
    <li>.stylelintrc</li>
    <li>CHANGELOG.md</li>
    <li>LICENSE</li>
    <li>README-zh_CN.md</li>
    <li>README.md</li>
    <li>jest.config.js<small>jest配置文件</small></li>
    <li>package.json</li>
    <li>pnpm-lock.yaml</li>
    <li>tsconfig.json<small>TypeScript 的配置文件</small></li>
    <li>
        tests<small>jest配置相关的文件</small>
        <ul>
            <li>fileTransformer.js</li>
            <li>setupTests.js</li>
            <li>styleMock.js</li>
        </ul>
    </li>
    <li>
        src<small>组件源码</small>
        <ul>
            <li>index.ts<small>组件主入口</small></li>
            <li>
                utils
                <ul>
                    <li>antdProps.ts<small>antd的一些props</small></li>
                    <li>copy.tsx<small>Copy工具类</small></li>
                    <li>index.ts<small>公共方法主入口</small></li>
                    <li>interface.ts<small>公共的类型定义</small></li>
                    <li>__tests__</li>
                </ul>
            </li>
            <li>
                useList<small>单个组件目录</small>
                <ul>
                    <li>index.md<small>组件说明文档</small></li>
                    <li>index.ts<small>单个组件的源码</small></li>
                    <li>demos<small>不同场景的示例</small></li>
                    <li>__tests__<small>单元测试</small></li>
                </ul>
            </li>
        </ul>
    </li>
    <li>
        docs<small>文档目录</small>
        <ul>
            <li>index.md</li>
            <li>guide</li>
        </ul>
    </li>
  </ul>
</Tree>

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
