import { CSSProperties, RefObject, useLayoutEffect, useReducer, useRef } from 'react';

import { getContainerWidth, getRangeWidth, getStyle } from './utils';

const DEFAULT_MAX_WIDTH = 120;
const updateReducer = (num: number): number => (num + 1) % 1_000_000;
export default function useTextStyle<T, E extends HTMLElement>(
    value: T,
    maxWidth?: string | number
): [RefObject<HTMLSpanElement>, boolean, CSSProperties, () => void] {
    const [, update] = useReducer(updateReducer, 0);

    const style = useRef<CSSProperties>({ maxWidth: DEFAULT_MAX_WIDTH, cursor: 'default' });
    const isOverflow = useRef<boolean>(false);

    const ref = useRef<E>(null);

    const getTextContainerWidth = () => {
        const textNode = ref.current!;
        const parentElement = textNode.parentElement!;
        // 这里是获取 ref 元素占的宽度，在计算时，需要把 ref 元素隐藏，以免计算时影响结果
        const oldDisplay = textNode.style.display;
        textNode.style.display = 'none';
        const containerWidth = getContainerWidth(parentElement, DEFAULT_MAX_WIDTH, maxWidth);
        textNode.style.display = oldDisplay;

        return containerWidth;
    };

    useLayoutEffect(() => {
        updateTextStyle();
    }, [value, maxWidth]);

    const handleCursor = () => {
        const textNode = ref.current!;
        const parentElement = textNode.parentElement!;
        const parentCursor = getStyle(parentElement, 'cursor');

        if (parentCursor !== 'default') {
            // 继承父元素的 hover 手势
            style.current = { ...style.current, cursor: parentCursor };
        } else {
            // 截取文本时，则改变 hover 手势为 pointer
            if (isOverflow.current) style.current = { ...style.current, cursor: 'pointer' };
        }
    };

    /**
     * @description: 计算父元素的宽度是否满足内容的大小
     * @return {*}
     */
    const updateTextStyle = () => {
        const textNode = ref.current;
        if (!textNode) return;

        const rangeWidth = getRangeWidth(textNode);
        const containerWidth = getTextContainerWidth();

        style.current = { ...style.current, maxWidth: containerWidth };
        isOverflow.current = rangeWidth > containerWidth;
        handleCursor();
        update();
    };

    return [ref, isOverflow.current, style.current, updateTextStyle];
}
