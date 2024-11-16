import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import classNames from 'classnames';

import useMeasure from '../../useMeasure';
import { Message as MessageEntity, Prompt as PromptEntity } from '../entity';
import { RobotIcon } from '../icon';
import Message from '../message';
import Prompt from '../prompt';
import { useContext } from '../useContext';
import './index.scss';

export interface IContentProps {
    data: PromptEntity[];
    placeholder?: React.ReactNode;
    robotIcon?: boolean;
    disabledScroll?: boolean;
    onRegenerate?: (data: MessageEntity, prompt: PromptEntity) => void;
    onStop?: (data: MessageEntity, prompt: PromptEntity) => void;
}

export interface IContentRef {
    nativeElement: HTMLDivElement | null;
    scrollToBottom: () => void;
}

/**
 * 连续触发滚动事件的次数，当小于该值的时候表示是代码触发，大于时表示是用户触发
 */
const DISTINGUISH_THRESHOLD = 5;

const Content = forwardRef<IContentRef, IContentProps>(function (
    { data, placeholder, robotIcon = true, disabledScroll, onRegenerate, onStop },
    forwardedRef
) {
    const { maxRegenerateCount, copy } = useContext();
    const containerRef = useRef<HTMLDivElement>(null);
    const [ref, { height }] = useMeasure();
    // FIXME：这里不用 boolean 类型的原因是想要区分当前的滚动是用户触发还是代码触发
    const isScrolling = useRef(0);
    const timeout = useRef(0);
    // 当前滚动条是否锁定到底部
    const lockToBottom = useRef(true);

    useImperativeHandle(forwardedRef, () => ({
        nativeElement: containerRef.current,
        scrollToBottom: () => {
            window.requestAnimationFrame(() => {
                containerRef.current?.scrollTo({
                    top: containerRef.current.scrollHeight,
                    left: 0,
                    behavior: 'instant' as any,
                });
            });
        },
    }));

    const handleScroll = () => {
        window.clearTimeout(timeout.current);
        // 如果当前滚动事件是连续触发的，这表示是用户行为触发的滚动事件
        if (isScrolling.current >= DISTINGUISH_THRESHOLD) {
            // 如果用户滚动到底部，则表示滚动到底部
            lockToBottom.current = checkIfScrolledToBottom();
        } else {
            // 如果非用户事件导致的滚动，则默认滚动到底部
            lockToBottom.current = true;
        }
        isScrolling.current += 1;
        timeout.current = window.setTimeout(() => {
            isScrolling.current = 0;
        }, 200);
    };

    const checkIfScrolledToBottom = () => {
        if (!containerRef.current) return false;
        const threshold = 5;
        const { scrollTop, clientHeight, scrollHeight } = containerRef.current;
        return scrollTop + clientHeight >= scrollHeight - threshold;
    };

    useEffect(() => {
        window.requestAnimationFrame(() => {
            // 当高度发生变化的时候，需要额外判断如下条件：
            // 1. 如果是当前用户滚动事件触发的过程中引起的高度变化
            // 2. 如果是当前用户滚动事件触发完成后，并未停留在底部
            // 以上两种情况下不需要滚动到底部
            if (isScrolling.current >= DISTINGUISH_THRESHOLD || !lockToBottom.current || !dataValid)
                return;
            containerRef.current?.scrollTo({
                top: containerRef.current.scrollHeight,
                left: 0,
                behavior: 'instant' as any,
            });
        });
    }, [height]);

    useEffect(() => {
        return () => {
            window.clearTimeout(timeout.current);
        };
    }, []);

    const dataValid = !!(Array.isArray(data) && data.length);

    return (
        <div
            className={classNames(
                'dtc__aigc__content__container',
                disabledScroll && 'dtc__aigc__content__container--disabled',
                dataValid && 'dtc__aigc__content__container--valid'
            )}
            ref={containerRef}
            onScroll={handleScroll}
        >
            {dataValid ? (
                <div className="dtc__aigc__content__inner__holder" ref={ref}>
                    {data.map((row, idx) => {
                        return (
                            <React.Fragment key={row.id}>
                                <Prompt content={row.title} />
                                <Message
                                    data={row.messages}
                                    regenerate={
                                        idx === data.length - 1 &&
                                        row.messages.length < maxRegenerateCount
                                    }
                                    copy={copy}
                                    onRegenerate={(message) => onRegenerate?.(message, row)}
                                    onStop={(message) => onStop?.(message, row)}
                                />
                            </React.Fragment>
                        );
                    })}
                </div>
            ) : (
                <React.Fragment>
                    {placeholder}
                    {robotIcon && (
                        <RobotIcon
                            style={{ fontSize: 200, position: 'absolute', right: 0, bottom: -100 }}
                        />
                    )}
                </React.Fragment>
            )}
        </div>
    );
});

export default Content;
