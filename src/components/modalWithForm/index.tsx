import React from 'react';
import { Modal, Form, FormProps } from 'antd';
import { ButtonProps, ButtonType } from 'antd/es/button';

export interface IProps {
    confirmLoading?: boolean;
    hideModalHandler: () => void;
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
    footer?: React.ReactNode;
    centered?: boolean;
    cancelButtonProps?: ButtonProps;
    layout?: 'horizontal' | 'vertical' | 'inline';
    preserve?: boolean;
    children?: React.ReactElement;
    [key: string]: any;
}

type ModalProps = IProps & FormProps;

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
        confirmLoading,
        layout = 'vertical',
        hideModalHandler,
        onSubmit,
        children,
        ...restProps
    } = props;

    const [form] = Form.useForm();

    const okHandler = async () => {
        try {
            const values = await form.validateFields();
            onSubmit(values, record);
        } catch (error) {}
    };

    const cancelHandler = () => {
        hideModalHandler();
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
            confirmLoading={confirmLoading}
        >
            <Form form={form} layout={layout} {...restProps}>
                {React.cloneElement(children, { form, ...props })}
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
