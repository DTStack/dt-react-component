import React, { useState } from 'react';
import { ModalWithForm } from 'dt-react-component';
import { Button, Form, Input } from 'antd';

const Modal = ModalWithForm((_props) => {
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
            <Modal
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
