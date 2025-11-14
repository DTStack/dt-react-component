import { HTMLAttributes } from 'react';
import { DropdownProps } from 'antd';

import { ConversationProperties } from '../entity';

/**
 * 单条会话信息结构
 * 用于描述侧边栏会话列表中的一项
 */
export interface ConversationInfo extends ConversationProperties {
    /** 会话所属分组（用于分组展示，可选，默认以updateAt分组） */
    group?: string;
    /** 会话项自定义图标 */
    icon?: React.ReactNode;
    /** 是否禁用此会话（禁用点击与交互） */
    disabled?: boolean;
}
/**
 * Conversations 会话组件入参
 * 用于渲染会话列表与相关交互
 */
export interface ConversationsProps extends React.HTMLAttributes<HTMLUListElement> {
    /** 会话列表数据源 */
    conversations: ConversationInfo[];
    /** 当前激活会话的 id（受控模式） */
    activeKey?: ConversationInfo['id'];
    /** 默认激活会话 id（非受控模式） */
    defaultActiveKey?: ConversationInfo['id'];
    /**
     * 自定义每一项的下拉菜单
     * - 传入对象时：所有项共享同一配置
     * - 传入方法时：可根据不同会话动态生成
     */
    dropdown?:
        | ConversationsItemProps['dropdown']
        | ((info: ConversationInfo) => ConversationsItemProps['dropdown']);
    /** 是否启用按 group 分组展示（true 时使用默认配置，也可传入自定义 Groupable 配置） */
    groupable?: boolean | Groupable;
    className?: string;
    style?: React.CSSProperties;
    loading?: boolean;
    /** 列表头部区域内容（false 表示不展示） */
    header?: React.ReactNode | boolean;
    /** 是否为折叠状态（折叠时仅展示图标） */
    collapsed?: boolean;
    /** 点击某条会话时触发 */
    onItemClick?: (info: ConversationInfo) => void;
    /** 自定义渲染每一项的内容 */
    renderItem?: (props: ConversationsItemProps) => React.ReactNode;
}
/**
 * Conversations.Item 单个会话项组件的入参
 * 用于渲染侧边栏中的一条会话
 */
export interface ConversationsItemProps extends Omit<HTMLAttributes<HTMLLIElement>, 'onClick'> {
    /** 当前会话项的数据对象 */
    info: ConversationInfo;
    /** 是否为激活状态 */
    active?: boolean;
    /**
     * 下拉菜单配置（用于操作会话项）
     * - 可传入 DropdownProps
     * - 支持通过 triggerDom 自定义触发节点
     */
    dropdown?: DropdownProps & {
        triggerDom?:
            | React.ReactNode
            | ((
                  conversation: ConversationInfo,
                  info: { originNode: React.ReactNode }
              ) => React.ReactNode);
    };
    prefixCls?: string;
    onClick?: (info: ConversationInfo) => void;
}

/**
 * 分组组件入参
 */
export interface GroupTitleProps {
    /** 分组标题内容 */
    children?: React.ReactNode;
    prefixCls?: string;
}

/**
 * 处理之后的分组数据
 */
export type GroupInfo = {
    /** 分组内的会话列表 */
    conversations: ConversationInfo[];
    /** 分组唯一标识（可选） */
    id?: string;
    /** 自定义渲染后的标题（Groupable.title 的结果） */
    title?: Groupable['title'];
    name?: string;
};

/** 分组排序函数类型，来自 Array.sort 的入参类型 */
export type GroupSorter = Parameters<[string, ConversationInfo[]][]['sort']>[0];

/** 自定义分组标题渲染时可访问的内置组件 */
export type GroupTitleRenderComponents = {
    components: {
        GroupTitle: React.ComponentType<GroupTitleProps>;
    };
};
/**
 * 分组标题渲染函数
 * 用于完全自定义分组标题渲染逻辑
 */
export type GroupTitleRender =
    | ((groupInfo: GroupInfo, info: GroupTitleRenderComponents) => React.ReactNode)
    | undefined;

/**
 * 分组功能配置
 * 控制会话列表是否按 group 分组显示
 */
export interface Groupable {
    /**
     * @desc 分组排序函数
     * @descEN Group sorter
     */
    sort?: GroupSorter;
    /**
     * @desc 自定义分组标签渲染
     * @descEN Semantic custom rendering
     */
    title?: GroupTitleRender;
}
