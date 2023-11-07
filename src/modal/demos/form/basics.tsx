import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { Modal } from 'dt-react-component';

interface FormValues {
    username: string;
}

interface CustomModalFormProps {
    customAttr: string;
}

const ModalForm = Modal.Form<CustomModalFormProps, FormValues>((props) => {
    return (
        <>
            <Form.Item label="我是自定义参数" name={'name'} initialValue={props.customAttr}>
                <Input disabled />
            </Form.Item>
            <Form.Item label="username" name={'username'} rules={[{ max: 10 }]}>
                <Input />
            </Form.Item>
        </>
    );
});

export default () => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <Button onClick={() => setVisible(true)}>click</Button>
            <ModalForm
                title="BasicModalForm"
                visible={visible}
                onCancel={() => setVisible((v) => !v)}
                onSubmit={(value) => {
                    console.log(value);
                }}
                customAttr={'customAttr'}
            />
        </>
    );
};
