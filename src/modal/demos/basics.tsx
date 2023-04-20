import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { Modal } from 'dt-react-component';

const ModalWithForm = Modal.Form((_props) => {
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
            <ModalWithForm
                title="ModalWithForm"
                visible={visible}
                hideModalHandler={() => setVisible((v) => !v)}
                onSubmit={(value) => {
                    console.log(value);
                }}
            />
        </>
    );
};
