import React, { useEffect, useRef, useState } from 'react';
import CSSMotion, { type CSSMotionProps, type MotionEventHandler } from 'rc-motion';
import type { MotionEndEventHandler, MotionEvent } from 'rc-motion/lib/interface';

import './index.less';

interface IDetailProps {
    title: string;
    children?: any;
}

// ================== Collapse Motion ==================
const getCollapsedHeight: MotionEventHandler = () => ({
    height: 0,
    opacity: 0,
});
const getRealHeight: MotionEventHandler = (node) => {
    const { scrollHeight } = node;
    return { height: scrollHeight, opacity: 1 };
};
const getCurrentHeight: MotionEventHandler = (node) => ({
    height: node?.offsetHeight ?? 0,
});

const skipOpacityTransition: MotionEndEventHandler = (_, event: MotionEvent) =>
    event?.deadline === true || (event as TransitionEvent).propertyName === 'height';

const initCollapseMotion: CSSMotionProps = {
    motionName: 'ant-motion-collapse',
    onAppearStart: getCollapsedHeight,
    onEnterStart: getCollapsedHeight,
    onAppearActive: getRealHeight,
    onEnterActive: getRealHeight,
    onLeaveStart: getCurrentHeight,
    onLeaveActive: getCollapsedHeight,
    onAppearEnd: skipOpacityTransition,
    onEnterEnd: skipOpacityTransition,
    onLeaveEnd: skipOpacityTransition,
    motionDeadline: 500,
};

export default function Details({ title, children }: IDetailProps) {
    const [open, setOpen] = useState(false);
    const container = useRef<HTMLDetailsElement>(null);
    const raf = useRef<number | undefined>(undefined);

    useEffect(() => {
        if (open) {
            raf.current = window.requestAnimationFrame(() => {
                if (container.current) {
                    container.current.open = true;
                }
            });
        }

        return () => {
            raf.current !== undefined && window.cancelAnimationFrame(raf.current);
        };
    }, [open]);

    const handleVisibleChanged = (visible: boolean) => {
        if (!visible) {
            raf.current !== undefined && window.cancelAnimationFrame(raf.current);
            raf.current = window.requestAnimationFrame(() => {
                if (container.current) {
                    container.current.open = false;
                }
            });
        }
    };

    return (
        <details
            ref={container}
            className="dumi-builtins-details"
            onClick={(e) => {
                e.preventDefault();
            }}
            data-open={open}
        >
            <summary onClick={() => setOpen((o) => !o)}>{title}</summary>
            <CSSMotion
                {...initCollapseMotion}
                visible={open}
                onVisibleChanged={handleVisibleChanged}
            >
                {({ className, style }) => (
                    <section
                        className={`dumi-builtins-details-content ${className || ''}`}
                        style={style}
                    >
                        {children}
                    </section>
                )}
            </CSSMotion>
        </details>
    );
}
