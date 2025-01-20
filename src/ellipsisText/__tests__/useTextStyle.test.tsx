import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { act, renderHook } from '@testing-library/react-hooks';

import useTextStyle from '../useTextStyle';
import {
    getAvailableWidth,
    getRangeWidth,
    getStyle,
    getValidContainerElement,
    transitionWidth,
} from '../utils';

jest.mock('../utils', () => ({
    getValidContainerElement: jest.fn(),
    getRangeWidth: jest.fn(),
    getStyle: jest.fn(),
    getAvailableWidth: jest.fn(),
    transitionWidth: jest.fn(),
}));

describe('Test useTextStyle', () => {
    const mockGetRangeWidth = getRangeWidth as jest.Mock;
    const mockGetStyle = getStyle as jest.Mock;
    const mockGetValidContainerElement = getValidContainerElement as jest.Mock;
    const mockTransitionWidth = transitionWidth as jest.Mock;
    const mockGetAvailableWidth = getAvailableWidth as jest.Mock;

    beforeEach(() => {
        cleanup();
        jest.clearAllMocks();
        mockGetValidContainerElement.mockReturnValue(<div style={{ width: 100 }}></div>);
    });

    it('should return a ref, overflow state, style, and trigger function', () => {
        const { result } = renderHook(() => useTextStyle('Test Text'));
        const [ref, isOverflow, style, updateTextStyle] = result.current;

        expect(ref).toBeInstanceOf(Object);
        expect(typeof isOverflow).toBe('boolean');
        expect(style).toBeInstanceOf(Object);
        expect(typeof updateTextStyle).toBe('function');
    });

    it('should calculate overflow correctly', () => {
        const { result } = renderHook(() => useTextStyle('Test Text'));
        const [ref, , , updateTextStyle] = result.current;

        render(<span ref={ref}></span>);

        mockGetRangeWidth.mockReturnValue(150);
        mockGetAvailableWidth.mockReturnValue(100);

        act(() => {
            updateTextStyle();
        });

        const [, isOverflow, style] = result.current;

        expect(mockGetRangeWidth).toHaveBeenCalled();
        expect(isOverflow).toBe(true);
        expect(style.maxWidth).toBe(100);
    });

    it('should not overflow if the container width is sufficient', () => {
        const { result } = renderHook(() => useTextStyle('Test Text'));
        const [ref, , , updateTextStyle] = result.current;

        render(<span ref={ref}></span>);

        mockGetRangeWidth.mockReturnValue(80);
        mockGetAvailableWidth.mockReturnValue(100);

        act(() => {
            updateTextStyle();
        });
        const [, isOverflow, style] = result.current;

        expect(isOverflow).toBe(false);
        expect(style.maxWidth).toBe(100);
    });

    it('should inherit cursor style from parent', () => {
        const { result } = renderHook(() => useTextStyle('Test Text'));
        const [ref, , , updateTextStyle] = result.current;

        render(<span ref={ref}></span>);

        mockGetStyle.mockReturnValue('pointer');

        act(() => {
            updateTextStyle();
        });
        const [, , style] = result.current;

        expect(style.cursor).toBe('pointer');
    });

    it('should have cursor style as default when text is not overflowing and parent cursor is default', () => {
        const { result } = renderHook(() => useTextStyle('Test Text'));
        const [ref, , , updateTextStyle] = result.current;

        render(<span ref={ref}></span>);

        mockGetRangeWidth.mockReturnValue(80);
        mockGetAvailableWidth.mockReturnValue(100);
        mockGetStyle.mockReturnValue('default');

        act(() => {
            updateTextStyle();
        });
        const [, isOverflow, style] = result.current;

        expect(isOverflow).toBe(false);
        expect(style.cursor).toBe('default');
    });

    it('should have cursor style as pointer when text is overflowing and parent cursor is default', () => {
        const { result } = renderHook(() => useTextStyle('Test Text'));
        const [ref, , , updateTextStyle] = result.current;

        render(<span ref={ref}></span>);

        mockGetRangeWidth.mockReturnValue(150);
        mockGetAvailableWidth.mockReturnValue(100);
        mockGetStyle.mockReturnValue('default');

        act(() => {
            updateTextStyle();
        });
        const [, isOverflow, style] = result.current;

        expect(isOverflow).toBe(true);
        expect(style.cursor).toBe('pointer');
    });

    it('should set container width when container width < maxWidth', () => {
        const { result } = renderHook(() => useTextStyle('Test Text', 120));
        const [ref, , , updateTextStyle] = result.current;

        render(<span ref={ref}></span>);

        mockTransitionWidth.mockReturnValue(100);

        act(() => {
            updateTextStyle();
        });
        const [, , style] = result.current;

        expect(style.maxWidth).toBe(100);
    });

    it('should set maxWidth when container width > maxWidth ', () => {
        const { result } = renderHook(() => useTextStyle('Test Text', 80));
        const [ref, , , updateTextStyle] = result.current;

        render(<span ref={ref}></span>);

        mockTransitionWidth.mockReturnValue(80);

        act(() => {
            updateTextStyle();
        });
        const [, , style] = result.current;

        expect(style.maxWidth).toBe(80);
    });
});
