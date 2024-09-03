import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { alert, modal } from 'ant-design-testing';
import '@testing-library/jest-dom';

import Modal from '../';

describe('Test Modal Component', () => {
    beforeEach(() => {
        cleanup();
    });

    it('Should Match snapshot', () => {
        const { asFragment } = render(
            <Modal visible title="title" getContainer={false}>
                <div>test</div>
            </Modal>
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('Should get different size', () => {
        // default size
        const { container, rerender } = render(
            <Modal visible title="title" getContainer={false}>
                test
            </Modal>
        );
        expect(modal.query(container)?.style.width).toBe('520px');

        // small size
        rerender(
            <Modal visible title="title" getContainer={false} size="small">
                test
            </Modal>
        );
        expect(modal.query(container)?.style.width).toBe('400px');

        // middle size
        rerender(
            <Modal visible title="title" getContainer={false} size="middle">
                test
            </Modal>
        );
        expect(modal.query(container)?.style.width).toBe('640px');

        // large size
        rerender(
            <Modal visible title="title" getContainer={false} size="large">
                test
            </Modal>
        );
        expect(modal.query(container)?.style.width).toBe('900px');
    });

    describe('Should support banner', () => {
        it('Should support string banner', async () => {
            const { getByText } = render(
                <Modal visible title="title" getContainer={false} banner="banner">
                    test
                </Modal>
            );

            expect(getByText('banner')).toBeInTheDocument();
        });

        it('Should support ReactNode', async () => {
            const { getByTestId } = render(
                <Modal
                    visible
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
                    visible
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
    });
});
