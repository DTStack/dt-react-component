import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { Modal } from 'dt-react-component';

interface FormValue {
    username: string;
}

const ModalForm = Modal.Form<FormValue>((_props) => {
    return (
        <Form.Item label="username" name={'username'} rules={[{ max: 10 }]}>
            <Input />
        </Form.Item>
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
            />
        </>
    );
};
