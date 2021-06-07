import React from 'react';
import DynamicUseComponent from '../index';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('test DynamicUseComponent', () => {
    test('组件路径正确', async () => {
        const wrapper = render(<DynamicUseComponent componentProps={{}} dynamicComponent={() => import('../../notFound')}/>)
        const el = wrapper.getByText('组件加载失败')
        expect(el).toBeInTheDocument()
    })
})
