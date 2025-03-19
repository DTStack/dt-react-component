import React, { forwardRef, useImperativeHandle, useLayoutEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import { Message as MessageEntity, MessageStatus, Prompt as PromptEntity } from '../entity';
import Message from '../message';
import Prompt from '../prompt';
import { useContext } from '../useContext';
import './index.scss';

export interface IContentProps {
    data: PromptEntity[];
    placeholder?: React.ReactNode;
    scrollable?: boolean;
    onRegenerate?: (data: MessageEntity, prompt: PromptEntity) => void;
    onStop?: (data: MessageEntity, prompt: PromptEntity) => void;
}

export interface IContentRef {
    nativeElement: HTMLDivElement | null;
    scrollToBottom: () => void;
}

const Content = forwardRef<IContentRef, IContentProps>(function (
    { data, placeholder, scrollable = true, onRegenerate, onStop },
    forwardedRef
) {
    const { maxRegenerateCount, copy, regenerate } = useContext();
    const containerRef = useRef<HTMLDivElement>(null);

    const [isStickyAtBottom, setIsStickyAtBottom] = useState<boolean>(true);
    const raf = useRef(0);

    useImperativeHandle(forwardedRef, () => ({
        nativeElement: containerRef.current,
        scrollToBottom: () => {
            raf.current = window.requestAnimationFrame(() => {
                containerRef.current?.scrollTo({
                    top: containerRef.current?.scrollHeight,
                    left: 0,
                    behavior: 'instant' as any,
                });
            });
        },
    }));

    const checkIfScrolledToBottom = () => {
        if (!containerRef.current) return false;
        const threshold = 5;
        const { scrollTop, clientHeight, scrollHeight } = containerRef.current;
        return scrollTop + clientHeight >= scrollHeight - threshold;
    };

    const dataValid = !!(Array.isArray(data) && data.length);
    const lastPrompt = data[data.length - 1];
    const lastMessage = dataValid
        ? lastPrompt.messages?.[lastPrompt.messages.length - 1]
        : undefined;

    useLayoutEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) {
                return;
            }
            setIsStickyAtBottom(checkIfScrolledToBottom());
        };
        containerRef.current?.addEventListener('scroll', handleScroll);
        return () => {
            containerRef.current?.removeEventListener('scroll', handleScroll);
            window.cancelAnimationFrame(raf.current);
        };
    }, []);

    useLayoutEffect(() => {
        raf.current = window.requestAnimationFrame(() => {
            if (!containerRef.current) {
                return;
            }
            if (dataValid) {
                containerRef.current.scrollTop = containerRef.current.scrollHeight;
            } else {
                containerRef.current.scrollTop = 0;
            }
        });
    }, [lastMessage?.id]);

    useLayoutEffect(() => {
        raf.current = window.requestAnimationFrame(() => {
            if (!containerRef.current) {
                return;
            }
            if (lastMessage?.status === MessageStatus.GENERATING && isStickyAtBottom) {
                containerRef.current.scrollTop = containerRef.current.scrollHeight;
            }
        });
    }, [lastMessage?.status, lastMessage?.content, isStickyAtBottom]);

    return (
        <div
            className={classNames(
                'dtc__aigc__content__container',
                !scrollable && 'dtc__aigc__content__container--disabled'
            )}
            ref={containerRef}
        >
            {dataValid ? (
                <div className="dtc__aigc__content__inner__holder">
                    {data.map((row, idx) => {
                        const defaultRegenerate =
                            idx === data.length - 1 && row.messages.length < maxRegenerateCount;
                        return (
                            <React.Fragment key={row.id}>
                                <Prompt data={row} />
                                <Message
                                    prompt={row}
                                    data={row.messages}
                                    regenerate={
                                        typeof regenerate === 'function'
                                            ? regenerate(row, idx, data)
                                            : regenerate ?? defaultRegenerate
                                    }
                                    copy={copy}
                                    onRegenerate={(message) => onRegenerate?.(message, row)}
                                    onStop={(message) => onStop?.(message, row)}
                                    onLazyRendered={(renderFn) => {
                                        // 在触发懒加载之前判断是否在底部，如果是则加载完成后滚动到底部
                                        const scrolledToBottom = checkIfScrolledToBottom();
                                        renderFn().then(() => {
                                            window.requestAnimationFrame(() => {
                                                setIsStickyAtBottom(scrolledToBottom);
                                                if (scrolledToBottom && containerRef.current) {
                                                    containerRef.current.scrollTop =
                                                        containerRef.current.scrollHeight;
                                                }
                                            });
                                        });
                                    }}
                                />
                            </React.Fragment>
                        );
                    })}
                </div>
            ) : (
                <React.Fragment>{placeholder}</React.Fragment>
            )}
        </div>
    );
});

export default Content;
