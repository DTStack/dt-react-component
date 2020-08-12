
import React from 'react';
import EasySelect from '../index';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

let wrapper: any, element: any

describe('test EasySelect', () => {
    beforeEach(() => {
        wrapper = render(
            <EasySelect
                data-testid='test-easySelect'
                dataSource={[{ value: 1, label: '张三' }, { value: 2, label: '李四' }]}
            />
        )
        element = wrapper.getByTestId('test-easySelect');
    })
    afterEach(() => {
        cleanup();
    })
    test('should render correct', () => {
        expect(element).toBeInTheDocument();
        expect(element.classList.contains('ant-select-selection')).toEqual(true);
        expect(element.childNodes.length).toBe(2);
    })
})
