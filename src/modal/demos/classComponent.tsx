import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { Modal } from 'dt-react-component';
import { IModalFormProps } from '../form';

interface FormValue {
    username: string;
}

interface CustomModalFormProps {
    customAttr: string;
}

type FormItemsProps = CustomModalFormProps & IModalFormProps<FormValue>;

class FormItems extends React.Component<FormItemsProps> {
    render(): React.ReactNode {
        return (
            <>
                <Form.Item
                    label="我是自定义参数"
                    name={'name'}
                    initialValue={this.props.customAttr}
                >
                    <Input disabled />
                </Form.Item>
                <Form.Item label="username" name={'username'} rules={[{ max: 10 }]}>
                    <Input />
                </Form.Item>
            </>
        );
    }
}

const ModalForm = Modal.Form<CustomModalFormProps, FormValue>(FormItems);

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
