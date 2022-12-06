import React, { useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import { MxGraphContainer } from 'dt-react-component';
import './index.scss';

export default () => {
    const [loading, setLoading] = useState(false);
    const [currentSelect, setCurrent] = useState('b');
    const [graphData, setGraphData] = useState([
        {
            metaId: '1',
            metaInfo: {
                name: 'tableName',
                type: 1,
                list: ['a', 'b', 'c', 'd'],
            },
            childNode: [
                {
                    metaId: '2',
                    metaInfo: {
                        name: 'tableName',
                        type: 2,
                        list: ['1-c'],
                    },
                },
                {
                    metaId: '3',
                    metaInfo: {
                        name: 'tableName',
                        type: 2,
                        list: ['1-c'],
                    },
                },
            ],
        },
    ]);

    const handleGetSize = (data: any) => {
        if (data.metaId === '1') {
            return {
                width: 194,
                height: 120,
            };
        }
        return {
            width: 196,
            height: 54,
        };
    };

    return (
        <MxGraphContainer
            direction="west"
            loading={loading}
            style={{ height: 400 }}
            vertexSize={{
                width: 196,
                height: 54,
            }}
            config={{
                tooltips: false,
                connectable: false,
                highlight: false,
                vertexMovable: false,
                defaultEdgeStyle: ({ mxConstants, mxEdgeStyle }) => ({
                    [mxConstants.STYLE_ROUNDED]: 1,
                    [mxConstants.STYLE_CURVED]: 0,
                    [mxConstants.STYLE_EDGE]: mxEdgeStyle.EntityRelation,
                }),
                getPortOffset: (edgeState, source) => {
                    const container =
                        edgeState[
                            source ? 'visibleSourceState' : 'visibleTargetState'
                        ].text.node.querySelectorAll('div')[1];
                    const portDom =
                        container.querySelector<HTMLLIElement>(
                            'li[data-id=' + currentSelect + ']'
                        ) || container.querySelector('li');

                    return portDom!;
                },
            }}
            vertexKey="metaId"
            onClick={(cell, graph, event) => {
                if (cell.value.metaId === '1') {
                    setLoading(true);
                    setTimeout(() => {
                        const nextGraph: any = [
                            {
                                ...graphData[0],
                                childNode: [],
                                parentNode: [],
                            },
                        ];
                        const handler = Math.random() > 0.5 ? 'childNode' : 'parentNode';
                        const length = Math.floor(Math.random() * 5 + 1);
                        nextGraph[0][handler].push(
                            ...new Array(length).fill({}).map((_, idx) => {
                                return {
                                    metaId: '1-' + idx,
                                    metaInfo: {
                                        name: 'tableName',
                                        type: 2,
                                        list: ['1-c'],
                                    },
                                };
                            })
                        );
                        const target: any = event.target;
                        setCurrent(target.dataset.id);
                        setGraphData(nextGraph);
                        setLoading(false);
                    }, 300);
                }
            }}
            onGetSize={handleGetSize}
            graphData={graphData}
            onDrawVertex={() => 'whiteSpace=wrap;fillColor=#ffffff;strokeColor=#7460EF;'}
            onDrawEdge={() => 'whiteSpace=wrap;fillColor=#ffffff;strokeColor=#7460EF;'}
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
                                    height: size.height,
                                }}
                            >
                                {meta.metaInfo.name}
                                <hr
                                    style={{
                                        borderTop: '1px solid #ddd',
                                        margin: 0,
                                    }}
                                />
                                <div
                                    style={{
                                        width: '100%',
                                        overflow: 'auto',
                                    }}
                                >
                                    <ul
                                        style={{
                                            listStyle: 'none',
                                            margin: 0,
                                            padding: 0,
                                        }}
                                    >
                                        {meta.metaInfo.list.map((l) => (
                                            <li
                                                key={l}
                                                data-id={l}
                                                style={{
                                                    height: 20,
                                                    borderBottom: '1px solid #ddd',
                                                    background:
                                                        currentSelect === l ? 'red' : 'transparent',
                                                }}
                                            >
                                                {l}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    }
                }
                return '';
            }}
        />
    );
};
