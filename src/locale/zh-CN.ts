import { Locale } from './useLocale';

const localeValues: Locale = {
    locale: 'zh-CN',
    BlockHeader: {
        expand: '展开',
        collapse: '收起',
    },
    Copy: {
        copied: '复制成功',
        copy: '复制',
    },
    Dropdown: { selectAll: '全选', resetText: '重置', okText: '确定' },
    Fullscreen: {
        exitFull: '退出全屏',
        full: '全屏',
    },
    GlobalLoading: {
        loading: '应用加载中，请等候～',
    },
    LoadError: {
        please: '发现新版本，请',
        get: '获取新版本。',
        refresh: '刷新',
        title: '若该提示长时间存在，请联系管理员。',
    },
    Input: {
        case: '区分大小写匹配',
        precise: '精确匹配',
        front: '头部匹配',
        tail: '尾部匹配',
    },
    Modal: {
        okText: '确定',
        cancelText: '取消',
    },
    MxGraph: {
        newNode: '新节点',
    },
    NotFound: {
        description: '抱歉，您访问的页面不存在',
    },
    SpreadSheet: {
        description: '暂无数据',
        copy: '复制值',
        copyCol: '复制列名',
        copyAll: '复制列名和值',
    },
};

export default localeValues;
