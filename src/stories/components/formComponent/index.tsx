import React from 'react';
import { Form } from 'antd';
import RenderFormItem from '../../../components/renderFormItem';

const App = (props) => {

    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    const [form] = Form.useForm();
    const params = { ...props };
    const { initialValue } = params;
    return (
        <Form
            form={form}
            onFinish={onFinish}
            initialValues={initialValue}
        >
            {RenderFormItem(params)}
        </Form>
    )
}
export default App;
