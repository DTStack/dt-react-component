import '@babel/polyfill';
import React from 'react';
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import MxGraphContainer, { WIDGETS_PREFIX } from '../index';
import '@testing-library/jest-dom';

describe('The mxGraph Container test', () => {
    afterEach(() => {
        cleanup();
    });

    test('Match Snapshot', () => {
        const { asFragment } = render(<MxGraphContainer graphData={[]} />);
        expect(asFragment()).toMatchSnapshot();
    });

    test('Match Snapshot with data and toolbar', () => {
        const { asFragment } = render(
            <MxGraphContainer
                graphData={[{ taskId: 1, childNode: [{ taskId: 2 }] }]}
                onRenderActions={(graph) => {
                    return (
                        <>
                            <button onClick={() => graph.zoomIn()}>+</button>
                            <button onClick={() => graph.zoomOut()}>-</button>
                        </>
                    );
                }}
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });

    test('Match Snapshot with data and widgets', () => {
        const { asFragment, container } = render(
            <MxGraphContainer
                graphData={[{ taskId: 1, childNode: [{ taskId: 2 }] }]}
                onRenderWidgets={() => (
                    <>
                        <div style={{ height: 20, background: '#ddd' }}>
                            拖拽组件
                        </div>
                        <ul
                            style={{
                                listStyle: 'none',
                                margin: 0,
                                padding: 0
                            }}
                        >
                            <li
                                className={WIDGETS_PREFIX + '__'}
                                style={{
                                    cursor: 'move',
                                    margin: '5px 0'
                                }}
                            >
                                你好1
                            </li>
                        </ul>
                    </>
                )}
            />
        );

        const widgetsParentNode = container.querySelector<HTMLDivElement>(
            '.graph-widgets'
        );
        // NOTHING happened
        fireEvent.contextMenu(widgetsParentNode);
        expect(asFragment()).toMatchSnapshot();
    });

    test('Match Snapshot with style and bottom status bar', () => {
        const { asFragment } = render(
            <MxGraphContainer
                graphData={[{ taskId: 1, childNode: [{ taskId: 2 }] }]}
                style={{
                    background: '#ddd'
                }}
            >
                {() => <div>This is legend</div>}
            </MxGraphContainer>
        );
        expect(asFragment()).toMatchSnapshot();
    });

    test('Should support to set loading', () => {
        const { getByText } = render(
            <MxGraphContainer
                loading={true}
                graphData={[{ taskId: 1, childNode: [{ taskId: 2 }] }]}
            />
        );
        expect(getByText('Loading...')).toBeInTheDocument();
    });

    test('Should support to change the vertex size', () => {
        const { container, rerender } = render(
            <MxGraphContainer
                graphData={[{ taskId: 1, childNode: [{ taskId: 2 }] }]}
                onRenderCell={(cell) =>
                    `<div data-testid="${cell.value.taskId}"></div>`
                }
            />
        );
        expect(
            container.querySelector('rect[width="210"]')
        ).toBeInTheDocument();

        rerender(
            <MxGraphContainer
                graphData={[{ taskId: 1, childNode: [{ taskId: 2 }] }]}
                vertexSize={{
                    width: 250,
                    height: 50
                }}
                onRenderCell={(cell) =>
                    `<div data-testid="${cell.value.taskId}"></div>`
                }
            />
        );
        // All vertexes are with 250px's width
        expect(container.querySelector('rect[width="210"]')).toBeNull();
        expect(
            container.querySelector('rect[width="250"]')
        ).toBeInTheDocument();

        // Dynamic control the sizes of each vertexes
        rerender(
            <MxGraphContainer
                graphData={[{ taskId: 1, childNode: [{ taskId: 2 }] }]}
                onGetSize={(data) => ({
                    width: data.taskId === 1 ? 250 : 210,
                    height: 50
                })}
                onRenderCell={(cell) =>
                    `<div data-testid="${cell.value.taskId}"></div>`
                }
            />
        );
        expect(
            container.querySelector('rect[width="210"]')
        ).toBeInTheDocument();
        expect(
            container.querySelector('rect[width="250"]')
        ).toBeInTheDocument();
    });

    test('Should render both parent node and children node', () => {
        const { getByTestId } = render(
            <MxGraphContainer
                graphData={[
                    {
                        taskId: 1,
                        childNode: [{ taskId: 2 }],
                        parentNode: [{ taskId: 3 }]
                    }
                ]}
                onRenderCell={(cell) =>
                    `<div data-testid="${cell.value.taskId}"></div>`
                }
            />
        );
        expect(getByTestId('1')).toBeInTheDocument();
        expect(getByTestId('2')).toBeInTheDocument();
        expect(getByTestId('3')).toBeInTheDocument();
    });

    test('Should listen the container changed', () => {
        const mockContainerChanged = jest.fn();
        const { container } = render(
            <MxGraphContainer
                graphData={[
                    {
                        taskId: 1,
                        childNode: [{ taskId: 2 }],
                        parentNode: [{ taskId: 3 }]
                    }
                ]}
                onContainerChanged={mockContainerChanged}
                onRenderCell={(cell) =>
                    `<div data-testid="${cell.value.taskId}"></div>`
                }
            />
        );

        const mxGraphContainer = container.querySelector<HTMLDivElement>(
            'div[tabindex="-1"]'
        );
        fireEvent.scroll(mxGraphContainer, { target: { scrollY: 100 } });

        expect(mockContainerChanged).toBeCalled();
    });

    test('Should support to set the layout orientation', () => {
        const { getByTestId, rerender } = render(
            <MxGraphContainer
                graphData={[
                    {
                        taskId: 1,
                        childNode: [{ taskId: 2 }],
                        parentNode: [{ taskId: 3 }]
                    }
                ]}
                onRenderCell={(cell) =>
                    `<div data-testid="${cell.value.taskId}"></div>`
                }
            />
        );
        const getVertex = (text: string) =>
            getByTestId(text).parentElement.parentElement.parentElement;

        // The default orientation of layout is north
        // So the layout should be like:
        // 3
        // |
        // 1
        // |
        // 2
        expect(parseInt(getVertex('1').style.top, 10)).toBeLessThan(
            parseInt(getVertex('2').style.top, 10)
        );
        expect(parseInt(getVertex('3').style.top, 10)).toBeLessThan(
            parseInt(getVertex('1').style.top, 10)
        );
        expect(parseInt(getVertex('1').style.left, 10)).toEqual(
            parseInt(getVertex('2').style.left, 10)
        );
        expect(parseInt(getVertex('2').style.left, 10)).toEqual(
            parseInt(getVertex('3').style.left, 10)
        );

        rerender(
            <MxGraphContainer
                direction="west"
                graphData={[
                    {
                        taskId: 1,
                        childNode: [{ taskId: 2 }],
                        parentNode: [{ taskId: 3 }]
                    }
                ]}
                onRenderCell={(cell) =>
                    `<div data-testid="${cell.value.taskId}"></div>`
                }
            />
        );

        // The layout should be like:
        // 3-1-2
        expect(parseInt(getVertex('1').style.top, 10)).toEqual(
            parseInt(getVertex('2').style.top, 10)
        );
        expect(parseInt(getVertex('2').style.top, 10)).toEqual(
            parseInt(getVertex('3').style.top, 10)
        );
        expect(parseInt(getVertex('3').style.left, 10)).toBeLessThan(
            parseInt(getVertex('1').style.left, 10)
        );
        expect(parseInt(getVertex('1').style.left, 10)).toBeLessThan(
            parseInt(getVertex('2').style.left, 10)
        );
    });

    test('Should support call onClick', () => {
        const clickFn = jest.fn();
        const { container } = render(
            <MxGraphContainer
                graphData={[
                    {
                        taskId: 1,
                        childNode: [{ taskId: 2 }],
                        parentNode: [{ taskId: 3 }]
                    }
                ]}
                onClick={clickFn}
            />
        );

        const svg = container.querySelector('svg');
        fireEvent.mouseDown(
            svg.querySelector('g[transform="translate(0.5,0.5)"]'),
            { clientX: 200, clientY: 120 }
        );
        fireEvent.mouseUp(
            svg.querySelector('g[transform="translate(0.5,0.5)"]'),
            { clientX: 200, clientY: 120 }
        );
        expect(clickFn).toBeCalled();
    });

    test('Should support call onContextMenu', async () => {
        const menuFn = jest.fn();
        const { container, getByText } = render(
            <MxGraphContainer
                graphData={[
                    {
                        taskId: 1,
                        childNode: [{ taskId: 2 }],
                        parentNode: [{ taskId: 3 }]
                    }
                ]}
                onContextMenu={() => [
                    {
                        id: 'test',
                        title: '测试'
                    },
                    {
                        id: 'disabled',
                        title: '禁用',
                        disabled: true
                    },
                    {
                        id: 'func',
                        title: 'func',
                        callback: menuFn
                    },
                    {
                        id: 'subMenu',
                        title: 'subMenu',
                        children: [
                            {
                                id: 'subMenu-1',
                                title: 'subMenu-1'
                            }
                        ]
                    }
                ]}
                onRenderCell={(cell) =>
                    `<div data-testid="${cell.value.taskId}"></div>`
                }
            />
        );

        const svg = container.querySelector('svg');
        // The mxGraph distinguishes contextMenu and click event in itself
        // Actually they could call it up in same way.
        fireEvent.mouseDown(
            svg.querySelector('g[transform="translate(0.5,0.5)"]'),
            { clientX: 200, clientY: 120, which: 3 }
        );
        fireEvent.mouseUp(
            svg.querySelector('g[transform="translate(0.5,0.5)"]'),
            { clientX: 200, clientY: 120 }
        );

        await waitFor(
            () => {
                expect(
                    document.querySelector('table.mxPopupMenu')
                ).toBeInTheDocument();

                expect(
                    getByText('禁用').classList.contains('mxDisabled')
                ).toBeTruthy();

                // The mousemove is used in mxGraph to mock a hover behavior
                fireEvent.mouseMove(getByText('subMenu'));
                expect(getByText('subMenu-1')).toBeInTheDocument();

                // The click is mocked by mousedown and mouseup
                fireEvent.mouseDown(getByText('func'));
                fireEvent.mouseUp(getByText('func'));
                expect(menuFn).toBeCalled();

                // After clicking, popup should be disappeared
                expect(document.querySelector('table.mxPopupMenu')).toBeNull();
            },
            { timeout: 500 }
        );
    });
});
