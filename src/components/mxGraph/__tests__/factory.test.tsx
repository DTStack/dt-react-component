import MxFactory from '../factory';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('mxGraph Factory Component Tests', () => {
    afterEach(() => {
        cleanup();
    });
    test('Static Properties in Factory', () => {
        expect(MxFactory.VertexSize).toEqual({
            width: 210,
            height: 50,
        });

        expect(MxFactory.config).toEqual({
            mxImageBasePath: 'images',
            mxLanguage: 'none',
            mxLoadResources: false,
            mxLoadStylesheets: false,
        });
    });

    test('Should create a graph instance', () => {
        const factory = new MxFactory();
        const container = document.createElement('div');
        document.body.appendChild(container);
        const graph = factory.create(container);
        expect(graph).toBeInstanceOf(factory.mxInstance.mxGraph);
        // Enable tooltip in default
        expect(graph.tooltipHandler.enabled).toBe(true);
        // Disable connection in default
        expect(graph.connectionHandler.enabled).toBe(false);
        graph.getSelectionCell = jest
            .fn()
            .mockImplementationOnce(() => {
                const cell = new factory.mxInstance.mxCell(
                    '',
                    new factory.mxInstance.mxGeometry(0, 0)
                );
                cell.edge = true;
                return cell;
            })
            .mockImplementation(() => {
                const cell = new factory.mxInstance.mxCell(
                    '',
                    new factory.mxInstance.mxGeometry(0, 0)
                );
                return cell;
            });
        // Disable edge movable in default
        expect(graph.isCellsMovable()).toBe(false);
        // Enable vertex movable in default
        expect(graph.isCellsMovable()).toBe(true);

        expect(graph.getStylesheet().getDefaultVertexStyle()).toEqual({
            '1': 'normal',
            align: 'center',
            fontFamily: 'PingFangSC-Regular',
            perimeter: factory.mxInstance.mxPerimeter.RectanglePerimeter,
            fontSize: '12',
            fontStyle: 1,
            shape: 'rectangle',
            verticalAlign: 'middle',
            whiteSpace: 'nowrap',
        });
        expect(graph.getStylesheet().getDefaultEdgeStyle()).toEqual({
            align: 'center',
            endArrow: 'block',
            fontSize: '10',
            edgeStyle: factory.mxInstance.mxEdgeStyle.TopToBottom,
            rounded: false,
            shape: 'connector',
            strokeColor: '#3f87ff',
            strokeWidth: 1,
            verticalAlign: 'middle',
        });
    });

    test('Should support config', () => {
        const factory = new MxFactory();
        const container = document.createElement('div');
        document.body.appendChild(container);
        const graph = factory.create(container, {
            tooltips: false,
            connectable: true,
            vertexMovable: false,
        });
        graph.getSelectionCell = jest.fn().mockImplementation(() => {
            const cell = new factory.mxInstance.mxCell('', new factory.mxInstance.mxGeometry(0, 0));
            return cell;
        });
        expect(graph.tooltipHandler.enabled).toBe(false);
        expect(graph.connectionHandler.enabled).toBe(true);
        expect(graph.isCellsMovable()).toBe(false);
    });

    test('Should support change the default style for edge and vertex', () => {
        const factory = new MxFactory();
        const container = document.createElement('div');
        document.body.appendChild(container);
        const graph = factory.create(container, {
            defaultEdgeStyle: {
                fontSize: '12',
                strokeWidth: 2,
            },
            defaultVertexStyle: {
                fontSize: '14',
                fontFamily: 'sans-serif',
            },
        });

        expect(graph.getStylesheet().getDefaultVertexStyle()).toEqual(
            expect.objectContaining({
                fontSize: '14',
                fontFamily: 'sans-serif',
            })
        );
        expect(graph.getStylesheet().getDefaultEdgeStyle()).toEqual(
            expect.objectContaining({
                fontSize: '12',
                strokeWidth: 2,
            })
        );
    });

    test('Should throw error when call createRubberBand before create', () => {
        const factory = new MxFactory();
        const container = document.createElement('div');
        document.body.appendChild(container);

        expect(factory.createRubberBand).toThrow();

        const mockRubberband = jest.fn();
        factory.mxInstance.mxRubberband = mockRubberband;

        factory.create(container);
        factory.createRubberBand();
        expect(mockRubberband).toBeCalled();
    });

    test('Should support initial functions', () => {
        const factory = new MxFactory();
        const container = document.createElement('div');
        document.body.appendChild(container);
        const graph = factory.create(container);
        factory.createRubberBand();
        factory.initContainerScroll();

        // The following functions are all for container scroll
        // @ts-ignore
        expect(graph.scrollTileSize).not.toBeUndefined();
        // @ts-ignore
        expect(graph.getPagePadding).not.toBeUndefined();
        // @ts-ignore
        expect(graph.getPageSize).not.toBeUndefined();
        // @ts-ignore
        expect(graph.getPageLayout).not.toBeUndefined();

        factory.resetScrollPosition();
        expect(graph.container.scrollTop).toBe(0);
        expect(graph.container.scrollLeft).toBe(0);
    });

    test('Should support to reset View', () => {
        const factory = new MxFactory();
        const container = document.createElement('div');
        document.body.appendChild(container);
        const mockScale = jest.fn();
        const mockTranslate = jest.fn();
        factory.mxInstance.mxGraphView.prototype.setScale = mockScale;
        factory.mxInstance.mxGraphView.prototype.setTranslate = mockTranslate;

        factory.setView({ scale: 1, dx: 1, dy: 1 });
        expect(mockScale).not.toBeCalled();
        expect(mockTranslate).not.toBeCalled();

        factory.create(container);
        factory.setView({ scale: 1, dx: 1, dy: 1 });
        expect(mockScale).toBeCalled();
        expect(mockTranslate).toBeCalled();
    });

    test('Should support dispose', () => {
        const factory = new MxFactory();
        const container = document.createElement('div');
        document.body.appendChild(container);
        const mockDestroy = jest.fn();
        factory.mxInstance.mxGraph.prototype.destroy = mockDestroy;

        factory.dispose();
        expect(mockDestroy).not.toBeCalled();

        factory.create(container);
        factory.dispose();
        expect(mockDestroy).toBeCalled();
    });

    test("Should apply graph's sizeDidChange function", () => {
        const factory = new MxFactory();
        const container = document.createElement('div');
        container.style.overflow = 'scroll';
        document.body.appendChild(container);
        const graph = factory.create(container);

        const mockSizeDidChange = jest.fn();
        graph.sizeDidChange = mockSizeDidChange;
        factory.initContainerScroll();

        // dispatch refresh to call sizeDidChange
        graph.view.setTranslate(100, 10);

        expect(mockSizeDidChange).toBeCalled();
    });

    test('Should support define render vertex', () => {
        const factory = new MxFactory();
        const container = document.createElement('div');
        document.body.appendChild(container);
        const graph = factory.create(container);

        factory.renderVertex(() => '<div data-testid="mxGraph">test</div>');

        graph.insertVertex(
            graph.getDefaultParent(),
            '',
            '',
            0,
            0,
            MxFactory.VertexSize.width,
            MxFactory.VertexSize.height
        );

        expect(container.querySelector('div[data-testid=mxGraph]')).toBeInTheDocument();
    });
});
