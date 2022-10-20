import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { State, Store } from '@sambego/storybook-state';
import { storiesOf } from '@storybook/react';
import { Alert, message, Tooltip } from 'antd';
import { ZoomInOutlined, ZoomOutOutlined } from '@ant-design/icons';
import MxGraphContainer, { WIDGETS_PREFIX } from '../components/mxGraph';
import ExampleContainer from './components/exampleCode';
import '../styles/index.scss';

const stories = storiesOf('mxGraph', module);
const otherDependencies =
    "import { mxGraphContainer } from 'dt-react-component';\nimport ReactDOMServer from 'react-dom/server';\nimport { Tooltip } from 'antd';\nimport { ZoomInOutlined, ZoomOutOutlined } from '@ant-design/icons';";

stories.add('mxGraph 基础使用', () => {
    return (
        <div className="story_wrapper">
            <h2>Tips</h2>
            <p>mxTooltip、mxPopupMenu、mxPopupMenuItem 等样式请自行实现，可参考：
                <a href="https://github.com/DTStack/dt-react-component/blob/master/src/stories/style/mxGraph.scss" target="blank">mxGraph.scss</a>
            </p>

            <h2>示例</h2>
            <p>mxGraph 的基础使用，展示图数据，开启了 tooltips</p>
            <ExampleContainer
                otherDependencies={otherDependencies}
                code={`<MxGraphContainer
                style={{ height: 400 }}
                config={{
                    tooltips: true,
                    highlight: true
                }}
                graphData={[
                    {
                        taskId: 'test-1',
                        taskName: '你好-1',
                        childNode: [
                            {
                                taskId: 'test-11',
                                taskName: '你好-11',
                                childNode: []
                            },
                            {
                                taskId: 'test-12',
                                taskName: '你好-12',
                                childNode: [
                                    {
                                        taskId: 'test-21',
                                        taskName: '你好-21',
                                        childNode: [
                                            {
                                                taskId: 'test-31',
                                                taskName: '你好-31',
                                                childNode: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]}
                onDrawVertex={() =>
                    'whiteSpace=wrap;fillColor=#f5ffe6;strokeColor=#12bc6a;'
                }
                onRenderActions={(graph) => (
                    <div
                        style={{
                            display: 'grid',
                            gridGap: 5,
                            gridTemplateColumns: '15px 15px'
                        }}
                    >
                        <Tooltip title="放大">
                            <ZoomInOutlined onClick={() => graph.zoomIn()} />
                        </Tooltip>
                        <Tooltip title="缩小">
                            <ZoomOutOutlined onClick={() => graph.zoomOut()} />
                        </Tooltip>
                    </div>
                )}
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
                onRenderTooltips={(cell) => {
                    if (cell.vertex && cell.value) {
                        return cell.value.taskName;
                    }
                    return '';
                }}
            />`}
                hasCodeSandBox={true}
            >
                <MxGraphContainer
                    style={{ height: 400 }}
                    config={{
                        tooltips: true,
                        highlight: true
                    }}
                    graphData={[
                        {
                            taskId: 'test-1',
                            taskName: '你好-1',
                            childNode: [
                                {
                                    taskId: 'test-11',
                                    taskName: '你好-11',
                                    childNode: []
                                },
                                {
                                    taskId: 'test-12',
                                    taskName: '你好-12',
                                    childNode: [
                                        {
                                            taskId: 'test-21',
                                            taskName: '你好-21',
                                            childNode: [
                                                {
                                                    taskId: 'test-31',
                                                    taskName: '你好-31',
                                                    childNode: []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]}
                    onDrawVertex={() =>
                        'whiteSpace=wrap;fillColor=#f5ffe6;strokeColor=#12bc6a;'
                    }
                    onRenderActions={(graph) => (
                        <div
                            style={{
                                display: 'grid',
                                gridGap: 5,
                                gridTemplateColumns: '15px 15px'
                            }}
                        >
                            <Tooltip title="放大">
                                <ZoomInOutlined onClick={() => graph.zoomIn()} />
                            </Tooltip>
                            <Tooltip title="缩小">
                                <ZoomOutOutlined onClick={() => graph.zoomOut()} />
                            </Tooltip>
                        </div>
                    )}
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
                    onRenderTooltips={(cell) => {
                        if (cell.vertex && cell.value) {
                            return cell.value.taskName;
                        }
                        return '';
                    }}
                />
            </ExampleContainer>
        </div>
    );
});

stories.add('mxGraph 支持 contextMenu', () => {
    return (
        <div className="story_wrapper">
            <h2>示例</h2>
            <p>mxGraph 支持不同组件的右键菜单事件触发</p>
            <p>并且支持针对不同的状态渲染不同的 vertex</p>
            <ExampleContainer
                otherDependencies={otherDependencies}
                code={`<MxGraphContainer
                style={{ height: 400 }}
                config={{
                    tooltips: false,
                    highlight: true
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
                                childNode: []
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
                                                childNode: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]}
                onDrawVertex={(data) => {
                    const fillColors = [
                        '#fffbe6',
                        '#e6f6ff',
                        '#f5ffe6',
                        '#fff1f0',
                        '#e6e9f2'
                    ];
                    const strokeColors = [
                        '#fdb313',
                        '#3f87ff',
                        '#12bc6a',
                        '#fe615c',
                        '#5b6da6'
                    ];
                    return (
                        'whiteSpace=wrap;fillColor=' +
                        fillColors[data.taskType - 1] +
                        ';strokeColor=' +
                        strokeColors[data.taskType - 1] +
                        ';'
                    );
                }}
                onContextMenu={(data, cell) => {
                    const titles = [
                        '执行中',
                        '部署中',
                        '取消中',
                        '运行成功',
                        '运行失败'
                    ];
                    return cell.vertex
                        ? [
                            {
                                id: 'operation',
                                title: titles[data.taskType - 1],
                                callback: () => {
                                    alert(
                                        '当前 vertex 处于' +
                                              titles[data.taskType - 1]
                                    );
                                }
                            },
                            {
                                id: 'remove',
                                title: '删除当前节点',
                                callback: () => {
                                    console.log('删除');
                                }
                            }
                        ]
                        : [
                            {
                                id: 'remove',
                                title: '删除连线',
                                callback: () => {
                                    console.log('删除');
                                }
                            }
                        ];
                }}
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
            />`}
                hasCodeSandBox={true}
            >
                <MxGraphContainer
                    style={{ height: 400 }}
                    config={{
                        tooltips: false,
                        highlight: true
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
                                    childNode: []
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
                                                    childNode: []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]}
                    onDrawVertex={(data) => {
                        const fillColors = [
                            '#fffbe6',
                            '#e6f6ff',
                            '#f5ffe6',
                            '#fff1f0',
                            '#e6e9f2'
                        ];
                        const strokeColors = [
                            '#fdb313',
                            '#3f87ff',
                            '#12bc6a',
                            '#fe615c',
                            '#5b6da6'
                        ];
                        return (
                            'whiteSpace=wrap;fillColor=' +
                            fillColors[data.taskType - 1] +
                            ';strokeColor=' +
                            strokeColors[data.taskType - 1] +
                            ';'
                        );
                    }}
                    onContextMenu={(data, cell) => {
                        const titles = [
                            '执行中',
                            '部署中',
                            '取消中',
                            '运行成功',
                            '运行失败'
                        ];
                        return cell.vertex
                            ? [
                                {
                                    id: 'operation',
                                    title: titles[data.taskType - 1],
                                    callback: () => {
                                        alert(
                                            '当前 vertex 处于' +
                                                  titles[data.taskType - 1]
                                        );
                                    }
                                },
                                {
                                    id: 'remove',
                                    title: '删除当前节点',
                                    callback: () => {
                                        console.log('删除');
                                    }
                                }
                            ]
                            : [
                                {
                                    id: 'remove',
                                    title: '删除连线',
                                    callback: () => {
                                        console.log('删除');
                                    }
                                }
                            ];
                    }}
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
            </ExampleContainer>
        </div>
    );
});

stories.add('mxGraph 支持鼠标，键盘，布局事件', () => {
    return (
        <div className="story_wrapper">
            <h2>示例</h2>
            <p>
                支持 onClick 事件，onDoubleClick 事件，键盘注册事件，以及 scroll
                事件的监听
            </p>
            <p>
                <Alert
                    type="warning"
                    message="部分事件存在相同交集，需要自行区分判断"
                ></Alert>
            </p>
            <ExampleContainer
                otherDependencies={otherDependencies}
                code={`<MxGraphContainer
                style={{ height: 400 }}
                config={{
                    tooltips: false,
                    highlight: true
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
                                childNode: []
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
                                                childNode: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
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
                            }
                        }
                    ];
                }}
                onContextMenu={() => {
                    return [{ id: 'remove', title: '删除' }];
                }}
                onDrawVertex={() =>
                    'whiteSpace=wrap;fillColor=#f5ffe6;strokeColor=#12bc6a;'
                }
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
            />`}
                hasCodeSandBox={true}
            >
                <MxGraphContainer
                    style={{ height: 400 }}
                    config={{
                        tooltips: false,
                        highlight: true
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
                                    childNode: []
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
                                                    childNode: []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
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
                                }
                            }
                        ];
                    }}
                    onContextMenu={() => {
                        return [{ id: 'remove', title: '删除' }];
                    }}
                    onDrawVertex={() =>
                        'whiteSpace=wrap;fillColor=#f5ffe6;strokeColor=#12bc6a;'
                    }
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
            </ExampleContainer>
        </div>
    );
});

stories.add('mxGraph 拖拽', () => {
    return (
        <div className="story_wrapper">
            <h2>示例</h2>
            <p>支持通过拖拽生成新节点</p>
            <ExampleContainer
                otherDependencies={otherDependencies}
                code={`<MxGraphContainer
                enableDrag
                style={{ height: 400 }}
                config={{
                    tooltips: false,
                    connectable: true,
                    highlight: true
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
                                childNode: []
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
                                                childNode: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
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
                            taskId
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
                onDrawVertex={() =>
                    'whiteSpace=wrap;fillColor=#f5ffe6;strokeColor=#12bc6a;'
                }
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
                    previewDragTarget.innerHTML =
                        ReactDOMServer.renderToString(
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
                                <li
                                    className={WIDGETS_PREFIX + '__'}
                                    style={{
                                        cursor: 'move',
                                        margin: '5px 0'
                                    }}
                                >
                                    你好2
                                </li>
                                <li
                                    className={WIDGETS_PREFIX + '__'}
                                    style={{
                                        cursor: 'move',
                                        margin: '5px 0'
                                    }}
                                >
                                    你好3
                                </li>
                                <li
                                    className={WIDGETS_PREFIX + '__'}
                                    style={{
                                        cursor: 'move',
                                        margin: '5px 0'
                                    }}
                                >
                                    你好4
                                </li>
                            </ul>
                        </>
                    );
                }}
            />`}
                hasCodeSandBox={true}
            >
                <MxGraphContainer
                    enableDrag
                    style={{ height: 400 }}
                    config={{
                        tooltips: false,
                        connectable: true,
                        highlight: true
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
                                    childNode: []
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
                                                    childNode: []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
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
                                taskId
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
                    onDrawVertex={() =>
                        'whiteSpace=wrap;fillColor=#f5ffe6;strokeColor=#12bc6a;'
                    }
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
                                    <li
                                        className={WIDGETS_PREFIX + '__'}
                                        style={{
                                            cursor: 'move',
                                            margin: '5px 0'
                                        }}
                                    >
                                        你好2
                                    </li>
                                    <li
                                        className={WIDGETS_PREFIX + '__'}
                                        style={{
                                            cursor: 'move',
                                            margin: '5px 0'
                                        }}
                                    >
                                        你好3
                                    </li>
                                    <li
                                        className={WIDGETS_PREFIX + '__'}
                                        style={{
                                            cursor: 'move',
                                            margin: '5px 0'
                                        }}
                                    >
                                        你好4
                                    </li>
                                </ul>
                            </>
                        );
                    }}
                />
            </ExampleContainer>
        </div>
    );
});

const store = new Store({
    graphData: [
        {
            metaId: 'test-1',
            metaInfo: {
                name: 'tableName',
                type: 1
            },
            childNode: [
                {
                    metaId: 'test-2',
                    metaInfo: {
                        name: 'tableName2',
                        type: 2
                    }
                },
                {
                    metaId: 'test-3',
                    metaInfo: {
                        name: 'tableName3',
                        type: 2
                    }
                },
                {
                    metaId: 'test-4',
                    metaInfo: {
                        name: 'tableName4',
                        type: 2
                    }
                },
                {
                    metaId: 'test-5',
                    metaInfo: {
                        name: 'tableName5',
                        type: 2
                    }
                }
            ],
            parentNode: [
                {
                    metaId: 'test-6',
                    metaInfo: {
                        name: 'tableName6',
                        type: 3
                    }
                },
                {
                    metaId: 'test-7',
                    metaInfo: {
                        name: 'tableName7',
                        type: 3
                    }
                },
                {
                    metaId: 'test-8',
                    metaInfo: {
                        name: 'tableName8',
                        type: 3
                    }
                },
                {
                    metaId: 'test-9',
                    metaInfo: {
                        name: 'tableName9',
                        type: 3
                    }
                }
            ]
        }
    ],
    loading: false
});

stories.add('mxGraph 实现血缘相关展示', () => {
    return (
        <div className="story_wrapper">
            <h2>示例</h2>
            <p>血缘关系</p>
            <ExampleContainer
                otherDependencies={otherDependencies}
                code={`<MxGraphContainer
                direction="west"
                loading={store.get('loading')}
                style={{ height: 400 }}
                vertexSize={{
                    width: 196,
                    height: 54
                }}
                config={{
                    tooltips: false,
                    connectable: false,
                    highlight: false,
                    toolbarStyle: {
                        bottom: 100,
                        right: 0,
                        top: 'initial'
                    },
                    defaultEdgeStyle: ({
                        mxConstants,
                        mxEdgeStyle
                    }) => ({
                        [mxConstants.STYLE_ROUNDED]: 1,
                        [mxConstants.STYLE_CURVED]: 0,
                        [mxConstants.STYLE_EDGE]:
                            mxEdgeStyle.EntityRelation
                    })
                }}
                vertexKey="metaId"
                onContextMenu={(_, cell) =>
                    cell.vertex
                        ? [
                            {
                                id: 'insert',
                                title: '插入'
                            },
                            {
                                id: 'remove',
                                title: '删除'
                            }
                        ]
                        : []
                }
                onClick={(cell, graph, event) => {
                    const target: any = event.target;
                    if (target.closest('.loadData')) {
                        store.set({
                            loading: true
                        });
                        setTimeout(() => {
                            const graphData = store.get('graphData');
                            const stack: any[] = [...graphData];
                            while (stack.length) {
                                const item = stack.pop();
                                if (item.metaId === cell.value.metaId) {
                                    const uniqueId =
                                        'randomId__' +
                                        new Date().valueOf();
                                    const insertHandler =
                                        cell.value.metaInfo.type === 2
                                            ? 'childNode'
                                            : 'parentNode';
                                    item[insertHandler] =
                                        item[insertHandler] || [];
                                    item[insertHandler].push({
                                        metaId: uniqueId,
                                        metaInfo: {
                                            name:
                                                uniqueId + 'tableName',
                                            type: item.metaInfo.type
                                        }
                                    });
                                    break;
                                }

                                stack.push(...(item.childNode || []));
                                stack.push(...(item.parentNode || []));
                            }

                            store.set({
                                graphData: [...graphData],
                                loading: false
                            });
                        }, 300);
                    }
                }}
                graphData={store.get('graphData')}
                onDrawVertex={(data) => {
                    return [
                        '',
                        'whiteSpace=wrap;fillColor=#ffffff;strokeColor=#3F87FF;',
                        'whiteSpace=wrap;fillColor=#ffffff;strokeColor=#7460EF;',
                        'whiteSpace=wrap;fillColor=#ffffff;strokeColor=#26D6AE;'
                    ][data.metaInfo.type];
                }}
                onDrawEdge={(source, target) => {
                    if (source.value.metaInfo.type === 3) {
                        return 'whiteSpace=wrap;fillColor=#ffffff;strokeColor=#26D6AE;';
                    }

                    if (target.value.metaInfo.type === 2) {
                        return 'whiteSpace=wrap;fillColor=#ffffff;strokeColor=#7460EF;';
                    }

                    return 'whiteSpace=wrap;fillColor=#ffffff;strokeColor=#3F87FF;';
                }}
                onRenderActions={(graph, { mxOutline: MxOutline }) => {
                    return (
                        <>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <button
                                    onClick={() =>
                                        graph.center(true, true)
                                    }
                                >
                                    <Tooltip title="居中">
                                        center
                                    </Tooltip>
                                </button>
                                <button
                                    onClick={() =>
                                        message.success(
                                            'download successfully'
                                        )
                                    }
                                >
                                    <Tooltip title="下载">
                                        download
                                    </Tooltip>
                                </button>
                            </div>
                            <div style={{ marginTop: 10 }}>
                                <button
                                    onClick={() => {
                                        const container = document.getElementById(
                                            'outline'
                                        );
                                        if (container.innerHTML) {
                                            container.innerHTML = '';
                                        } else {
                                            new MxOutline(
                                                graph,
                                                container
                                            );
                                        }
                                    }}
                                >
                                    <Tooltip title="导航器">
                                        navigator
                                    </Tooltip>
                                </button>
                                <div id="outline"></div>
                            </div>
                        </>
                    );
                }}
                onRenderCell={(cell) => {
                    if (cell.vertex && cell.value) {
                        const meta = cell.value;
                        if (meta) {
                            const isLeft = meta.metaInfo.type === 3;
                            const position = isLeft ? 'left' : 'right';
                            return ReactDOMServer.renderToString(
                                <div
                                    style={{
                                        position: 'relative',
                                        width: 196,
                                        height: 54,
                                        paddingTop: 10
                                    }}
                                >
                                    <span>{meta.metaInfo.name}</span>
                                    {meta.metaInfo.type !== 1 && (
                                        <img
                                            className="loadData"
                                            width={14}
                                            height={14}
                                            style={{
                                                cursor: 'pointer',
                                                position: 'absolute',
                                                [position]: 0,
                                                top: '50%',
                                                transform:
                                                    'translate(' +
                                                    (isLeft
                                                        ? '-50%'
                                                        : '50%') +
                                                    ',-50%)'
                                            }}
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAAXNSR0IArs4c6QAAADNQTFRFAAAAscTOtr/Isb7HsLzGsL7Frr3Fr73Gr7zFr73Frr3FrrzFrrzGrrzF5+vt5+vu////mHsMmQAAAA10Uk5TABocTmtum7bZ8vP8/XH+TQkAAACASURBVCjPdVLZAoAgCMMjb8r//9oOjazcnpApzAFRg7Y+pBS81TRCucwd2aknbyIPiObOL4VfKEu//8kfzPVGRf4hnn2cHLdNQnfoFD1cq4RZk+UZwZb8nPAU5kSg1PpWQVOQ/sTaCVgKNody4QdHS9bREmwitB0PCo8WL8NsfXarIha/m4rePQAAAABJRU5ErkJggg=="
                                        />
                                    )}
                                </div>
                            );
                        }
                    }
                    return '';
                }}
            >
                {() => (
                    <div>
                        <ul
                            style={{
                                listStyle: 'none',
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '15px'
                            }}
                        >
                            <li>
                                <div
                                    style={{
                                        display: 'inline-block',
                                        width: 12,
                                        height: 12,
                                        marginRight: 5,
                                        background: 'rgb(38, 214, 174)'
                                    }}
                                />
                                1
                            </li>
                            <li>
                                <div
                                    style={{
                                        display: 'inline-block',
                                        width: 12,
                                        height: 12,
                                        marginRight: 5,
                                        background: 'rgb(63, 135, 255)'
                                    }}
                                />
                                2
                            </li>
                            <li>
                                <div
                                    style={{
                                        display: 'inline-block',
                                        width: 12,
                                        height: 12,
                                        marginRight: 5,
                                        background: 'rgb(116, 96, 239)'
                                    }}
                                />
                                3
                            </li>
                        </ul>
                    </div>
                )}
            </MxGraphContainer>`}
                hasCodeSandBox={true}
            >
                <State store={store}>
                    <MxGraphContainer
                        direction="west"
                        loading={store.get('loading')}
                        style={{ height: 400 }}
                        vertexSize={{
                            width: 196,
                            height: 54
                        }}
                        config={{
                            tooltips: false,
                            connectable: false,
                            highlight: false,
                            toolbarStyle: {
                                bottom: 100,
                                right: 0,
                                top: 'initial'
                            },
                            defaultEdgeStyle: ({
                                mxConstants,
                                mxEdgeStyle
                            }) => ({
                                [mxConstants.STYLE_ROUNDED]: 1,
                                [mxConstants.STYLE_CURVED]: 0,
                                [mxConstants.STYLE_EDGE]:
                                    mxEdgeStyle.EntityRelation
                            })
                        }}
                        vertexKey="metaId"
                        onContextMenu={(_, cell) =>
                            cell.vertex
                                ? [
                                    {
                                        id: 'insert',
                                        title: '插入'
                                    },
                                    {
                                        id: 'remove',
                                        title: '删除'
                                    }
                                ]
                                : []
                        }
                        onClick={(cell, graph, event) => {
                            const target: any = event.target;
                            if (target.closest('.loadData')) {
                                store.set({
                                    loading: true
                                });
                                setTimeout(() => {
                                    const graphData = store.get('graphData');
                                    const stack: any[] = [...graphData];
                                    while (stack.length) {
                                        const item = stack.pop();
                                        if (item.metaId === cell.value.metaId) {
                                            const uniqueId =
                                                'randomId__' +
                                                new Date().valueOf();
                                            const insertHandler =
                                                cell.value.metaInfo.type === 2
                                                    ? 'childNode'
                                                    : 'parentNode';
                                            item[insertHandler] =
                                                item[insertHandler] || [];
                                            item[insertHandler].push({
                                                metaId: uniqueId,
                                                metaInfo: {
                                                    name:
                                                        uniqueId + 'tableName',
                                                    type: item.metaInfo.type
                                                }
                                            });
                                            break;
                                        }

                                        stack.push(...(item.childNode || []));
                                        stack.push(...(item.parentNode || []));
                                    }

                                    store.set({
                                        graphData: [...graphData],
                                        loading: false
                                    });
                                }, 300);
                            }
                        }}
                        graphData={store.get('graphData')}
                        onDrawVertex={(data) => {
                            return [
                                '',
                                'whiteSpace=wrap;fillColor=#ffffff;strokeColor=#3F87FF;',
                                'whiteSpace=wrap;fillColor=#ffffff;strokeColor=#7460EF;',
                                'whiteSpace=wrap;fillColor=#ffffff;strokeColor=#26D6AE;'
                            ][data.metaInfo.type];
                        }}
                        onDrawEdge={(source, target) => {
                            if (source.value.metaInfo.type === 3) {
                                return 'whiteSpace=wrap;fillColor=#ffffff;strokeColor=#26D6AE;';
                            }

                            if (target.value.metaInfo.type === 2) {
                                return 'whiteSpace=wrap;fillColor=#ffffff;strokeColor=#7460EF;';
                            }

                            return 'whiteSpace=wrap;fillColor=#ffffff;strokeColor=#3F87FF;';
                        }}
                        onRenderActions={(graph, { mxOutline: MxOutline }) => {
                            return (
                                <>
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column'
                                        }}
                                    >
                                        <button
                                            onClick={() =>
                                                graph.center(true, true)
                                            }
                                        >
                                            <Tooltip title="居中">
                                                center
                                            </Tooltip>
                                        </button>
                                        <button
                                            onClick={() =>
                                                message.success(
                                                    'download successfully'
                                                )
                                            }
                                        >
                                            <Tooltip title="下载">
                                                download
                                            </Tooltip>
                                        </button>
                                    </div>
                                    <div style={{ marginTop: 10 }}>
                                        <button
                                            onClick={() => {
                                                const container = document.getElementById(
                                                    'outline'
                                                );
                                                if (container.innerHTML) {
                                                    container.innerHTML = '';
                                                } else {
                                                    new MxOutline(
                                                        graph,
                                                        container
                                                    );
                                                }
                                            }}
                                        >
                                            <Tooltip title="导航器">
                                                navigator
                                            </Tooltip>
                                        </button>
                                        <div id="outline"></div>
                                    </div>
                                </>
                            );
                        }}
                        onRenderCell={(cell) => {
                            if (cell.vertex && cell.value) {
                                const meta = cell.value;
                                if (meta) {
                                    const isLeft = meta.metaInfo.type === 3;
                                    const position = isLeft ? 'left' : 'right';
                                    return ReactDOMServer.renderToString(
                                        <div
                                            style={{
                                                position: 'relative',
                                                width: 196,
                                                height: 54,
                                                paddingTop: 10
                                            }}
                                        >
                                            <span>{meta.metaInfo.name}</span>
                                            {meta.metaInfo.type !== 1 && (
                                                <img
                                                    className="loadData"
                                                    width={14}
                                                    height={14}
                                                    style={{
                                                        cursor: 'pointer',
                                                        position: 'absolute',
                                                        [position]: 0,
                                                        top: '50%',
                                                        transform:
                                                            'translate(' +
                                                            (isLeft
                                                                ? '-50%'
                                                                : '50%') +
                                                            ',-50%)'
                                                    }}
                                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAAXNSR0IArs4c6QAAADNQTFRFAAAAscTOtr/Isb7HsLzGsL7Frr3Fr73Gr7zFr73Frr3FrrzFrrzGrrzF5+vt5+vu////mHsMmQAAAA10Uk5TABocTmtum7bZ8vP8/XH+TQkAAACASURBVCjPdVLZAoAgCMMjb8r//9oOjazcnpApzAFRg7Y+pBS81TRCucwd2aknbyIPiObOL4VfKEu//8kfzPVGRf4hnn2cHLdNQnfoFD1cq4RZk+UZwZb8nPAU5kSg1PpWQVOQ/sTaCVgKNody4QdHS9bREmwitB0PCo8WL8NsfXarIha/m4rePQAAAABJRU5ErkJggg=="
                                                />
                                            )}
                                        </div>
                                    );
                                }
                            }
                            return '';
                        }}
                    >
                        {() => (
                            <div>
                                <ul
                                    style={{
                                        listStyle: 'none',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        gap: '15px'
                                    }}
                                >
                                    <li>
                                        <div
                                            style={{
                                                display: 'inline-block',
                                                width: 12,
                                                height: 12,
                                                marginRight: 5,
                                                background: 'rgb(38, 214, 174)'
                                            }}
                                        />
                                        1
                                    </li>
                                    <li>
                                        <div
                                            style={{
                                                display: 'inline-block',
                                                width: 12,
                                                height: 12,
                                                marginRight: 5,
                                                background: 'rgb(63, 135, 255)'
                                            }}
                                        />
                                        2
                                    </li>
                                    <li>
                                        <div
                                            style={{
                                                display: 'inline-block',
                                                width: 12,
                                                height: 12,
                                                marginRight: 5,
                                                background: 'rgb(116, 96, 239)'
                                            }}
                                        />
                                        3
                                    </li>
                                </ul>
                            </div>
                        )}
                    </MxGraphContainer>
                </State>
            </ExampleContainer>
        </div>
    );
});

const detailStore = new Store({
    loading: false,
    graphData: [
        {
            metaId: '1',
            metaInfo: {
                name: 'tableName',
                type: 1,
                list: ['a', 'b', 'c', 'd']
            },
            childNode: [
                {
                    metaId: '2',
                    metaInfo: {
                        name: 'tableName',
                        type: 2,
                        list: ['1-c']
                    }
                },
                {
                    metaId: '3',
                    metaInfo: {
                        name: 'tableName',
                        type: 2,
                        list: ['1-c']
                    }
                }
            ]
        }
    ],
    currentSelect: 'b'
});

stories.add('mxGraph 详细展示', () => {
    const handleGetSize = (data: any) => {
        if (data.metaId === '1') {
            return {
                width: 194,
                height: 120
            };
        }
        return {
            width: 196,
            height: 54
        };
    };
    return (
        <div className="story_wrapper">
            <h2>示例</h2>
            <p>血缘关系</p>
            <ExampleContainer
                otherDependencies={otherDependencies}
                code={`<MxGraphContainer
                direction="west"
                loading={detailStore.get('loading')}
                style={{ height: 400 }}
                vertexSize={{
                    width: 196,
                    height: 54
                }}
                config={{
                    tooltips: false,
                    connectable: false,
                    highlight: false,
                    vertexMovable: false,
                    defaultEdgeStyle: ({
                        mxConstants,
                        mxEdgeStyle
                    }) => ({
                        [mxConstants.STYLE_ROUNDED]: 1,
                        [mxConstants.STYLE_CURVED]: 0,
                        [mxConstants.STYLE_EDGE]:
                            mxEdgeStyle.EntityRelation
                    }),
                    getPortOffset: (edgeState, source) => {
                        const container = edgeState[source ? 'visibleSourceState' : 'visibleTargetState'].text.node.querySelectorAll('div')[1];
                        const portDom =
                            container.querySelector<HTMLLIElement>(
                                'li[data-id=' +
                                    detailStore.get('currentSelect') +
                                    ']'
                            ) || container.querySelector('li');

                        return portDom;
                    }
                }}
                vertexKey="metaId"
                onClick={(cell, graph, event) => {
                    if (cell.value.metaId === '1') {
                        detailStore.set({
                            loading: true
                        });
                        setTimeout(() => {
                            const nextGraph = [
                                {
                                    ...detailStore.get('graphData')[0],
                                    childNode: [],
                                    parentNode: []
                                }
                            ];
                            const handler =
                                Math.random() > 0.5
                                    ? 'childNode'
                                    : 'parentNode';
                            const length = Math.floor(
                                Math.random() * 5 + 1
                            );
                            nextGraph[0][handler].push(
                                ...new Array(length)
                                    .fill({})
                                    .map((i, idx) => {
                                        return {
                                            metaId: '1-' + idx,
                                            metaInfo: {
                                                name: 'tableName',
                                                type: 2,
                                                list: ['1-c']
                                            }
                                        };
                                    })
                            );
                            const target: any = event.target;
                            detailStore.set({
                                currentSelect: (target).dataset.id,
                                graphData: nextGraph,
                                loading: false
                            });
                        }, 300);
                    }
                }}
                onGetSize={handleGetSize}
                graphData={store.get('graphData')}
                onDrawVertex={() =>
                    'whiteSpace=wrap;fillColor=#ffffff;strokeColor=#7460EF;'
                }
                onDrawEdge={() =>
                    'whiteSpace=wrap;fillColor=#ffffff;strokeColor=#7460EF;'
                }
                onRenderCell={(cell) => {
                    if (cell.vertex && cell.value) {
                        const meta = cell.value;
                        if (meta) {
                            const size = handleGetSize(meta);
                            return ReactDOMServer.renderToString(
                                <div
                                    style={{
                                        overflow: 'hidden',
                                        width: size.width,
                                        height: size.height
                                    }}
                                >
                                    {meta.metaInfo.name}
                                    <hr
                                        style={{
                                            borderTop: '1px solid #ddd',
                                            margin: 0
                                        }}
                                    />
                                    <div
                                        style={{
                                            width: '100%',
                                            overflow: 'auto'
                                        }}
                                    >
                                        <ul
                                            style={{
                                                listStyle: 'none',
                                                margin: 0,
                                                padding: 0
                                            }}
                                        >
                                            {meta.metaInfo.list.map(
                                                (l) => (
                                                    <li
                                                        key={l}
                                                        data-id={l}
                                                        style={{
                                                            height: 20,
                                                            borderBottom:
                                                                '1px solid #ddd',
                                                            background:
                                                                detailStore.get(
                                                                    'currentSelect'
                                                                ) === l
                                                                    ? 'red'
                                                                    : 'transparent'
                                                        }}
                                                    >
                                                        {l}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            );
                        }
                    }
                    return '';
                }}
            />`}
                hasCodeSandBox={true}
            >
                <State store={detailStore}>
                    <MxGraphContainer
                        direction="west"
                        loading={detailStore.get('loading')}
                        style={{ height: 400 }}
                        vertexSize={{
                            width: 196,
                            height: 54
                        }}
                        config={{
                            tooltips: false,
                            connectable: false,
                            highlight: false,
                            vertexMovable: false,
                            defaultEdgeStyle: ({
                                mxConstants,
                                mxEdgeStyle
                            }) => ({
                                [mxConstants.STYLE_ROUNDED]: 1,
                                [mxConstants.STYLE_CURVED]: 0,
                                [mxConstants.STYLE_EDGE]:
                                    mxEdgeStyle.EntityRelation
                            }),
                            getPortOffset: (edgeState, source) => {
                                const container = edgeState[source ? 'visibleSourceState' : 'visibleTargetState'].text.node.querySelectorAll('div')[1];
                                const portDom =
                                    container.querySelector<HTMLLIElement>(
                                        'li[data-id=' +
                                            detailStore.get('currentSelect') +
                                            ']'
                                    ) || container.querySelector('li');

                                return portDom;
                            }
                        }}
                        vertexKey="metaId"
                        onClick={(cell, graph, event) => {
                            if (cell.value.metaId === '1') {
                                detailStore.set({
                                    loading: true
                                });
                                setTimeout(() => {
                                    const nextGraph = [
                                        {
                                            ...detailStore.get('graphData')[0],
                                            childNode: [],
                                            parentNode: []
                                        }
                                    ];
                                    const handler =
                                        Math.random() > 0.5
                                            ? 'childNode'
                                            : 'parentNode';
                                    const length = Math.floor(
                                        Math.random() * 5 + 1
                                    );
                                    nextGraph[0][handler].push(
                                        ...new Array(length)
                                            .fill({})
                                            .map((i, idx) => {
                                                return {
                                                    metaId: '1-' + idx,
                                                    metaInfo: {
                                                        name: 'tableName',
                                                        type: 2,
                                                        list: ['1-c']
                                                    }
                                                };
                                            })
                                    );
                                    const target: any = event.target;
                                    detailStore.set({
                                        currentSelect: (target).dataset.id,
                                        graphData: nextGraph,
                                        loading: false
                                    });
                                }, 300);
                            }
                        }}
                        onGetSize={handleGetSize}
                        graphData={store.get('graphData')}
                        onDrawVertex={() =>
                            'whiteSpace=wrap;fillColor=#ffffff;strokeColor=#7460EF;'
                        }
                        onDrawEdge={() =>
                            'whiteSpace=wrap;fillColor=#ffffff;strokeColor=#7460EF;'
                        }
                        onRenderCell={(cell) => {
                            if (cell.vertex && cell.value) {
                                const meta = cell.value;
                                if (meta) {
                                    const size = handleGetSize(meta);
                                    return ReactDOMServer.renderToString(
                                        <div
                                            style={{
                                                overflow: 'hidden',
                                                width: size.width,
                                                height: size.height
                                            }}
                                        >
                                            {meta.metaInfo.name}
                                            <hr
                                                style={{
                                                    borderTop: '1px solid #ddd',
                                                    margin: 0
                                                }}
                                            />
                                            <div
                                                style={{
                                                    width: '100%',
                                                    overflow: 'auto'
                                                }}
                                            >
                                                <ul
                                                    style={{
                                                        listStyle: 'none',
                                                        margin: 0,
                                                        padding: 0
                                                    }}
                                                >
                                                    {meta.metaInfo.list.map(
                                                        (l) => (
                                                            <li
                                                                key={l}
                                                                data-id={l}
                                                                style={{
                                                                    height: 20,
                                                                    borderBottom:
                                                                        '1px solid #ddd',
                                                                    background:
                                                                        detailStore.get(
                                                                            'currentSelect'
                                                                        ) === l
                                                                            ? 'red'
                                                                            : 'transparent'
                                                                }}
                                                            >
                                                                {l}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    );
                                }
                            }
                            return '';
                        }}
                    />
                </State>
            </ExampleContainer>
        </div>
    );
});
