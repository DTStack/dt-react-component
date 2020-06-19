## 组件开发

### 几点规范
+ 组件 API 变量命名规范，尽量采用驼峰式、可语义化的变量名
+ 组件内部 CSS 命名规范，在采用 [BEM](https://dtstack.yuque.com/rd-center/sm6war/clgpb7) 规范的基础上，使用 dt-react-component 标识性前缀 **dtc-**  

**如有其他问题后续可以补充**


### 目录结构
```plain
dt-react-component
├── CHANGELOG.md
├── README.md
├── commitlint.config.js
├── jest.config.js
├── lib // 编译输出文件
├── package-lock.json
├── package.json
├── scripts // 脚本文件
│   └── release.sh
├── setupTests.js
├── .storybook // storybook 配置文件夹
├── src
│   ├── components // 组件文件夹
│   │   ├── circle
│   │   ├── go-back
│   │   ├── index.tsx
│   │   ├── slidePane
│   │   └── utils // 组件内部引用的工具类文件
│   ├── stories // 组件文档文件夹
│   │   ├── circle.stories.tsx
│   │   ├── components
│   │   ├── func
│   │   ├── goBack.stories.tsx
│   │   ├── index.stories.tsx
│   │   ├── slidePane.stories.tsx
│   │   ├── style // 文档样式
│   └── styles // 组件总样式
│       └── index.scss
├── storybook-static // 输出静态资源
├── storyshots.test.js
├── tsconfig.build.json // tsc 编译配置
└── tsconfig.json

```
### 开发流程
在基于规范基础上开始组件开发，src 文件夹是我们开发中最关心的文件  
主要步骤大致如下：
+ src/components 业务组件逻辑、组件样式、测试文件编写等
+ src/stories 组件文档介绍以及动态演示效果编写
+ src/styles 将组件样式文件统一引入，便于统一编译样式文件

**注意点：** 组件内部如需要引用图片资源，目前采用 **base64** 编码后引用

### 组件编译
```plain
npm run compile
输出 lib 文件夹
```

### 组件可用性、稳定性测试
在 publish npm 或者私有仓库之前，进行几个增加组件正确性的测试

+ npm link，本地项目测试效果
+ npm run test

### Tag 以及 CHANGELOG 
```plain
npm run release
```
参考[版本管理](https://dtstack.yuque.com/rd-center/sm6war/cmdl2z)
### 组件发布
具体可参考[语雀链接](https://dtstack.yuque.com/rd-center/sm6war/ntmwtb)
