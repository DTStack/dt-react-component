import { Locale } from './useLocale';

const localeValues: Locale = {
    locale: 'zh-CN',
    BlockHeader: {
        expand: '展开',
        collapse: '收起',
    },
    Catalogue: {
        searchPlaceholder: '搜索目录名称',
        inputPlaceholder: `请输入`,
    },
    Chat: {
        stoped: '回答已停止',
        stop: '停止回答',
        regenerate: '重新生成',
        conversationEmpty: '暂无对话',
        createConversation: '开启新对话',
        rename: '重命名',
        delete: '删除',
        renameError: '请输入对话名称',
        today: '今天',
        yesterday: '昨天',
        recent7Days: '近7天',
        recent15Days: '近15天',
        recent30Days: '近30天',
        other: '其他',
    },
    Copy: {
        copied: '复制成功',
        copy: '复制',
    },
    Dropdown: { selectAll: '全选', resetText: '重置', okText: '确定' },
    ErrorBoundary: {
        please: '发现新版本，请',
        get: '获取新版本。',
        refresh: '刷新',
        title: '若该提示长时间存在，请联系管理员。',
    },
    FilterRules: {
        message: '必须有一条数据',
    },
    Fullscreen: {
        exitFull: '退出全屏',
        full: '全屏',
    },
    GlobalLoading: {
        loading: '应用加载中，请等候～',
    },
    Input: {
        case: '区分大小写匹配',
        precise: '精确匹配',
        front: '头部匹配',
        tail: '尾部匹配',
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
