import { cleanup } from '@testing-library/react';
import { act, renderHook } from '@testing-library/react-hooks';

import useMeasure from '..';

describe('Test useMeasure', () => {
    beforeEach(() => {
        cleanup();
    });

    it('Should get default value', () => {
        const { result } = renderHook(() => useMeasure());
        const [ref, rect] = result.current;

        act(() => {
            const div = document.createElement('div');
            ref(div);
        });

        expect(rect).toMatchObject({
            width: 0,
            height: 0,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        });
    });

    it('Should tracks rectangle of a DOM element', () => {
        let listener: ((rect: any) => void) | undefined;
        (window as any).ResizeObserver = class ResizeObserver {
            constructor(ls: any) {
                listener = ls;
            }
            observe() {}
            disconnect() {}
        };
        const { result } = renderHook(() => useMeasure());
        const [ref] = result.current;

        act(() => {
            const div = document.createElement('div');
            ref(div);
        });

        act(() => {
            listener!([
                {
                    contentRect: {
                        x: 1,
                        y: 2,
                        width: 200,
                        height: 200,
                        top: 100,
                        bottom: 0,
                        left: 100,
                        right: 0,
                    },
                },
            ]);
        });

        expect(result.current[1]).toMatchObject({
            x: 1,
            y: 2,
            width: 200,
            height: 200,
            top: 100,
            bottom: 0,
            left: 100,
            right: 0,
        });
    });

    it('Should support get element', () => {
        const { result } = renderHook(() => useMeasure());
        const [ref] = result.current;
        const div = document.createElement('div');

        act(() => {
            ref(div);
        });

        expect(result.current[2]()).toBe(div);
    });
});
