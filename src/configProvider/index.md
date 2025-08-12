---
title: ConfigProvider 全局化配置
group: 组件
toc: content
demo:
    cols: 1
---

# ConfigProvider 全局化配置

## 何时使用

ConfigProvider 用于全局配置组件库的默认属性，目前主要用于配置国际化文案。

## 代码演示

<code src="./demos/basic.tsx" title="基本使用" description="ConfigProvider 的基本用法，通过切换语言环境，可以看到组件的文案会随之变化。"></code>

<code src="./demos/nested.tsx" title="嵌套使用" description="ConfigProvider 支持嵌套使用，内层的 ConfigProvider 会覆盖外层的配置。"></code>

<code src="./demos/custom.tsx" title="自定义语言包" description="可以通过扩展默认语言包来创建自定义的语言配置。"></code>

## API

### ConfigProvider

| 参数     | 说明       | 类型              | 默认值 |
| -------- | ---------- | ----------------- | ------ |
| locale   | 语言包配置 | [Locale](#locale) | -      |
| children | 子组件     | ReactNode         | -      |

### Locale

```typescript
interface Locale {
    locale: string;
    BlockHeader: { expand: string; collapse: string };
    Catalogue: { searchPlaceholder: string; inputPlaceholder: string };
    Chat: {
        stopped: string;
        stop: string;
        regenerate: string;
    };
    Copy: { copied: string; copy: string };
    Dropdown: { selectAll: string; resetText: string; okText: string };
    ErrorBoundary: {
        please: string;
        get: string;
        refresh: string;
        title: string;
    };
    // ... 其他组件的文案配置
}
```

## 注意事项

-   组件库默认使用中文（zh-CN）语言包。
-   当组件不在 ConfigProvider 内时，将使用默认的中文语言包。
-   可以通过 `useLocale` hook 在组件内部获取当前的语言环境。
-   自定义语言包时，可以只覆盖需要修改的部分，其他部分会使用默认语言包。
