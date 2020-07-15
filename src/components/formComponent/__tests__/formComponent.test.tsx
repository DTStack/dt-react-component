import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import { RenderFormItem } from '../index'
import { Form, Button } from 'antd';

const IProps = {
    item: {
        component: <Button data-testid='test-button' />,
        key: 'test-button',
        options: {
            className: 'test-className'
        }
    }
}
const defaultProps = {
    item: {
        label: 'test-label',
        key: 'test-input'
    }
}
const App = Form.create()(
    class TestForm extends React.Component<any, any> {
        render () {
            const { getFieldDecorator } = this.props.form;
            const params = { ...this.props, getFieldDecorator }
            return (
                <Form>
                    {RenderFormItem(params)}
                </Form>
            )
        }
    }
);

describe('test form item', () => {
    let wrapper, element
    beforeEach(() => {
        wrapper = render(<App {...IProps} />);
        element = wrapper.getByTestId('test-button');
    })

    test('should render correct className', () => {
        expect(wrapper.container.querySelector('.test-className')).toBeInTheDocument();
    })

    test('should click button', () => {
        element.onclick = jest.fn();
        fireEvent.click(element);
        expect(element.onclick).toHaveBeenCalled();
    })
})

describe('test default form', () => {
    test('should render input', () => {
        const { getByTestId } = render(<App {...defaultProps} />);
        expect(getByTestId('test-input')).toBeInTheDocument();
    })
})
