import React, { ReactElement, useMemo } from 'react';
import { Modal, FormProps, ModalFuncProps } from 'antd';
import Form from '../form';

export interface ModalProps<Values = any, Record = any> extends FormProps, ModalFuncProps {
    /**
     * modal title
     * @param {string}
     */
    title?: string;
    /**
     * modal className
     * @param {string}
     */
    modelClass?: string;
    /**
     * 需要在提交时一块处理的数据
     */
    record?: Record;
    /**
     * 点击提交，数据验证成功后的会调事件
     * @param values
     * @param record
     * @returns
     */
    onSubmit?: (values: Values, record: Record) => void;
    /**
     * 关闭弹窗，新版本可用 onCancel
     * @returns
     */
    hideModalHandler?: () => void;
    [key: string]: any;
}

export const useFilterProps = (props: { [key: string]: any }, basis: string[]) => {
    const resultProps = useMemo(() => {
        const filterProps: any = {};
        Object.keys(props).forEach((item) => {
            if (basis.includes(item)) {
                filterProps[item] = props[item];
            }
        });
        return filterProps;
    }, [props, basis]);

    return resultProps;
};

const ModalForm = (props: ModalProps) => {
    const {
        okText = '确定',
        cancelText = '取消',
        layout = 'vertical',
        maskClosable = false,
        hideModalHandler,
        record,
        children,
        onSubmit,
    } = props;

    const formProps = useFilterProps(props, FORM_PROPS);
    const modalProps = useFilterProps(props, MODAL_PROPS);

    const [form] = Form.useForm();

    const okHandler = async () => {
        try {
            const values = await form.validateFields();
            onSubmit?.(values, record);
        } catch (error) {}
    };

    const onCancel = () => {
        // 兼容老版本，新版本直接用 onCancel
        hideModalHandler?.();

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
        >
            <Form form={form} layout={layout} {...formProps}>
                {React.cloneElement(children as ReactElement, { form, ...props })}
            </Form>
        </Modal>
    );
};

function ModalWithForm(FormComponent: React.ComponentType) {
    return (props: ModalProps) => (
        <ModalForm {...props}>
            <FormComponent />
        </ModalForm>
    );
}
export default ModalWithForm;

export const MODAL_PROPS = [
    'afterClose',
    'bodyStyle',
    'cancelButtonProps',
    'cancelText',
    'centered',
    'closable',
    'closeIcon',
    'confirmLoading',
    'destroyOnClose',
    'focusTriggerAfterClose',
    'footer',
    'forceRender',
    'getContainer',
    'keyboard',
    'mask',
    'maskClosable',
    'maskStyle',
    'modalRender',
    'okButtonProps',
    'okText',
    'okType',
    'style',
    'title',
    'open',
    'visible', // 兼容老版本
    'width',
    'zIndex',
    'wrapClassName',
    'onCancel',
    'onOk',
];

export const FORM_PROPS = [
    'colon',
    'disabled',
    'component',
    'fields',
    'form',
    'initialValues',
    'labelAlign',
    'labelWrap',
    'labelCol',
    'layout',
    'name',
    'preserve',
    'requiredMark',
    'scrollToFirstError',
    'size',
    'validateMessages',
    'validateTrigger',
    'wrapperCol',
    'onFieldsChange',
    'onFinish',
    'onFinishFailed',
    'onValuesChange',
];
