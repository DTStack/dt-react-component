import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { MxGraphContainer } from 'dt-react-component';
import { Tooltip } from 'antd';
import { ZoomInOutlined, ZoomOutOutlined } from '@ant-design/icons';
import './index.scss';

export default () => {
    return (
        <MxGraphContainer
            style={{ height: 400 }}
            config={{
                tooltips: true,
                highlight: true,
            }}
            graphData={[
                {
                    taskId: 'test-1',
                    taskName: '你好-1',
                    childNode: [
                        {
                            taskId: 'test-11',
                            taskName: '你好-11',
                            childNode: [],
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
                                            childNode: [],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ]}
            onDrawVertex={() => 'whiteSpace=wrap;fillColor=#f5ffe6;strokeColor=#12bc6a;'}
            onRenderActions={(graph) => (
                <div
                    style={{
                        display: 'grid',
                        gridGap: 5,
                        gridTemplateColumns: '15px 15px',
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
    );
};
