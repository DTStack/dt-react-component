import React from 'react';
import EditCell from '../index';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

(global as any).document.createRange = () => ({
    selectNodeContents: jest.fn(),
    getBoundingClientRect: jest.fn(() => ({
        width: 500,
    })),
});

const defaultProps = {
    value: 'test editCell',
    keyField: 'name',
    onHandleEdit: jest.fn(),
    isView: false,
};

let wrapper, ele;
describe('test edit cell', () => {
    beforeEach(() => {
        wrapper = render(<EditCell {...defaultProps} />);
        ele = wrapper.getByText('修改');
    });
    afterEach(() => {
        cleanup();
    });
    test('should render the correct content in editCell', () => {
        expect(ele).toBeInTheDocument();
    });
    test('should call click function when click', () => {
        ele.onclick = jest.fn();
        fireEvent.click(ele);
        expect(ele.onclick).toHaveBeenCalled();
        const w = wrapper.getByText('完成');
        expect(w).toBeInTheDocument();
    });

    test('should render editor and run onHandleEdit after click', () => {
        ele.onclick = jest.fn();
        fireEvent.click(ele);
        expect(ele.onclick).toHaveBeenCalled();
        const editorEle = wrapper.getByText('完成');
        expect(editorEle).toBeInTheDocument();
        editorEle.onclick = jest.fn();
        fireEvent.click(editorEle);
        expect(editorEle.onclick).toHaveBeenCalled();
        expect(defaultProps.onHandleEdit).toHaveBeenCalled();
    });
});
