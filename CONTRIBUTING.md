# 贡献者指南

欢迎大家参与贡献，本文将告诉你如何贡献一份自己的力量，在提 issue 或者 pull request 之前，请花几分钟来阅读这篇指南。

**请 fork 本仓库，修改后提 PR**

## 分支管理

我们在 master 分支维护版本，在创建分支前，请先了解一下分支规范。

-   **master**： 主干分支，用于 RC 组件的 npm 发布

-   **feat**： 新特性分支

-   **beta**： 即将发布的功能

## 新增功能

如需开发新组件，请遵循以下流程：

1、fork 本仓库，在自己的仓库提交代码

2、请从 **master** 分支中新建 **feat** 分支进行开发，分支命名用下划线加上版本号，如：**feat\_功能**

3、**feat** 分支开发完毕后请向相应负责人提 PR，PR 要求附上自己仓库的文档预览地址，待相应负责人 review 代码后和入 **master** 分支

## 修复功能

我们使用 GitHub issues 来做 bug 追踪。

如果你在使用中发现了 bug，请给我们提 issue。如果你想自行修复这个问题，请遵循以下流程：

1、fork 本仓库，在自己的仓库提交代码

2、请从 **master** 分支中新建 **feat** 分支进行开发，分支命名用下划线加上版本号，如：**feat\_功能**

3、**feat** 分支开发完毕后请向相应负责人提 PR，PR 要求附上自己仓库的文档预览地址，待相应负责人 review 代码后和入 **master** 分支

## 如何生成自己的文档地址

本地查看文档效果：`npm run storybook`

代码修改完毕后在本地执行 `npm run deploy-storybook`，等待执行完成后，访问 `https://github-username.github.io/dt-react-component/`，提 PR 需要附上文档预览地址。

## 第一次贡献

如果你还不清楚怎么在 GitHub 上提 Pull Request ，可以阅读下面这篇文章来学习：

[如何优雅地在 GitHub 上贡献代码](https://segmentfault.com/a/1190000000736629)

如果你打算开始处理一个 issue，请先检查一下 issue 下面的留言以确保没有别人正在处理这个 issue。如果当前没有人在处理的话你可以留言告知其他人你将会处理这个 issue，以免别人重复劳动。
