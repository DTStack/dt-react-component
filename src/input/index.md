---
title: Input.Match 输入框
group: 组件
toc: content
demo:
    cols: 2
---

# Input.Match 输入框

## 何时使用

需要用户输入表单域内容时。

## 示例

<code src="./demos/basic.tsx" title="基础使用" description="通过回车键触发 onSearch 事件"></code>
<code src="./demos/filterOptions.tsx" title="控制匹配项" description="仅支持头部匹配"></code>

## API

### 类型

| 参数          | 说明                 | 类型                                               | 默认值         |
| ------------- | -------------------- | -------------------------------------------------- | -------------- |
| searchType    | 当前匹配项           | `SearchType`                                       |
| filterOptions | 过滤匹配项数组       | `SearchType[]`                                     | `SearchType[]` |
| onTypeChange  | 匹配项修改的回调函数 | `(type: SearchType) => void;`                      | -              |
| onSearch      | 搜索的回调函数       | `(value: string, searchType: SearchType) => void;` | -              |

### SearchType

`type SearchType = 'fuzzy' | 'caseSensitive' | 'precise' | 'front' | 'tail';`

| 参数          | 说明       |
| ------------- | ---------- |
| fuzzy         | 无选中状态 |
| caseSensitive | 大小写敏感 |
| precise       | 精准查询   |
| front         | 头部匹配   |
| tail          | 尾部匹配   |
