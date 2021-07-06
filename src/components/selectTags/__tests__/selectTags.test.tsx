import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import SelectTags from '../index';

describe('SelectTags Component test', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = render(
            <SelectTags
                options={[
                    {
                        label: '选项一',
                        value: 1
                    },
                    {
                        label: '选项二',
                        value: 2
                    },
                    {
                        label: '选项三',
                        value: 3
                    }
                ]}
                initTags={[
                    {
                        label: '选项一',
                        value: 1
                    }
                ]}
                onChange={(tags) => {
                    // console.log("tags: ", tags);
                }}
            />
        );
    })
    afterEach(() => {
        cleanup();
    });

    it('should get SelectTags component', () => {
        const { queryByTestId } = wrapper;
        const rendeElement = document.querySelector('.dt-mul-select-tag');
        const removeBtn = document.querySelector('.anticon-close')
        const antTag = document.querySelector('.ant-tag')
        expect(queryByTestId('plus-circle')).not.toBeNull();
        expect(rendeElement).not.toBeNull();
        expect(removeBtn).not.toBeNull();
        expect(antTag).not.toBeNull();

        expect(queryByTestId('add-option')).toBeNull();
        expect(queryByTestId('edit-option')).toBeNull();
    });

    it('should be closable', () => {
        const removeBtn = document.querySelector('.anticon-close')
        fireEvent.click(removeBtn);
        const antTag = document.querySelector('.ant-tag')
        expect(antTag).toBeNull();
    })

    it('should get add event and test blur event', () => {
        const { queryByTestId } = wrapper;
        fireEvent.click(queryByTestId('plus-circle'));
        expect(queryByTestId('add-option')).not.toBeNull();

        let element = wrapper.getByTestId('add-option') as HTMLInputElement;
        element.onblur = jest.fn();
        fireEvent.blur(element);
        expect(element.onblur).toHaveBeenCalled();
    });
    it('should get add event and test change event', () => {
        const { queryByTestId } = wrapper;
        fireEvent.click(queryByTestId('plus-circle'));
        expect(queryByTestId('add-option')).not.toBeNull();

        let element = wrapper.getByTestId('add-option') as HTMLInputElement;
        element.onchange = jest.fn();
        fireEvent.change(element);
        expect(element.onchange).toHaveBeenCalled();
    });
    it('should be change tag', () => {
        const tag = document.querySelector('.ant-tag')
        fireEvent.change(tag);
    })
    it('click tag', () => {
        const tag = document.querySelector('.ant-tag')
        fireEvent.click(tag)
    })
});
