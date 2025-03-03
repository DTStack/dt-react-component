/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, {
    CSSProperties,
    ForwardedRef,
    forwardRef,
    Ref,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from 'react';
import { Spin } from 'antd';
import {
    mxCell,
    mxCellHighlight,
    mxCellState,
    mxEventObject,
    mxEventSource,
    mxGraph,
    mxGraphExportObject,
    mxPopupMenuHandler,
} from 'mxgraph';
import MxFactory from './factory';
import useLocale from '../locale/useLocale';

const Mx = new MxFactory();

const {
    mxHierarchicalLayout: MxHierarchicalLayout,
    mxCellHighlight: MxCellHighlight,
    mxEvent,
    mxPopupMenu,
    mxEventObject: MxEventObject,
    mxImage: MxImage,
    mxUtils,
    mxDragSource,
    mxGraph: MxGraph,
    mxShape: MxShape,
    mxConnectionConstraint: MxConnectionConstraint,
    mxPoint: MxPoint,
    mxPolyline: MxPolyline,
    mxConstraintHandler: MxConstraintHandler,
    mxKeyHandler: MxKeyHandler,
    mxClient,
} = Mx.mxInstance;

/**
 * MxGraphContainer 会为所有带该 class 名称前缀的 dom 元素注册拖拽事件
 */
export const WIDGETS_PREFIX = 'taier__widgets';
const draggableEleSymbol = Symbol('draggable');

export interface IContextMenuConfig {
    /**
     * 如果发现 contextMenu 和 keydown 的 id 有一致的，则调用 keydown 的回调函数
     */
    id?: string;
    title: string;
    callback?: () => void;
    children?: IContextMenuConfig[];
    disabled?: boolean;
}

export interface IKeyDownConfig {
    id: string;
    method: 'bindKey' | 'bindShiftKey' | 'bindControlKey' | 'bindControlShiftKey';
    /**
     * @reference: https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
     */
    keyCode: number;
    func: () => void;
}

interface IMxGraphData {
    /**
     * 下游节点
     */
    childNode: any[];
    /**
     * 上游节点
     */
    parentNode?: any[];

    [key: string]: any;
}

export interface IContainerProps<T> {
    /**
     * 是否开启拖拽，开启后每一个图形的四周会有拖拽点
     */
    enableDrag?: boolean;
    /**
     * 加载中状态
     */
    loading?: boolean;
    /**
     * 当前图数据
     */
    graphData?: T[] | null;
    /**
     * vertex 的 key 值，默认是 taskId
     */
    vertexKey?: string;
    /**
     * Vertex 尺寸，默认宽度 210， 默认高度 50,
     */
    vertexSize?: { width?: number; height?: number };
    /**
     * 配置项目
     */
    config?: {
        /**
         * 是否开启 tooltips
         */
        tooltips?: boolean;
        /**
         * 是否可连接
         */
        connectable?: boolean;
        /**
         * 选中是否高亮相关 vertex 及 edge
         */
        highlight?: boolean;
        /**
         * 设置 toolbar 的样式
         */
        toolbarStyle?: CSSProperties;
        /**
         * vertex 是否可移动，默认可移动
         */
        vertexMovable?: boolean;
        /**
         * 修改默认的 vertex 样式
         * @notice 仅在实例初始化的时候生效
         */
        defaultVertexStyle?:
            | Record<string, any>
            | ((instances: mxGraphExportObject) => Record<string, any>);
        /**
         * 修改默认的 edge 样式
         * @notice 仅在实例初始化的时候生效
         */
        defaultEdgeStyle?:
            | Record<string, any>
            | ((instances: mxGraphExportObject) => Record<string, any>);
        getPortOffset?: (edgeState: mxCellState, source: boolean) => HTMLElement;
        [key: string]: any;
    };
    /**
     * re-layout 的方向，MxHierarchicalLayout 的第二个参数
     */
    direction?: string;
    /**
     * 样式
     */
    style?: CSSProperties;
    /**
     * children 会渲染底部状态栏
     */
    children?: (current: T | null) => JSX.Element;
    /**
     * 渲染自定义 actions
     */
    onRenderActions?: (graph: mxGraph, instances: mxGraphExportObject) => JSX.Element;
    /**
     * 针对不同的数据渲染不同 size 的 vertex
     */
    onGetSize?: (data: T) => { width: number; height: number } | undefined;
    /**
     * 渲染 widgets 的组件
     */
    onRenderWidgets?: () => JSX.Element;
    /**
     * 组件拖拽 drop 的回调函数
     */
    onDropWidgets?: (
        node: HTMLElement,
        graph: mxGraph,
        target: mxCell,
        x: number,
        y: number
    ) => void;
    /**
     * 获取拖拽中的预览节点
     */
    onGetPreview?: (node: HTMLElement) => HTMLElement;
    /**
     * 渲染 cell 的内容，返回 string 类型
     */
    onRenderCell?: (cell: mxCell, graph: mxGraph) => string;
    /**
     * 渲染 cell 的 tooltips，返回 string 类型或 undefined
     */
    onRenderTooltips?: (cell: mxCell, graph: mxGraph) => string;
    /**
     * 获取 vertex 的 style，由于存在默认样式，所以通常用于设置特殊状态的 vertex
     */
    onDrawVertex?: (data: T) => string;
    /**
     * 获取 edge 的 style，由于存在默认样式，通常用于设置特殊样式的 edge
     */
    onDrawEdge?: (source: mxCell, target: mxCell) => string;
    /**
     * Vertex 的点击回调函数
     */
    onClick?: (
        cell: mxCell,
        graph: mxGraph,
        event: React.MouseEvent<HTMLElement, MouseEvent>
    ) => void;
    /**
     * 右键菜单的回调函数
     */
    onContextMenu?: (
        data: T,
        cell: mxCell,
        graph: mxGraph
    ) => IContextMenuConfig[] | Promise<IContextMenuConfig[]>;
    /**
     * Vertex 的双击回调事件
     */
    onDoubleClick?: (
        cell: mxCell,
        graph: mxGraph,
        event: React.MouseEvent<HTMLElement, MouseEvent>
    ) => void;
    /**
     * KeyDown 事件
     */
    onKeyDown?: () => IKeyDownConfig[];
    /**
     * 当节点改变的回调事件
     */
    onCellsChanged?: (cell: mxCell) => void;
    /**
     * 布局改变回调事件，包括滚动，改变 scale 等
     */
    onContainerChanged?: (geometry: IGeometryPosition) => void;
}

export interface IContainerRef<T> {
    insertCell: (data: T, x: number, y: number) => void;
    updateCell: (cellId: string, data: Partial<T>) => void;
    removeCell: (cellId: string) => void;
    getSelectedCell: () => mxCell | null;
    getCells: () => mxCell[];
    setCells: (cells: mxCell[]) => void;
    setView: (geometry: IGeometryPosition) => void;
}

export interface IGeometryPosition {
    scrollTop: number;
    scrollLeft: number;
    scale: number;
}

function renderCharacterByCode(keyCode: number) {
    const unicodeCharacter = String.fromCharCode(keyCode);
    if (unicodeCharacter === '\b') return '⌫';
}

function MxGraphContainer<T extends IMxGraphData>(
    {
        enableDrag,
        loading = false,
        style,
        graphData,
        vertexKey = 'taskId',
        vertexSize,
        config,
        direction,
        children,
        onRenderCell,
        onRenderTooltips,
        onDrawVertex,
        onDrawEdge,
        onClick,
        onContextMenu,
        onDoubleClick,
        onGetSize,
        onRenderWidgets,
        onGetPreview,
        onDropWidgets,
        onRenderActions,
        onKeyDown,
        onCellsChanged,
        onContainerChanged,
    }: IContainerProps<T>,
    ref: Ref<IContainerRef<T>>
) {
    const container = useRef<HTMLDivElement>(null);
    const graph = useRef<mxGraph>();
    const keybindingsRef = useRef<IKeyDownConfig[]>([]);
    const [current, setCurrent] = useState<null | T>(null);

    const locale = useLocale('MxGraph');

    useImperativeHandle(ref, () => ({
        /**
         * 在某一位置插入节点
         */
        insertCell: (data, x, y) => {
            if (graph.current) {
                const width = vertexSize?.width || MxFactory.VertexSize.width;
                const height = vertexSize?.height || MxFactory.VertexSize.height;
                const style = onDrawVertex?.(data);

                graph.current.insertVertex(
                    graph.current.getDefaultParent(),
                    data[vertexKey],
                    data,
                    x,
                    y,
                    width,
                    height,
                    style
                );

                const parent = graph.current.getDefaultParent();
                const vertices = graph.current.getChildVertices(parent);
                if (vertices.length === 1) {
                    graph.current.center(true, true, 0.55, 0.4);
                }
            }
        },
        /**
         * 更新某一节点
         */
        updateCell: (cellId, data) => {
            if (graph.current) {
                const cell = graph.current.getModel().getCell(cellId);
                if (cell) {
                    cell.setValue({ ...cell.value, ...data });
                    onCellsChanged?.(cell);
                    graph.current.view.refresh();
                }
            }
        },
        /**
         * 删除某一节点及其附带的 edge
         */
        removeCell: (cellId) => {
            if (graph.current) {
                const cell = graph.current.getModel().getCell(cellId);
                if (cell) {
                    graph.current.removeCells([cell], true);
                }
            }
        },
        /**
         * 获取当前选中的 cell
         */
        getSelectedCell: () => {
            if (graph.current) {
                return graph.current.getSelectionCell();
            }

            return null;
        },
        /**
         * 获取当前 mxGraph 的全部 cells
         */
        getCells: () => {
            const cells =
                graph.current?.getModel().getChildCells(graph.current.getDefaultParent()) || [];
            return cells;
        },
        /**
         * 在 graph 中插入 cells
         */
        setCells: (cells) => {
            graph.current?.addCells(cells);
        },
        /**
         * 设置布局
         */
        setView: (geometry) => {
            if (graph.current) {
                graph.current.view.setScale(geometry.scale);

                if (graph.current.container) {
                    setTimeout(() => {
                        graph.current?.container.scrollTo({
                            top: geometry.scrollTop,
                            left: geometry.scrollLeft,
                        });
                    }, 0);
                }
            }
        },
    }));

    const initGraph = () => {
        graph.current = Mx.create(container.current!, config);
        Mx.createRubberBand();
        // 转换value显示的内容
        Mx.renderVertex((cell) => {
            return onRenderCell?.(cell, graph.current!) || '';
        });

        // 自定义 tooltips
        Mx.renderTooltips((cell) => {
            return onRenderTooltips?.(cell, graph.current!);
        });

        Mx.layoutEventHandler = () => {
            const parent = graph.current!.getDefaultParent();
            graph.current!.getModel().beginUpdate();
            try {
                const layout2 = new MxHierarchicalLayout(graph.current!, direction || 'north');
                layout2.disableEdgeStyle = false;
                layout2.interRankCellSpacing = 60;
                layout2.intraCellSpacing = 80;
                layout2.execute(parent);
            } finally {
                graph.current!.getModel().endUpdate();
            }
        };

        // Init container scroll
        Mx.initContainerScroll();
    };

    const initWidgetDraggable = () => {
        const nodes = document.querySelectorAll<HTMLElement>(`*[class*="${WIDGETS_PREFIX}"]`);
        nodes.forEach((node) => {
            if (Object.hasOwnProperty(draggableEleSymbol)) return;
            const dragElt =
                onGetPreview?.(node) ||
                (() => {
                    const dom = document.createElement('div');
                    dom.innerHTML = `<span class="preview-title">${locale.newNode}</span>`;
                    return dom;
                })();

            const width = vertexSize?.width || MxFactory.VertexSize.width;
            const height = vertexSize?.height || MxFactory.VertexSize.height;

            dragElt.style.width = `${width}px`;
            dragElt.style.height = `${height}px`;

            const draggableEle = mxUtils.makeDraggable(
                node,
                // @ts-ignore
                (evt: MouseEvent) => {
                    const x = mxEvent.getClientX(evt);
                    const y = mxEvent.getClientY(evt);

                    const elt = document.elementFromPoint(x, y);
                    if (!elt) return null;
                    if (mxUtils.isAncestorNode(graph.current!.container, elt)) {
                        return graph.current;
                    }
                    return null;
                },
                (g: mxGraph, _: mxEventSource, target: mxCell, x: number, y: number) => {
                    if (g.canImportCell(target)) {
                        onDropWidgets?.(node, g, target, x, y);
                    }
                },
                dragElt,
                undefined,
                undefined,
                graph.current!.autoScroll,
                true
            );

            draggableEle.createPreviewElement = function () {
                // ctx._currentSourceType = type;
                return dragElt;
            };
            draggableEle.isGuidesEnabled = () => {
                return graph.current!.graphHandler.guidesEnabled;
            };
            draggableEle.createDragElement = mxDragSource.prototype.createDragElement;

            // insert a flag into element
            Object.defineProperty(node, draggableEleSymbol, {
                value: true,
                writable: false,
                enumerable: false,
            });
        });
    };

    const initKeyDownEvent = () => {
        if (onKeyDown) {
            const keyHandler = new MxKeyHandler(graph.current!);
            // @ts-ignore
            keyHandler.getFunction = function (evt: any) {
                if (evt !== null && !mxEvent.isAltDown(evt)) {
                    if (this.isControlDown(evt) || (mxClient.IS_MAC && evt.metaKey)) {
                        if (mxEvent.isShiftDown(evt)) {
                            return this.controlShiftKeys[evt.keyCode];
                        }

                        return this.controlKeys[evt.keyCode];
                    }

                    if (mxEvent.isShiftDown(evt)) {
                        return this.shiftKeys[evt.keyCode];
                    }

                    return this.normalKeys[evt.keyCode];
                }

                return null;
            };

            const keyBindings = onKeyDown();
            keybindingsRef.current = keyBindings;

            keyBindings.forEach(({ method, keyCode, func }) => {
                keyHandler[method](keyCode, () => {
                    if (graph.current?.isEnabled()) {
                        func();
                    }
                });
            });
        }
    };

    const initConnectionConstraints = () => {
        if (enableDrag) {
            // Replaces the port image
            MxConstraintHandler.prototype.pointImage = new MxImage('images/points.gif', 5, 5);
            // Constraint highlight color
            MxConstraintHandler.prototype.highlightColor = '#3f87ff';
            // Overridden to define per-shape connection points
            MxGraph.prototype.getAllConnectionConstraints = function (terminal: mxCellState) {
                if (terminal?.shape) {
                    if (terminal.shape.stencil) {
                        return terminal.shape.stencil.constraints;
                    }

                    if (terminal.shape.constraints) {
                        return terminal.shape.constraints;
                    }
                }
                return [];
            };

            // Defines the default constraints for all shapes
            MxShape.prototype.constraints = [
                new MxConnectionConstraint(new MxPoint(0.5, 0), true),
                new MxConnectionConstraint(new MxPoint(0, 0.5), true),
                new MxConnectionConstraint(new MxPoint(1, 0.5), true),
                new MxConnectionConstraint(new MxPoint(0.5, 1), true),
            ];
            // Edges have no connection points
            MxPolyline.prototype.constraints = [];
            // Disables floating connections (only connections via ports allowed)
            graph.current!.connectionHandler.isConnectableCell = () => false;

            graph.current!.isValidConnection = function (source: mxCell, target: mxCell) {
                // Only connectable between vertexes
                if (!source.vertex || !target.vertex) return false;

                // Can't have infinite edges
                const edges = this.getEdgesBetween(source, target);
                if (edges.length > 0) return false;

                // Can't connect self with self
                let isLoop = false;
                this.traverse(target, true, (vertex: mxCell) => {
                    if (source.id === vertex.id) {
                        isLoop = true;
                        return false;
                    }
                });
                if (isLoop) return false;

                return true;
            };
        }
    };

    const initEvent = () => {
        const highlightEdges: mxCellHighlight[] = [];

        // 添加 cells 事件，包括 vertexes 和 edges
        graph.current?.addListener(mxEvent.ADD_CELLS, (_, evt: mxEventObject) => {
            const cell: mxCell = evt.getProperty('cell');
            onCellsChanged?.(cell);
        });
        // 删除 cell 事件
        // TODO: Interesting, MOVE cell will call REMOVE_CELLS event
        // Don't know why yet
        graph.current?.addListener(mxEvent.REMOVE_CELLS, (_, evt: mxEventObject) => {
            const cell: mxCell = evt.getProperty('cell');
            onCellsChanged?.(cell);
        });

        // 移动 cell 事件
        graph.current?.addListener(mxEvent.MOVE_END, (_, evt: mxEventObject) => {
            const cell: mxCell = evt.getProperty('cell');
            onCellsChanged?.(cell);
        });

        // Click 事件
        graph.current?.addListener(mxEvent.CLICK, (_, evt) => {
            const cell: mxCell = evt.getProperty('cell');
            setCurrent(cell?.value || null);
            highlightEdges.forEach((e) => e.destroy());

            if (config?.highlight === true) {
                if (cell) {
                    if (cell.vertex) {
                        // highlight cells and edges
                        const outEdges = graph.current?.getOutgoingEdges(cell) || [];
                        const inEdges =
                            graph.current?.getIncomingEdges(
                                cell,
                                graph.current.getDefaultParent()
                            ) || [];
                        const edges = outEdges.concat(inEdges);
                        for (let i = 0; i < edges.length; i += 1) {
                            const highlight = new MxCellHighlight(graph.current!, '#3f87ff', 2);
                            const state = graph.current!.view.getState(edges[i]);
                            highlight.highlight(state);
                            highlightEdges.push(highlight);
                        }
                    } else {
                        // only highlight current edge
                        const highlight = new MxCellHighlight(graph.current!, '#3f87ff', 2);
                        const state = graph.current!.view.getState(cell);
                        highlight.highlight(state);
                        highlightEdges.push(highlight);
                    }
                } else {
                    const cells = graph.current!.getSelectionCells();
                    graph.current?.removeSelectionCells(cells);
                }
            }

            if (cell?.vertex) {
                // vertex will call onClick function
                onClick?.(cell, graph.current!, evt.getProperty('event'));
            }
        });

        graph.current?.addListener(mxEvent.DOUBLE_CLICK, (_, evt) => {
            const cell: mxCell = evt.getProperty('cell');
            if (cell && cell.vertex) {
                onDoubleClick?.(cell, graph.current!, evt.getProperty('event'));
            }
        });

        // ContextMenu 事件
        const mxPopupMenuShowMenu = mxPopupMenu.prototype.showMenu;
        mxPopupMenu.prototype.showMenu = function (this: { graph: mxGraph }) {
            const cells = this.graph.getSelectionCells() || [];
            if (cells.length > 0) {
                // eslint-disable-next-line prefer-rest-params
                mxPopupMenuShowMenu.apply(this, arguments as any);
            } else return false;
        };
        graph.current!.popupMenuHandler.autoExpand = true;

        // change it to for supporting async factoryMethod
        mxPopupMenu.prototype.popup = async function (
            this: mxPopupMenuHandler & {
                div: HTMLDivElement;
                tbody: HTMLElement;
                itemCount: number;
            },
            x: number,
            y: number,
            cell: mxCell,
            evt: any
        ) {
            if (this.div != null && this.tbody != null && this.factoryMethod != null) {
                this.div.style.left = `${x}px`;
                this.div.style.top = `${y}px`;

                // Removes all child nodes from the existing menu
                while (this.tbody.firstChild != null) {
                    mxEvent.release(this.tbody.firstChild);
                    this.tbody.removeChild(this.tbody.firstChild);
                }

                this.itemCount = 0;
                await this.factoryMethod(this, cell, evt);

                if (this.itemCount > 0) {
                    this.showMenu();
                    this.fireEvent(new MxEventObject(mxEvent.SHOW), []);
                }
            }
        };

        // Reset collapsed image
        graph.current!.collapsedImage = new MxImage('', 0, 0);

        graph.current!.popupMenuHandler.factoryMethod = async (
            menu: mxPopupMenuHandler,
            cell: mxCell
        ) => {
            if (!cell) return;

            const contextMenus = await onContextMenu?.(cell.value!, cell, graph.current!);

            contextMenus?.forEach(({ id, title, disabled, children: subMenu, callback }) => {
                // 如果发现当前菜单项在快捷键里存在相同 id 的注册事件
                const target =
                    !!keybindingsRef.current.length &&
                    !!id &&
                    keybindingsRef.current.find((k) => k.id === id);

                const parent = menu.addItem(
                    target
                        ? `${title}(${(() => {
                              switch (target.method) {
                                  case 'bindControlKey':
                                      return mxClient.IS_MAC ? '⌘' : 'Meta';
                                  case 'bindKey':
                                  default:
                                      return '';
                              }
                          })()} ${renderCharacterByCode(target.keyCode)})`
                        : title,
                    undefined,
                    () => {
                        if (target) {
                            target.func();
                            return;
                        }

                        callback?.();
                    },
                    undefined,
                    undefined,
                    !disabled
                );

                // 暂时先支持两层菜单
                if (subMenu?.length) {
                    subMenu.forEach((child) => {
                        menu.addItem(
                            child.title,
                            undefined,
                            child.callback,
                            parent,
                            undefined,
                            !child.disabled
                        );
                    });
                }
            });
        };
    };

    const initData = () => {
        if (graphData) {
            if (graphData.length === 1) {
                // default to select the only one graphData
                setCurrent(graphData[0]);
            }

            const stack: { sourceOrTarget: mxCell | null; data: T }[] = graphData.map((d) => ({
                sourceOrTarget: null,
                data: d,
            }));

            while (stack.length) {
                const { sourceOrTarget, data } = stack.pop()!;
                const style = onDrawVertex?.(data);

                const size = onGetSize?.(data);
                const width = size?.width || vertexSize?.width || MxFactory.VertexSize.width;
                const height = size?.height || vertexSize?.height || MxFactory.VertexSize.height;
                const vertex = graph.current!.insertVertex(
                    graph.current!.getDefaultParent(),
                    data[vertexKey],
                    data,
                    0,
                    0,
                    width,
                    height,
                    style
                );

                if (sourceOrTarget) {
                    // 判断 sourceOrTarget 存放的 vertex 是 source 还是 target
                    const isSource = !!sourceOrTarget.value?.childNode?.find(
                        (i: T) => i[vertexKey] === data[vertexKey]
                    );

                    const source = isSource ? sourceOrTarget : vertex;
                    const target = isSource ? vertex : sourceOrTarget;
                    const style = onDrawEdge?.(
                        isSource ? sourceOrTarget : vertex,
                        isSource ? vertex : sourceOrTarget
                    );

                    graph.current!.insertEdge(
                        graph.current!.getDefaultParent(),
                        null,
                        null,
                        source,
                        target,
                        style
                    );
                } else {
                    graph.current?.setSelectionCell(vertex);
                }

                if (data.childNode?.length) {
                    data.childNode.forEach((i: T) => {
                        stack.push({
                            sourceOrTarget: vertex,
                            data: i,
                        });
                    });
                }

                if (data.parentNode?.length) {
                    data.parentNode.forEach((i: T) => {
                        stack.push({
                            sourceOrTarget: vertex,
                            data: i,
                        });
                    });
                }
            }

            Mx.layoutEventHandler?.();
            restoreView();
        }
    };

    const restoreView = () => {
        // Sets initial scrollbar positions
        window.setTimeout(() => {
            Mx.resetScrollPosition();
        }, 0);
    };

    useEffect(() => {
        initGraph();
        initData();
        initEvent();

        initConnectionConstraints();
        initWidgetDraggable();
        initKeyDownEvent();

        return () => {
            graph.current?.destroy();
        };
    }, [graphData]);

    useEffect(() => {
        function scrollEvent() {
            onContainerChanged?.({
                scrollTop: container.current!.scrollTop,
                scrollLeft: container.current!.scrollLeft,
                scale: graph.current?.getView().getScale() || -1,
            });
        }

        // container 滚动事件
        container.current?.addEventListener('scroll', scrollEvent);
        return () => {
            container.current?.removeEventListener('scroll', scrollEvent);
        };
    }, []);

    return (
        <div className="dtc-graph-editor" style={style}>
            <Spin
                tip="Loading..."
                size="large"
                spinning={loading}
                wrapperClassName="dtc-task-graph"
            >
                <div
                    style={{
                        position: 'relative',
                        overflow: 'auto',
                        width: '100%',
                        height: '100%',
                    }}
                    tabIndex={-1}
                    ref={container}
                />
            </Spin>
            {onRenderWidgets && (
                <div className="dtc-graph-widgets" onContextMenu={(e) => e.preventDefault()}>
                    {onRenderWidgets?.()}
                </div>
            )}
            <div className="dtc-graph-bottom">{children?.(current)}</div>
            <div className="dtc-graph-toolbar" style={config?.toolbarStyle}>
                {onRenderActions?.(graph.current, Mx.mxInstance)}
            </div>
        </div>
    );
}

export default forwardRef(MxGraphContainer) as <T extends IMxGraphData>(
    props: IContainerProps<T> & { ref?: ForwardedRef<IContainerRef<T>> }
) => JSX.Element;
