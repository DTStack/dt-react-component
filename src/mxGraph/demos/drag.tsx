import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { MxGraphContainer, WIDGETS_PREFIX } from 'dt-react-component';

import './index.scss';

export default () => {
    return (
        <MxGraphContainer
            enableDrag
            style={{ height: 400 }}
            config={{
                tooltips: false,
                connectable: true,
                highlight: true,
            }}
            graphData={[
                {
                    taskId: 'test-1',
                    taskName: '你好-1',
                    taskType: 1,
                    childNode: [
                        {
                            taskId: 'test-11',
                            taskName: '你好-11',
                            taskType: 2,
                            childNode: [],
                        },
                        {
                            taskId: 'test-12',
                            taskName: '你好-12',
                            taskType: 3,
                            childNode: [
                                {
                                    taskId: 'test-21',
                                    taskName: '你好-21',
                                    taskType: 4,
                                    childNode: [
                                        {
                                            taskId: 'test-31',
                                            taskName: '你好-31',
                                            taskType: 5,
                                            childNode: [],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ]}
            onDropWidgets={(node, graph, target, x, y) => {
                console.group('onDropWidgets');
                console.log('node:', node);
                console.log('graph:', graph);
                console.log('target:', target);
                console.log('x and y:', x, y);
                console.groupEnd();
                const taskId = 'randomId__' + new Date().valueOf();
                graph.insertVertex(
                    graph.getDefaultParent(),
                    taskId,
                    {
                        taskName: node.innerText,
                        taskId,
                    },
                    x,
                    y,
                    210,
                    50,
                    'whiteSpace=wrap;fillColor=#f5ffe6;strokeColor=#12bc6a;'
                );
            }}
            onCellsChanged={(cell) => {
                console.group('onCellsChanged');
                console.log('cell:', cell);
                console.groupEnd();
            }}
            onDrawVertex={() => 'whiteSpace=wrap;fillColor=#f5ffe6;strokeColor=#12bc6a;'}
            onRenderCell={(cell) => {
                if (cell.vertex && cell.value) {
                    const task = cell.value;
                    if (task) {
                        return ReactDOMServer.renderToString(
                            <div>
                                <span>{task.taskName}</span>
                                <br />
                                <span>{task.taskId}</span>
                            </div>
                        );
                    }
                }
                return '';
            }}
            onGetPreview={(node) => {
                const previewDragTarget = document.createElement('div');
                previewDragTarget.style.width = '210px';
                previewDragTarget.style.height = '50px';
                previewDragTarget.style.border = '1px solid #ddd';
                previewDragTarget.style.textAlign = 'center';
                previewDragTarget.dataset.name = node.innerText;
                previewDragTarget.innerHTML = ReactDOMServer.renderToString(
                    <>
                        <span>新节点</span>
                        <br />
                        <span>{node.innerText}</span>
                    </>
                );
                return previewDragTarget;
            }}
            onRenderWidgets={() => {
                return (
                    <>
                        <div style={{ height: 20, background: '#ddd' }}>拖拽组件</div>
                        <ul
                            style={{
                                listStyle: 'none',
                                margin: 0,
                                padding: 0,
                            }}
                        >
                            <li
                                className={WIDGETS_PREFIX + '__'}
                                style={{
                                    cursor: 'move',
                                    margin: '5px 0',
                                }}
                            >
                                你好1
                            </li>
                            <li
                                className={WIDGETS_PREFIX + '__'}
                                style={{
                                    cursor: 'move',
                                    margin: '5px 0',
                                }}
                            >
                                你好2
                            </li>
                            <li
                                className={WIDGETS_PREFIX + '__'}
                                style={{
                                    cursor: 'move',
                                    margin: '5px 0',
                                }}
                            >
                                你好3
                            </li>
                            <li
                                className={WIDGETS_PREFIX + '__'}
                                style={{
                                    cursor: 'move',
                                    margin: '5px 0',
                                }}
                            >
                                你好4
                            </li>
                        </ul>
                    </>
                );
            }}
        />
    );
};
