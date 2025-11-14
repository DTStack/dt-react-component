import { useMemo } from 'react';
import dayjs from 'dayjs';
import shortid from 'shortid';

import useLocale, { Locale } from '../../../locale/useLocale';
import { ConversationInfo, ConversationsProps, Groupable, GroupInfo } from '../interface';

const DEFAULT_GROUP_KEY = 'updatedAt';
type GroupMap = Record<string, ConversationInfo[]>;
const useGroupable = (
    groupable: ConversationsProps['groupable'],
    conversations: ConversationInfo[]
): [list: GroupInfo[], enable: boolean] => {
    const locale = useLocale('Chat');
    const [enable, sort, title] = useMemo(() => {
        if (!groupable) return [false, undefined, undefined];

        let baseConfig: Groupable = {
            sort: undefined,
            title: undefined,
        };

        if (typeof groupable === 'object') {
            baseConfig = { ...baseConfig, ...groupable };
        }

        return [true, baseConfig.sort, baseConfig.title];
    }, [groupable]);

    return useMemo(() => {
        if (!enable) {
            const groupList: GroupInfo[] = [
                {
                    id: `group_${shortid()}`,
                    conversations,
                    title: undefined,
                },
            ];
            return [groupList, enable];
        }
        const groupMap = conversations.reduce<GroupMap>((prev, current) => {
            const group = current.group || classifyDate(locale, current[DEFAULT_GROUP_KEY]);
            if (!prev[group]) {
                prev[group] = [];
            }
            prev[group].push(current);
            return prev;
        }, {});

        const groupEntries = sort ? Object.entries(groupMap).sort(sort) : Object.entries(groupMap);

        const groupList: GroupInfo[] = groupEntries.map(([key, value]) => {
            return {
                id: `group_${shortid()}`,
                title,
                conversations: value,
                name: key,
            };
        });
        return [groupList, enable];
    }, [conversations, enable]);
};

export function classifyDate(locale: Locale['Chat'], date?: string | Date | number) {
    const input = dayjs(date).startOf('day');
    const now = dayjs().startOf('day');

    const diffDays = now.diff(input, 'days');

    if (diffDays < 1) {
        return locale.today;
    } else if (diffDays < 2) {
        return locale.yesterday;
    } else if (diffDays < 7) {
        return locale.recent7Days;
    } else if (diffDays < 15) {
        return locale.recent15Days;
    } else if (diffDays < 30) {
        return locale.recent30Days;
    } else {
        return locale.other;
    }
}

export default useGroupable;
