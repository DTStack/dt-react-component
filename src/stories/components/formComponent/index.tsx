import React from 'react'
import RenderFormItem from '../../../components/renderFormItem'
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';

const App = (props) => {
    const { getFieldDecorator } = props.form;
    const params = { ...props, getFieldDecorator }
    return (
        <Form>
            {RenderFormItem(params)}
        </Form>
    )
}
export const FormItem: any = Form.create()(App);
