import { useEffect, useRef, useState } from 'react';
import { renderHook } from '@testing-library/react-hooks';

import useTyping from '..';

const testText = '这是一段测试文案';

describe('Test useTyping hook', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });
    afterEach(() => {
        jest.useRealTimers();
    });

    it('Should typing one word per second', async () => {
        const { result, rerender } = renderHook((props: any) => {
            const [text, setText] = useState('');
            const ref = useRef(0);
            const typing = useTyping({
                onTyping(post) {
                    setText(post);
                },
            });

            useEffect(() => {
                if (props?.start) {
                    typing.start();
                    let p = 0;
                    ref.current = window.setInterval(() => {
                        typing.push(testText[p]);
                        p++;
                        if (p >= testText.length) {
                            typing.close();
                            window.clearInterval(ref.current);
                        }
                    }, 1000);
                }

                return () => {
                    window.clearInterval(ref.current);
                };
            }, [props?.start]);

            return { text, isTyping: typing.isTyping };
        });

        expect(result.current.text).toBe('');
        expect(result.current.isTyping).toBe(false);
        // 开启打字机效果
        rerender({ start: true });

        jest.advanceTimersByTime(1000);
        expect(result.current.text).toBe('');
        expect(result.current.isTyping).toBe(true);

        Array.from({ length: testText.length }).forEach((_, index) => {
            // Fast-forward until all timers have been executed
            jest.advanceTimersByTime(1000);
            expect(result.current.text).toBe(testText.slice(0, index + 1));
        });

        expect(result.current.isTyping).toBe(false);
    });

    it('Should waiting for new text', () => {
        const { result } = renderHook(() => {
            const [text, setText] = useState('');
            const typing = useTyping({
                onTyping(post) {
                    setText(post);
                },
            });

            useEffect(() => {
                typing.start();
                typing.push(testText);
            }, []);

            return { text, isTyping: typing.isTyping };
        });

        jest.advanceTimersByTime(1000);
        expect(result.current.isTyping).toBe(true);
        expect(result.current.text).toBe(testText);
    });

    it('Should stop immediately and get empty text', () => {
        const { result } = renderHook(() => {
            const [text, setText] = useState('');
            const typing = useTyping({
                onTyping(post) {
                    setText(post);
                },
            });

            useEffect(() => {
                typing.start();
                typing.push(testText);
                typing.stop();
            }, []);

            return { text, isTyping: typing.isTyping };
        });

        expect(result.current.isTyping).toBe(false);
        expect(result.current.text).toBe('');
    });

    it('Should type all text within one second since close', () => {
        const { result } = renderHook(() => {
            const [text, setText] = useState('');
            const typing = useTyping({
                onTyping(post) {
                    setText(post);
                },
            });

            useEffect(() => {
                typing.start();
                typing.push(testText + testText + testText);
                typing.close();
            }, []);

            return { text, isTyping: typing.isTyping };
        });

        expect(result.current.isTyping).toBe(true);
        expect(result.current.text).toBe('');
        jest.advanceTimersByTime(1000);
        expect(result.current.isTyping).toBe(false);
        expect(result.current.text).toBe(testText + testText + testText);
    });

    it('Should concat split character', () => {
        const { result } = renderHook(() => {
            const [text, setText] = useState('');
            const typing = useTyping({
                onTyping(post) {
                    setText(post);
                },
            });

            useEffect(() => {
                typing.start();
                typing.push(testText + '\\');
                typing.push('n' + testText);
                typing.close();
            }, []);

            return { text, isTyping: typing.isTyping };
        });

        expect(result.current.isTyping).toBe(true);
        expect(result.current.text).toBe('');
        jest.advanceTimersByTime(1000);
        expect(result.current.isTyping).toBe(false);
        expect(result.current.text).toBe(testText + '\n' + testText);
    });

    it('Should type all text immediately', () => {
        const { result } = renderHook(() => {
            const [text, setText] = useState('');
            const typing = useTyping({
                onTyping(post) {
                    setText(post);
                },
            });

            useEffect(() => {
                typing.start();
                typing.push(testText + testText + testText);
                typing.close(true);
            }, []);

            return { text, isTyping: typing.isTyping };
        });

        expect(result.current.isTyping).toBe(false);
        expect(result.current.text).toBe(testText + testText + testText);
    });

    it('Should type empty text', () => {
        const { result } = renderHook(() => {
            const [text, setText] = useState('');
            const typing = useTyping({
                onTyping(post) {
                    setText(post);
                },
            });

            useEffect(() => {
                typing.start();
                typing.close();
                typing.push(testText + testText + testText);
            }, []);

            return { text, isTyping: typing.isTyping };
        });

        expect(result.current.isTyping).toBe(false);
        expect(result.current.text).toBe('');
    });
});
