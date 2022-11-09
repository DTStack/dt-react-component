import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import ContextMenu from '..';

describe('test contextMenu', () => {
    afterEach(cleanup);

    test('should match snapshot', () => {
        const { asFragment, getByTestId } = render(
            <ContextMenu
                data={[{ text: 'test', key: 'test', cb: () => {} }]}
                getPopupContainer={(node) => node.parentElement}
            >
                <span data-testid="test">test</span>
            </ContextMenu>
        );

        fireEvent.contextMenu(getByTestId('test').parentElement);

        expect(asFragment()).toMatchSnapshot();
    });

    test('should support to call cb function on data', () => {
        const testFn = jest.fn();
        const { getByTestId, container } = render(
            <ContextMenu
                data={[{ text: 'test', key: 'test', cb: testFn }]}
                getPopupContainer={(node) => node.parentElement}
            >
                <span data-testid="test">test</span>
            </ContextMenu>
        );

        fireEvent.contextMenu(getByTestId('test').parentElement);

        const dom = container.querySelector('.ant-dropdown-menu-title-content');

        expect(dom).not.toBe(null);

        fireEvent.click(dom);

        expect(testFn).toBeCalledTimes(1);
    });

    test('should support wrapperClassName', () => {
        const { getByTestId } = render(
            <ContextMenu
                data={[{ text: 'test', key: 'test', cb: () => {} }]}
                getPopupContainer={(node) => node.parentElement}
                wrapperClassName="wrapper"
            >
                <span data-testid="test">test</span>
            </ContextMenu>
        );

        const children = getByTestId('test');

        expect(children.parentElement.className).toContain('wrapper');
    });
});
