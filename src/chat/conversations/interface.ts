import { ConversationProperties } from '../entity';
import { IGroupTitleProps } from './GroupTitle';

export interface ConversationInfo extends ConversationProperties {
    group?: string;
    icon?: React.ReactNode;
    disabled?: boolean;
}

export type GroupSorter = Parameters<[string, ConversationInfo[]][]['sort']>[0];

export type GroupTitleRenderComponents = {
    components: {
        GroupTitle: React.ComponentType<IGroupTitleProps>;
    };
};

export type GroupInfo = {
    conversations: ConversationInfo[];
    id?: string;
    title?: Groupable['title'];
    name?: string;
};
export type GroupTitleRender =
    | ((groupInfo: GroupInfo, info: GroupTitleRenderComponents) => React.ReactNode)
    | undefined;

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
