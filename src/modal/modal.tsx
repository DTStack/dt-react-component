import React, { useMemo } from 'react';
import { Resizable, type ResizableProps } from 'react-resizable';
import { Alert, type AlertProps, Modal, type ModalProps as AntdModalProps, Spin } from 'antd';
import classNames from 'classnames';
import { omit } from 'lodash-es';

import Float, { type IFloatProps } from '../float';
import useMergeOption, { type MergeOption } from '../useMergeOption';
import { isAlertObjectProps } from '../utils';
import Handler from './handle';
import './index.scss';

export type RectState = { width: number; height: number };

export interface ModalProps extends AntdModalProps {
    size?: 'small' | 'default' | 'middle' | 'large';
    banner?: AlertProps['message'] | Omit<AlertProps, 'banner'>;
    draggable?: IFloatProps['draggable'];
    resizable?: MergeOption<Partial<ResizableProps>>;
    rect?: RectState;
    position?: IFloatProps['position'];
    loading?: boolean;
    onPositionChange?: (data: NonNullable<IFloatProps['position']>) => void;
    onRectChange?: (data: RectState) => void;
}

const getWidthFromSize = (size: ModalProps['size']) => {
    if (size === 'small') return 400;
    if (size === 'middle') return 640;
    if (size === 'large') return 900;
    return 520;
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
    loading,
    onRectChange,
    onPositionChange,
    modalRender,
    ...rest
}: ModalProps) {
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
        // Prevent unnecessary update
        if (after.x === position.x && after.y === position.y) return;
        onPositionChange?.(after);
    };

    const handleRenderModal = (modal: React.ReactNode) => {
        const container = modalRender?.(modal) || modal;
        let child = <>{container}</>;
        if (!mergedResizable.disabled) {
            child = (
                <Resizable
                    {...mergedResizable.options}
                    axis={mergedResizable.options.axis}
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
            maskClosable={false}
            {...rest}
        >
            {banner && (
                <Alert
                    className="dtc-modal-alert"
                    message={isAlertObjectProps(banner) ? banner.message : banner}
                    banner
                    {...(isAlertObjectProps(banner) ? omit(banner, 'message') : {})}
                />
            )}
            <section className="dtc-modal-body">
                <Spin spinning={loading}>{children}</Spin>
            </section>
        </Modal>
    );
}
