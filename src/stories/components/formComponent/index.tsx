import React from 'react'
import { RenderFormItem } from '../../../components/formComponent'
import { Form } from 'antd';
const App = () => {
    const { getFieldDecorator } = this.props.form;
    const params = { ...this.props, getFieldDecorator }
    return (
        <Form>
            {RenderFormItem(params)}
        </Form>
    )
}

export default function FormItem () {
    return Form.create()(App)
} 
