import React, { useState } from 'react';
import Draggable, { type DraggableEventHandler, type DraggableProps } from 'react-draggable';
import classNames from 'classnames';

import useMergeOption, { type MergeOption } from '../useMergeOption';
import './index.scss';

export interface IFloatProps {
    className?: string;
    style?: React.CSSProperties;
    draggable?: MergeOption<Partial<Omit<DraggableProps, 'position'>>>;
    position?: DraggableProps['position'];
    onChange?: DraggableProps['onStop'];
}

export default function Float({
    className,
    style,
    draggable = false,
    position,
    children,
    onChange,
}: React.PropsWithChildren<IFloatProps>) {
    const [dragging, setDragging] = useState(false);
    const mergedDraggable = useMergeOption(draggable);

    const handleStopDrag: DraggableEventHandler = (e, data) => {
        mergedDraggable.options.onStop?.(e, data);
        onChange?.(e, data);
        setDragging(false);
    };

    const handleDrag: DraggableEventHandler = (e, data) => {
        mergedDraggable.options.onDrag?.(e, data);
        setDragging(true);
    };

    return (
        <Draggable
            disabled={mergedDraggable.disabled}
            {...mergedDraggable.options}
            position={position}
            onDrag={handleDrag}
            onStop={handleStopDrag}
        >
            <div
                className={classNames(
                    'dtc-float-container',
                    className,
                    dragging && 'dtc-float-container__dragging'
                )}
                style={style}
            >
                {children}
            </div>
        </Draggable>
    );
}
