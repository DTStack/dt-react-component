---
title: EasySelect 下拉框
group: 组件
toc: content
demo:
    cols: 2
---

# EasySelect 下拉框

## 何时使用

参考之前业务所编辑业务组件, 主要用于表单中 Select 下拉框组件优化, 基于 AntDesign 的 Select 组件进行二次封装，继承 AntDesign 的 Select 组件 api 文档所有属性, 依据组件化思想将原\<Select\>\<Option\>...\</Option>\</Select>形式改为\<EasySelect />的形式, 同时将异步请求数据和 onSearch 方法结合，简化代码。

## 示例

<code src="./demos/basic.tsx" title="静态本地数据" description="json格式，带本地模糊查询功能"></code>
<code src="./demos/array.tsx" title="静态本地数据" description="普通数组格式"></code>
<code src="./demos/dataSource.tsx" title="dataSource" description="通过组件预置的几种 dataSource 控制数据源"></code>
<code src="./demos/virtual.tsx" title="大数据" description="虚拟滚动"></code>

<code src="./demos/request.tsx" title="远程获取数据" description="自动请求, 带有默认请求字段"></code>

## API

| 参数              | 说明                                                                                                                                                                                                                                   | 类型               | 默认值  |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------- |
| dataSource        | 静态数据源,支持 json 格式数据和普通数组格式。具体如下 :1、json 格式,dataSource=[ {value: 1, label: '描述'} ], 选中后下拉框展示为对应选中项的 label, 但是数据为对应 value 值;2、常规(String 或者 Number), dataSource=[ '文案 1', 234 ]; | `array`            | `[]`    |
| filterLocal       | 本地模糊查询, 支持 json 格式和普通数组格式模糊查询, 若需自定义模糊查询函数, 请使用 filterOption 自行替换即可.                                                                                                                          | `boolean`          | `false` |
| servise           | 远程数据请求(异步加载远程数据方法, 接口参数传递等操作在这里处理, 如果数据格式不合法, 可以在这里进行 return 处理).                                                                                                                      | `function`         | -       |
| auto              | 是否初始化请求远程数据, 当 servise 存在时, 该字段才起作用, 用于组件加载时初始化数据, 否则的话将在 onSearch（模糊查询）时进行请求.                                                                                                      | `boolean`          | `false` |
| autoValue         | 初始化时请求远程数据的默认搜索数据, 当 servise 存在时, 该字段才起作用, 用于组件加载时初始化数据传参和清空当前选项时默认.                                                                                                               | `string \| number` | -       |
| clearValueRequest | 清空当前选项是否执行请求(默认清空当前选项不进行服务端请求).                                                                                                                                                                            | `boolean`          | `false` |
| isLazy            | 数据超过一百是否懒加载，默认为 true                                                                                                                                                                                                    | `boolean`          | `true`  |
