import React from 'react';
import { Modal, Form } from 'antd';
import { ButtonProps, ButtonType } from 'antd/lib/button';

export interface ModalProps {
    hideModelHandler: () => any;
    onSubmit?: (values: any, record: any) => void;
    cancelText?: string;
    okText?: string;
    okType?: ButtonType;
    record?: string | number | object;
    visible?: boolean;
    title?: React.ReactNode | string;
    onCancel?: (func: Function) => any;
    width?: string | number;
    modelClass?: string;
    footer?: string | React.ReactNode;
    centered?: boolean;
    cancelButtonProps?: ButtonProps;
    layout?: 'horizontal' | 'vertical' | 'inline';
    children?: React.ReactElement;
    [key: string]: any;
}

const ModalForm = (props: ModalProps) => {
    const {
        title,
        visible,
        record,
        okText = '确定',
        cancelText = '取消',
        modelClass,
        okType,
        footer,
        centered,
        cancelButtonProps,
        layout = 'vertical',
        hideModelHandler,
        onSubmit,
        children,
    } = props;

    const [form] = Form.useForm();

    const okHandler = async () => {
        try {
            const values = await form.validateFields();
            onSubmit(values, record);
        } catch (error) {}
    };

    const cancelHandler = () => {
        hideModelHandler();
        form.resetFields();
    };

    return (
        <Modal
            className={modelClass}
            title={title}
            visible={visible}
            onOk={okHandler}
            onCancel={cancelHandler}
            okText={okText}
            cancelText={cancelText}
            okType={okType}
            footer={footer}
            centered={centered}
            cancelButtonProps={cancelButtonProps}
        >
            <Form form={form} layout={layout}>
                {React.cloneElement(children, { form: form, ...props })}
            </Form>
        </Modal>
    );
};

function ModalWithForm(FormComponent: any) {
    return (props: ModalProps) => (
        <ModalForm {...props}>
            <FormComponent />
        </ModalForm>
    );
}
export default ModalWithForm;
