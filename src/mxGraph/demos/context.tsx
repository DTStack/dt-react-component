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
            onDrawVertex={(data) => {
                const fillColors = ['#fffbe6', '#e6f6ff', '#f5ffe6', '#fff1f0', '#e6e9f2'];
                const strokeColors = ['#fdb313', '#3f87ff', '#12bc6a', '#fe615c', '#5b6da6'];
                return (
                    'whiteSpace=wrap;fillColor=' +
                    fillColors[data.taskType - 1] +
                    ';strokeColor=' +
                    strokeColors[data.taskType - 1] +
                    ';'
                );
            }}
            onContextMenu={(data, cell) => {
                const titles = ['执行中', '部署中', '取消中', '运行成功', '运行失败'];
                return cell.vertex
                    ? [
                          {
                              id: 'operation',
                              title: titles[data.taskType - 1],
                              callback: () => {
                                  alert('当前 vertex 处于' + titles[data.taskType - 1]);
                              },
                          },
                          {
                              id: 'remove',
                              title: '删除当前节点',
                              callback: () => {
                                  console.log('删除');
                              },
                          },
                      ]
                    : [
                          {
                              id: 'remove',
                              title: '删除连线',
                              callback: () => {
                                  console.log('删除');
                              },
                          },
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
    );
};
