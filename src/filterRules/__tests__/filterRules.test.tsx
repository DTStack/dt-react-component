import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Input } from 'antd';
import '@testing-library/jest-dom/extend-expect';

import { INIT_DATA, INIT_ROW_VALUES, IRow } from '../demos/constants';
import FilterRules, { IComponentProps } from '..';

const MyInput = ({ rowValues: { input }, rowKey, onChange }: IComponentProps<IRow>) => (
    <Input value={input} onChange={(e) => onChange?.(rowKey, { input: e.target.value })} />
);

describe('FilterRules', () => {
    test('should support FilterRules success render', () => {
        const wrapper = render(
            <FilterRules<IRow>
                component={(props) => <MyInput {...props} />}
                value={INIT_DATA}
                initValues={INIT_ROW_VALUES}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('calls onChange on add condition button click', () => {
        const handleChange = jest.fn();
        const { container } = render(
            <FilterRules<IRow>
                component={(props) => <MyInput {...props} />}
                value={INIT_DATA}
                onChange={handleChange}
                initValues={INIT_ROW_VALUES}
            />
        );
        fireEvent.click(container.querySelector('.anticon-plus-circle') as Element);
        expect(handleChange).toHaveBeenCalled();
    });

    test('calls onChange on delete condition button click when notEmpty is false', () => {
        const handleChange = jest.fn();
        const { container } = render(
            <FilterRules<IRow>
                component={(props) => <MyInput {...props} />}
                value={INIT_DATA}
                onChange={handleChange}
                initValues={INIT_ROW_VALUES}
                notEmpty={{ data: false }}
            />
        );
        fireEvent.click(container.querySelector('.anticon-minus-circle') as Element);
        expect(handleChange).toHaveBeenCalled();
    });

    test('not calls onChange on delete condition button click when notEmpty is true', () => {
        const handleChange = jest.fn();
        const { container } = render(
            <FilterRules<IRow>
                component={(props) => <MyInput {...props} />}
                value={INIT_DATA}
                onChange={handleChange}
                initValues={INIT_ROW_VALUES}
            />
        );
        fireEvent.click(container.querySelector('.anticon-minus-circle') as Element);
        expect(handleChange).not.toHaveBeenCalled();
    });
});
