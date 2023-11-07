import React, { ReactElement, useMemo } from 'react';
import { FormProps, Modal, ModalProps } from 'antd';

import Form from '../../../form';
import Utils from '../../../utils';
import { FORM_PROPS, MODAL_PROPS } from '../../../utils/antdProps';

export interface IModalFormProps<Values = any>
    extends Omit<FormProps, 'title'>,
        Omit<ModalProps, 'children'> {
    /**
     * modal className
     * @param {string}
     */
    modalClassName?: string;
    /**
     * 点击提交，数据验证成功后的会调事件
     * @param values
     * @param record
     * @returns
     */
    onSubmit?: (values: Values) => void;
}

const ModalForm = (props: IModalFormProps) => {
    const {
        okText = '确定',
        cancelText = '取消',
        layout = 'vertical',
        maskClosable = false,
        children,
        onSubmit,
        modalClassName,
    } = props;

    const [formProps, modalProps] = useMemo(
        () => Utils.filterAttrByArrays(props, [FORM_PROPS, MODAL_PROPS]),
        [props]
    );

    const [form] = Form.useForm();

    const okHandler = async () => {
        try {
            const values = await form.validateFields();
            onSubmit?.(values);
        } catch (error) {}
    };

    const onCancel = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        props.onCancel?.(e);
    };

    const afterClose = () => {
        form.resetFields();
    };

    return (
        <Modal
            {...modalProps}
            afterClose={afterClose}
            onOk={okHandler}
            onCancel={onCancel}
            okText={okText}
            cancelText={cancelText}
            maskClosable={maskClosable}
            className={modalClassName}
        >
            <Form form={form} layout={layout} {...formProps}>
                {React.cloneElement(children as ReactElement, { form, ...props })}
            </Form>
        </Modal>
    );
};

function InternalForm<P = any, V = any>(
    FormComponent: React.ComponentType<IModalFormProps<V> & P>
): React.FC<IModalFormProps<V> & P> {
    return (props: IModalFormProps<V> & P) => (
        <ModalForm {...props}>
            <FormComponent {...(props as IModalFormProps<V> & P)} />
        </ModalForm>
    );
}

export default InternalForm;
