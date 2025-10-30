import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { alert, modal } from 'ant-design-testing';
import '@testing-library/jest-dom';

import { IFloatProps } from '../../float';
import Modal from '../';

function dragFromTo(
    ele: HTMLElement,
    from: NonNullable<IFloatProps['position']>,
    to: NonNullable<IFloatProps['position']>
) {
    fireEvent.mouseDown(ele, { clientX: from.x, clientY: from.y });
    fireEvent.mouseMove(document, { clientX: to.x, clientY: to.y });
    return {
        mouseUp: () => fireEvent.mouseUp(ele, { clientX: to.x, clientY: to.y }),
    };
}

describe('Test Modal Component', () => {
    beforeEach(() => {
        cleanup();
    });

    it('Should Match snapshot', () => {
        const { asFragment } = render(
            <Modal open title="title" getContainer={false}>
                <div>test</div>
            </Modal>
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('Should get different size', () => {
        // default size
        const { container, rerender } = render(
            <Modal open title="title" getContainer={false}>
                test
            </Modal>
        );
        expect(modal.query(container)?.style.width).toBe('520px');

        // small size
        rerender(
            <Modal open title="title" getContainer={false} size="small">
                test
            </Modal>
        );
        expect(modal.query(container)?.style.width).toBe('400px');

        // middle size
        rerender(
            <Modal open title="title" getContainer={false} size="middle">
                test
            </Modal>
        );
        expect(modal.query(container)?.style.width).toBe('640px');

        // large size
        rerender(
            <Modal open title="title" getContainer={false} size="large">
                test
            </Modal>
        );
        expect(modal.query(container)?.style.width).toBe('900px');
    });

    describe('Should support banner', () => {
        it('Should support string banner', async () => {
            const { getByText } = render(
                <Modal open title="title" getContainer={false} banner="banner">
                    test
                </Modal>
            );

            expect(getByText('banner')).toBeInTheDocument();
        });

        it('Should support ReactNode', async () => {
            const { getByTestId } = render(
                <Modal
                    open
                    title="title"
                    getContainer={false}
                    banner={<div data-testid="banner">xxxx</div>}
                >
                    test
                </Modal>
            );

            expect(getByTestId('banner')).toBeInTheDocument();
        });

        it('Should support AlertProps', async () => {
            const { container, getByText } = render(
                <Modal
                    open
                    title="title"
                    getContainer={false}
                    banner={{ message: 'banner', type: 'error' }}
                >
                    test
                </Modal>
            );

            expect(getByText('banner')).toBeInTheDocument();
            expect(alert.query(container)?.classList.contains('ant-alert-error')).toBeTruthy();
        });

        it('Should match snapshot for draggable modal', () => {
            const { asFragment } = render(
                <Modal open title="title" getContainer={false} draggable position={{ x: 0, y: 0 }}>
                    test
                </Modal>
            );
            expect(asFragment()).toMatchSnapshot();
        });

        it('Should support draggable modal and update position on drag', () => {
            const fn = jest.fn();
            const { container } = render(
                <Modal
                    open
                    title="title"
                    getContainer={false}
                    draggable
                    position={{ x: 0, y: 0 }}
                    onPositionChange={fn}
                >
                    test
                </Modal>
            );

            const modalElement = modal
                .query(container)!
                .querySelector<HTMLDivElement>('.ant-modal-header')!;

            dragFromTo(modalElement, { x: 0, y: 0 }, { x: 100, y: 100 }).mouseUp();

            expect(fn).toHaveBeenCalledWith({ x: 100, y: 100 });
        });

        it('Should match snapshot for resizable modal', () => {
            const { asFragment } = render(
                <Modal
                    open
                    title="title"
                    getContainer={false}
                    resizable
                    rect={{ width: 620, height: 600 }}
                >
                    test
                </Modal>
            );
            expect(asFragment()).toMatchSnapshot();
        });

        it('Should call onRectChange for resizable modal', () => {
            const onRectChange = jest.fn();
            const { container } = render(
                <Modal
                    open
                    title="title"
                    getContainer={false}
                    resizable
                    rect={{ width: 620, height: 600 }}
                    onRectChange={onRectChange}
                >
                    test
                </Modal>
            );
            const eHandle = modal.query(container)!.querySelector<HTMLDivElement>('.handle-e')!;
            dragFromTo(eHandle, { x: 620, y: 300 }, { x: 700, y: 300 }).mouseUp();
            expect(onRectChange).toBeCalledWith({ width: 700, height: 600 });
        });

        it('Should support resizable and draggable modal', () => {
            const onRectChange = jest.fn();
            const onPositionChange = jest.fn();
            const { container } = render(
                <Modal
                    open
                    title="title"
                    getContainer={false}
                    resizable
                    draggable
                    rect={{ width: 620, height: 600 }}
                    position={{ x: 50, y: 50 }}
                    onRectChange={onRectChange}
                    onPositionChange={onPositionChange}
                >
                    test
                </Modal>
            );
            const eHandle = modal.query(container)!.querySelector<HTMLDivElement>('.handle-e')!;
            dragFromTo(eHandle, { x: 620, y: 300 }, { x: 700, y: 300 }).mouseUp();
            expect(onRectChange).toBeCalledWith({ width: 700, height: 600 });
            expect(onPositionChange).not.toBeCalled();

            const wHandle = modal.query(container)!.querySelector<HTMLDivElement>('.handle-w')!;
            dragFromTo(wHandle, { x: 620, y: 300 }, { x: 400, y: 300 }).mouseUp();
            expect(onRectChange).toBeCalledWith({ width: 700, height: 600 });
            expect(onPositionChange).toBeCalledWith({ x: -170, y: 50 });
        });
    });
});
