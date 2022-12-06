import React, { useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import { MxGraphContainer } from 'dt-react-component';
import { message, Tooltip } from 'antd';
import defaultGraphData from './defaultGraphData';
import './index.scss';

export default () => {
    const [loading, setLoading] = useState(false);
    const [graphData, setGraphData] = useState([...defaultGraphData]);

    return (
        <MxGraphContainer
            direction="west"
            loading={loading}
            style={{ height: 300 }}
            vertexSize={{
                width: 196,
                height: 54,
            }}
            config={{
                tooltips: false,
                connectable: false,
                highlight: false,
                toolbarStyle: {
                    bottom: 100,
                    right: 0,
                    top: 'initial',
                },
                defaultEdgeStyle: ({ mxConstants, mxEdgeStyle }) => ({
                    [mxConstants.STYLE_ROUNDED]: 1,
                    [mxConstants.STYLE_CURVED]: 0,
                    [mxConstants.STYLE_EDGE]: mxEdgeStyle.EntityRelation,
                }),
            }}
            vertexKey="metaId"
            onContextMenu={(_, cell) =>
                cell.vertex
                    ? [
                          {
                              id: 'insert',
                              title: '插入',
                          },
                          {
                              id: 'remove',
                              title: '删除',
                          },
                      ]
                    : []
            }
            onClick={(cell, graph, event) => {
                const target: any = event.target;
                if (target.closest('.loadData')) {
                    setLoading(true);
                    setTimeout(() => {
                        setGraphData((g) => {
                            const stack: any[] = [...g];
                            while (stack.length) {
                                const item = stack.pop();
                                if (item.metaId === cell.value.metaId) {
                                    const uniqueId = 'randomId__' + new Date().valueOf();
                                    const insertHandler =
                                        cell.value.metaInfo.type === 2 ? 'childNode' : 'parentNode';
                                    item[insertHandler] = item[insertHandler] || [];
                                    item[insertHandler].push({
                                        metaId: uniqueId,
                                        metaInfo: {
                                            name: uniqueId + 'tableName',
                                            type: item.metaInfo.type,
                                        },
                                    });
                                    break;
                                }

                                stack.push(...(item.childNode || []));
                                stack.push(...(item.parentNode || []));
                            }

                            return [...g];
                        });
                        setLoading(false);
                    }, 300);
                }
            }}
            graphData={graphData}
            onDrawVertex={(data) => {
                return [
                    '',
                    'whiteSpace=wrap;fillColor=#ffffff;strokeColor=#3F87FF;',
                    'whiteSpace=wrap;fillColor=#ffffff;strokeColor=#7460EF;',
                    'whiteSpace=wrap;fillColor=#ffffff;strokeColor=#26D6AE;',
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
                                flexDirection: 'column',
                            }}
                        >
                            <button onClick={() => graph.center(true, true)}>
                                <Tooltip title="居中">center</Tooltip>
                            </button>
                            <button onClick={() => message.success('download successfully')}>
                                <Tooltip title="下载">download</Tooltip>
                            </button>
                        </div>
                        <div style={{ marginTop: 10 }}>
                            <button
                                onClick={() => {
                                    const container = document.getElementById('outline')!;
                                    if (container.innerHTML) {
                                        container.innerHTML = '';
                                    } else {
                                        // eslint-disable-next-line no-new
                                        new MxOutline(graph, container);
                                    }
                                }}
                            >
                                <Tooltip title="导航器">navigator</Tooltip>
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
                                    paddingTop: 10,
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
                                                'translate(' + (isLeft ? '-50%' : '50%') + ',-50%)',
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
                            gap: '15px',
                        }}
                    >
                        <li>
                            <div
                                style={{
                                    display: 'inline-block',
                                    width: 12,
                                    height: 12,
                                    marginRight: 5,
                                    background: 'rgb(38, 214, 174)',
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
                                    background: 'rgb(63, 135, 255)',
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
                                    background: 'rgb(116, 96, 239)',
                                }}
                            />
                            3
                        </li>
                    </ul>
                </div>
            )}
        </MxGraphContainer>
    );
};
