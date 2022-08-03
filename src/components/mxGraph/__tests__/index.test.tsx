import '@babel/polyfill';
import React from 'react';
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import MxGraphContainer, { WIDGETS_PREFIX, IContainerRef } from '../index';
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

    test('Should support all keyboard binding events', () => {
        const bindKeyFn = jest.fn();
        render(
            <MxGraphContainer
                graphData={[{ taskId: 1, childNode: [{ taskId: 2 }] }]}
                onKeyDown={() => [
                    {
                        id: 'bindKey',
                        method: 'bindKey',
                        keyCode: 8,
                        func: bindKeyFn
                    },
                    {
                        id: 'bindShiftKey',
                        method: 'bindShiftKey',
                        keyCode: 8,
                        func: bindKeyFn
                    },
                    {
                        id: 'bindControlKey',
                        method: 'bindControlKey',
                        keyCode: 8,
                        func: bindKeyFn
                    },
                    {
                        id: 'bindControlShiftKey',
                        method: 'bindControlShiftKey',
                        keyCode: 8,
                        func: bindKeyFn
                    }
                ]}
            />
        );

        expect(bindKeyFn).not.toBeCalled();
        fireEvent.keyDown(document.documentElement, {
            key: 'Backspace',
            keyCode: 8
        });
        expect(bindKeyFn).toBeCalledTimes(1);

        fireEvent.keyDown(document.documentElement, {
            shiftKey: true,
            key: 'Backspace',
            keyCode: 8
        });
        expect(bindKeyFn).toBeCalledTimes(2);

        fireEvent.keyDown(document.documentElement, {
            ctrlKey: true,
            key: 'Backspace',
            keyCode: 8
        });
        expect(bindKeyFn).toBeCalledTimes(3);

        fireEvent.keyDown(document.documentElement, {
            ctrlKey: true,
            key: 'Backspace',
            keyCode: 8
        });
        expect(bindKeyFn).toBeCalledTimes(4);

        fireEvent.keyDown(document.documentElement, {
            shiftKey: true,
            ctrlKey: true,
            key: 'Backspace',
            keyCode: 8
        });
        expect(bindKeyFn).toBeCalledTimes(5);
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
        fireEvent.mouseDown(
            svg.querySelector('g[transform="translate(0.5,0.5)"]'),
            // Both contextMenu and click event are called by mousedown and mouseup
            // They distinguish through which property, refer by: mxEvent.isRightMouseButton
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

    test('Should support to render the keyboard event in contextMenu', async () => {
        const keydownFunc = jest.fn();
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
                    }
                ]}
                onKeyDown={() => [
                    {
                        // Keep the same id with the context menu
                        // So the item with same id in context menu will call keydown's event
                        id: 'test',
                        method: 'bindControlKey',
                        keyCode: 8,
                        func: keydownFunc
                    }
                ]}
                onRenderCell={(cell) =>
                    `<div data-testid="${cell.value.taskId}"></div>`
                }
            />
        );

        const svg = container.querySelector('svg');
        fireEvent.mouseDown(
            svg.querySelector('g[transform="translate(0.5,0.5)"]'),
            // Both contextMenu and click event are called by mousedown and mouseup
            // They distinguish through which property, refer by: mxEvent.isRightMouseButton
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

                // mxGraph detects the same id in keydown, so this menu has character codes
                expect(getByText('测试(Meta ⌫)')).toBeInTheDocument();

                fireEvent.mouseDown(getByText('测试(Meta ⌫)'));
                fireEvent.mouseUp(getByText('测试(Meta ⌫)'));
                expect(keydownFunc).toBeCalled();
            },
            { timeout: 500 }
        );
    });

    test('Should ONLY render one popup menu in graph', async () => {
        const { container } = render(
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
                    }
                ]}
                onRenderCell={(cell) =>
                    `<div data-testid="${cell.value.taskId}"></div>`
                }
            />
        );

        const svg = container.querySelector('svg');
        const vertexes = svg.querySelectorAll(
            'g[transform="translate(0.5,0.5)"]'
        );
        fireEvent.mouseDown(
            vertexes[0],
            // Both contextMenu and click event are called by mousedown and mouseup
            // They distinguish through which property, refer by: mxEvent.isRightMouseButton
            { clientX: 200, clientY: 120, which: 3 }
        );
        fireEvent.mouseUp(vertexes[0], { clientX: 200, clientY: 120 });

        await waitFor(
            async () => {
                expect(
                    document.querySelectorAll('table.mxPopupMenu').length
                ).toBe(1);

                fireEvent.mouseDown(
                    vertexes[1],
                    // Both contextMenu and click event are called by mousedown and mouseup
                    // They distinguish through which property, refer by: mxEvent.isRightMouseButton
                    { clientX: 200, clientY: 120, which: 3 }
                );
                fireEvent.mouseUp(vertexes[1], { clientX: 200, clientY: 120 });

                // Call context menu in other vertex, there still only is one popup in graph
                await waitFor(
                    () => {
                        expect(
                            document.querySelectorAll('table.mxPopupMenu')
                                .length
                        ).toBe(1);
                    },
                    { timeout: 500 }
                );
            },
            { timeout: 500 }
        );
    });

    test('Should support to call onDoubleClick', () => {
        const doubleClickFn = jest.fn();
        const { container } = render(
            <MxGraphContainer
                graphData={[
                    {
                        taskId: 1,
                        childNode: [{ taskId: 2 }],
                        parentNode: [{ taskId: 3 }]
                    }
                ]}
                onDoubleClick={doubleClickFn}
                onRenderCell={(cell) =>
                    `<div data-testid="${cell.value.taskId}"></div>`
                }
            />
        );

        const svg = container.querySelector('svg');
        const vertex = svg.querySelectorAll(
            'g[transform="translate(0.5,0.5)"]'
        )[0];

        fireEvent.doubleClick(vertex);

        expect(doubleClickFn).toBeCalled();
    });

    test('Should support to highlight cells', () => {
        const { container } = render(
            <MxGraphContainer
                graphData={[
                    {
                        taskId: 1,
                        childNode: [{ taskId: 2 }],
                        parentNode: [{ taskId: 3 }]
                    }
                ]}
                config={{
                    highlight: true
                }}
                onRenderCell={(cell) =>
                    `<div data-testid="${cell.value.taskId}"></div>`
                }
            />
        );

        const svg = container.querySelector('svg');
        const vertex = svg.querySelectorAll(
            'g[transform="translate(0.5,0.5)"]'
        )[0];
        const edge = svg.querySelectorAll(
            'g[transform="translate(0.5,0.5)"]'
        )[2];

        fireEvent.mouseDown(vertex);
        fireEvent.mouseUp(vertex);

        const getActiveEdgeLength = () => {
            return Array.prototype.filter.call(
                svg.querySelectorAll<SVGPathElement>('path[fill="none"]'),
                (dom: SVGPathElement) => {
                    return (
                        dom.getAttribute('stroke') === '#3f87ff' &&
                        dom.getAttribute('stroke-width') === '2'
                    );
                }
            ).length;
        };
        const getActiveVertexLength = () => {
            return svg.querySelectorAll<SVGPathElement>(
                'rect[stroke="transparent"]'
            ).length;
        };

        // Active the in and out edges both, and current selected vertex
        expect(getActiveEdgeLength()).toBe(2);
        expect(getActiveVertexLength()).toBe(1);

        fireEvent.mouseDown(svg);
        fireEvent.mouseUp(svg);

        // Click on graph will unselect all cells
        expect(getActiveEdgeLength()).toBe(0);
        expect(getActiveVertexLength()).toBe(0);

        fireEvent.mouseDown(edge);
        fireEvent.mouseUp(edge);

        // Click on edge will ONLY active current edge
        expect(getActiveEdgeLength()).toBe(1);
        expect(getActiveVertexLength()).toBe(0);
    });

    test('Should support to drag cells', () => {
        const cellChangedFn = jest.fn();
        const { container } = render(
            <MxGraphContainer
                graphData={[
                    {
                        taskId: 1,
                        childNode: [{ taskId: 2 }],
                        parentNode: [{ taskId: 3 }]
                    }
                ]}
                enableDrag
                onCellsChanged={cellChangedFn}
                onRenderCell={(cell) =>
                    `<div data-testid="${cell.value.taskId}"></div>`
                }
            />
        );

        const svg = container.querySelector('svg');
        const vertex = svg.querySelectorAll(
            'g[transform="translate(0.5,0.5)"]'
        )[0];

        fireEvent.mouseDown(vertex);
        fireEvent.mouseMove(vertex, { clientX: 100, clientY: 0 });
        fireEvent.mouseUp(vertex);

        expect(cellChangedFn).toBeCalled();
    });

    test('Should support to call ref functions', async () => {
        const refMock: { current: IContainerRef<any> } = { current: undefined };
        render(
            <MxGraphContainer
                ref={refMock}
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

        expect(refMock.current.getCells().length).toBe(5);
        expect(refMock.current.getSelectedCell().value.taskId).toBe(1);

        refMock.current.insertCell({ taskId: 4 }, 0, 0);
        expect(refMock.current.getCells().length).toBe(6);

        refMock.current.updateCell('7', { test: 1 });
        expect(
            refMock.current.getCells().find((i) => i.id === '7').value
        ).toEqual({
            taskId: 4,
            test: 1
        });

        refMock.current.removeCell('7');
        expect(
            refMock.current.getCells().find((i) => i.id === '7')
        ).toBeUndefined();

        const cells = refMock.current.getCells();
        cells.forEach((cell) => {
            refMock.current.removeCell(cell.id);
        });
        expect(refMock.current.getCells().length).toBe(0);
        refMock.current.setCells(cells);
        expect(refMock.current.getCells().length).toBe(5);

        const mockScrollTo = jest.fn();
        HTMLElement.prototype.scrollTo = mockScrollTo;
        refMock.current.setView({
            scale: 1,
            scrollTop: 100,
            scrollLeft: 100
        });

        await waitFor(
            () => {
                expect(mockScrollTo).toBeCalled();
            },
            { timeout: 100 }
        );
    });

    test('Should support to drag widgets into graph', () => {
        const dropWidgetsFn = jest.fn();
        const { container } = render(
            <MxGraphContainer
                graphData={[{ taskId: 1, childNode: [{ taskId: 2 }] }]}
                onDropWidgets={dropWidgetsFn}
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
        const svg = container.querySelector('svg');
        const mockEleFromPoint = jest
            .fn()
            .mockImplementationOnce(() => null)
            .mockImplementationOnce(() => container)
            .mockImplementation(() => svg);
        document.elementFromPoint = mockEleFromPoint;

        const widget = container.querySelector('.' + WIDGETS_PREFIX + '__');
        const dragWidget = () => {
            fireEvent.mouseDown(widget);
            fireEvent.mouseMove(svg, {
                clientX: 0,
                clientY: 0
            });
            fireEvent.mouseUp(svg);
        };

        dragWidget();
        expect(mockEleFromPoint).toBeCalled();
        // The elementFromPoint returns null at first, so it won't call onDropWidgets
        expect(dropWidgetsFn).not.toBeCalled();

        dragWidget();
        // Although the elementFromPoint returns container, but is't not the ancestor node about graph
        // So it won't call onDropWidgets
        expect(dropWidgetsFn).not.toBeCalled();

        dragWidget();
        expect(dropWidgetsFn).toBeCalled();
    });
});
