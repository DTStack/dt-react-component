import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { MxGraphContainer } from 'dt-react-component';
import './index.scss';

export default () => {
    return (
        <MxGraphContainer
            style={{ height: 400 }}
            config={{
                tooltips: false,
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
            onClick={(cell, graph, event) => {
                console.group('onClick');
                console.log('当前点击的 cell 是:', cell);
                console.log('当前点击的 graph 是:', graph);
                console.log('当前点击的 dom 是:', event.target);
                console.groupEnd();
            }}
            onDoubleClick={(cell, graph, event) => {
                console.group('onDoubleClick');
                console.log('当前点击的 cell 是:', cell);
                console.log('当前点击的 graph 是:', graph);
                console.log('当前点击的 dom 是:', event.target);
                console.groupEnd();
            }}
            onContainerChanged={(geo) => {
                console.group('onContainerChanged');
                console.log(geo);
                console.groupEnd();
            }}
            onKeyDown={() => {
                return [
                    {
                        id: 'remove',
                        method: 'bindControlKey',
                        keyCode: 8,
                        func: () => {
                            alert('删除');
                        },
                    },
                ];
            }}
            onContextMenu={() => {
                return [{ id: 'remove', title: '删除' }];
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
        />
    );
};
