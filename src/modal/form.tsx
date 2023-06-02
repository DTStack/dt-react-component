import React, { ReactElement, useMemo } from 'react';
import { Modal, FormProps, ModalFuncProps } from 'antd';
import { FORM_PROPS, MODAL_PROPS } from '../utils/antdProps';
import Utils from '../utils';
import Form from '../form';

export interface IModalFormProps<Values = any> extends FormProps, ModalFuncProps {
    /**
     * modal title
     * @param {string}
     */
    title?: string;
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
    [key: string]: any;
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

    const onCancel = () => {
        props.onCancel?.();
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

function InternalForm<V = any>(
    FormComponent: React.ComponentType<IModalFormProps<V>>
): React.FC<IModalFormProps<V>> {
    return (props: IModalFormProps<V>) => (
        <ModalForm {...props}>
            <FormComponent />
        </ModalForm>
    );
}

export default InternalForm;
