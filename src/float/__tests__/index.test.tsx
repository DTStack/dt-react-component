import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Float, { IFloatProps } from '../index';

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

describe('Float Component', () => {
    const defaultProps: IFloatProps = {
        className: 'test-class',
        style: { color: 'red' },
        draggable: true,
        position: { x: 0, y: 0 },
    };

    beforeEach(() => {
        cleanup();
    });

    it('should match snapshot', () => {
        const { asFragment } = render(<Float {...defaultProps}>Test</Float>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should handle drag events', () => {
        const fn = jest.fn();
        const { container } = render(
            <Float {...defaultProps} onChange={fn}>
                Test
            </Float>
        );
        const floatContainer = container.firstChild as HTMLElement;
        const { mouseUp } = dragFromTo(floatContainer, { x: 0, y: 0 }, { x: 100, y: 100 });
        expect(floatContainer).toHaveClass('dtc-float-container__dragging');

        mouseUp();

        expect(fn.mock.calls[0][1]).toEqual(expect.objectContaining({ x: 100, y: 100 }));
        expect(floatContainer).not.toHaveClass('dtc-float-container__dragging');
    });

    it('should disable dragging when draggable is set to false', () => {
        const fn = jest.fn();
        const { container } = render(
            <Float {...defaultProps} draggable={false} onChange={fn}>
                Test
            </Float>
        );
        const floatContainer = container.firstChild as HTMLElement;
        dragFromTo(floatContainer, { x: 0, y: 0 }, { x: 100, y: 100 }).mouseUp();

        expect(fn).not.toHaveBeenCalled();
    });

    it('should support pass through draggable options', () => {
        const fn = jest.fn();
        const { container } = render(
            <Float
                {...defaultProps}
                draggable={{
                    onDrag: fn,
                }}
            >
                Test
            </Float>
        );

        const floatContainer = container.firstChild as HTMLElement;
        dragFromTo(floatContainer, { x: 0, y: 0 }, { x: 100, y: 100 }).mouseUp();

        expect(fn).toBeCalled();
    });
});
