import React, { useMemo } from 'react';
import { Resizable, type ResizableProps } from 'react-resizable';
import { Alert, type AlertProps, Modal, type ModalProps } from 'antd';
import classNames from 'classnames';
import { omit } from 'lodash-es';

import type { IFloatProps } from '../float';
import Float from '../float';
import useMergeOption, { MergeOption } from '../float/useMergeOption';
import Handler from './handle';
import './index.scss';

export type RectState = { width: number; height: number };

export interface IModalProps extends ModalProps {
    size?: 'small' | 'default' | 'middle' | 'large';
    banner?: AlertProps['message'] | Omit<AlertProps, 'banner'>;
    draggable?: IFloatProps['draggable'];
    resizable?: MergeOption<Partial<ResizableProps>>;
    rect?: RectState;
    position?: IFloatProps['position'];
    onPositionChange?: (data: NonNullable<IFloatProps['position']>) => void;
    onRectChange?: (data: RectState) => void;
}

const getWidthFromSize = (size: IModalProps['size']) => {
    if (size === 'small') return 400;
    if (size === 'middle') return 640;
    if (size === 'large') return 900;
    return 520;
};

const isValidBanner = (banner: IModalProps['banner']): banner is AlertProps['message'] => {
    if (typeof banner === 'object') return React.isValidElement(banner);
    return true;
};

export default function InternalModal({
    bodyStyle,
    banner,
    size = 'default',
    children,
    width,
    className,
    draggable = false,
    position,
    resizable = false,
    rect,
    onRectChange,
    onPositionChange,
    modalRender,
    ...rest
}: IModalProps) {
    const mergedDraggable = useMergeOption(draggable, { handle: '.ant-modal-header' });
    const mergedResizable = useMergeOption(resizable, {
        axis: 'both',
        resizeHandles: ['s', 'w', 'e', 'n', 'ne', 'nw', 'sw', 'se'],
        width: 400,
        height: 400,
        minConstraints: [400, 400],
        handle: <Handler />,
    });

    const final = useMemo(() => {
        if (mergedResizable.disabled)
            return { width: width ?? getWidthFromSize(size), height: 'auto' };
        return {
            width: rect?.width || mergedResizable.options.width || 0,
            height: rect?.height || mergedResizable.options.height || 0,
        };
    }, [mergedResizable, width, size, rect]);

    const handleResize: ResizableProps['onResize'] = (e, data) => {
        mergedResizable.options.onResize?.(e, data);

        const nextSize = { width: data.size.width, height: data.size.height };
        onRectChange?.(nextSize);

        if (mergedDraggable.disabled || !position) return;
        const vertical = data.handle.includes('n');
        const horizontal = data.handle.includes('w');
        const offsetY = vertical ? nextSize.height - (final.height as number) : 0;
        const offsetX = horizontal ? nextSize.width - (final.width as number) : 0;
        const after = {
            x: position.x - offsetX,
            y: position.y - offsetY,
        };
        onPositionChange?.(after);
    };

    const handleRenderModal = (modal: React.ReactNode) => {
        const container = modalRender?.(modal) || modal;
        let child = <>{container}</>;
        if (!mergedResizable.disabled) {
            child = (
                <Resizable
                    {...mergedResizable.options}
                    width={final.width as number}
                    height={final.height as number}
                    onResize={handleResize}
                >
                    {child}
                </Resizable>
            );
        }
        if (!mergedDraggable.disabled) {
            child = (
                <Float
                    draggable={mergedDraggable.options}
                    position={position}
                    style={{ width: final.width, height: final.height }}
                    onChange={(_, { x, y }) => onPositionChange?.({ x, y })}
                >
                    {child}
                </Float>
            );
        }
        return child;
    };

    return (
        <Modal
            className={classNames(
                'dtc-modal',
                !mergedDraggable.disabled && 'dtc-modal__draggable',
                !mergedResizable.disabled && 'dtc-modal__resizable',
                className
            )}
            bodyStyle={{ padding: 0, ...bodyStyle }}
            style={{ height: final.height, width: final.width }}
            width={final.width}
            modalRender={handleRenderModal}
            {...rest}
        >
            {banner && (
                <Alert
                    message={isValidBanner(banner) ? banner : banner.message}
                    banner
                    {...(isValidBanner(banner) ? {} : omit(banner, 'message'))}
                />
            )}
            <section className="dtc-modal-body">{children}</section>
        </Modal>
    );
}