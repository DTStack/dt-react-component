import React from 'react';
import DynamicUseComponent from '../index';
import NotFound from '../../notFound'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('test DynamicUseComponent', () => {
    test('组件路径正确', () => {
        const wrapper = render(<DynamicUseComponent componentProps={{}} dynamicComponent={() => Promise.resolve({default: NotFound})}/>)
        let el = wrapper.getByText('组件加载失败')
        expect(el).toBeInTheDocument()
        setTimeout(() => {
            el = wrapper.getByText('亲，是不是走错地方了？')
            expect(el).toBeInTheDocument()
        },1000)
    })
})
