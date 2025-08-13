import React, { useEffect, useMemo, useRef, useState } from 'react';
import type { Components } from 'react-markdown';
import {
    AiAvatarColored,
    CopyOutlined,
    PauseOutlined,
    ReloadOutlined,
} from '@dtinsight/react-icons';
import { Button, Space, Tooltip } from 'antd';
import classNames from 'classnames';

import Copy from '../../copy';
import useLocale from '../../locale/useLocale';
import useIntersectionObserver from '../../useIntersectionObserver';
import { Message as MessageEntity, MessageStatus, Prompt as PromptEntity } from '../entity';
import Loading from '../loading';
import Markdown from '../markdown';
import Pagination from '../pagination';
import { CopyOptions, useContext } from '../useContext';
import './index.scss';

type IMessageProps = {
    prompt: PromptEntity;
    data: MessageEntity[];
    /**
     * 是否支持重新生成
     */
    regenerate?: boolean;
    /**
     * 是否支持复制功能
     */
    copy?: boolean | CopyOptions;
    onRegenerate?: (data: MessageEntity) => void;
    onStop?: (data: MessageEntity) => void;
    onLazyRendered?: (cb: () => Promise<void>) => void;
};

export default function Message({
    prompt,
    data,
    regenerate,
    copy,
    onRegenerate,
    onStop,
    onLazyRendered,
}: IMessageProps) {
    const locale = useLocale('Chat');
    const divRef = useIntersectionObserver<HTMLDivElement>(handleObserverCb);
    const { components = {}, messageIcons, codeBlock, rehypePlugins, remarkPlugins } = useContext();

    // 当前 Message 的懒加载，是否已经加载过
    const [lazyRendered, setLazyRendered] = useState(false);
    const mountCallback = useRef(() => {});

    function handleObserverCb([entry]: IntersectionObserverEntry[]) {
        if (entry.isIntersecting) {
            setLazyRendered((p) => {
                if (!p) {
                    const cb = () =>
                        new Promise<void>((resolve) => {
                            mountCallback.current = resolve;
                        });
                    onLazyRendered?.(cb);
                }
                return true;
            });
        }
    }

    const [current, setCurrent] = useState(data.length);

    const record = data[current - 1];

    const [typing, loading, stopped] = useMemo<[boolean, boolean, boolean]>(() => {
        if (!record) return [false, false, false];
        return [
            record.status === MessageStatus.GENERATING,
            record.status === MessageStatus.PENDING,
            record.status === MessageStatus.STOPPED,
        ];
    }, [record]);

    useEffect(() => {
        setCurrent(data.length);
    }, [data.length]);

    const composedComponents = useMemo(() => {
        return Object.keys(components).reduce<Components>((acc, cur) => {
            const original = components[cur as keyof Components];
            (acc as any)[cur] = (...args: any[]) => {
                return typeof original === 'function'
                    ? (original as Function)(...args, {
                          messageId: record?.id,
                          promptId: prompt.id,
                      })
                    : original;
            };

            return acc;
        }, {});
    }, [components, record?.id]);

    const copyInfo = useMemo<{ disabled: boolean; options: CopyOptions }>(() => {
        if (typeof copy === 'boolean') {
            return {
                disabled: !copy,
                options: {},
            };
        }
        return {
            disabled: false,
            options: { ...(copy || {}) },
        };
    }, [copy]);

    const renderCopyIcon = () => {
        if (copyInfo.disabled) return null;
        const { formatText, ...rest } = copyInfo.options;
        const text = formatText?.(record?.content) ?? record?.content;

        if (!text) return null;

        return (
            <Copy className="dtc__message__icon" button={<CopyOutlined />} text={text} {...rest} />
        );
    };

    return (
        <section className="dtc__message__container">
            <div className="dtc__message__avatar">
                <AiAvatarColored />
            </div>
            <div className="dtc__message__wrapper">
                <div
                    className={classNames(
                        'dtc__message__content',
                        loading && 'dtc__message__content--loading'
                    )}
                    ref={divRef}
                >
                    <Loading loading={loading}>
                        {lazyRendered && (
                            <Markdown
                                typing={typing}
                                components={composedComponents}
                                codeBlock={codeBlock}
                                rehypePlugins={rehypePlugins}
                                remarkPlugins={remarkPlugins}
                                onMount={() => {
                                    mountCallback.current();
                                }}
                            >
                                {record?.content}
                            </Markdown>
                        )}
                    </Loading>
                    <div className="dtc__message__footer">
                        {data.length > 1 && !typing && !loading && (
                            <Pagination
                                current={current}
                                total={data.length}
                                onChange={(cur) => setCurrent(cur)}
                            />
                        )}
                        {stopped && <span className="dtc__message__stopText">{locale.stoped}</span>}
                    </div>
                </div>
                {(typing || loading) && (
                    <div className="dtc__message__extra">
                        <Button
                            type="link"
                            className="dtc__message__stopBtn"
                            onClick={() => onStop?.(record)}
                            icon={<PauseOutlined style={{ verticalAlign: 'sub' }} />}
                        >
                            {locale.stop}
                        </Button>
                    </div>
                )}
            </div>
            {!typing && !loading && (
                <Space className="dtc__message__iconGroup" align="center">
                    {renderCopyIcon()}
                    {typeof messageIcons === 'function'
                        ? messageIcons(record, prompt)
                        : messageIcons}
                    {regenerate && (
                        <Tooltip
                            title={locale.regenerate}
                            getTooltipContainer={(node) => node.parentNode as HTMLElement}
                        >
                            <span
                                className="dtc__message__icon"
                                onClick={() => onRegenerate?.(record)}
                            >
                                <ReloadOutlined />
                            </span>
                        </Tooltip>
                    )}
                </Space>
            )}
        </section>
    );
}
