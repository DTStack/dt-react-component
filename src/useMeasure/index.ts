import { useEffect, useMemo, useState } from 'react';

export type UseMeasureRect = Pick<
    DOMRectReadOnly,
    'x' | 'y' | 'top' | 'left' | 'right' | 'bottom' | 'height' | 'width'
>;

export const defaultState: UseMeasureRect = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
};

export default function useMeasure<E extends Element = Element>() {
    const [element, ref] = useState<E | null>(null);
    const [rect, setRect] = useState<UseMeasureRect>(defaultState);

    const observer = useMemo(
        () =>
            new window.ResizeObserver((entries) => {
                if (entries[0]) {
                    const { x, y, width, height, top, left, bottom, right } =
                        entries[0].contentRect;
                    setRect({ x, y, width, height, top, left, bottom, right });
                }
            }),
        []
    );

    useEffect(() => {
        if (!element) return;
        observer.observe(element);
        return () => {
            observer.disconnect();
        };
    }, [element]);

    function getElement() {
        return element;
    }

    return [ref, rect, getElement] as const;
}
