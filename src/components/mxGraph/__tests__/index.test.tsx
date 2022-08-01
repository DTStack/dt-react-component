import '@babel/polyfill';
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import MxGraphContainer, { WIDGETS_PREFIX } from '../index';
import '@testing-library/jest-dom';
import { mxGraph } from 'mxgraph';

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
        const { asFragment } = render(
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
});
