import React from 'react'
import DragDrawer from '../index';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

const prefixCls = 'dtc-drag-drawer';
describe('test dragDrawer', () => {
    afterEach(() => {
        cleanup()
    })
    test('disVisible correctly', () => {
        const { container: wrapper } = render(
            <DragDrawer getContainer={false} />
        );
        expect(wrapper.firstChild).toMatchSnapshot();
    })
    test('render correctly', () => {
        const { container: wrapper } = render(
            <DragDrawer visible width={400} getContainer={false}>
                Here is content of Drawer
            </DragDrawer>
        );
        expect(wrapper.firstChild).toMatchSnapshot();
    });
    test('render not draggable dragDrawer', () => {
        const { container: wrapper } = render(
            <DragDrawer visible getContainer={false} draggable={false}/>
        );
        expect(wrapper.firstChild).not.toHaveClass(`${prefixCls}`);
    })

    // test('call onDrag callback', () => {
    //     const onDrag = jest.fn();
    //     const { getByTestId } = render(
    //         <DragDrawer visible getContainer={false} onDrag= {onDrag}/>
    //     );
    //     const draggableElement = getByTestId('dragabble-element');
    //     fireEvent.drag(draggableElement)
    //     expect(onDrag).toBeCalled()
    // })
})
