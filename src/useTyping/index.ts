import { useEffect, useRef, useState } from 'react';

const typingInterval = 50;

/**
 * 实现打字机效果
 * @example
 * ```js
 * const [val, setVal] = useState('');
 * const typing = useTyping({
 *  onTyping: setVal,
 * });
 *
 * typing.start();
 * typing.push('hello');
 * typing.push('world');
 * typing.end();
 * ```
 */
export default function useTyping({ onTyping }: { onTyping: (post: string) => void }) {
    const interval = useRef<number>();
    const queue = useRef<string>('');
    const typingCountOnTime = useRef<number>(1);
    const beginIndex = useRef<number>(0);
    const isStart = useRef<boolean>(false);
    const [isTyping, toggleIsTyping] = useState<boolean>(false);

    const closeSignal = useRef(false);
    const closeInterval = useRef<number>(0);

    function getTypingWordCount() {
        const remainWordsLength = queue.current.length - beginIndex.current - 1;
        const typingTimes = 1000 / typingInterval;
        // 保证剩余内容在一秒内输出完
        typingCountOnTime.current = Math.ceil(remainWordsLength / typingTimes);
    }

    function startTyping() {
        if (interval.current) return;
        interval.current = window.setInterval(() => {
            if (beginIndex.current < queue.current.length) {
                const str = queue.current;
                onTyping(str.slice(0, beginIndex.current + typingCountOnTime.current));
                beginIndex.current += typingCountOnTime.current;
            } else if (!isStart.current) {
                // 如果发送了全部的消息且信号关闭，则清空队列
                window.clearInterval(interval.current);
                interval.current = 0;
                toggleIsTyping(false);
                closeSignal.current = false;
            }
            // 如果发送了全部的消息，但是信号没有关闭，则什么都不做继续轮训等待新的消息
        }, typingInterval);
    }

    useEffect(() => {
        return () => {
            window.clearInterval(interval.current);
            window.clearInterval(closeInterval.current);
            interval.current = 0;
        };
    }, []);

    function start(preset = '') {
        isStart.current = true;
        toggleIsTyping(true);
        window.clearInterval(interval.current);
        interval.current = 0;
        queue.current = preset;
        beginIndex.current = preset.length;
    }

    function push(str: string) {
        if (!isStart.current) return;
        // 防止流传输的过程中把换行符分割了
        if (str.startsWith('n') && queue.current.endsWith('\\')) {
            queue.current = queue.current.slice(0, -1) + '\n' + str.slice(1).replace(/\\n/g, '\n');
        } else {
            queue.current += str.replace(/\\n/g, '\n');
        }
        getTypingWordCount();
        startTyping();
    }

    // 关闭的时候不需要清空队列，因为可能还有一些消息没有发送完毕，统一等消息发送完毕后关闭
    async function close() {
        isStart.current = false;
        closeSignal.current = true;
        window.clearInterval(closeInterval.current);
        return new Promise<void>((resolve) => {
            closeInterval.current = window.setInterval(() => {
                if (!closeSignal.current) {
                    resolve();
                    closeSignal.current = true;
                    window.clearInterval(closeInterval.current);
                }
            }, 1000);
        });
    }

    // 立即停止
    function stop() {
        isStart.current = false;
        toggleIsTyping(false);
        closeSignal.current = false;
        if (interval.current) {
            window.clearInterval(interval.current);
            interval.current = 0;
        }
        queue.current = '';
        beginIndex.current = 0;
    }

    return { start, push, close, stop, isTyping };
}
